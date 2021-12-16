import React from 'react'
import Style from './CoursesSoon.module.css'

export const CoursesSoonItem = ({logo,lang,sub,title,start,name}) => {
    return (
      <div className={Style.slider3}>
        <div className={Style.pic}>
          <img src={logo} alt="logo" />
        </div>
        <div className={Style.part2}>
          <div className={Style.courseSoonTop}>
            <p>{lang}</p>
            <p>{sub}</p>
          </div>
          <div className={Style.courseSoonBotm}>
            <p>{title}</p>
            <p>{start}</p>
            <p>{name}</p>
          </div>
        </div>
      </div>
    );
}
