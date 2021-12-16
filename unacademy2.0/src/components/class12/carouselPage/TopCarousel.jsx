import React from 'react'
import Carousel from "react-elastic-carousel";
// import { TopCarouselItem } from "./TopCarouselItem";
import { TopCarouselItem } from './TopCarouselItem';
import Style from './TopCarousel.module.css'


import logo1 from '../../../img/1.1.png'
import logo2 from "../../../img/1.2.png";
import logo3 from "../../../img/1.3.png";
import logo4 from "../../../img/1.4.png"; 



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


export const TopCarousel = () => {
    return (
      <div className={Style.main}>
        {/* <Carousel breakPoints={breakPoints} >

                <Item >SRK</Item>
                <Item>SAlman</Item>
                <Item>Aamir</Item>
                <Item>Saifali</Item>
                <Item>Aryan</Item>
            </Carousel> */}
        <p>Prepare with Top Educators</p>
        <p>
          Access to India's best CBSC Class 12 educators is just a subscription
          away
        </p>
        <p>See All</p>

        <div className={Style.power}>
          <Carousel breakPoints={breakPoints}>
            <TopCarouselItem
              logo={logo1}
              name="Bharat Panchal"
              desc="M.SC in Physics | Patna's Physics teacher | +5 year Teaching Experience | Referral Code :- 'SMANIIO' | You Tuber | Director & Founder of Aim"
              exp="Teaches Physics and 189 more"
            />
            <TopCarouselItem
              logo={logo2}
              name="Rubika Nair"
              desc="M.SC in Physics | Patna's Physics teacher | +5 year Teaching Experience | Referral Code :- 'SMANIIO' | You Tuber | Director & Founder of Aim"
              exp="Teaches Physics and 189 more"
            />
            <TopCarouselItem
              logo={logo3}
              name="Shivam Dube"
              desc="M.SC in Physics | Patna's Physics teacher | +5 year Teaching Experience | Referral Code :- 'SMANIIO' | You Tuber | Director & Founder of Aim"
              exp="Teaches Physics and 189 more"
            />
            <TopCarouselItem
              logo={logo4}
              name="Raj Singh"
              desc="M.SC in Physics | Patna's Physics teacher | +5 year Teaching Experience | Referral Code :- 'SMANIIO' | You Tuber | Director & Founder of Aim"
              exp="Teaches Physics and 189 more"
            />
          </Carousel>
        </div>
      </div>
    );
}
