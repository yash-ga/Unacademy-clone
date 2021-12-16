import React from 'react'
import Style from './ComSyl.module.css'

export const ComSylItem = ({name,coming,course,topic}) => {
    return (
         <div className={Style.slider6}>
            <div className={Style.sub}><p>{ name}</p></div>
            <div className={Style.mid}>
                <p>{coming}</p>
                <p>{ course}</p>
            </div>
            <div className={Style.botm}>
                <p>{ topic}</p>
            </div>
            
        </div> 
        // <p>Heloo Srk</p>
    )
}
