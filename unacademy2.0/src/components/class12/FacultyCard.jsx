import { Faculty } from "./Faculty"

export const FacultyCard=()=>{
    return(
        <div>
        <Faculty image={"/Images/mam1.png"} title={"One Shot MCQ |Accounts Term 1...."} time={"Nov 30th 8:30pm"} name={"Suchita Dalal"}/>
        <Faculty image={"/Images/sir1.png"} title={"One Shot MCQ |Partnership in...."} time={"Dec 22nd 6:00 am"} name={"Harsh Mehta"}/>
        <Faculty image={"/Images/sir2.png"} title={"Full Law with notes of...."} time={"Dec 21st 4:30pm"} name={"Mehul Chok"}/>
        <Faculty image={"/Images/mam2.png"} title={"Economics with notes of ...."} time={"Nov 29th 8:00 am"} name={"Akshati k"}/>
        </div>
    )
}