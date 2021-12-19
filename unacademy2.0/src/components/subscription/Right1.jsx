import Styles from "./subscription.module.css"
import { useCallback } from "react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";
import { Link } from "react-router-dom";
const styles={
    btn:{
        background: "#394752",
borderRadius: "20px",
width:"91px",
fontFamily:"Urbanist",
fontWeight: "bold"
    }
}
export const Right1 = () => {

    const Razorpay = useRazorpay();

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
            name: "Shashank",
            description: "Test Transaction",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Unacademy_Logo.png/160px-Unacademy_Logo.png",
            order_id: order.id,
            handler: (res) => {
                console.log(res);
            },
            prefill: {
                name: "Shashank",
                email: "shashank4910@gmail.com",
                contact: "",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#f1945b",
            },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();

    }, [Razorpay]);
    return (
        <div>
            <div className={Styles.rheading}>Class 12 Subscription</div>
            <div className={Styles.btnDiv} style={{height:"38px", width:"161px"}} ><span style={{marginLeft:"10px", boxSizing:"unset"}}>Iconic</span> <span style={{marginLeft:"0px"}}>
             <Link to="/iconic" ><button type="button" style={styles.btn} className="btn btn-dark">Plus</button></Link> 
                </span></div>
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
        </div>
    )
}