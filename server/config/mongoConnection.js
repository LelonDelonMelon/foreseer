const mongo = require("mongoose");

module.exports = async () => {
  try {
    console.log("Attempting to connect to mongodb");
    await mongo.connect(process.env.MONGO_URL);
    console.log("Connected to the database");
  } catch (e) {
    console.log("Error occurred", e);
  }
};
