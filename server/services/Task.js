const BaseService = require("./BaseService");

const task = require("../models/task");

class TaskService extends BaseService {
  constructor() {
    super(task);
  }
}
module.exports = new TaskService();
