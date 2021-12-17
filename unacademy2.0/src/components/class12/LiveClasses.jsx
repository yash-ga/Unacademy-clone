import { FacultyCard } from "./FacultyCard";
// import Styles from "./style/liveClasses.module";
import Styles from './style/liveClasses.module.css'


export const LiveClasses = () => {
  return (
    <div className={Styles.lmain}>
      <div className={Styles.cont}>
        <div className={Styles.redlabel}>Free</div>
        <div className={Styles.live}>Live Classes</div>
        <div className={Styles.text}>
          Experience Plus for free and start learning from the best
        </div>
        <div className={Styles.seeall}>See all</div>
      </div>
      <div className={Styles.cont2 }>
          <div><FacultyCard/></div>
      </div>
    </div>
  );
};
