import React, { useState } from "react";


function EditIcons ({icons, editableIcon, setEditableIcon}) {




    return (
        <div className="icon__container">
            {icons.map((icon, i) => {
                return (
                    <button key={i} className={`icon ${editableIcon?.includes(icon)  ? "active" : "null"}`} type="button" onClick={(e)=>setEditableIcon(e.target.name)}name={icon}>{icon}</button>
                )
            })}
        </div>
    )
}

export default EditIcons;