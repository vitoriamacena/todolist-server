import toDoList from "../model/todolist.model.js";

const getAll = async () => {
    const tasks = await toDoList.find();
    return tasks;
};

const getById = async (id) => {
    const task = await toDoList.findById(id)
    return task;
};

const updateTask = async (id, task) => {
    return await toDoList.findByIdAndUpdate(id, task);
};

const createTask = async (task) => {
    return await toDoList.create(task);
};

const deleteTask = async (id) => {
    return await toDoList.findByIdAndDelete(id);
};

export { getAll, getById, updateTask, deleteTask, createTask };