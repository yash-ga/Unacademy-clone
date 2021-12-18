import React from 'react'
import Style from './PopularCourses.module.css'

export const PopularCoursesItem = ({logo,lessons, lang,sub,title,date,name,pic,star,rating}) => {
    return (
        <div className={Style.slider1}>
            {/* <p>Hello SRK 786</p> */}
            <div className={Style.pic}>
                <img src={logo} alt="Logo" />
                <p>{ lessons}</p>

            </div>
            <div className={Style.lang}>
                <p>{lang}</p>
                <p>{ sub}</p>
            </div>
            <div className={Style.title}>
            <p>{ title}</p>
            <p>{ date}</p>

            </div>
            <div className={Style.rating}>
                <img src={star} alt="star" />
                <p>{ rating}</p>
            </div>
            <div className={Style.profile}>
                <img src={pic} alt="img" />
                <p>{ name}</p>
            </div>
            
        </div>
    )
}
