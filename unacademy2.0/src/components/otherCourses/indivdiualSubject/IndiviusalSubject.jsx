import React from 'react'
import { PopularCourses } from '../PopularCourses'
import { Topics } from './Topics'
import { Popular } from './Popular'
import { Literature } from './Literature'
import { Crash } from './Crash'
import { SideBar } from './SideBar'
import { Navbar } from '../../Landing/Navbar'
import { Footer } from '../../class12/footer/Footer'

export const IndiviusalSubject = () => {
    return (
        <div>
            <Navbar/>
            <div style={{marginTop:"60px"}} >
            <SideBar />
            <Topics />
            {/* <PopularCourses /> */}
            <Popular />
            <Literature />
            <Crash />
            </div>
            {/* <Popular />  */}
            {/* <Popular /> */}
        </div>
    )
}
