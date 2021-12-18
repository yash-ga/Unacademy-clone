import Styles from './live.module.css'
import Book from './images/Book.svg'
import { LiveLecture } from './LiveLecture'
import { TestSeries } from './TestSeries'
import { Trending } from './Trending'
import { Upcoming } from './Upcoming'
import { Featured } from './Featured'
import { TalktoExpert } from './TalktoExpert'
import { SideBar } from './SideBar'
import { CbseNavCard } from './CbseNavCard'

export const LiveClass = () => {
    return (
        <div>

            <div className="container" >
                <div className="row" style={{ marginTop: "70px" }}>
                    <SideBar />
                    <div className="col-10">
                        <CbseNavCard />
                        <div className="row">
                            <div className="col-12" id={Styles.live}>Live Now</div>
                        </div>
                        <div className="row" id={Styles.drop}>
                            <LiveLecture />
                        </div>
                        <div className="row">
                            <div className="col-12" id={Styles.live}>Live now Test Series</div>
                        </div>
                        <div className='row'>
                            <TestSeries />
                            <TestSeries />
                            <TestSeries />
                        </div>
                        <div className="row">
                            <div className="col-12" id={Styles.live}>Trending <span>See All</span></div>
                        </div>
                        <div className="row" id={Styles.drop}>
                            <Trending />
                        </div>
                        <div className="row">
                            <div className="col-12" id={Styles.live}>Upcoming</div>
                        </div>
                        <div className="row" id={Styles.drop}>
                            <Upcoming />
                        </div>
                        <div className="row">
                            <div className="col-12" id={Styles.live}>Featured Educator</div>
                        </div>
                        <div className='row'>
                            <Featured />
                        </div>
                        <div className='row'>
                            <TalktoExpert />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

