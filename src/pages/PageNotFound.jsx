import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen overflow-hidden grid place-items-center">
            <div className="w-fit max-w-full h-fit max-h-full flex flex-col justify-center items-center">
                <div className="w-[250px] aspect-square">
                    <img src="/404-picture.png" alt="" className="w-full h-full object-contain"/>
                </div>
                <h1 className="text-primary font-bold capitalize text-[2em] md:text-[2.5em] font-serif">Oops, Requested Resource Not Found</h1>
                <p className="text-lightText">The resource you requested was not found on the website. Please visit other pages.</p>
                <button
                    onClick={() => { navigate("/") }}
                    className="mt-4 text-up-container text-primary font-semibold text-lg/[1] px-4 py-2 border-2 border-solid border-primary outline-none rounded-xl before-filler filler-primary hover:text-white">
                    <div className="text-up">
                        <span className="text">Home Page</span>
                        <span className="text">Home Page</span>
                    </div>
                </button>
            </div>
        </div>
    );
}
export default PageNotFound;