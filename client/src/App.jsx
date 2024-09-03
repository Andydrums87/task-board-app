import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import Header from './components/Header/Header'
import AddTask from './components/AddTask/AddTask'
import Task from './components/Task/Task'
import SideBar from './components/Sidebar/Sidebar'
import SideBarEdit from './components/Sidebar/SidebarEdit'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [taskList, setTaskList] = useState([])
  const [editableId, setEditableId] = useState(null)

  const icons = ["🧑‍💻", "💬", "☕", "🏋️‍♂️", "📚", "⏰"];

  useEffect(() => {
    axios.get("https://task-board-app-backend.onrender.com/api/getTasks") 
    .then(result => {
      console.log(result.data)
      setTaskList(result.data)

    })
    .catch(err => console.log(err))
  }, [])

  const handleOpen=() => {
    setIsOpen(true) 
  }

  const handleEditOpen = () => {
    setEditOpen(true)
  }

  const handleClose=()=> {
    setIsOpen(false) 
  }

  const handleEditClose = () => {
    setEditOpen(false)
  }

  

  return (
    <body style={{backgroundColor: isOpen || editOpen ? "#00000033" : "#F8FAFC"}}>


    <div className="container">
      <SideBar icons={icons} isOpen={isOpen} handleClose={handleClose} />
       <SideBarEdit editOpen={editOpen} 
        handleEditClose={handleEditClose} 
        taskList={taskList}
        setEditableId={setEditableId}
        editableId={editableId}
        icons={icons}
       />
      <Header taskList={taskList}/>
    <Task taskList={taskList}  handleEditOpen={handleEditOpen} setEditableId={setEditableId}  />
    <AddTask handleOpen={handleOpen} />
    </div>


    </body>
  )
}

export default App
