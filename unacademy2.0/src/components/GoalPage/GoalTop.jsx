import HERO from './image/HERO.png'
import logo from './image/logo 2.svg'
import Styles from './goal.module.css'
import search from './image/search.svg'
import { Navbar } from '../Landing/Navbar'

export const GoalTop = () => {
    return (
        <div className="card" id={Styles.card1}>
            <img style={{ borderRadius: "10px" }} className="img-fluid" alt="" src={HERO} />
            <Navbar/>
            {/* <div className={Styles.topLeft}>
                <img src={logo} alt="..." /> <br />
            </div>
            <div className={Styles.topRight}>
                <button type="button" className="btn" id={Styles.loginbtn}>Login</button>
            </div> */}
            <div className={Styles.chooseGoal}>Choose your goal</div>
            <div className="input-group flex-nowrap" id={Styles.inputSearch}>
                <span className="input-group-text" id={Styles.span}><img src={search} alt="..." /></span>
                <input type="text" placeholder="Search" id={Styles.inputBox}/>
            </div>
            <div className={Styles.slideNav}>
                <div className={Styles.bottom13}>Class 6 to 12</div>
                <div className={Styles.comp}>Competitive exams</div>

            </div>
        </div>
    )
}
