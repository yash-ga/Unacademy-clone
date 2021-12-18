import React from "react";
import { PopularCoursesItem } from "../PopularCoursesItem";
import Carousel from "react-elastic-carousel";
import Style from "./Literature.module.css";

import img1 from "../../../img/other1.1.png";
import img2 from "../../../img/other1.2.png";
import img3 from "../../../img/other1.3.png";
import img4 from "../../../img/other1.4.png";

import nikita from "../../../img/Nikita.png";
import shreya from "../../../img/Shreya.png";
import lalita from "../../../img/Lalita.png";
import shneha from "../../../img/Shneha.png";
import star from "../../../img/star.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
export const Literature = () => {
  return (
    <div className={Style.main}>
      <p>Literature Textbooks</p>
      <p>See All</p>
      <div className={Style.popular}>
        <Carousel breakPoints={breakPoints}>
          <PopularCoursesItem
            logo={img4}
            lessons="6 LESSONS"
            lang="English"
            sub="CHEMISTRY"
            title="Last min. Comprehensive Course   on Unseen Passages"
            date="Starts on Dec 4, 2021 • 8 lessons"
            name="Nikit Negi"
            rating="4.8"
            star={star}
            pic={nikita}
          />
          <PopularCoursesItem
            logo={img1}
            lessons="8 LESSONS"
            lang="English"
            sub="ENGLISH  "
            title="Last min. Comprehensive Course            on Flamingo - Part II "
            date="Starts on Dec 4, 2021 • 8 lessons"
            name="Lalita Togore"
            rating="4.8"
            star={star}
            pic={lalita}
          />
          <PopularCoursesItem
            logo={img3}
            lessons="10 LESSONS"
            lang="English"
            sub="PHYSICS"
            title="Last min. Comprehensive Course    on Optics - Part II "
            date="Starts on Dec 4, 2021 • 8 lessons"
            name="Shreya Singh"
            rating="4.8"
            star={star}
            pic={shreya}
          />
          <PopularCoursesItem
            logo={img2}
            lessons="4 LESSONS"
            lang="English"
            sub="Hindi"
            title="Last min. Comprehensive Course        on Unseen Part II"
            date="Starts on Dec 4, 2021 • 8 lessons"
            name="Shneha Negi"
            rating="4.8"
            star={star}
            pic={shneha}
          />
        </Carousel>
      </div>
    </div>
  );
};
