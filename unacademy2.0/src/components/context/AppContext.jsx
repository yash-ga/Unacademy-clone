import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
    const [loginMobile1,setLoginMobile1] = useState(true);
    // const [loginEmail1,setLoginEmail1] = useState(false);
    const [loginMobile2,setLoginMobile2] = useState(false);
    // const [loginEmail2,setLoginEmail2] = useState(false);
    const [loginCreate,setCreateAcct1] = useState(false);
    const [createAcct,setCreateAcct2] = useState(false);

    const [generatedOtp,setGeneratedOtp] = useState();

    const handleToggle = ()=>{
        setLoginMobile2(true);
        setLoginMobile1(false);
    }

    const verifyOtp = (verify)=>{
        console.log("verifyotp",verify)
        if(verify == generatedOtp){
            alert("Thank you for registering")
            window.location.href = "http://localhost:3000/";
            localStorage.setItem("token",JSON.stringify("quenkndmhgidn"));
        }
        else
        alert("Incorrect Otp")
    }

    const handleLoginMob = ()=>{
        setLoginMobile2(false);
        setLoginMobile1(true);
        setCreateAcct1(false);
        setCreateAcct2(false);
    }

    const handleLoginMob1 = ()=>{
        setLoginMobile2(true);
        setLoginMobile1(false);
    }

    const handleGenerateOtp = ()=>{
        let otp = Math.floor(Math.random() * 1000000);
        setTimeout(()=>{
            alert(`Your OTP is ${otp}`);
        },2000)
        setGeneratedOtp(otp)
    }

    const handleCreateAcct1 = ()=>{
        setLoginMobile1(false); setLoginMobile2(false); setCreateAcct1(true)
    }

    const handleCreateAcct2 = ()=>{
        setCreateAcct2(true);setLoginMobile1(false);setLoginMobile2(false);setCreateAcct1(false)
    }

    return (
        <div>
            <AppContext.Provider value={{handleCreateAcct2,handleLoginMob,createAcct,handleCreateAcct1,loginCreate,handleLoginMob1,verifyOtp,handleGenerateOtp,loginMobile1,setLoginMobile1,loginMobile2,setLoginMobile2,handleToggle}}>
                {children}
            </AppContext.Provider>
        </div>
    )
}