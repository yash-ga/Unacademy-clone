import Styles from "./subscription.module.css"
export const Right=()=>{
    return(
        <div>
            <div className={Styles.rheading}>Class 12 Subscription</div>
            <button className={Styles.Buttons}>Plus Iconic</button>
            <div className={Styles.Voucher}><img src="./imagesByYash/EMIVOUCHER.png" alt="..." /></div>
            <div >
            <div className={Styles.i1} > <img src="./imagesByYash/s3.png"  alt="..." /></div>
            <div className={Styles.i2} ><img src="./imagesByYash/s1.png"   alt="..." /></div>
            <div className={Styles.i3} > <img src="./imagesByYash/s2.png"  alt="..." /></div>
            </div>
            <div className={Styles.paid}><img src="./imagesByYash/paid.png" alt="..." /></div>
            <div className={Styles.viewall}><img src="./imagesByYash/viewall.png" alt="..." /></div>
            <div className={Styles.bottom}>

           
            <div className={Styles.border}><img src="./imagesByYash/border.png" alt="..." /></div>
            <button className={Styles.proceedtopay}>Proceed To Pay</button>
            </div>
        </div>
    )
}