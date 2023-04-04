const router = require("express").Router();
const weatherRouter = require("./weather");

router.use("/weather", weatherRouter);

module.exports = router;
