const express = require("express");
const axios = require("axios");

let data;

class Weather {
  async getWeatherData(req, res) {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    console.log(startDate, endDate);
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=39.92&longitude=32.85&hourly=temperature_2m&start_date=${startDate}&end_date=${endDate}&hourly=weathercode`
      )
      .then((response) => {
        data = response.data;
        //console.log(data);
        //console.log(data.hourly.weathercode);
        //console.log("Temperature data for 04-04-2023",data.hourly.time[0],data.hourly.temperature_2m[0]);
        res.json(data);
      })
      .catch((err) => {
        console.log("error occurred", err);
      });
  }
}

module.exports = new Weather();
