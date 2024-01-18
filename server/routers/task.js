const taskController = require("../controllers/taskController");

const router = require("express").Router();

router.get("/:id", taskController.getTask);
router.get("/", taskController.getTask);

router.post("/new", taskController.saveTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.removeTask);

module.exports = router;
