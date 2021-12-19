import React from 'react'
import { PopularCourses } from '../PopularCourses'
import { Topics } from './Topics'
import { Popular } from './Popular'
import { Literature } from './Literature'
import { Crash } from './Crash'
import { SideBar } from './SideBar'
import { Navbar } from '../../Landing/Navbar'
import { Footer } from '../../class12/footer/Footer'
import { SideBar2 } from '../../LiveClassPage/SideBar2'

export const IndiviusalSubject = () => {
    return (
        <div>
            <Navbar/>
            <div style={{marginTop:"60px"}} className='container-fluid' >
                <div className="row">
                <div className='sticky-top col-2 ' style={{marginLeft:"80px"}} >
                <SideBar2/> 
                </div>
                <div className='col-10 ms-5' style={{marginTop:"-550px"}} >
                <Topics />
                {/* <PopularCourses /> */}
                <Popular />
                <Literature />
                <Crash />
                </div>
                </div>

                </div>
            {/* <SideBar /> */}
            {/* <Popular />  */}
            {/* <Popular /> */}
        </div>
    )
}
