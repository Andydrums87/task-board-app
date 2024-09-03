import React, { useState, useEffect } from "react";
import "./header.css"
import Logo from "/src/images/Logo.svg"
import Pencil from "/src/images/Edit_duotone.svg"
import axios from "axios"

function Header({taskList}) {
 const [headerTitle, setHeaderTitle] = useState("My Task Board")
 const [active, setActive] = useState(false)




//  useEffect(() => {
//     axios.get("http://localhost:5000/api/getBoard") 
//     .then(result => {
//       console.log(result.data)
//       setBoard(result.data)
//     })
//     .catch(err => console.log(err))
//   }, [])

//  const addBoard = (e) => {
//     e.preventDefault()
//     axios.post("http://localhost:5000/api/addBoard/", 
//       {
//         name: headerTitle,
       
//       }
//     )
//     .then(res => {

//     console.log(res);
//     })
//     .catch(err => console.log(err))
//   }

 const handleClick = () => {
    setActive(true)
 }
 const handleEnter = (e) => {
    e.key === "Enter" && setHeaderTitle(e.target.value)
 }

    return (
        <div>
            <form>
            <ul className="header__list">
                <li><img src={Logo} alt="logo" /></li>
                <li className="title">
                    
                    <input type="text" className="header__title" onKeyDown={handleEnter} value={headerTitle} onChange={(e) => setHeaderTitle(e.target.value)} />
                </li>
                <li><img src={Pencil} onClick={handleClick} alt="pencil" /></li>
            </ul>
            <p className="sub__heading">Tasks to keep organised</p>
            {/* <p>{board.name}</p> */}
            {/* <button type="submit" onClick={addBoard}>Click</button> */}
            </form>
         
        </div>
    )
}

export default Header