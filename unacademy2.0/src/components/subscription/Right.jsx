import Styles from "./subscription.module.css"
import { useCallback } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import { Link } from "react-router-dom";
import back from './images/back.svg'
export const Right = () => {
    const Razorpay = useRazorpay();
    // const history = useHistory();
    const handlePayment = useCallback(() => {
        const order = {
            "amount": 1000,
            "currency": "INR",
            "receipt": "rcptid_11",

        }

        const options = {
            key: "rzp_test_47FIUGEzxugCSn",
            amount: "49900",
            currency: "INR",
            name: "Unacademy",
            description: "Test Transaction",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Unacademy_Logo.png/160px-Unacademy_Logo.png",
            order_id: order.id,
            handler: (res) => {
                console.log(res);
            },
            prefill: {
                name: "Unacademy",
                email: "shashank4910@gmail.com",
                contact: "",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#d4c4b9",
            },
        };
        alert("Your Plan will be activated with in minute")

        const rzpay = new Razorpay(options);
        rzpay.open();
        
        // history.push("/");

    }, [Razorpay]);
    return (
        <div>
            <div className={Styles.rheading}>Class 12 Subscription</div>
            <div className={Styles.btnDiv}>
            <span style={{ marginLeft: "10px" }}>Plus</span> 
            <span style={{ marginLeft: "15px" }}>
              <Link to="/plus" ><button type="button" id={Styles.button} className="btn btn-dark">Iconic</button></Link>  
            </span>
                </div>
            <div className={Styles.Voucher}><img className={Styles.voucherStyle} src="./imagesByYash/EMIVOUCHER.png" alt="..." /></div>
            <div >
                <div className={Styles.i1} > <img className={Styles.imgStyle} src="./imagesByYash/s3.png" alt="..." /></div>
                <div className={Styles.i2} ><img className={Styles.imgStyle} src="./imagesByYash/s1.png" alt="..." /></div>
                <div className={Styles.i3} > <img className={Styles.imgStyle} src="./imagesByYash/s2.png" alt="..." /></div>
            </div>
            <div className={Styles.description1} >To be paid as a one-time payment</div>
            <button type="button" className="btn btn-outline-success" id={Styles.paid}>View all plans</button>
            <div className={Styles.bottom}>
                <div className={Styles.border}><img src="./imagesByYash/border.png" width={280} alt="..." /></div>
                <button className={Styles.proceedtopay} onClick={handlePayment}>Proceed To Pay</button>
            </div>
            <div>
                <Link to="/cbse12">
                <img src={back} alt="..." style={{marginLeft:"286px"}} />
                </Link>
            </div>
        </div>
    )
}