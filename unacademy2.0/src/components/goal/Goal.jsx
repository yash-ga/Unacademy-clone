import Styles from './goal.module.css'
import GoalCard from './GoalCard'
import GoalCard1 from './GoalCard1'
import GoalCard2 from './GoalCard2'
import GoalCard3 from './GoalCard3'

const Goal = () => {
    return (
        <div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3">
                        <div class="row" className={Styles.box1}>CBSE</div>
                        <div class="row" className={Styles.box2}>Maharashtra State Board</div>
                        <div class="row" className={Styles.box2}>JEE and NEET Preparation</div>
                        <div class="row" className={Styles.box2}>IITJEE/NEET Foundation</div>
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <div class="col-12" className={Styles.cbscText}>CBSE</div>
                        </div>
                        <div class="row">
                            <GoalCard/>
                        </div>
                        <div class="row">
                            <div class="col-12" className={Styles.mhStateBoard}>Maharashtra State Board</div>
                        </div>
                        <div class="row">
                            <GoalCard1/>
                        </div>
                        <div class="row">
                            <div class="col-12" className={Styles.mhStateBoard}>JEE and NEET Preparation</div>
                        </div>
                        <div class="row">
                            <GoalCard2/>
                        </div>
                        <div class="row">
                            <div class="col-12" className={Styles.foundation}>IITJEE/NEET Foundation & NTSE</div>
                        </div>
                        <div class="row">
                            <GoalCard3/>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goal
