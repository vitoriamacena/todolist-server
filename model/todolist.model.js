import mongoose from "mongoose";

const toDoListModel = new mongoose.Schema({

id: {type: Number, required: false},
titulo: {type: String},
descricao: {type: String},
prioridade: {type: String},
status: {type: String},
prazo: {type: Number},
dataCriacao: {type: Date}

});

const toDoList = mongoose.model("todolist", toDoListModel);

export default toDoList;
