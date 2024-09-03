import React from "react";
import "./addtask.css"
import Add from "/src/images/Add_round_duotone.svg"

function AddTask({handleOpen}) {
    
    return (
        <div className="addtask" onClick={handleOpen}>
            <button className="add__btn"><img src={Add} alt="" /></button>
            <p className="add__title">Add New Task</p>
        </div>
    )
}

export default AddTask;