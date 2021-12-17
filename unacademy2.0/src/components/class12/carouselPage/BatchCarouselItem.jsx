import React from 'react';
import Style2 from './BatchCarousel.module.css'
import Vector1 from '../../../img/Vector1.png'
import Vector2 from '../../../img/Vector2.png'
import Vector3 from '../../../img/Vector3.png'
import Vector4 from '../../../img/Vector4.png'
export const BatchCarouselItem = ({ logo,name,title }) => {
  return (
    <div className={Style2.slider2}>
      {/* <div className='slider2'> */}
      <div className={Style2.pic}>
        {/* <div className="pic"> */}
        <img src={logo} alt="logo" />
      </div>
      <div className={Style2.desc}>
        {/* <div className="desc"> */}
        <p>{name}</p>
        <p>{title}</p>
        <div className={Style2.vec}>
          <img src={Vector1} alt="Vector1" />
          <img src={Vector2} alt="Vector2" />
          <img src={Vector3} alt="Vector3" />
          {/* <img src={Vector4} alt="Vector4" /> */}
        </div>
        <div className={Style2.vecBomt}>
          <p>Started on 15 Nov 2021</p>
          <p>Evening classes </p>
          <p>Suyash Goyal, Vani Potepalli, Nupur Roy and 2 more </p>
        </div>
      </div>
      <img className={Style2.paraImg} src={Vector4} alt="vector4" />
      <p className={Style2.para}>View full schedule</p>
    </div>
  );
};
