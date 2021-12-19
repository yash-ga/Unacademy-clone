import Styles from './live.module.css'
import Home from './images/home-circle.svg'
import Compass from './images/compass.svg'
import Aplus from './images/Aplus.svg'
import light from './images/light.svg'
import youtube from './images/youtube.svg'
import bookopen from './images/bookopen.svg'
import Vector from './images/Vector.svg'
import doubt from './images/doubt.svg'
import { useHistory } from 'react-router-dom'

export const SideBar2 = () => {

    const history = useHistory();

    const handleLiveClasses = ()=>{
        history.push("/live-classes")
        window.scrollTo(0,0)
    }

    const handleOtherCourses = ()=>{
        history.push("/other-courses")
        window.scrollTo(0,0)
    }


    return (
        <div className="col-2">
            <div className={Styles.fixedTop}>
                <div className='row' id={Styles.home}>
                    <div id={Styles.homeText} ><img src={Home} alt="" id={Styles.homeImg} />Home</div>
                </div>
                <div className="row" id={Styles.selfStudy}>Self Study</div>
                <div className='row' id={Styles.home}>
                    <div id={Styles.homeText} ><img src={Compass} alt="" id={Styles.homeImg} />Browse</div>
                </div>
                <div className='row' id={Styles.home}>
                    <div id={Styles.homeText} ><img src={light} alt="" id={Styles.homeImg} />Practice</div>
                </div><div className='row' id={Styles.home}>
                    <div id={Styles.homeText} ><img src={Aplus} alt="" id={Styles.homeImg} />Test</div>
                </div><div className='row' id={Styles.home}>
                    <div id={Styles.homeText} ><img src={bookopen} alt="" id={Styles.homeImg} />Syllabus</div>
                </div><div className='row' id={Styles.home}>
                    <div id={Styles.homeText} ><img src={doubt} alt="" id={Styles.homeImg} />Doubts & solution</div>
                </div>
                <div className='row' id={Styles.home}>
                 <button onClick={handleLiveClasses} style={{marginLeft:"-25px",border:"0px",backgroundColor:"transparent"}}> <div id={Styles.homeText} ><img src={Vector} alt="" id={Styles.homeImg} />Free Live Class</div></button>
                </div>
                <div className='row' id={Styles.home}>
                <button onClick={handleOtherCourses} style={{marginLeft:"-25px",border:"0px",backgroundColor:"transparent"}}><div id={Styles.homeText} ><img src={youtube} alt="" id={Styles.homeImg} />Other Courses</div></button>
                </div>
            </div>
        </div>
    )
}
