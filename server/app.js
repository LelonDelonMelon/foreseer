const express = require("express");
const router = require("./routers");
const cors = require("cors");
const app = express();

const port = 3004;

//app.use(router);

app.use(cors());
app.use("/api", router);

app.listen(port, () => {
  console.log("Uygulama 3004'de calisiyor.");
});
