import React from "react";
import "./addstatus.css"
import Completed from "/src/images/Done_round.svg"
import Progress from "/src/images/Done_round_duotone.svg"
import WontDo from "/src/images/close_ring_duotone-1.svg"

function EditStatus({setEditableStatus, editableStatus}) {
    return (
        <div className="status__container">
        <button type="button" onClick={(e)=>setEditableStatus(e.target.name)}className={`status__btn ${editableStatus === "progress" ? "statusActive" : ""}`} name="progress"><img className="inprogress" src={Progress} alt="" />In Progress</button>
        <button type="button" onClick={(e)=>setEditableStatus(e.target.name)}className={`status__btn ${editableStatus === "completed" ? "statusActive" : ""}`} name="completed"><img className="completed" src={Completed} alt="" />Completed</button>
        <button type="button" onClick={(e)=>setEditableStatus(e.target.name)}className={`status__btn ${editableStatus === "wont" ? "statusActive" : ""}`} name="wont"><img className="wontdo" src={WontDo} alt="" />Won't Do</button>
    </div> 
    )
}

export default EditStatus