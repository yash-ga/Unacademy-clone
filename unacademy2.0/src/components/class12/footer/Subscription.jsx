import React from 'react'
import Style from './Subscription.module.css'
import { SubscriptionItem } from './SubscriptionItem';

export const Subscription = () => {
    return (
      <div className={Style.main}>
        <p className={Style.heading}>CBSE Class 12 Subscription</p>
        <div className={Style.first}>
          <SubscriptionItem
            dec="0% off"
            valid="3 months"
            price="Rs 7,500"
            tax="Total (Incl. of all taxes)"
            bg='nor'
          />
        </div>
        <div className={Style.sec}>
          <SubscriptionItem
            dec="33% off"
            valid="6 months"
            price="Rs 6,000"
            tax="Total (Incl. of all taxes)"
            bg="nor"
          />
        </div>
        <div className={Style.third}>
          <SubscriptionItem
            dec="42% off"
            valid="9 months"
            price="Rs 9,000"
            tax="Total (Incl. of all taxes)"
            bg="nor"
          />
        </div>
        <div className={Style.fourth}>
          <SubscriptionItem
            dec="50% off"
            valid="12 months"
            price="Rs 15,000"
            tax="Total (Incl. of all taxes)"
            bg="lastBtn"
          />
        </div>
      </div>
    );
}
