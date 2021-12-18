import React from 'react'
import { FeaturedItem } from './FeaturedItem'

import pic1 from '../../LiveClassPage/images/pic10.png'
import pic2 from '../../LiveClassPage/images/pic11.png'
import pic3 from '../../LiveClassPage/images/pic12.png'
import pic4 from '../../LiveClassPage/images/pic13.png'

import Style from './Featured.module.css'

export const Featured = () => {
    return (
      <div className={Style.container}>
        <p>Featured Educators</p>
        <div className={Style.fea}>
          <FeaturedItem
            logo={pic1}
            name="Bharat Panchal"
            desc="Use code gauravj to enroll - 10% off Author ofIndia's Best selling economics books. Owner of Economics on your tips, Accounts adda and Min "
            watch="10M"
            watchMin="watchMin"
            followers="37k"
            follower="follower"
          />
           <FeaturedItem
            logo={pic2}
            name="Shreya Pal"
            desc="Use code gauravj to enroll - 10% off Author ofIndia's Best selling economics books. Owner of Economics on your tips, Accounts adda and Min "
            watch="12M"
            watchMin="watchMin"
            followers="39k"
            follower="follower"
          /> 
           <FeaturedItem
            logo={pic3}
            name="Nikita Negi"
            desc="Use code gauravj to enroll - 10% off Author ofIndia's Best selling economics books. Owner of Economics on your tips, Accounts adda and Min "
            watch="20M"
            watchMin="watchMin"
            followers="63k"
            follower="follower"
          /> 
           <FeaturedItem
            logo={pic4}
            name="Suraj Jain"
            desc="Use code gauravj to enroll - 10% off Author ofIndia's Best selling economics books. Owner of Economics on your tips, Accounts adda and Min "
            watch="16M"
            watchMin="watchMin"
            followers="19k"
            follower="follower"
          /> 
        </div>
      </div>
    );
}
