const { HttpStatusCode } = require("axios");
const taskService = require("../services/Task");
class TaskController {
  async saveTask(req, res) {
    console.log("Saving : ", req.body);
    await taskService
      .create(req.body)
      .then(console.log("Saved: ", req.body))
      .then(res.sendStatus(200))
      .catch((e) => {
        console.log("Error occured", e);
      });
  }
  async removeTask(req, res) {
    const uid = req.params.id;
    console.log("Deleting task:", uid);
    await taskService
      .delete(uid)
      .then(console.log("Deleted successfully"))
      .then(res.sendStatus(200))
      .catch((e) => {
        console.log("Error occurred", e);
        res.sendStatus(500);
      });
  }
  async updateTask(req, res) {
    const uid = req.params.id;
    console.log("Updating task: ", uid);
    await taskService
      .update(req.body, uid)
      .then(console.log("Successfully updated!"))
      .then(res.sendStatus(200))
      .catch((e) => {
        console.log("Error occurred", e);
        res.status(500).send(e);
      });
  }
  async getTask(req, res) {
    const uid = req.params.id;

    const tasks =
      uid === undefined
        ? await taskService.list()
        : await taskService.list(uid);

    res.status(200).send(tasks);
  }
}

module.exports = new TaskController();
