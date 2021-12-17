import pic15 from './images/pic15.png'
import Styles from './live.module.css'

export const TalktoExpert = () => {
    return (
        <>
            <div className="card mb-3" id={Styles.expertBox}>
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className={Styles.getSub}>Have questions about the CBSE Class 12 <br /> subscription?</div>
                            <div className={Styles.getAnswer}>Our expert can answer your questions </div>
                            <button type="button" className="btn" id={Styles.talkExpert}>Talk to our expert</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={pic15} id={Styles.expertImg} alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}
