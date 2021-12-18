import React from 'react'
import Style from './SideBar.module.css'

export const SidebarItem = ({title,pic}) => {
    return (
        <div className={Style.main}>
            <img src={pic} alt="pic" />
            <p>{ title}</p>

            
        </div>
    )
}
