import { Navbar } from "../Landing/Navbar"
import { CbseNavCard } from "../LiveClassPage/CbseNavCard"
import { SideBar2 } from "../LiveClassPage/SideBar2"
import { Individual } from "./Individual"
import Styles from './individual.module.css'

export const IndividualPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="container" >
                <div className="row" style={{ marginTop: "70px",marginLeft:"30px" }}>
                    <SideBar2/>
                    <div className="col-10">
                        <CbseNavCard />
                        <div className="row" id={Styles.drop} style={{marginTop:"50px"}}>
                            <Individual />
                        </div>    
                    </div>

                </div>
            </div>
        </div>
    )
}
