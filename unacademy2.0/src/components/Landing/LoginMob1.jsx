import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import styles from './style/loginMob1.module.css'

export const LoginMob1 = ({text1,text2,btn1,btndisable}) => {
    const {loginMobile1,handleGenerateOtp,handleLoginMob,handleCreateAcct1,handleCreateAcct2,loginCreate,handleLoginMob1} = useContext(AppContext);
    const [enteredMobile,setEnteredMobile] = useState("")

    const handleUserMobileNo = () =>{
        if(loginMobile1 == true && enteredMobile.length === 10){
            handleGenerateOtp();
            handleLoginMob1();
        }
        else if(loginCreate == true && enteredMobile.length === 10){
            handleCreateAcct2();
            handleGenerateOtp();
        }
        else
        alert("Enter Valid 10 Digit Number");
    }

    const handleToggleLogin = ()=>{
        if(loginMobile1 == true)
        handleCreateAcct1();
        else if(loginCreate == true)
        handleLoginMob();
    }
    return (
        <>
            <h2 className={styles.loginMob1_title}>{text1}</h2>
            <p className={styles.loginMob1_create_account} >
                <span>or</span> 
                <button onClick={handleToggleLogin}>
                    <span>{text2}</span>
                </button> 
            </p>
            <div className="input-group" style={{marginBottom:"29px",marginTop:"25px"}}  >
                <span className="input-group-text" id="basic-addon3" style={{border:"0px",background:"white",padding:"0px"}}>
                    <img style={{marginRight:"16px"}} src="/Icons/flag.svg" alt="..." />
                    <span>+91</span>
                </span>
                <input type="text" className={styles.loginMob1_input_text} placeholder="Enter Your Mobile Number" onChange={(e) => setEnteredMobile(e.target.value)} />
            </div>
            <div>
            </div>
            <div className={styles.loginMob1_btn} >
                <button className={styles.loginMob1_login_btn} onClick={handleUserMobileNo}>
                    {btn1}
                </button>
                {/* {
                  btndisable == 1 ? <button className={styles.loginMob1_email_btn}>Continue with E-mail</button> : null
                } */}
            </div>
        </>
    )
}