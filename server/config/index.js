const mongo = require("./mongoConnection");
const dotenv = require("./dotenvConf");

module.exports = () => {
  dotenv();
  mongo();
};
