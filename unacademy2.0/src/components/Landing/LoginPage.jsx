import { useContext, useState } from 'react'
import { LoginMob1 } from './LoginMob1'
import { Login2Otp } from './Login2Otp'
import styles from './style/loginpage.module.css'
import { LoginCreate1 } from './LoginCreate1'
import { AppContext } from '../context/AppContext'

export const LoginPage = () => {
    const { loginMobile1, loginMobile2, loginCreate, createAcct } = useContext(AppContext)

    const loginpage_content = {
        width: "536px",
        padding: "70px"
    }

    const loginpage_header = {
        display: "revert",
        border: "0px"
    }


    return (
        <div className={styles.loginPage_container}>
            <button className={styles.navbar_login_btn} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Login
            </button>
            {
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" >
                        <div className="modal-content" style={loginpage_content}>
                            <div className="modal-header" style={loginpage_header}>
                                <button type="button" className={styles.loginpage_close} data-bs-dismiss="modal" aria-label="Close">x</button>
                                {
                                    loginMobile1 && <LoginMob1 text1="Login" text2="Create your account" btndisable="1" btn1="Login" />
                                }
                                {
                                    loginMobile2 && <Login2Otp text1="We’ve sent OPT to your registered mobile number" text2="Continue with E-mail" />
                                }
                                {
                                    loginCreate && <LoginMob1 text1="Join Unacademy" text2="Login to your account" btn1="Continue" btndisable="0" />
                                }
                                {
                                    createAcct && <LoginCreate1 />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
