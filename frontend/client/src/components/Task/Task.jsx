import React, { useState } from "react";
import "./task.css"
import Completed from "/src/images/Done_round_duotone.svg"
import Progress from "/src/images/Time_atack_duotone.svg"
import WontDo from "/src/images/close_ring_duotone-1.svg"


function Task ({taskList, setEditableId, handleEditOpen}) {

  const images = [Completed, Progress, WontDo]

  const getImage = (taskList) => {
    switch(taskList) {
      case "completed":
      return images[0]
      break;
      case "progress":
      return images[1]
      break;
      case "wont":
      return images[2]
      break;
      default: 
      return null
    }
  } 
     
 


    return (
<div className="task__container">
{taskList && taskList.map((d, i) => {
     return (
          
<div key={i} onClick={() => {setEditableId(d._id); handleEditOpen()}}>
             <ul  className="task__list"
             style={{backgroundColor: d.status === "completed" && "#A0ECB1" || d.status === "progress" && "#F5D565" || d.status === "wont" && 
                "#F7D4D3" || d.status === "" && "#E3E8EF"}}
             >
              <li className="icon" id="icon">{d.icon}</li>
             
                <ul className="middle__list">
                    <li className="list__task">{d.task}</li>
                    <li className="list__description">{d.description}</li>
                </ul>
              <li className="list__status" style={{backgroundColor: d.status === "progress" && "#E9A23B" || d.status === "completed" && "#32D657" || d.status === "wont" && "#DD524C"}}>
                <img src={getImage(d.status)} alt="" /></li>
              
    
          
                </ul>
               </div>
      
            )
           })}
</div>

    )
}

export default Task;