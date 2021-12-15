import Styles from './goal.module.css'
import GoalCard from './GoalCard'
import GoalCard1 from './GoalCard1'
import GoalCard2 from './GoalCard2'
import GoalCard3 from './GoalCard3'
const Goal = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <div className="row" id={Styles.box1}>CBSE</div>
                        <div className="row" id={Styles.box2}>Maharashtra State Board</div>
                        <div className="row" id={Styles.box2}>JEE and NEET Preparation</div>
                        <div className="row" id={Styles.box2}>IITJEE/NEET Foundation</div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-12" id={Styles.cbscText}>CBSE</div>
                        </div>
                        <div className="row">
                            <GoalCard/>
                        </div>
                        <div className="row">
                            <div className="col-12" id={Styles.mhStateBoard}>Maharashtra State Board</div>
                        </div>
                        <div className="row">
                            <GoalCard1/>
                        </div>
                        <div className="row">
                            <div className="col-12" id={Styles.mhStateBoard}>JEE and NEET Preparation</div>
                        </div>
                        <div className="row">
                            <GoalCard2/>
                        </div>
                        <div className="row">
                            <div className="col-12" id={Styles.foundation}>IITJEE/NEET Foundation & NTSE</div>
                        </div>
                        <div className="row">
                            <GoalCard3/>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goal
