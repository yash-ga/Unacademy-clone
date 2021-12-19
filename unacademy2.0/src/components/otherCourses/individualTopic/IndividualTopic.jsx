import React from 'react'
import { Navbar } from '../../Landing/Navbar'
import { SideBar2 } from '../../LiveClassPage/SideBar2'
import { Crash } from '../indivdiualSubject/Crash'
import { Literature } from '../indivdiualSubject/Literature'
import { Popular } from '../indivdiualSubject/Popular'
import { SideBar } from './SideBar'
import { Topics } from './Topics'

export const IndividualTopic = () => {
    return (
        <>
        <Navbar/>
        <div style={{marginTop:"60px"}} className='container-fluid' >
                <div className="row">
                <div className='sticky-top col-2 ' style={{marginLeft:"80px"}} >
                <SideBar2/> 
                </div>
                <div className='col-10 ms-5' style={{marginTop:"-550px"}} >
                <Topics />
                <Popular />
                <Literature />
                <Crash />
                </div>
                </div>
        </div>
        </>
    )
}
