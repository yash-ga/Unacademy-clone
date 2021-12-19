import React from 'react'
import { Subject } from '../subjects/Subject';
import { SubjectItem } from '../subjects/SubjectItem'
// import Style from './Indiviusa.module.css'
import Style from '../indivdiualSubject/Indiviusa.module.css'
import { useHistory } from 'react-router-dom';

export const Topics = () => {
  
  const history = useHistory();

  const handleUnseenPassg = ()=>{
    history.push("/individual-subtopic");
    window.scrollTo(0,0);
  }

    return (
      <div className={Style.container}>
        <p>Topics</p>
        <div className={Style.topic}>
          {/* <SubjectItem /> */}
          <button onClick={handleUnseenPassg} style={{padding:"0px",border:"0px"}}>
          <SubjectItem
            sub1="Unseen Passages "
            courses="48 courses"
            clr="#445FF4"
          />
          </button>
          <button style={{padding:"0px",border:"0px"}}>
          <SubjectItem
            sub1="Factual Passages"
            courses="48 courses"
            clr="#00B3B3"
          />
          </button>
          <button style={{padding:"0px",border:"0px",marginLeft:"280px"}}>
          <SubjectItem
            sub1="Discursive Passages"
            courses="48 courses"
            clr="#E95952"
          />
          </button>
          <SubjectItem sub1="Project Work" courses="48 courses" clr="#F1B42E" />
          <SubjectItem
            sub1="Seen Passages"
            courses="48 courses"
            clr="#425EED"
          />
          <SubjectItem
            sub1="MCQ’s"
            courses="48 courses"
            clr="#00B3B3"
          />
        </div>
      </div>
    );
}
