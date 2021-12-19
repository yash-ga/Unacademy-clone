import React from 'react'
import Style from './sideBar/SideBar.module.css'
import { PopularCourses } from './PopularCourses';
import { Subject } from './subjects/Subject';
import { SideBar } from './indivdiualSubject/SideBar'
import {CbseNavCard} from './sideBar/CbseNavCard'
import { Featured } from './sideBar/Featured';
import { Navbar } from '../Landing/Navbar';
import { SideBar2 } from '../LiveClassPage/SideBar2';
export const OtherClass = () => {
    return (
        <div className={Style.s1}>
            <Navbar/>
            <div style={{marginTop:"60px"}} className='container-fluid' >
                <div className="row">
                <div className='sticky-top col-2 ' style={{marginLeft:"80px"}} >
                <SideBar2/> 
                </div>
                <div className='col-10 ms-5' style={{marginTop:"-550px"}} >
                <PopularCourses />
                <Featured />
                <Subject />
                </div>
                </div>

                </div>
        </div>
    )
}
