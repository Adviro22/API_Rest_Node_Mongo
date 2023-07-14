import { response } from 'express'
import Task from '../models/Task.js'

export const findAllUsers = async (req, res)=>{
    try {
        const tasks = await Task.find()
        console.log(tasks)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Algo salio mal mientras se creaba la tarea'
        })
    }
};

export const createUsers =  async (req, res) =>{
    const newTask = new Task({name: req.body.name, username: req.body.username, email: req.body.email, password: req.body.password, done: req.body.done ? req.body.done : false});
    const taskSaved= await newTask.save();
    res.json(taskSaved)
};

export const findOneUser = async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task)
};

export const deleteUser = async(req, res)=> {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        message: "Has sido eliminado satisfactoriamente"
    });
};

export const findAllDoneUser = async (req, res) =>{
    const tasks = await Task.find({name: true});
    res.json(tasks);
};

export const updateUser = async (req, res) =>{
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({message: "Su tarea se ha actualizado con exito"});
};