import React from 'react'
import style from './TopCarousel.module.css'
// import styled from "styled-components";

// export default styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 250px;
//   width: 100%;
//   background-color: #683bb7;
//   color: #fff;
//   margin: 15px;
//   font-size: 4em;
// `;




export const TopCarouselItem = ({logo,name,desc,exp}) => {
    return (
      <div className={style.slider}>
        <div className={style.pic}>
          <img src={logo} alt="Logo" />
        </div>
        <div className= {style.part2}>
          <p>{name}</p>
          <p>{desc}</p>
          <p>{exp} </p>
        </div>
      </div>
    );
}

