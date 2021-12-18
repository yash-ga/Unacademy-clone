import React from "react";
import ReactPlayer from "react-player/youtube";
import { Comments } from "./Comments";
import Styles from "./video.module.css";
export const Video = () => {
  return (
    <div>
      <div className={Styles.vmain}>
        <div>
          <ReactPlayer
            width="1127px"
            height="662px"
            url="https://www.youtube.com/watch?v=eRvcT-W-sFU&t=707s"
          />
          <div className={Styles.doubt}>
            <div className={Styles.addimage}>
              <img src="./imagesByYash/addimage.png" width={40} alt="..." />
            </div>
            <div className={Styles.input}><input className={Styles.inputin} type="text" placeholder="Type your doubts here..." /></div>
            <div className={Styles.d}>
            <img src="./imagesByYash/3dot.png"   className={Styles.i} alt="..." />
            <img src="./imagesByYash/Qmark.png" className={Styles.i} alt="..." />
            <img src="./imagesByYash/raisehand.png" className={Styles.i} alt="..." />
            <img src="./imagesByYash/rightarr.png" className={Styles.r} alt="..." />
            </div>
          </div>
        </div>
        <div>
          <Comments
            name="Yash Garg: Latest on 10:00AM"
            image="./imagesByYash/ThumbsUp.png"
            desc="Introduction: defining the problem. Use the introduction to get the reader's attention and interest in the topic.Discuss the paper's weaknesses, focusing on large problems first."
          />
          <Comments
            name="Mohan Bhagwat: 29/12/21"
            image="./imagesByYash/ThumbsDown.png"
            desc="Reflect back the paper's main point. By reflecting back your understanding of the argument, you let the student see that you took the paper seriously."
          />
          <Comments
            name="Sher Shah: 7 days ago"
            image="./imagesByYash/OkHand.png"
            desc="Conclusion. Summarize the most important arguments that best support your opinion.Discuss the paper's weaknesses, focusing on large problems first."
          />
        </div>
      </div>
    </div>
  );
};
