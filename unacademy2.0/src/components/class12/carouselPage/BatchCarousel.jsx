import React from 'react'
import Carousel from "react-elastic-carousel";
import Style2 from "./BatchCarousel.module.css";

import { BatchCarouselItem } from './BatchCarouselItem';

 import logo1 from "../../../img/2.1.png";
 import logo2 from "../../../img/2.2.png";
 import logo3 from "../../../img/2.3.png";
import logo4 from "../../../img/2.4.png";
 

 const breakPoints = [
   { width: 1, itemsToShow: 1 },
   { width: 550, itemsToShow: 2 },
   { width: 768, itemsToShow: 3 },
   { width: 1200, itemsToShow: 4 },
 ];

export const BatchCarousel = () => {
    return (
      <div className={Style2.container}>
        <p >Batches for syllabus completion</p>
        <p>
          Boost your CBSE Class 12 exam preparation with extensive courses by
          the best educators
        </p>
        <p>See All</p>
            <div style={{ marginTop: '180px' }}>
          <Carousel breakPoints={breakPoints}>
            <BatchCarouselItem
              logo={logo1}
              name="English"
              title=" Fast Track Revision for TERM 1-Science"
            />
            <BatchCarouselItem
              logo={logo2}
              name="Hindi"
              title="Fast Track Revision for TERM 1-Science"
            />
            <BatchCarouselItem
              logo={logo3}
              name="Hinglish"
              title="Fast Track Revision for TERM 1-Science"
            />
            <BatchCarouselItem
              logo={logo4}
              name="English"
              title="Fast Track Revision for TERM 1-Science"
            />
          </Carousel>
        </div>
      </div>
    );
}
