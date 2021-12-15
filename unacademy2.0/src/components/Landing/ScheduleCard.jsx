import styles from './style/schedulecard.module.css'

export const ScheduleCard = ({card_img,card_title,card_content}) => {

    return (
        <div>
        <div  className={styles.schedule_card_container}  >
        <img src={card_img} className="card-img-top" alt="img"/>
        <div  className={styles.title} >
            <p>{card_title}</p>
            <p className="card-text">
                {card_content}
            </p>
        </div>
        </div>
        </div>
    )
}
