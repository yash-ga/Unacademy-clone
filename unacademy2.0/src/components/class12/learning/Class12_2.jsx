import { CardDemo } from "./CardDemo"
import styles from './style/class12_2.module.css'


export const Class12_2 = () => {

    return (
        <div className={styles.class12_contianer} >
            <div className="row">
                <div className="col-12 col-md-12 d-flex justify-content-sm-center d-flex justify-content-md-center d-flex justify-content-lg-center col-lg-6">
                <CardDemo text0="Watch free live classes" img0="./Images/watch_free_classes.png" img1="./Icons/immersive.svg" img2="./Icons/answer.svg" img3="./Icons/chat.svg" text1="Immersive in-class experience" text2="Answer interactive polls" text3="Chat with learners & the educator" text4="Watch now" />
                </div>
                <div className="col-12 col-md-12 d-flex justify-content-sm-center d-flex justify-content-md-center d-flex justify-content-lg-center col-lg-6">
                <CardDemo text0="Get your doubts solved" img0="./Images/doubts.png" img1="./Icons/get_instant.svg" img2="./Icons/doubts.svg" img3="./Icons/popular_text.svg" text1="Get instant solutions in minutes" text2="Doubts answered by top educators" text3="Popular textbook solutions" text4="Textbook solution" />
                </div>
            </div>
        </div>
    )
}