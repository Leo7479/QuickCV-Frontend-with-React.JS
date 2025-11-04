
import { useState } from "react";
import { LoadingContext } from "./LoadingContext";
import { GridLoader } from "react-spinners";
const Loading = ({ children }) => {
    const [loading, setLoading] = useState(false);
    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            <div className={`fixed top-0 left-0 w-screen h-screen backdrop-blur-[5px] z-[150] grid place-items-center ${loading?"opacity-100":"opacity-0 pointer-events-none"}`}>
                <GridLoader />
            </div> 
            {children}
        </LoadingContext.Provider>
    );
}
export default Loading;