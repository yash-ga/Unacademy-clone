import { Right } from "./Right"
import Styles from "./subscription.module.css"

export const SubIconic=()=>{
    return(
        <div>
            <div className={Styles.smain}>
                <div className={Styles.left}>
                <div ><img className={Styles.plus} src="./imagesByYash/plus.png" alt="..." /></div>
                <div className={Styles.heading}>Personel Mentor</div>
                <div className={Styles.description}>All our courses are structured in line with your exam syllabus to help you best prepare for it</div>
                </div>
                <div className={Styles.right}><Right/></div>
            </div>
        </div>
    )
}