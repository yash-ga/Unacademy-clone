import { Faculty } from "./Faculty"

export const FacultyCard=()=>{
    return(
        <div>
        <Faculty image={"./mam1.svg"} title={"One Shot MCQ |Accounts Term 1...."} time={"Nov 30th 8:30pm"} name={"Suchita Dalal"}/>
        <Faculty image={"./sir1.png"} title={"One Shot MCQ |Partnership in...."} time={"Dec 22nd 6:00 am"} name={"Harsh Mehta"}/>
        <Faculty image={"./sir2.svg"} title={"Full Law with notes of...."} time={"Dec 21st 4:30pm"} name={"Mehul Chok"}/>
        {/* <Faculty image={"./mam1.svg"} title={"Economics with notes of ...."} time={"Nov 29th 8:00 am"} name={"Akshati k"}/> */}
        </div>
    )
}