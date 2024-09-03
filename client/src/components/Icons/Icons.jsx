import React, {useState} from "react";
import "./icons.css"

function Icons({setNewIcon, newIcon, icons}) {
    
   


    


    return (
        <div className="icon__container">
            {icons.map((icon, i) => {
                return (
                    <button key={i} className={`icon ${newIcon?.includes(icon)  ? "active" : "null"}`} type="button" onClick={(e)=>setNewIcon(e.target.name)} name={icon}>{icon}</button>
                )
            })}
        </div>
    )
}

export default Icons;