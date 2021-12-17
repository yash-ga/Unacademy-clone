import React from "react";
import Carousel from "react-elastic-carousel";
import { RecentlyCourseItem } from "./RecentlyCourseItem";
import Style from './RecentlyCourse.module.css';

import logo1 from "../../../img/4.1.png";
import logo2 from "../../../img/4.2.png";
import logo3 from "../../../img/4.3.png";
import logo4 from "../../../img/4.4.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];
export const RecentlyCourse = () => {
  return (
    <div className={Style.main}>
      <p>Recently started courses</p>
      <p>Start learning live from the best of our ongoing courses</p>
      <p>See All</p>

      <Carousel breakPoints={breakPoints}>
        <RecentlyCourseItem
          logo={logo1}
          lang="English"
          sub="CHEMISTRY"
          title="Comprehensive Course on Optics - Part II"
          start="Starts on Dec 4, 2021 • 8 lessons"
          name="Shubham Gopta"
        />
        <RecentlyCourseItem
          logo={logo2}
          lang="English"
          sub="PHYSICS"
          title="Comprehensive Course on Optics - Part II"
          start="Starts on Dec 4, 2021 • 8 lessons"
          name="Shubham Gopta"
        />
        <RecentlyCourseItem
          logo={logo3}
          lang="English"
          sub="MATHS"
          title="Comprehensive Course on Optics - Part II"
          start="Starts on Dec 4, 2021 • 8 lessons"
          name="Shubham Gopta"
        />
        <RecentlyCourseItem
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
