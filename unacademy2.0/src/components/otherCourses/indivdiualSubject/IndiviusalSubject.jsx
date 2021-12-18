import React from 'react'
import { PopularCourses } from '../PopularCourses'
import { Topics } from './Topics'
import { Popular } from './Popular'
import { Literature } from './Literature'
import { Crash } from './Crash'
import { SideBar } from './SideBar'

export const IndiviusalSubject = () => {
    return (
        <div>
            <SideBar />
            <Topics />
            {/* <PopularCourses /> */}
            <Popular />
            <Literature />
            <Crash />
            {/* <Popular />  */}
            {/* <Popular /> */}
        </div>
    )
}
