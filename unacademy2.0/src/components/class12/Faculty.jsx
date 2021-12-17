import Styles from "./style/liveClasses.module.css";
export const Faculty=({image,name,title,time})=>{
    return(
        <div className={Styles.fmain}>
            <div className={Styles.imgwala}>
        <div className={Styles.image}><img src={image} alt="images of faculty" /></div>
        </div>
        <div className={Styles.baki}>
        <div className={Styles.title}>{title}</div>
        <div className={Styles.time}>{time}</div>
        <div className={Styles.name}>{name}</div>
        </div>
        </div>
    )

}