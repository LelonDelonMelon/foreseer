const mongo = require("mongoose");

const taskScheme = new mongo.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
      trim: true,
    },
    urgency: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);
module.exports = mongo.model("Task", taskScheme);
