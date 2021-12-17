import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import styles from './style/login2Otp.module.css'

export const Login2Otp = ({text1,text2}) => {
    const [enteredOtp,setEnteredOtp] = useState('');
    const {verifyOtp} = useContext(AppContext);
    
    const handleLogin = ()=>{
        verifyOtp(enteredOtp)
        setEnteredOtp("")
    }
 
    return (
        <>
            <h2 className={styles.login2Otp_title}>ENTER OTP</h2>
            <p className={styles.sent_otp}>{text1}</p>
            <input className={styles.enter_otp} value={enteredOtp} placeholder='Enter OTP' type="number" onChange={(e)=> setEnteredOtp(e.target.value)} />
            <div className={styles.login2Otp_btn} >
                <button className={styles.login2_login_btn} onClick={handleLogin}>Login</button>
                {/* <button className={styles.login2_email_btn}>close</button> */}
            </div>
        </>
    )
}
