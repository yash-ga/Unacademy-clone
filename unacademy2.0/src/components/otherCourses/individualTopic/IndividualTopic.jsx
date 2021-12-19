import React from 'react'
import { Navbar } from '../../Landing/Navbar'
import { Crash } from '../indivdiualSubject/Crash'
import { Literature } from '../indivdiualSubject/Literature'
import { Popular } from '../indivdiualSubject/Popular'
import { SideBar } from './SideBar'
import { Topics } from './Topics'

export const IndividualTopic = () => {
    return (
        <>
        <Navbar/>
        <div style={{marginTop:"60px",marginBottom:"100px"}}>
            <div style={{marginBottom:"30px"}} >
            <SideBar />
            </div>
            <Topics />
            <Popular />
            <Literature />
            <Crash />
        </div>
        </>
    )
}
