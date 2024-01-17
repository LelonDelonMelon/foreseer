const mongo = require("mongoose");

module.exports = async () => {
  try {
    await mongo.connect(process.env.MONGO_URL);
  } catch (e) {
    console.log("Error occurred", e);
  }
};
