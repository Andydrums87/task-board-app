import React, { useState } from "react";
import "./sidebar.css"
import Close from "/src/images/close_ring_duotone-1.svg";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Icons from "../Icons/Icons";
import AddStatus from "../Status/AddStatus";
import axios from "axios"




function SideBar ({isOpen, icons, handleClose}) {

  const [newTask, setNewTask] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newIcon, setNewIcon] = useState("")
  const [newStatus, setNewStatus] = useState("")


  const addTask = (e) => {
    e.preventDefault()
    if(!newTask || !newIcon ) {
      toast.error("fields must be filled")
      return;
    }
    axios.post("https://task-board-app-backend.onrender.com/api/addTask", 
      {
        task: newTask,
        description: newDescription,
        icon: newIcon,
        status: newStatus,
      }
    )
    .then(res => {
      toast.success("task created successfully")
      console.log(res);
      setTimeout(function(){
        window.location.reload();
     }, 1000);
   
    })
    
    .catch(err => console.log(err))
  }



    return (
        
        <div className="sidebar__container" style={{display: isOpen ? "block" : "none"}}>
          <ToastContainer />
              <nav className="sidebar__nav">
                <h2 className="sidebar__title">Task Details</h2>
                <img className="close__icon" onClick={handleClose}src={Close} alt="" />
              </nav>
              <form className="form" >
                <label>Task Name</label>
                 <input className="task" id="task" onChange={(e) => setNewTask(e.target.value)} type="text" name="task" placeholder='Enter Task'/>
                <label>Description</label>
                <textarea className="description" onChange={(e) => setNewDescription(e.target.value)} type="text" name="descripton" placeholder="Enter description" ></textarea>
                <label htmlFor="">Icon</label>
                <Icons setNewIcon={setNewIcon} newIcon={newIcon} icons={icons}/>
                <label htmlFor="">Status</label>
                <AddStatus setNewStatus={setNewStatus} newStatus={newStatus}/>
                 <button id="submit"onClick={addTask}>Submit</button>
         
              </form>
        </div>

    )
}

export default SideBar;