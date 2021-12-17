import Styles from './goal.module.css'
import Diary from './image/Diary.svg'
import Book from './image/Book.svg'
import { useHistory } from 'react-router-dom'

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
    const history = useHistory();

    const handleShowClass12Pg = (x)=>{
        if(x.class === "CBSE Class 12"){
            history.push("/cbse12");
            window.scrollTo(0,0);
        }
    }

    return (
        <>
        {
            arr1.map(x => (
            <button className={Styles.goal_btn} id={Styles.rightBox} onClick={()=>handleShowClass12Pg(x)} >
                <div className="col-4"  key={Math.random(1)}>
                    <div>
                        <img src={x.img} alt="..." />
                    </div>
                    <div id={Styles.class6}>
                        {x.class}
                    </div>
                </div>
             </button> 
            ))
        }
            
        </>
    )
}

export default GoalCard
