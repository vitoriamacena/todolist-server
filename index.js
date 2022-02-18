import express from "express";
import cors from "cors";
import Conn from "./connection/conn.js";
import taskRoute from "./routes/todolist.routes.js";


const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use("/tasks", taskRoute);

Conn();
const PORT = 3001;

app.listen(process.env.PORT || PORT, () => {
    console.log('Yup, server is running ;)');
});

