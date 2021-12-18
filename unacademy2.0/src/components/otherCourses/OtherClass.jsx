import React from 'react'
import Style from './sideBar/SideBar.module.css'
import { PopularCourses } from './PopularCourses';
import { Subject } from './subjects/Subject';
import { SideBar } from './indivdiualSubject/SideBar'
import {CbseNavCard} from './sideBar/CbseNavCard'
import { Featured } from './sideBar/Featured';
export const OtherClass = () => {
    return (
        <div className={Style.s1}>
            {/* <div className={Style.navCard}> */}

            {/* <CbseNavCard /> */}
            {/* </div> */}
            <div className= {Style.side}>
            <SideBar />
            
            </div>
            <PopularCourses />
            <Featured />
            <Subject />
        </div>
    )
}
