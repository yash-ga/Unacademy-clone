import Styles from "./nikita.module.css"
import leftar from './leftar.png'
import nikita from './nikita.svg'
import niki from './nikitasmall.png'
import bluetick from "./bluetick.svg"


export const PreNikita = () => {
    return (
        <div style={{ marginLeft: "80px", position: "relative"}}>
            <div className={Styles.nmain}>
            <div className={Styles.topRight}>
                <button type="button" className="btn" id={Styles.loginbtn}>Learn More</button>
            </div>
                <div className={Styles.heading}>Lat min. Comprehensive lectures on Chemistry</div>
                <div className={Styles.time}>Started on 10:00AM</div>
                <div className={Styles.name}>Nikita Negi</div>
                <div className={Styles.smallpic}><img src={niki} alt="..." /></div>
                <div className={Styles.bluetick}><img src={bluetick} alt="verified" /></div>
                <div className={Styles.nitag}>1M Watch mins</div>
                <div className={Styles.leftar}>
                    <img src={leftar} alt="..." />
                </div>
                <div className={Styles.cbse12}>Cbse Class 12</div>
                <div className={Styles.freenow}>Free Classes & test</div>
                <div className={Styles.cbse1}>English</div>
                <div className={Styles.reading}>Reading Cpmprehension</div>
                <div className={Styles.unseen}>Unseen Passages</div>
                <div className={Styles.english}>English</div>
                <div className={Styles.chemistry}>CHEMISTRY</div>
                <div className={Styles.description}>Chemistry is the study of substances—that is, elements and compounds—while biology is the study of living things. ... Thus chemistry involves the study of the atomic composition</div>
                <div className={Styles.nikita}><img src={nikita} alt="nikita" /></div>
            </div>
        </div>
    )
}