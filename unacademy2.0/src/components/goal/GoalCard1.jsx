import Styles from './goal.module.css'
import Book from './image/Book.svg'
const arr1 = [
    {
        img : Book,
        class:"SSC Class 9"
    },
    {
        img : Book,
        class:"SSC Class 10"
    },
    {
        img : Book,
        class:"HSC Class 11"
    },
    {
        img : Book,
        class:"HSC Class 12"
    }

]
const GoalCard1 = () => {
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

export default GoalCard1