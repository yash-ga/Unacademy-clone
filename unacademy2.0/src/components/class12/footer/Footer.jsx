import React from 'react';
import logo from '../../../img/Logo.png';
import appStore from '../../../img/AppStore.png';
import playStore from '../../../img/PlayStore.png';
import facebook from '../../../img/face.png'
import twiter from '../../../img/twi.png';
import instagram from '../../../img/insta.png'
import linkedin from "../../../img/leng.png";
import youtube from '../../../img/youtube.png';
import Style from './Footer.module.css'


export const Footer = () => {
  return (
    <>
      <button className={Style.btn} onClick={() => window.scrollTo(0, 0)}
      >Back To Top</button>
      <div className={Style.main}>
        <div className={Style.first}>
          <img src={logo} alt="LOGO" />
          <div className={Style.social}>
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
            <img src={twiter} alt="Twiter " />
            <img src={instagram} alt="Instgram" />
            <img src={linkedin} alt="linkedin" />
          </div>
          <p>© 2021 Sorting Hat Technologies Pvt Ltd</p>
        </div>
        <div className={Style.second}>
          <p>COMPANY</p>
          <p>About us</p>
          <p>Careers</p>
          <p>Blogs</p>
          <p>Privacy Policy</p>
          <p>Terms and condition</p>
        </div>
        <div className={Style.third}>
          <p>POPULAR GOALS</p>
          <p>IIT JEE</p>
          <p>UPSC CSE GS</p>
          <p>SSC Exams</p>
          <p>CBSE Class 12</p>
          <p>NEET UG</p>
        </div>
        <div className={Style.fourth}>
          <p>OTHER LINKS</p>
          <p>User guidelines</p>
          <p>Site Map</p>
          <p>Refund Policy</p>
          <p>Legal Notices</p>
          <p>Plus subscription T&C</p>
        </div>
        <div className={Style.fifth}>
          <p>LEARNER APP</p>
          <div className={Style.store1}>
            <a href="https://play.google.com/store/apps/details?id=com.unacademyapp" target="_blank"><img src={playStore} alt="PlayStore" width={120} /> </a> 
            <a href='https://apps.apple.com/in/app/unacademy-learner-app/id1342565069' target="_blank"><img src={appStore} alt="AppStore" width={120} height={38} /></a> 
          </div>
          <p className={Style.edu}>EDUCATOR APP</p>
          <div className={Style.store2}>
           <a href="https://play.google.com/store/apps/details?id=com.unacademy&hl=en_IN&gl=US" target="_blank"><img src={playStore} alt="PlayStore" width={120}  /></a> 
           <a href="https://apps.apple.com/in/app/unacademy-educator-app/id1156375099" target="_blank"><img src={appStore} alt="AppStore" width={120} height={38}  /></a> 
          </div>
        </div>
      </div>
    </>

  );
}
