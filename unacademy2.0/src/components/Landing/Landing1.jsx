import { Navbar } from './Navbar'
import { StartLearning } from './StartLearning'
import styles from './style/landing1.module.css'

export const Landing1 = ()=>{

    return (
        <>
        <div className={styles.landing1_container}>
            <img className={styles.bkg_img_lpg1} src="/Images/landingPage_1.png"  alt="img" />
               <Navbar/>
            <div className={styles.ldpg_content}>
                <p>India's largest <br /> learning platform </p>
            </div>
            <div className={styles.prepare_container}>
                <div><StartLearning text0="Prepare for" text1="Competitive exams" disable1="1" img="./Images/competitive.png" course1="UPSC CSE - GS" course2="IIT JEEE" course3="NEET UG" /></div>
                <div><StartLearning text0="Prepare for" text1="Class 6 to 12" img="./Images/class6_12.png" disable1="1" course1="CBSE" course2="Maharashtra Boards" /> </div>
                <div className={styles.call_icon}>
                    <img src="/Icons/call.svg" alt="img" />
                </div>
            </div>
        </div>
        </>
    )
}