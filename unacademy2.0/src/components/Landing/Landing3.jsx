import styles from './style/landing3.module.css'

export const Landing3 = () => {

    return (
        <div className={styles.app_container} >
            <div className="row">
                <div className="col-sm-12 col-md-6 d-flex justify-content-sm-center">
                    <div className={styles.app_container_box1}>
                        <p>Get the learning app</p>
                        <p>Download lessons and learn anytime, <br /> anywhere with the Unacademy app</p>
                        <div className={styles.app_container_box1_app_btn}>
                            <a href="https://play.google.com/store/apps/details?id=com.unacademyapp" target="_blank" rel="noreferrer"><img src="/Images/android_link.png" width={160} height={50} alt="" /></a>
                            <a href="https://apps.apple.com/in/app/unacademy-learner-app/id1342565069" target="_blank" rel="noreferrer" ><img src="/Images/ios_link.png" width={160} height={50} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-5 col-sm-12 col-md-6 d-flex justify-content-sm-center">
                    <div>
                        <img src="/Images/app_image.png" alt="img" width={420} />
                    </div>
                </div>
            </div>
        </div>
    )
}
