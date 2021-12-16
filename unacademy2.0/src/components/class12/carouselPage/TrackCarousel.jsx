import React from 'react';
import Carousel from 'react-elastic-carousel';
import { TrackItem } from './TrackItem';
import Style from './Track.module.css'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export const TrackCarousel = () => {
    return (
      <div className={Style.main}>
        <p>Track your preparation</p>
        <p>
          Evaluate your progress with our CBSE Class 12 Mock Tests and detailed
          results analysis
        </p>
        <p>See All</p>

        <Carousel breakPoints={breakPoints}>
          <TrackItem
            title="TERM 1 Practice - MCQs test series -
            Commerce"
            free="Free"
            test="Test 17 . Dec 6, 9:00 AM"
          />
          <TrackItem
            title="TERM 2 Practice Daily MCQs test series : Science"
            free="Free"
            test="Test 17 . Dec 6, 9:00 AM"
          />
          <TrackItem
            title="TERM 2 Practice Daily MCQs test series : Commerce"
            free="Free"
            test="Test 17 . Dec 6, 9:00 AM"
          />
          <TrackItem
            title="TERM 1 Practice - MCQs test series - Commerce"
            free="Free"
            test="Test 17 . Dec 6, 9:00 AM"
          />
          <TrackItem
            title="TERM 1 Practice - MCQs test series - Arts"
            free="Free"
            test="Test 17 . Dec 6, 9:00 AM"
          />
        </Carousel>
      </div>
    );
}
