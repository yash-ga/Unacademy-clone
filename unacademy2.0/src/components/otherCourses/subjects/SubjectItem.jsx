import React from "react";
import Style from "./Subject.module.css";

export const SubjectItem = ({ sub1, courses, clr }) => {
  const stl = {
    borderLeft: `5px solid ${clr}`,
    // borderRadius: '10px 0px 0px 10px'
  };

  // console.log(stl,'stl');
  return (
    <div className={Style.sub} style={stl}>
      <p>{sub1} </p>
      <p>{courses} </p>
    </div>
  );
};
