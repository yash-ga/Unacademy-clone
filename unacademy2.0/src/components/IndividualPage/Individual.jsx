import GREYLABEL from './images/GREY LABEL.svg'
import indi1 from './images/indi1.png'
import indi2 from './images/indi2.png'
import indi3 from './images/indi3.png'
import indi4 from './images/indi4.png'
import indi5 from './images/indi5.png'
import Styles from './individual.module.css'
import four from './images/four.svg'
import star from './images/star.svg'
import circleImg1 from './images/circleImg1.svg'
import circleImg2 from './images/circleImg2.svg'
import { useHistory } from 'react-router-dom'

const arr1 = [
    {
        img: indi1,
        subject: "English",
        title: "Acing Reading Comprehension: Unseen Passages",
        name: "Nikita Negi",
        circleimg:circleImg2
    },
    {
        img: indi2,
        subject: "English",
        title: "Score 25+ in Reading Skills Section - CBSE Class 12",
        name: "Nikita Negi",
        circleimg:circleImg2
    },
    {
        img: indi3,
        subject: "English",
        title: "Reading Comprehension 'Note Making' : A Quick Guide",
        name: "Nikita Negi",
        circleimg:circleImg2
    },
    {
        img: indi4,
        subject: "English",
        title: "Reading Comprehension 'Summary Writing'",
        name: "Sherya Singh",
        circleimg:circleImg1
    },
    {
        img: indi5,
        subject: "English",
        title: "Class XII | Reading Comprehension | Quick Exercise",
        name: "Sherya Singh",
        circleimg:circleImg1
    },


]

export const Individual = () => {

    const history = useHistory();

    const handlePreRecordedVideo = ()=>{
        history.push("/pre-recorded")
    }

    return (
        <>
            {
                arr1.map((x) => (
                    <div className="card col-4 mb-5" id={Styles.livecard} key={Math.random(1)}>
                        <button onClick={handlePreRecordedVideo} style={{display:"inline-block",backgroundColor:"white",border:"0px"}} >
                        <img src={x.img} className="card-img-top" alt="..." id={Styles.imgdiv} />
                        <div className="card-body">
                            <div id={Styles.subjectDiv}>
                                <div>
                                    <img src={GREYLABEL} alt="" />
                                </div>
                                <div id={Styles.subject}>{x.subject}</div>
                            </div>
                            <div id={Styles.title}>{x.title}</div>
                            <div id={Styles.subtitle}>
                                Starts on Dec 4, 2021 • 8 lessons
                            </div>
                            <div style={{textAlign:"start"}}>
                                <span className={Styles.mRight}><img src={star} alt="..." /></span>
                                <img src={four} alt="" />
                            </div>
                            <div id={Styles.subtitle}><span className={Styles.mRight}><img src={x.circleimg} alt="..." /></span>{x.name}</div>
                        </div>
                    </button>
                    </div>
                ))
            }

        </>
    )
}


