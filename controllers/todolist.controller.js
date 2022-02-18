import * as taskService from "../services/todolist.service.js";
import mongoose from 'mongoose';

const getAll = async (req, res) => {

    const tasks = await taskService.getAll();
    res.send(tasks);
};

const getById = async (req, res) => {

    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send({message: 'id inválido. Por favor, verifique as informações e tente novamente.'})
        return
    };

    const task = await taskService.getById(id);

    if(!task) {
        res.status(404).send({message: "Oops! Tarefa não encontrada. Por favor, verifique as informações e tente novamente."})
        return
    };

    res.send(task);
};

const updateTask = async (req, res) => {

    const id = req.params.id;
    const updateTask = req.body;

    await taskService.updateTask(id, updateTask)
    .then(() => res.send({message: 'Eba! Tarefa editada com sucesso.'}))
    .catch(e => res.status(500).send({message: `Erro no servidor ${e}`}))
};

const createTask = async (req, res) => {

    const task = req.body;

    await taskService.createTask(task)
    .then(() => res.send({message: 'Tarefa adicionada com sucesso! ;)'}))
    .catch(e => res.status(500).send({message: `Erro no servidor :( ${e}`}))
};

const deleteTask = async (req, res) => {

    const id = req.params.id;

    await taskService.deleteTask(id)
    .then(() => res.send({message: 'Tarefa deletada com sucesso! :D'}))
    .catch(e => res.status(500).send({message: `Erro no servidor :/ ${e}`}))
};

export { getAll, getById, updateTask, deleteTask, createTask };