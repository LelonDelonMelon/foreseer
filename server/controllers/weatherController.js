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
        res.json(data);
      })
      .catch((err) => {
        console.log("error occurred", err);
      });
  }
}

module.exports = new Weather();
