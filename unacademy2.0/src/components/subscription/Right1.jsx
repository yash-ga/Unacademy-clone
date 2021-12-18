import Styles from "./subscription.module.css"
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
    return (
        <div>
            <div className={Styles.rheading}>Class 12 Subscription</div>
            <div className={Styles.btnDiv} style={{height:"38px", width:"161px"}} ><span style={{marginLeft:"10px", boxSizing:"unset"}}>Iconic</span> <span style={{marginLeft:"0px"}}><button type="button" style={styles.btn} className="btn btn-dark">Plus</button></span></div>
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
                <button className={Styles.proceedtopay}>Proceed To Pay</button>
            </div>
        </div>
    )
}