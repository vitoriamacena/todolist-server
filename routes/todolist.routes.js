import express from "express";
import * as taskController from "../controllers/todolist.controller.js";

const router = express.Router();

router.get('/', taskController.getAll);
router.get('/:id', taskController.getById);
router.put('/update/:id', taskController.updateTask);
router.delete('/delete/:id', taskController.deleteTask);
router.post('/create', taskController.createTask);

export default router;