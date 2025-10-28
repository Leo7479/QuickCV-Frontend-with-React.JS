import { FileBox, PlusSquare, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DocumentTab = ()=>{
    const navigate = useNavigate();
    return(
        <div className="w-full h-full py-4 px-20">
            <div className="w-full h-fit py-4 flex flex-col gap-y-4">
                    <div className="w-full h-fit flex justify-between items-center">
                        <h1 className="text-[1.4em] text-dark font-serif">Your Documents</h1>
                        <button
                            onClick={() => { navigate("/templates") }}
                            className="text-up-container px-4 py-2 rounded-xl bg-primary text-white font-medium flex items-center justify-center gap-x-[4px]">
                            <PlusSquare />
                            <div className="text-up text-[1rem]/[1]">
                                <span className="text">New resume</span>
                                <span className="text">New resume</span>
                            </div>
                        </button>
                    </div>
                    <div className="relative border-t-2 border-t-solid border-t-black/50 ">

                        <div className="w-full h-[400px] flex flex-row">
                            <div className="flex flex-col justify-center items-center w-full h-full flex justify-center items-center flex-col border-b-2 border-b-solid border-b-gray-200">
                                <FileBox strokeWidth={1} size={70} className="text-primary p-2 bg-secondary mb-8" />
                                <h1 className="text-[1.05em]/[1] font-bold text-dark mb-2" >No Resumes Created Yet!</h1>
                                <p className="text-[0.9em]/[1] text-lightText">Create a resume that opens doors. Click “New Resume” to begin.</p>
                                <button
                                    onClick={() => { navigate("/templates") }}
                                    className="text-up-container px-4 py-2 mt-8 rounded-xl bg-primary text-white font-medium flex items-center justify-center gap-x-[4px]">
                                    <PlusSquare />
                                    <div className="text-up text-[1rem]/[1]">
                                        <span className="text">New resume</span>
                                        <span className="text">New resume</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default DocumentTab;