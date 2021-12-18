import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import styles from './style/startlearning.module.css'

export const StartLearning = ({text0,text1,course1,course2,course3,img,disable1}) => {
    const [disb1,setDisb1] = useState(disable1);
    const history = useHistory();

    const handleGoalPage = (text1)=>{
        console.log(text1)
        if(text1 == "Class 6 to 12"){
            history.push("/goal");
            window.scrollTo(0,0);
        }
        else
        return;
    }

    return (
        <div className={styles.startlearning}>
            <img className='img-fluid' src={img} alt="img" />
            <div className={styles.startlearning_content}>
            <p>{text0}</p>
            <p>{text1}</p>
            <p>Popular goals</p>
            </div>
            { disb1 == 1 ? <div className={styles.startlearning_courses}>
            <span className="badge bg-light">{course1} </span>
            <span className="badge bg-light">{course2} </span>
            <span className="badge bg-light">{course3} </span>
            </div> : null
            }
            <div className={styles.startlearning_btn}>
            <button onClick={()=>handleGoalPage(text1)}>Start learning</button>
            </div>
        </div>
    )
}
