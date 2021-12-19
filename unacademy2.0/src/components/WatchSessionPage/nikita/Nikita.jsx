import Styles from "./nikita.module.css"
import leftar from './leftar.png'
import nikita from './nikita.svg'
import niki from './nikitasmall.png'
import bluetick from "./bluetick.svg"
import play from './play-circle.svg'
import share from './share.svg'
import pdf from './pdf.svg'
import { useHistory } from "react-router-dom"

export const Nikita = () => {

    const history = useHistory();
    
    const handleWatchNow = ()=>{
        history.push("/loading")
        setTimeout(()=>{
            history.push("/video")
        },4000)
    }

    return (
        <div style={{ marginLeft: "80px", position: "relative"}}>
            <div className={Styles.nmain}>
                <div className={Styles.heading}>Lat min. Comprehensive lectures on Chemistry</div>
                <div className={Styles.time}>Started on 10:00AM</div>
                <div className={Styles.name}>Nikita Negi</div>
                <div className={Styles.smallpic}><img src={niki} alt="..." /></div>
                <div className={Styles.bluetick}><img src={bluetick} alt="verified" /></div>
                <div className={Styles.nitag}>1M Watch mins</div>
                <button type="button" class="btn" id={Styles.share}><span id={Styles.span}><img src={share} alt="..." /></span>Share</button>
                <button type="button" class="btn" id={Styles.viewpdf}><span id={Styles.span}><img src={pdf} alt="..." /></span>View PDF</button>
                <div className={Styles.leftar}>
                    <img src={leftar} alt="..." />
                </div>
                <div className={Styles.cbse12}>Cbse Class 12</div>
                <div className={Styles.freenow}>Free Classes & test</div>
                <div className={Styles.english}>English</div>
                <div className={Styles.chemistry}>CHEMISTRY</div>
                <div className={Styles.description}>Chemistry is the study of substances—that is, elements and compounds—while biology is the study of living things. ... Thus chemistry involves the study of the atomic composition</div>
                <div className={Styles.nikita}><img src={nikita} alt="nikita" /></div>
                {/* <button type="button" class="btn btn-success" id={Styles.watchnow}><span id={Styles.span1}><img src={play} alt="..." /></span> <a className={Styles.link} href="https://www.youtube.com/watch?v=Ss0NAXHCA-A" target="_blank"  rel="noreferrer">Watch Now</a></button> */}
                <button onClick={handleWatchNow} type="button" id={Styles.watchnow}><span id={Styles.span1}><img src={play} alt="..." /></span>Watch Now</button>
            </div>
        </div>
    )
}