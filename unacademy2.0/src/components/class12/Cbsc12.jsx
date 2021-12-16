import React from 'react'
import { Footer } from './footer/Footer'
import { Subscription } from './footer/Subscription'
import { BatchCarousel } from './carouselPage/BatchCarousel'
import { BestCourse } from './carouselPage/BestCourse'
import { CoursesSoon } from './carouselPage/CoursesSoon'
import { RecentlyCourse } from './carouselPage/RecentlyCourse'
import { Syllabus } from './carouselPage/Syllabus'
import { TopCarousel } from './carouselPage/TopCarousel'
import { TrackCarousel } from './carouselPage/TrackCarousel'
import { TrackItem } from './carouselPage/TrackItem'
import { Class12 } from './Class12'
import { Class12_2 } from './learning/Class12_2'
import { LiveClasses } from './LiveClasses'

export const Cbsc12 = () => {
    return (
      <div>
        <Class12 />
        <Class12_2 />
        <LiveClasses />
        <TopCarousel />
        <BatchCarousel />
        <CoursesSoon />
        <RecentlyCourse />
        <BestCourse />
        <Syllabus />
        <TrackCarousel />
        <Subscription />
        <Footer />
        
      </div>
    );
}
