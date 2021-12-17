import { TalktoExpert } from '../LiveClassPage/TalktoExpert'
import { Other } from './Other'
import { PreLecture } from './PreLecture'
import Styles from './prerecorded.module.css'

import { PreNikita } from "./prereordedNikita/PreNikita"
export const Precorded = () => {
    return (
        <div>
            <div>
                <PreNikita/>
            </div>
            <div className="container-fluid ps-5">
                    <div className="row">
                        <div className="col-12" id={Styles.live}>More from Nikita Negi</div>
                    </div>
                    <div className="row" id={Styles.drop}>
                        <PreLecture/>
                    </div>
                    <div className="row">
                        <div className="col-12" id={Styles.live}>Other Plus Courses</div>
                    </div>
                    <div className="row" id={Styles.drop}>
                        <Other/>
                    </div>
                    <div className="row" style={{marginLeft:"150px" , marginTop:"40px"}}>
                        <TalktoExpert/>
                    </div>
                </div>
        </div>
    )
}
