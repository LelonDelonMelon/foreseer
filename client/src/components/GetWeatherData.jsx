import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const getWeatherData = () => {
  const [timeStamps, setTimeStamps] = useState([]); //96 values
  const [temperatures, setTemperatures] = useState([]); // 96 values

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/weather")
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
    <div className="flex flex-wrap">
      {timeStamps.map((value, idx) => {
        return (
          idx % 24 != 0 && (
            <div key={idx} className="w-1/4 py-2 text-center">
              <p className="font-bold">{value}</p>
              <p>{temperatures[idx]}</p>
            </div>
          )
        );
      })}
    </div>
  );
};

export default getWeatherData;
