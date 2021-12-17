import { Navbar } from "../Landing/Navbar"
import Styles from "./style/Class12.module.css"
export const Class12=()=>{
    return (
        <>
        <Navbar/>
        <div className={Styles.main}>
            <div className={Styles.h1}>
            <h1 className={Styles.heading}>Prepare for CBSE Class 12</h1>
           
            <h3 className={Styles.h3}>Learn with the best classroom experience on India’s largest learning platform</h3>
            <button className={Styles.Button}>Get Subscription</button>
            <div className={Styles.subscription}>
            <img src="/Images/subscription.png" width={200} alt="" />
            <p>Get upto 4 months free with your subscription</p>
            </div>
            </div>
            <div className={Styles.image}>
            <img src="https://static.uacdn.net/production/_next/static/images/goal/k12/lady.svg"
             alt="girl" />
        </div></div>
        </>
    )
}