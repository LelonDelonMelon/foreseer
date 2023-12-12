import React, { useState, useEffect } from "react";

const GetTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect will run once on mount

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <>
      <p className="timestamp text-center text-lg font-bold text-yellow-300">
        {formattedTime}
      </p>
    </>
  );
};

export default GetTime;
