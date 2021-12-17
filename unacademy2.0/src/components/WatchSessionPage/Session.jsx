import { More } from './More'
import { Nikita } from './nikita/Nikita'
import { PlusCourses } from './PlusCourses'
import Styles from './session.module.css'
import { Similar } from './Similar'


export const Session = () => {
    return (
        <div>
            <div>
                <Nikita></Nikita>
            </div>
            <div>
                <div className="container-fluid ps-5">
                    <div className="row">
                        <div className="col-12" id={Styles.live}>Similar Classes</div>
                    </div>
                    <div className="row" id={Styles.drop}>
                        <Similar />
                    </div>
                    <div className="row">
                        <div className="col-12" id={Styles.live}>More from Yashika Manwal</div>
                    </div>
                    <div className="row" id={Styles.drop}>
                        <More />
                    </div>
                    <div className="row">
                        <div className="col-12" id={Styles.live}>Similar Plus Courses</div>
                    </div>
                    <div className="row" id={Styles.drop}>
                        <PlusCourses />
                    </div>
                </div>
            </div>

        </div>
    )
}
