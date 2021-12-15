import styles from './style/startlearning.module.css'

export const StartLearning = ({text1,course1,course2,course3,img}) => {
    // console.log(styles)
    return (
        <div className={styles.startlearning}>
            <img className='img-fluid' src={img} alt="img" />
            <div className={styles.startlearning_content}>
            <p>Prepare for</p>
            <p>{text1}</p>
            <p>Popular goals</p>
            </div>
            <div className={styles.startlearning_courses}>
            <span className="badge bg-light">{course1} </span>
            <span className="badge bg-light">{course2} </span>
            <span className="badge bg-light">{course3} </span>
            </div>
            <div className={styles.startlearning_btn}>
            <button>Start learning</button>
            </div>
        </div>
    )
}
