import React from 'react'
import { useHistory } from 'react-router-dom';
import { Subject } from '../subjects/Subject';
import { SubjectItem } from '../subjects/SubjectItem'
import Style from './Indiviusa.module.css'

export const Topics = () => {

  const history = useHistory();

  const handleReading = ()=>{
    history.push("/individual-topic");
    window.scrollTo(0,0)
  }

    return (
      <div className={Style.container}>
        <p>Topics</p>
        <div className={Style.topic}>
          {/* <SubjectItem /> */}
          <button onClick={handleReading} style={{padding:"0px",border:"0px"}} >
          <SubjectItem
            sub1="Reading Comprehenson"
            courses="48 courses"
            clr="#445FF4"
          />
          </button>
          <button style={{padding:"0px",border:"0px"}}>
          <SubjectItem
            sub1="Textbook Solutions"
            courses="48 courses"
            clr="#00B3B3"
          />
          </button>
          <button style={{padding:"0px",border:"0px",marginLeft:"280px"}}>
          <SubjectItem sub1="Crash Course" courses="48 courses" clr="#E95952" />
          </button>
          <SubjectItem sub1="Project Work" courses="48 courses" clr="#F1B42E" />
          <SubjectItem
            sub1="Creative Writing"
            courses="48 courses"
            clr="#425EED"
          />
          <SubjectItem
            sub1="Essay Writing"
            courses="48 courses"
            clr="#00B3B3"
          />
        </div>
      </div>
    );
}
