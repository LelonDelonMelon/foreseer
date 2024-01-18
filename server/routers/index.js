const router = require("express").Router();
const weatherRouter = require("./weather");
const taskRouter = require("./task");
router.use("/weather", weatherRouter);

router.use("/task", taskRouter);
module.exports = router;
