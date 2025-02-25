const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ })
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}

//need to put this in a try/catch block
const createTask = async (req, res) => { 
    try {
        // const task = await Task.create({name:'first task'})
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}

const getTask = (req, res) => {
    try {
        res.json({id:req.params.id})
    } catch (error) {

    }
    
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('create task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}