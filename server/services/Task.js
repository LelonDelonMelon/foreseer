const BaseService = require("./BaseService");

const task = require("../models/Task.js");

class TaskService extends BaseService {
  constructor() {
    super(task);
  }
}
module.exports = new TaskService();
