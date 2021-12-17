import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../context/AppContext';
import styles from './style/loginCreate1.module.css'

export const LoginCreate1 = () => {
    const [timer, setTimer] = useState(0);
    const [enterOtp,setEnterOtp] = useState('');
    const [enterName,setEnterName] = useState('');
    const [enterEmail,setEnterEmail] = useState('');
    const [selectState,setSelectState] = useState('');
    const counterRef = useRef();
    const {handleGenerateOtp,verifyOtp,handleLoginMob} = useContext(AppContext);
    const [enable,setEnable] = useState(false);

    useEffect(() => {
        startCounter();
        return () => clearInterval(counterRef);
    }, [])

    const startCounter = () => {
        counterRef.current = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000)
    }

    const handleReset = () => {
        clearInterval(counterRef);
        setEnable(true);
        setTimer(0);
        handleGenerateOtp();
    }

    const handleVerify = ()=>{
        console.log("selectState",selectState)
        if(enterOtp.length !== 0 && enterName.length >= 3 && enterEmail.length >= 3 && selectState){
            verifyOtp(enterOtp);
            setEnterOtp('');
        }
        else
        alert("Enter Proper Details")
    }

    return (
        <>
            <h2 className={styles.logincreate1_title}>Enter OTP</h2>

            <p className={styles.logincreate1_login_account} ><span>or</span> <button onClick={handleLoginMob} ><span>Login to your account</span></button> </p>

            <div className="input-group" style={{ margin: "16px 0px" }}  >
                <span className="input-group-text" id="basic-addon3" style={{ border: "0px", background: "white", padding: "0px" }}>
                    <img style={{ marginRight: "16px" }} src="/Icons/flag.svg" alt="..." />
                    <span>+91</span>
                </span>
                <input type="text" disabled className={styles.logincreate1_input_no} placeholder="1122334455" />
            </div>

            <input className={styles.logincreate1_otp} value={enterOtp} type="number" placeholder='OTP' onChange={(e) => setEnterOtp(e.target.value)} />
            <input className={styles.logincreate1_otp} value={enterName} type="text" placeholder='Name' onChange={(e) => setEnterName(e.target.value)} />
            <input className={styles.logincreate1_otp} value={enterEmail} type="email" placeholder='Email-Address' onChange={(e) => setEnterEmail(e.target.value)} />
            <select name="" className={styles.logincreate_dropdown} onClick={(e)=> setSelectState(e.target.value)} >
                <option value="">Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="	Himachal Pradesh">Himachal Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
            </select>
            <div>
            </div>
            <div className={styles.logincreate1_btn} >
                <button className={styles.logincreate1_verify_btn} onClick={handleVerify} >Verify OTP</button>
                <button className={styles.logincreate1_resend_otp} onClick={handleReset} >Resend OTP in {
                   enable ? timer <= 5 ? `00:0${timer}` : timer >= 6 ? clearInterval(counterRef) : `00:${timer}` : ""
                }  </button>
            </div>
        </>
    )
}
