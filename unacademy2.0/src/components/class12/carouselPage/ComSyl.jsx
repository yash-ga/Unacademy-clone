import React from 'react'
import Carousel from "react-elastic-carousel";
// import { RecentlyCourseItem } from "./RecentlyCourseItem";
// import Style from "./RecentlyCourse.module.css";
import { ComSylItem } from './ComSylItem';
import Style from './ComSyl.module.css'




const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export const ComSyl = () => {
    return (
      <div className={Style.main}>
        {/* <div className="{Style.main}"> */}
        <p>Comprehensive syllabus</p>
        <p>
          Our courses provide complete coverage of the topics you need to be
          prepared for
        </p>
        <p>See All</p>

        {/* <Carousel breakPoints={breakPoints}>
                <ComSylItem name="Physics" coming="1 upcoming" course="348 courses" topic="Electrostatics, Current Electricity,    Electromagnetic Waves and more" />
                <ComSylItem name="Physics" coming="1 upcoming" course="348 courses" topic="Electrostatics, Current Electricity,    Electromagnetic Waves and more" />
                <ComSylItem name="Physics" coming="1 upcoming" course="348 courses" topic="Electrostatics, Current Electricity,    Electromagnetic Waves and more" />
                <ComSylItem name="Physics" coming="1 upcoming" course="348 courses" topic="Electrostatics, Current Electricity,    Electromagnetic Waves and more" />
                <ComSylItem name="Physics" coming="1 upcoming" course="348 courses" topic="Electrostatics, Current Electricity,    Electromagnetic Waves and more" />
            </Carousel> */}
      </div>
    );
};
