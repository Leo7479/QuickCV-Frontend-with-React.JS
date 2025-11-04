import { Construction, XIcon } from "lucide-react";
import { useRef } from "react";

const DeveloperWarning = ()=>{
    const devWarningRef = useRef();
    return(
        <div ref={devWarningRef} className="w-screen h-screen overflow-hidden fixed top-0 left-0 z-[100] backdrop-blur-[10px] grid place-items-center">
            <div className="w-[450px] h-fit flex flex-col p-4 bg-[#a44] rounded-lg">
                <div className="w-full h-fit text-white flex justify-end items-center"><div
                onClick={(e)=>{
                    devWarningRef.current.classList.add("hidden","pointer-events-none");
                }}
                className=" cursor-pointer w-fit h-fit hover:bg-white hover:text-black rounded-md transition-all duration-100"><XIcon/></div></div>
                <div className="flex gap-y-2 flex-col items-center justify-start py-4">
                    <div className="text-yellow-400"><Construction size={50}/></div>
                    <h1 className="w-full text-[2em]/[1] font-bold uppercase whitespace-wrap text-white text-center">Website Under Construction</h1>
                    <p className="w-full text-center text-[1em] text-[#aaa]">This Website is currently under development. Please feel free to reach <a href="mailto:shubhrajitsarkar123ss@gmail.com" className="underline font-bold">shubhrajitsarkar123ss@gmail.com</a> to report any problems</p>
                </div>
            </div>
        </div>
    );
}
export default DeveloperWarning;