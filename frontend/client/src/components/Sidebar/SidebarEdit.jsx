import React, { useState, useEffect } from "react"
import "./sidebar.css"
import Close from "/src/images/close_ring_duotone-1.svg"
import EditIcons from "../EditIcons/EditIcons";
import EditStatus from "../Status/EditStatus";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';



function SideBarEdit({ taskList, editOpen, icons, handleEditClose, editableId, setEditableId}) {
  
  const [editableTask, setEditableTask] = useState("")
  const [editableDescription, setEditableDescription] = useState("")
  const [editableIcon, setEditableIcon] = useState("")
  const [editableStatus, setEditableStatus] = useState("")

useEffect(() => {
  toggleEditable()
}, [editableId])

    const toggleEditable = () => {
      const rowData = taskList.find((data) => 
      data._id === editableId);
      if(rowData) {
        setEditableId(editableId)
        setEditableTask(rowData.task)
        setEditableDescription(rowData.description)
        setEditableIcon(rowData.icon)
        setEditableStatus(rowData.status)
      } else {
        setEditableId(null)
        setEditableTask("")
        setEditableDescription("")
        setEditableIcon("")
        setEditableStatus("")
      }
  }

  const saveEditTask = (e) => {
    e.preventDefault()
    
    const editedData = {
    task: editableTask,
    description: editableDescription,
    icon: editableIcon,
    status: editableStatus,
    }
    if(!editableTask) {
      toast.error("fields must be filled")
      return;
    }
    axios.post("https://task-board-app-backend.onrender.com/api/updateTaskList/" + editableId, editedData)
    .then(result => {
      toast.success("Task Edited Successfully")
    console.log(result)
      setEditableId(null)
      setEditableTask("")
      setEditableDescription("")
      setEditableIcon("")
      setEditableStatus("")
      setTimeout(function(){
        window.location.reload();
     }, 1000);
    })
    .catch(err => console.log(err))
    
    }

    const deleteTask =  (e) => {
      e.preventDefault()
         axios.delete("https://task-board-app-backend.onrender.com/api/deleteTaskList/" + editableId)
         .then(result => {
           console.log(result);
           toast.success("Task Deleted Successfully")
           setTimeout(function(){
            window.location.reload();
         }, 1000);
         })
         .catch(err=>console.log(err))
       }
       
    return (
        <div className="sidebar__container" style={{display: editOpen ? "block" : "none"}}>
          <ToastContainer />
<nav className="sidebar__nav">
  <h2 className="sidebar__title">Task Details</h2>
  <img className="close__icon"onClick={handleEditClose}src={Close} alt="" />
</nav>
<form className="form"  >
  <label>Task Name</label>
   <input className="task" id="task" onChange={(e) => setEditableTask(e.target.value)} value={editableTask} type="text" name="task" placeholder='Enter Task'/>
  <label>Description</label>
  <textarea className="description" onChange={(e) => setEditableDescription(e.target.value)} value={editableDescription} type="text" name="descripton" placeholder="Enter description"></textarea>
  <label htmlFor="">Icon</label>
 
  <EditIcons icons={icons} setEditableIcon={setEditableIcon} editableIcon={editableIcon}/>
  <label htmlFor="">Status</label>
  <EditStatus editableStatus={editableStatus} setEditableStatus={setEditableStatus}/>
<div className="btn__container">
<button id="delete" onClick={deleteTask}>Delete</button>
<button id="save" onClick={saveEditTask} >Save</button>

</div>


</form>
</div>
    )
}

export default SideBarEdit;
