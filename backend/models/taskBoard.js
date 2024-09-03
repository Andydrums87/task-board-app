const mongoose = require("mongoose")


const boardSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    newTasks: [{
        type: mongoose.Types.ObjectId, 
        ref: "task" 
        
    }]
},
    { timestamps: true }
);




const Board = mongoose.model("boards", boardSchema);


module.exports = Board;