import React from "react";
import Carousel from "react-elastic-carousel";
// import { RecentlyCourseItem } from "./RecentlyCourseItem";
import { BestCourseItem } from "./BestCourseItem";
// import Style from "./RecentlyCourse.module.css";
import Style from "./BestCourse.module.css";

import logo1 from "../../../img/5.1.png";
import logo2 from "../../../img/5.2.png";
import logo3 from "../../../img/5.3.png";
import logo4 from "../../../img/5.4.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];
export const BestCourse = () => {
  return (
    <div className={Style.main}>
      <p>Best of all time</p>
      <p>
        Get unlimited access to popular past CBSE Class 12 courses from our top
        educators
      </p>
      <p>See All</p>

      <Carousel breakPoints={breakPoints}>
        <BestCourseItem
          logo={logo1}
          lang="English"
          sub="CHEMISTRY"
          title="Comprehensive Course on Optics - Part II"
          start="Starts on Dec 4, 2021 • 8 lessons"
          name="Shubham Gopta"
        />
        <BestCourseItem
          logo={logo2}
          lang="English"
          sub="PHYSICS"
          title="Comprehensive Course on Optics - Part II"
          start="Starts on Dec 4, 2021 • 8 lessons"
          name="Shubham Gopta"
        />
        <BestCourseItem
          logo={logo3}
          lang="English"
          sub="MATHS"
          title="Comprehensive Course on Optics - Part II"
          start="Starts on Dec 4, 2021 • 8 lessons"
          name="Shubham Gopta"
        />
        <BestCourseItem
          logo={logo4}
          lang="English"
          sub="ENGLISH"
          title="Comprehensive Course on Optics - Part II"
          start="Starts on Dec 4, 2021 • 8 lessons"
          name="Shubham Gopta"
        />
      </Carousel>
    </div>
  );
};
