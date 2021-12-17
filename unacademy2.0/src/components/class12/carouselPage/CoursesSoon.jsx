import React from "react";
import Carousel from "react-elastic-carousel";
import { CoursesSoonItem } from "./CoursesSoonItem";
import Style from './CoursesSoon.module.css'

 import logo1 from "../../../img/3.1.png";
 import logo2 from "../../../img/3.2.png";
 import logo3 from "../../../img/3.3.png";
 import logo4 from "../../../img/3.4.png";

 const breakPoints = [
   { width: 1, itemsToShow: 1 },
   { width: 550, itemsToShow: 2 },
   { width: 768, itemsToShow: 2 },
   { width: 1200, itemsToShow: 3 },
 ];
export const CoursesSoon = () => {
    return (
      <div className={Style.main}>
        <p>Courses starting soon</p>
        <p>
          Enroll in upcoming courses that best suit your schedule and CBSE Class
          12 exam syllabus
        </p>
        <p>See All</p>

        <Carousel breakPoints={breakPoints}>
          <CoursesSoonItem
            logo={logo1}
            lang="English"
            sub="CHEMISTRY"
            title="Comprehensive Course on Optics - Part II"
            start="Starts on Dec 4, 2021 • 8 lessons"
            name="Shubham Gopta"
          />
          <CoursesSoonItem
            logo={logo2}
            lang="English"
            sub="PHYSICS"
            title="Comprehensive Course on Optics - Part II"
            start="Starts on Dec 4, 2021 • 8 lessons"
            name="Shubham Gopta"
          />
          <CoursesSoonItem
            logo={logo3}
            lang="English"
            sub="MATHS"
            title="Comprehensive Course on Optics - Part II"
            start="Starts on Dec 4, 2021 • 8 lessons"
            name="Shubham Gopta"
          />
          <CoursesSoonItem
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
}
