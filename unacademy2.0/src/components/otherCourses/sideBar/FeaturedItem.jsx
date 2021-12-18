import React from 'react'
import Style from './Featured.module.css'

export const FeaturedItem = ({
  logo,
  name,
  desc,
  watch,
  watchMin,
  followers,
  follower,
}) => {
  return (
    <div className={Style.main}>
      <div className={Style.pic}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={Style.second}>
        <p>{name}</p>
        <p>{desc}</p>
        <div className={Style.follow}>
          <p>{watch}</p>
          <p>{followers}</p>
        </div>
        <div className={Style.watch}>
          <p>{watchMin}</p>
          <p>{follower}</p>
        </div>
      </div>
    </div>
  );
};
