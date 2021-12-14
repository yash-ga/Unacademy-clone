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

export default GoalCard3
