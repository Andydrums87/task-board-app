import React from "react";
import "./addstatus.css"
import Completed from "/src/images/Done_round.svg"
import Progress from "/src/images/Done_round_duotone.svg"
import WontDo from "/src/images/close_ring_duotone-1.svg"

function AddStatus ({setNewStatus, newStatus}) {

   
    return (
   
           <div className="status__container">
                    <button type="button" onClick={(e)=>setNewStatus(e.target.name)}className={`status__btn ${newStatus === "progress" ? "statusActive" : ""}`} name="progress"><img className="inprogress" src={Progress} alt="" />In Progress</button>
                    <button type="button" onClick={(e)=>setNewStatus(e.target.name)}className={`status__btn ${newStatus === "completed" ? "statusActive" : ""}`} name="completed"><img className="completed" src={Completed} alt="" />Completed</button>
                    <button type="button" onClick={(e)=>setNewStatus(e.target.name)}className={`status__btn ${newStatus === "wont" ? "statusActive" : ""}`} name="wont"><img className="wontdo" src={WontDo} alt="" />Won't Do</button>
                </div> 
 
    )
}

export default AddStatus;