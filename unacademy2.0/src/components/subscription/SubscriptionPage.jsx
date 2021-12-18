import { Right } from "./Right"
import Styles from "./subscription.module.css"
import logo from './images/logo.svg'
export const SubscriptionPage=()=>{
    return(
        <div>
            <div><img src={logo} alt="..." className={Styles.logo} /></div>
            <div className={Styles.smain}>
                <div className={Styles.left}>
                <div ><img className={Styles.plus} src="./imagesByYash/pg2.png" alt="..." /></div>
                <div className={Styles.heading}>Personal Mentor</div>
                <div className={Styles.description}>Get one-on-one guidance from top experts as your
personal mentor</div>
                </div>
                <div className={Styles.right}><Right/></div>
            </div>
        </div>
    )
}