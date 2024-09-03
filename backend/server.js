const express = require('express')
const mongoose = require("mongoose")
const cors = require ("cors")
const TaskModel = require ("./models/taskList")
const Board = require("./models/taskBoard")



var app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://andydrums87:TWFRSQ2EdD2ETkNC@cluster0.cavp6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});



const taskRouter = express.Router()
const boardRouter = express.Router()




taskRouter.get("/api/getTasks", (req, res) => {
    TaskModel.find({})
    
    .then((taskList) => 
    res.json(taskList))
    .catch((err) => res.json(err))
});

// const user = Board.find({})
// const populatedBoard = await Board.findOne(user._id).populate({path: "newTasks", model: "task"}).exec()
// console.log(populatedBoard)





taskRouter.post("/api/addBoard", async (req, res) => {
     Board.create({
        name:req.body.name
    })
    .then((board) => 
        res.json(board))
    
        .catch((err) => 
        res.json(err))
        

    // const populatedBoard = await Board.findOne(user._id).populate({path: "newTasks", model: "task"}).exec()
       
 
    // console.log(populatedBoard)

});




taskRouter.post("/api/addTask", async (req, res) => {
  await TaskModel.create({
        task: req.body.task,
        description: req.body.description,
        icon: req.body.icon,
        status: req.body.status,
    }) 

    .then((task) => 
    res.json(task))

    .catch((err) => 
    res.json(err))
    
});


taskRouter.post("/api/updateTaskList/:id", (req, res) => {
    const id = req.params.id;
   
    const updateData = {
        task: req.body.task,
        description: req.body.description,
        icon: req.body.icon,
        status: req.body.status,
    };
     TaskModel.findByIdAndUpdate({_id: id}, updateData, {new: true})
    .then((task) => 
    res.json(task))
    .catch((err) => res.json(err));
});

taskRouter.delete("/api/deleteTaskList/:id", (req, res) => {
    const id = req.params.id;
    TaskModel.findByIdAndDelete({
        _id: id
    })
    .then((task) => res.json(task))
    .catch((err) => console.log(err))
});


app.use(taskRouter)

app.listen(5000, () => {
    console.log('server running on 5000')
});