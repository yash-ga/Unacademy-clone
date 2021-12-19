import React from 'react'
import { PopularCourses } from '../PopularCourses'
// import { SubjectItem } from './SubjectItem'
import { SubjectItem } from './SubjectItem';

import Style from './Subject.module.css'
import { useHistory } from 'react-router-dom';

export const Subject = () => {
  const history = useHistory();

  const handleEnglish = ()=>{
    history.push("/individual-subject")
    window.scrollTo(0,0)
  }

    return (
      <div className={Style.container}>
        <p>Subjects</p>
        {/* <SubjectItem /> */}
        <div className={Style.cart}>
         <button style={{border:"0px",padding:"0px",marginBottom:"20px"}} ><SubjectItem sub1="Physics" courses="48 courses" clr="#445FF4" /></button> 
          <button onClick={handleEnglish} style={{border:"0px",padding:"0px"}} ><SubjectItem sub1="English" courses="48 courses" clr="#00B3B3" /></button>
          <button style={{border:"0px",padding:"0px",marginBottom:"20px",marginLeft:"280px"}}><SubjectItem sub1="Maths" courses="48 courses" clr="#E95952" /></button>
          <SubjectItem sub1="Chemistry" courses="48 courses" clr="#F1B42E" />
          <SubjectItem sub1="Geography" courses="48 courses" clr="#425EED" />
          <SubjectItem
            sub1="Political Science"
            courses="48 courses"
            clr="#DE4B9B"
          />
          <SubjectItem sub1="Hindi" courses="48 courses" clr="#00B3B3" />
          <SubjectItem sub1="Python" courses="48 courses" clr="#F1B42E" />
          <SubjectItem sub1="Java" courses="48 courses" clr=" #54A4FF" />
          <SubjectItem sub1="Sanskrit" courses="48 courses" clr="#E95952" />
          <SubjectItem sub1="History" courses="48 courses" clr="#445FF4" />
          <SubjectItem sub1="Sociology" courses="48 courses" clr="#00B3B3" />
          <SubjectItem sub1="C++" courses="48 courses" clr="#445FF4" />
          <SubjectItem sub1="Accountacy" courses="48 courses" clr="#F1B42E" />
          <SubjectItem sub1="Biology" courses="48 courses" clr="#E95952" />
          <SubjectItem sub1="History" courses="48 courses" clr="#DE4B9B" />
          <SubjectItem sub1="HomeScience" courses="48 courses" clr="#5CBE81" />
          <SubjectItem sub1="Geography" courses="48 courses" clr="#445FF4" />
          <SubjectItem sub1="Psychology" courses="48 courses" clr="#F1B42E" />
          <SubjectItem sub1="Maths" courses="48 courses" clr="#DE4B9B" />
          <SubjectItem
            sub1="Computer Science"
            courses="48 courses"
            clr="#54A4FF"
          />
        </div>

        {/* hello div */}
      </div>
    );
}
