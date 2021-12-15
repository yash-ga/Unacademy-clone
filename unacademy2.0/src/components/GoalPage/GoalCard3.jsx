import Styles from './goal.module.css'
import University from './image/University.svg'

const arr1 = [
    {
        img : University,
        class:"IIT JEE"
    },
    
]
const GoalCard3 = () => {
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

export default GoalCard3
