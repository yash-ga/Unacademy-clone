import { CbseNavCard } from "../LiveClassPage/CbseNavCard"
import { SideBar2 } from "../LiveClassPage/SideBar2"
import { Individual } from "./Individual"
import Styles from './individual.module.css'

export const IndividualPage = () => {
    return (
        <div>

            <div className="container" >
                <div className="row" style={{ marginTop: "70px" }}>
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
