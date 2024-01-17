const express = require("express");
const router = require("./routers");
const cors = require("cors");
const app = express();
const config = require("./config");
const port = process.env.APP_PORT || 3004;

//app.use(router);

//config
config();

app.use(cors());
app.use("/api", router);

app.listen(port, () => {
  console.log("App is Listening at port", process.env.APP_PORT);
});
