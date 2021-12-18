// import Style from './live.module.css'
// import Style from './SideBar.module.css'
import Style from '../sideBar/SideBar.module.css'
import Home from '../../LiveClassPage/images/home-circle.svg'
import Compass from '../../LiveClassPage/images/compass.svg'
import Aplus from '../../LiveClassPage/images/Aplus.svg'
import light from '../../LiveClassPage/images/light.svg'
import youtube from '../../LiveClassPage/images/youtube.svg'
import bookopen from '../../LiveClassPage/images/bookopen.svg'
import Vector from '../../LiveClassPage/images/Vector.svg'
import doubt from '../../LiveClassPage/images/doubt.svg'
import Book from '../../LiveClassPage/images/Book.svg'

import { SidebarItem } from '../sideBar/SidebarItem'

export const SideBar = () => {
    return (
        <>
        <div className={Style.container}>
            <SidebarItem title='Home' pic={Home} />
            <p className={Style.self}>Self Study</p>
            <SidebarItem title='Browse' pic={Compass} />
            <SidebarItem title='Practice' pic={Aplus} />
            <SidebarItem title='Test' pic={light} />
            <SidebarItem title='Syllabus' pic={bookopen} />
            <SidebarItem title='Doubt & Solution' pic={doubt} />
            <SidebarItem title='Free Live Classes' pic={Vector} />
            <SidebarItem title='Other Courses' pic={youtube} />
            
            


            </div>

            <div className={Style.cbscCard}>
                <div>
                    <img  src={Book} alt="Book" />
                    <p className={Style.para}>English</p>
                </div>
            </div>
            </>
        
    )
}
