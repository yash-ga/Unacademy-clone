import Styles from './goal.module.css'
import Diary from './image/Diary.svg'
import Book from './image/Book.svg'

const arr1 = [
    {
        img : Diary,
        class:"CBSE Class 6"
    },
    {
        img : Diary,
        class:"CBSE Class 7"
    },
    {
        img : Diary,
        class:"CBSE Class 8"
    },
    {
        img : Book,
        class:"CBSE Class 9"
    },
    {
        img : Book,
        class:"CBSE Class 10"
    },
    {
        img : Book,
        class:"CBSE Class 11"
    },
    {
        img : Book,
        class:"CBSE Class 12"
    },
    {
        img : Diary,
        class:"Young Coders"
    },
    {
        img : Diary,
        class:"Creative Corners"
    }

]
const GoalCard = () => {
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

export default GoalCard
