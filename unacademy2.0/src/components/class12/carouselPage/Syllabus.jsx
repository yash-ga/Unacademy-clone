import React from 'react';
import Style from './Syllabus.module.css'

import Carousel from 'react-elastic-carousel';
import { SyllabusItem } from './SyllabusItem';
import logo1 from '../../../img/6.1.png';
import logo2 from '../../../img/6.2.png';
import logo3 from '../../../img/6.3.png';
import logo4 from '../../../img/6.4.png';
import logo5 from '../../../img/6.5.png';
import logo6 from '../../../img/6.6.png';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export const Syllabus = () => {
    return (
      <div className={Style.main}>
        <p>Comprehensive syllabus</p>
        <p>
          Our courses provide complete coverage of the topics you need to be
          prepared for
        </p>
        <p>See All</p>

        <Carousel breakPoints={breakPoints}>
          <SyllabusItem logo={logo1} />
          <SyllabusItem logo={logo2} />
          <SyllabusItem logo={logo3} />
          <SyllabusItem logo={logo4} />
          <SyllabusItem logo={logo5} />
          <SyllabusItem logo={logo6} />
        </Carousel>
      </div>
    );
}
