import { CourseDetails } from "./CourseDetails"
import './style/landing4.css'

export const Landing4 = ()=>{
    return (
        <div  className="landingpg_4" >
            <div className="row">
                <div className="col-5 lpg_4_box1" >
                    <p>Start learning with Unacademy</p>
                    <p>Get unlimited access to structured <br /> courses & doubt clearing sessions</p>
                </div>
                
                <div className="col-7" style={{marginTop:"12px"}} >
                   <div className="row">
                    <div className="col-6">
                    <CourseDetails details="Exam Categories" digit="60" img="/Images/exam.png" />
                    <CourseDetails details="Daily live classes" digit="1.5k" img="/Images/live_classes.png"/>
                    <CourseDetails details="Mins watched" digit="3.2B" img="/Images/views.png" />
                    </div>
                    <div className="col-6" style={{marginTop:"100px"}}>
                        <CourseDetails details="Educators" digit="14k" img="/Images/educators.png" />
                        <CourseDetails details="Video lessons" digit="1M" img="/Images/lessons.png" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}