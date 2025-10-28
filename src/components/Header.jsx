import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ()=>{
    const navigate = useNavigate();
    const [status, setStatus] = useState("Login");
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token){
            setStatus("Dashboard");
        }else{
            setStatus("Login");
        }
    },[]);
    return(
        <header className="w-full min-h-[60px] h-[13vh] md:h-[11vh] lg:h-[10vh] sticky top-0 left-0 z-[10]">
            <nav className="w-full h-full flex justify-between items-center px-8 shadow-lg shadow-aliceBlue/60 bg-white">
                <div className="w-fit h-full flex items-center justify-start cursor-pointer" onClick={()=>{navigate("/")}}>
                    <img src="./logo.png" alt=""/>
                    <h1 className="font-semibold text-2xl text-[#3a3a3a]">QuickCV</h1>
                </div>
                <div className="w-fit h-full flex items-center justify-start gap-x-2">
                    <button className="text-up-container text-primary font-semibold text-lg/[1] px-4 py-2 border-2 border-solid border-primary outline-none rounded-xl before-filler filler-primary hover:text-white">
                        <div className="text-up">
                            <span className="text">Build My Resume</span>
                            <span className="text">Build My Resume</span>
                        </div>
                    </button>
                    <button
                    onClick={()=>{navigate("/login")}} 
                    className="text-up-container text-primary font-semibold text-lg/[1] px-4 py-2 bg-primary border-2 border-solid border-primary outline-none rounded-xl text-white">
                        <div className="text-up">
                            <span className="text">{status}</span>
                            <span className="text">{status}</span>
                        </div>
                    </button>
                </div>
            </nav>
        </header>
    );
}
export default Header;