import Styles from './goal.module.css'
import Flask from './image/Flask.svg'
import Medical from './image/Medical.svg'

const arr1 = [
    {
        img : Flask,
        class:"IIT JEE"
    },
    {
        img : Medical,
        class:"NEET UG"
    },
    
]
const GoalCard2 = () => {
    return (
        <>
        {
            arr1.map(x => (
                <div class="col-4" className={Styles.rightBox} key={Math.random(1)}>
                    <div>
                        <img src={x.img} alt="..." />
                    </div>
                    <div className={Styles.class6}>{x.class}</div>
                </div>
            ))
        }
            
        </>
    )
}

export default GoalCard2
