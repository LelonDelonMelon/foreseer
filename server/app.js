const express = require("express");
const router = require("./routers");
const cors = require("cors");
const app = express();
const config = require("./config");
const bodyParser = require("body-parser");

//configuring mongodb url and port
config();
const port = process.env.APP_PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({}));
app.use("/api", router);

app.listen(port, () => {
  console.log("App is Listening at port", port);
});
