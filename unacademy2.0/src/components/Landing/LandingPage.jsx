import { Footer } from "../class12/footer/Footer"
import { Landing1 } from "./Landing1"
import { Landing2 } from "./Landing2"
import { Landing3 } from "./Landing3"
import { Landing4 } from "./Landing4"
import styles from './style/landingPage.module.css'

export const LandingPage = ()=>{
    return (
        <div>
            <Landing1/>
            <Landing2/>
            <Landing3/>
            <Landing4/>
            {/* <div className={styles.backToTop_btn}>
            <button onClick={()=>window.scrollTo(0, 0)} >Back to top</button>
            </div> */}
            <Footer/>
        </div>
    )
}