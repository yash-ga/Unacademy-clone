import { useHistory } from 'react-router-dom'
import styles from './style/cardDemo.module.css'

export const CardDemo = ({img0,img1,img2,img3,text0,text1,text2,text3,text4}) => {
    const history = useHistory();

    const handleWatchClasses = (text4)=>{
        if(text4 === "Watch now"){
            if(localStorage.getItem("token")){
                history.push("/live-classes")
                window.scrollTo(0,0)
            }
            else
            alert("Please Login")
        }
    }

    return (
        <div className={styles.cardDemo_container}>
        <img className='img-fluid' src={img0} alt="img"  />
        <p className={styles.cardDemo_title}>{text0}</p>
        <div className={styles.cardDemo_subtitle}>
            <div>
                <img className={styles.cardDemo_subtitle_img} src={img1} alt="" />
                <p className={styles.cardDemo_subtitle_cont}> {text1} </p>
            </div>
            <div>
                <img className={styles.cardDemo_subtitle_img} src={img2} alt="" />
                <p className={styles.cardDemo_subtitle_cont}> {text2} </p>
            </div>
            <div>
                <img className={styles.cardDemo_subtitle_img} src={img3} alt="" />
                <p className={styles.cardDemo_subtitle_cont}> {text3} </p>
            </div>
        </div>
        <div className={styles.cardDemo_btn}>
        <button onClick={()=>handleWatchClasses(text4)}> {text4} </button>
        </div> 
    </div>

    )
}
