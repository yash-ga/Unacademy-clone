import styles from './style/navbar1.module.css'
import { LoginPage } from './LoginPage';

export const Navbar1 = () => {
    return (
        <>
            <div className={styles.navbar_container}>
                <div className={styles.navbar_container_img}>
                    <img src="/Icons/unacademy.svg" alt="" />
                </div>
                <div>
                    <LoginPage />
                </div>
            </div>
        </>
    )
}
