import { ScheduleCard } from "./ScheduleCard"
import styles from './style/landing2.module.css'

export const Landing2 = () => {
    return (
        <div className={styles.landing2_container}  >
            <div className="row">
                <div className="col-sm-12 col-lg-6  col-xl-4 d-flex justify-content-lg-center justify-content-sm-center"><ScheduleCard card_img="/Images/classes_card1.png" card_title="Daily live classes" card_content="Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on " /></div>
                <div className="col-sm-12 col-lg-6  col-xl-4 d-flex justify-content-lg-center justify-content-sm-center"><ScheduleCard card_img="/Images/practice_card2.png" card_title="Practice and revise" card_content="Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision"/></div>
                <div className="col-sm-12 col-lg-12  col-xl-4 d-flex justify-content-lg-center justify-content-sm-center"><ScheduleCard card_img="/Images/learn_card3.png" card_title="Learn anytime, anywhere" card_content="One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices" /></div>
            </div>
        </div>
    )
}
