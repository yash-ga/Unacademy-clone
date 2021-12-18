import { Right } from "./Right"
import Styles from "./subscription.module.css"
export const Subscription=()=>{
    return(
        <div>
            <div className={Styles.smain}>
                <div className={Styles.left}>
                <div ><img className={Styles.plus} src="./imagesByYash/pg2.png" alt="..." /></div>
                <div className={Styles.heading}>Structured Courses</div>
                <div className={Styles.description}>All our courses are structured in line with your exam
syllabus to help you best prepare for it</div>
                </div>
                <div className={Styles.right}><Right/></div>
            </div>
        </div>
    )
}