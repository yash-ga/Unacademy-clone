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
                <div className="col-4" id={Styles.rightBox} key={Math.random(1)}>
                    <div>
                        <img src={x.img} alt="..." />
                    </div>
                    <div id={Styles.class6}>{x.class}</div>
                </div>
            ))
        }
            
        </>
    )
}

export default GoalCard2
