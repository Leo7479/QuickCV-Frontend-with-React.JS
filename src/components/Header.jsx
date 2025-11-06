import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadingContext } from "./LoadingContext";

const Header = ()=>{
    const navigate = useNavigate();
    const [status, setStatus] = useState("Login");
    const { pathname } = useLocation();
    const {loading, setLoading} = useContext(LoadingContext);
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token){
            setStatus("Dashboard");
        }else{
            setStatus("Login");
        }
    },[]);
    return(
        <header className="w-full min-h-[60px] h-[13vh] md:h-[11vh] lg:h-[10vh] max-h-[75px] md:max-h-[100px] sticky top-0 left-0 z-[10]">
            <nav className={`rounded-b-md w-full max-w-[1440px] mx-auto h-full flex justify-between items-center px-8 shadow-aliceBlue/60 bg-white `}>
                <div className="w-fit h-full flex items-center justify-start cursor-pointer" onClick={()=>{if(pathname!=="/"){setLoading(true);navigate("/")}}}>
                    <img src="./logo.png" alt=""/>
                    <h1 className="font-semibold text-md md:text-2xl text-[#3a3a3a]">QuickCV</h1>
                </div>
                <div className="w-fit h-full flex items-center justify-start gap-x-2">
                    <button className="hidden md:inline-block text-up-container text-primary font-semibold md:text-lg/[1] px-4 py-2 border-2 border-solid border-primary outline-none rounded-xl before-filler filler-primary hover:text-white">
                        <div className="text-up">
                            <span className="text">Build My Resume</span>
                            <span className="text">Build My Resume</span>
                        </div>
                    </button>
                    <button
                    onClick={()=>{setLoading(true);navigate("/login")}} 
                    className="text-up-container text-primary font-semibold text-[0.9em]/[0.9] md:text-lg/[1] px-4 py-2 bg-primary border-2 border-solid border-primary outline-none rounded-xl text-white">
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