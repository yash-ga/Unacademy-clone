import React from 'react'
import Style from "./Syllabus.module.css";


export const SyllabusItem = ({logo}) => {
    return (
        <div className={Style.slider7}>
            <img src = {logo} alt="Logo" />
            
        </div>
    )
}
