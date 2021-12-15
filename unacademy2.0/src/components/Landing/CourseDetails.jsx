import styles from './style/courseDetails.module.css'

export const CourseDetails = ({details,digit,img})=>{
    return (
        <div className={styles.courseDetails_container}>
            <img src={img} alt="img" width={130} />
            <p> {details} </p>
            <p>{digit} <img src="/Images/plus.png" alt="" /> </p>
        </div>
    )
}