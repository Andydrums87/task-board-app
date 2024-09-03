const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({

    task: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        
    },
    icon: {
        type: String,
        required: false,
    },
    status: {
        type: String,
        required: false,
    },
    board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "boards"
    }
 
    
});

const taskList = mongoose.model("task", taskSchema);


module.exports = taskList;