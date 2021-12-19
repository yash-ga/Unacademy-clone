import React from "react";
import ReactPlayer from "react-player/youtube";
import { useHistory } from "react-router-dom";
import { Comments } from "./Comments";
import Styles from "./video.module.css";


const styles = {
   rightbar:{flexDirection:"column",height:"520px",marginLeft:"1%",marginTop:"10px",marginRight:"10px"},
   rigthbar1:{marginBottom:"30px"}
}

export const Video = () => {
  const history = useHistory();

  const handleExit = ()=>{
    history.push("/session")
  }

  return (
    <div>
      <div className={Styles.vmain}>
        {/* <div>
          <ReactPlayer
            width="100%"
            height="500px"
            url="https://www.youtube.com/watch?v=eRvcT-W-sFU&t=707s"
          /> */}
          <iframe width="100%"
            height="560px"  style={{marginTop:"10px",marginLeft:"20px",borderRadius:"10px"}} src="https://masai-course.s3.ap-south-1.amazonaws.com/lecture/10989/material/9e1a36515d6704d7eb7a30d783400e5d/lcs_vi2.mp4" frameborder="0"></iframe>
          {/* <div className={Styles.doubt} style={{margin:"28px 0px",backgroundColor:"#EEEFFE"}}> */}
            {/* <div className={Styles.addimage}>
              <img src="./imagesByYash/addimage.png" width={40} alt="..." />
            </div>
            <div className={Styles.input}><input className={Styles.inputin} type="text" placeholder="Type your doubts here..." /></div>
            <div className={Styles.d}>
            <img src="./imagesByYash/3dot.png"   className={Styles.i} alt="..." />
            <img src="./imagesByYash/Qmark.png" className={Styles.i} alt="..." />
            <img src="./imagesByYash/raisehand.png" className={Styles.i} alt="..." />
            <img src="./imagesByYash/rightarr.png" className={Styles.r} alt="..." />
            </div> */}
            {/* <img style={{width:"100%"}} src="/Images/video_icons.png"  alt="" /> */}
            {/* <div style={{display:"flex",marginLeft:"25px"}} >
              <img src="/Icons/left.svg" width={20}  style={{marginRight:"20px"}} alt="" />
              <img src="/Icons/rewind_10.svg" width={20} style={{marginRight:"20px"}}  alt="" />
              <img src="/Icons/play.svg" width={20}  style={{marginRight:"20px"}} alt="" />
              <img src="/Icons/forward_10.svg" width={20}  style={{marginRight:"20px"}} alt="" />
              <img src="/Icons/bar.svg" width={500}  style={{marginRight:"20px"}} alt="" />
              <img src="/Images/label.png" width={40}  style={{margin:"10px 0px",marginRight:"20px"}} alt="" />
              <img src="/Icons/volume.svg" width={20}  style={{marginRight:"20px"}} alt="" />
              <img src="/Icons/setting.svg" width={20}  style={{marginRight:"20px"}} alt="" />
              <img src="/Icons/fullscreen.svg" width={20}  style={{marginRight:"20px"}} alt="" />
            </div> */}
          {/* </div> */}
        {/* </div> */}
        <div>
          <Comments
            name="Yash Garg: Latest on 10:00AM"
            image="./imagesByYash/ThumbsUp.png"
            desc="Introduction: defining the problem. Use the introduction to get the reader's attention and interest in the topic.Discuss the paper's weaknesses, focusing on large problems first."
          />
          {/* <Comments
            name="Mohan Bhagwat: 29/12/21"
            image="./imagesByYash/ThumbsDown.png"
            desc="Reflect back the paper's main point. By reflecting back your understanding of the argument, you let the student see that you took the paper seriously."
          /> */}
          <Comments
            name="Sher Shah: 7 days ago"
            image="./imagesByYash/OkHand.png"
            desc="Conclusion. Summarize the most important arguments that best support your opinion.Discuss the paper's weaknesses, focusing on large problems first."
          />
          <div style={{ position:"relative",border:"1px solid black",width:"380px",borderRadius:"5px",marginLeft:"20px",marginTop:"40px",padding:"0px 10px"}} >
            <img src="/Images/image_plus.png"  width={25} alt="" />
            <input type="text" placeholder="Type your doubts here..." style={{  padding:"10px 10px",border:"0px",height:"40px",outline:"none"}} />
          </div>
          
        </div>
        <div style={styles.rightbar}>
          <div>

          <div>
            <img src="/Icons/message.svg" width={25} style={styles.rigthbar1}  alt="" />
          </div>
          <div>
            <img src="/Icons/help.svg" width={25} style={styles.rigthbar1}  alt="" />
          </div>
          <div>
            <img src="/Icons/raise_hand.svg" width={25} style={styles.rigthbar1}  alt="" />
          </div>
          </div>
          <div style={{marginTop:"370px"}} >
            <button onClick={handleExit} style={{border:"0px",backgroundColor:"white"}} ><img src="/Images/backarrow.png" width={30} alt="" /></button>          
          </div>
        </div>
      </div>
    </div>
  );
};
