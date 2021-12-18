import { Right1 } from "./Right1"
import Styles from "./subscription.module.css"
export const SubIconicPage=()=>{
    return(
        <div>
            <div className={Styles.smain}>
                <div className={Styles.left}>
                <div ><img className={Styles.plus} src="./imagesByYash/plus.png" alt="..." /></div>
                <div className={Styles.heading}>Structured courses</div>
                <div className={Styles.description}>All our courses are structured in line with your exam syllabus to help you best prepare for it</div>
                </div>
                <div className={Styles.right}>
                    <Right1/>
                </div>
            </div>
        </div>
    )
}