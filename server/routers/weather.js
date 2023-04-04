const weatherController = require("../controllers/weatherController");

const router = require("express").Router();

router.get("/", weatherController.getWeatherData);

module.exports = router;
