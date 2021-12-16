import React from 'react'
import Style from './Subscription.module.css'

export const SubscriptionItem = ({ dec, valid, price, tax, bg }) => {
    console.log(bg,'srk');
    // console.log(Style.bg, "check");

    return (
      <div className={Style.item}>
        {/* 'hELLO sUBSRIPTIOM' */}
        <p>{dec}</p>
        <p>{valid}</p>
        <p>{price}</p>
        <p>{tax}</p>
            <p className={bg === 'nor' ? Style.nor : Style.lastBtn}>Get subscription</p>
            {/* <p className={`Style.${bg}`}>Get subscription</p> */}
            {/* <p className={Style.`${bg}`}>Get subscription</p> */}
            
        </div>   
        // Style."nor"
        // Style.nor
    );

}
