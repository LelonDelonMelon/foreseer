import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sunnyGif from "../assets/icons8-sun.gif";
import lightRainGif from "../assets/icons8-light-rain.gif";

const settings = {
  dots: false,
  infinite: false,
  speed: 600,
  slidesToShow: 11,
  slidesToScroll: 4,
  centerMode: true,
  centerPadding: "120px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const GetWeatherData = (props) => {
  const [timeStamps, setTimeStamps] = useState([]); //96 values
  const [temperatures, setTemperatures] = useState([]); // 96 values
  const [userIndex, setUserIndex] = useState(0);

  let userTimezone;
  if (
    typeof Intl !== "undefined" &&
    typeof Intl.DateTimeFormat === "function"
  ) {
    userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  } else {
    userTimezone = "UTC";
  }

  let currentDate = new Date();
  const prettiedCurrent = currentDate.toISOString().slice(0, 10);

  let userTime = new Date();
  userTime.setTime(
    userTime.getTime() + userTime.getTimezoneOffset() * 60 * 1000
  ); // adjust user time for timezone offset
  userTime = userTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: userTimezone,
  });

  let userHour = parseInt(userTime.slice(0, 2));
  let userMinute = parseInt(userTime.slice(3, 5));
  let userTimeString = userTime.slice(0, 5);

  console.log(userHour + 3);

  console.log("User Time", userTime);

  //console.log(props.endDate, props.startDate);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3004/api/weather?startDate=${props.startDate}&endDate=${props.endDate}`
      )
      .then((response) => {
        const temperatures = response.data.hourly.temperature_2m;
        setTemperatures(temperatures);

        const timeStamps = response.data.hourly.time.map((time) => {
          const [date, timeStr] = time.split("T");
          const formattedTime = timeStr.slice(0, 5);
          return `${date} ${formattedTime}`;
        });
        setTimeStamps(timeStamps);
      })
      .catch((err) => {
        console.log("Error occurred", err);
      });
  }, []);

  return (
    <div className="slider-container border-black rounded-sm my-8 ">
      {props.startDate === prettiedCurrent && (
        <div className="current-weather">
          <img
            src={sunnyGif}
            alt="logo"
            className="logo items-center mx-auto rounded-lg mb-2"
          />
          <p className="timestamp text-center text-lg font-bold text-yellow-300">
            {timeStamps[userHour + 1]}
          </p>
          <p className="temperature text-center text-lg font-semibold mt-2  text-yellow-50">
            {temperatures[0]}
          </p>
        </div>
      )}
      <Slider {...settings}>
        {timeStamps.map((value, idx) => {
          if (idx === 0) return null; // skip the first value as we have already displayed it
          return (
            <div key={idx} className="slide ml-4 mt-10 mb-10">
              <img
                src={lightRainGif}
                alt="logo"
                className="logo items-center mx-auto rounded-xl"
              />
              <p className="timestamp text-center">
                {userIndex === idx ? userTimeString : value}
              </p>
              <p className="temperature text-center ">{temperatures[idx]}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default GetWeatherData;
