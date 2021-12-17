import { Navbar1 } from './Navbar1';
import { Navbar2 } from './Navbar2';


export const Navbar = ()=>{

    let getToken = localStorage.getItem("token");
    getToken = JSON.parse(getToken)

    return getToken ? <Navbar2/> : <Navbar1/>
}