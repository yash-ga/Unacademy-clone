import React from 'react'
import { Crash } from '../indivdiualSubject/Crash'
import { Literature } from '../indivdiualSubject/Literature'
import { Popular } from '../indivdiualSubject/Popular'
import { SideBar } from './SideBar'
import { Topics } from './Topics'

export const IndividualTopic = () => {
    return (
        <div>
            <SideBar />
            <Topics />
            <Popular />
            <Literature />
            <Crash />
            
        </div>
    )
}
