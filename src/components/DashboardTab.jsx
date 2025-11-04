import { FileBox, FileChartLine, PlusSquare, Search, Trophy } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "./LoadingContext";

const DashboardTab = () => {
    const [user, setUser] = useState();
    const { loading, setLoading } = useContext(LoadingContext);
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);
    useEffect(()=>{
        if(user){
            setLoading(false);
        }
    },[user])
    const navigate = useNavigate();
    return (
        <div className="w-full h-full relative overflow-x-hidden overflow-y-auto">
            <div className="absolute top-0 left-0 w-full h-[20%] z-[-1]" style={{ backgroundImage: "linear-gradient(to bottom, #d7f0ff, white 70%)" }}></div>
            <div className="w-full h-fit py-10 px-20">
                <div className="w-full h-fit py-4 flex flex-col justify-center items-start border-b-2 border-b-solid">
                    <h1 className="font-serif text-dark text-[2em] font-semibold">Welcome, {user?.name.split(" ")[0]}!</h1>
                    <p className="text-lightText">Let's get you ready for your next career chapter.</p>
                </div>
                <div className="w-full h-fit py-4 flex flex-col gap-y-4">
                    <div className="w-full h-fit flex justify-between items-center">
                        <h1 className="text-[1.4em] text-dark font-serif">Your Documents</h1>
                        <button
                            onClick={() => { setLoading(true);navigate("/templates") }}
                            className="text-up-container px-4 py-2 rounded-xl bg-primary text-white font-medium flex items-center justify-center gap-x-[4px]">
                            <PlusSquare />
                            <div className="text-up text-[1rem]/[1]">
                                <span className="text">New resume</span>
                                <span className="text">New resume</span>
                            </div>
                        </button>
                    </div>
                    <div className="relative border-t-2 border-t-solid border-t-black/50 ">
                        <div className="w-full h-fit flex justify-between items-center gap-x-2 bg-gray-100/85 p-4 rounded-b-md">
                            <div className="flex gap-x-2 justify-start items-center">
                                <Trophy className="rounded-md p-2 text-primary bg-secondary" size={32} fill="var(--primary)" />
                                <div>
                                    <h1 className="text-[1em] font-semibold text-dark">Upgrade your Resume with our Experts' help!</h1>
                                    <p className="text-lightText text-[0.75em]">Get personalized feedback on your resume and insights on how to get noticed by recruiters.</p>
                                </div>
                            </div>
                            <button
                                className="text-up-container px-4 py-2 rounded-xl bg-white text-dark font-medium flex items-center justify-center gap-x-2 border-2 border-solid border-gray-400">
                                <div className="text-up text-[1em]/[1]">
                                    <span className="text">Start Now</span>
                                    <span className="text">Start Now</span>
                                </div>
                            </button>
                        </div>
                        <div className="w-full h-[400px] flex flex-row">
                            <div className="flex flex-col justify-center items-center w-full h-full flex justify-center items-center flex-col border-b-2 border-b-solid border-b-gray-200">
                                <FileBox strokeWidth={1} size={70} className="text-primary p-2 bg-secondary mb-8" />
                                <h1 className="text-[1.05em]/[1] font-bold text-dark font-serif mb-2">No Resumes Created Yet!</h1>
                                <p className="text-[0.9em]/[1] text-lightText">Create a resume that opens doors. Click “New Resume” to begin.</p>
                                <button
                                    onClick={() => { setLoading(true);navigate("/templates") }}
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
                <div className="w-full h-fit py-4 flex flex-col justify-start items-center">
                    <div className="w-full h-fit flex justify-between items-center">
                        <h1 className="text-[1.4em] text-dark font-serif">Browse Other Templates</h1>
                        <button
                            onClick={() => { setLoading(true);navigate("/templates") }}
                            className="text-up-container px-4 py-2 rounded-xl bg-primary text-white font-medium flex items-center justify-center gap-x-[4px]">
                            <Search />
                            <div className="text-up text-[1rem]/[1]">
                                <span className="text">Browse Templates</span>
                                <span className="text">Browse Templates</span>
                            </div>
                        </button>
                    </div>
                    <div className="w-full h-[400px] flex flex-row">
                        <div className="flex flex-col justify-center items-center w-full h-full flex justify-center items-center flex-col border-b-2 border-b-solid border-b-gray-200">
                            <FileChartLine strokeWidth={1} size={70} className="text-primary p-2 bg-secondary mb-8" />
                            <h1 className="text-[1.05em]/[1] font-bold text-dark font-serif mb-2">Visit more templates!</h1>
                            <p className="text-[0.9em]/[1] text-lightText">Your recently visited templates will show up here.</p>
                            <button
                                onClick={() => { setLoading(true);navigate("/templates") }}
                                className="text-up-container px-4 py-2 mt-8 rounded-xl bg-primary text-white font-medium flex items-center justify-center gap-x-[4px]">
                                <Search />
                                <div className="text-up text-[1rem]/[1]">
                                    <span className="text">Browse Templates</span>
                                    <span className="text">Browse Templates</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex gap-x-2 py-4">
                    <div className="w-[50%] h-fit flex flex-col justify-center items-center pt-10 px-10 bg-aliceBlue gap-y-2">
                        <h1 className="font-serif text-[1.4rem] text-dark font-semibold">Get Interview Guide Now!</h1>
                        <p className="text-black/70 text-center">Receive a guide created by top recruiters. Learn to make an impressive self-introduction and master the most effective interview techniques</p>
                        <button
                            onClick={() => { setLoading(true);navigate("/dashboard/interview-prep") }}
                            className="text-up-container px-4 py-4 rounded-xl bg-primary text-white font-medium flex items-center justify-center gap-x-[4px]">
                            <div className="text-up text-[1rem]/[1]">
                                <span className="text">Get It Now</span>
                                <span className="text">Get It Now</span>
                            </div>
                        </button>
                        <div className="w-full h-[250px]">
                            <img src="/interview-banner.webp" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="w-[50%] h-fit flex flex-col justify-center items-center pt-10 px-10 bg-aliceBlue gap-y-2">
                        <h1 className="font-serif text-[1.4rem] text-dark font-semibold">LinkedIn Profile Boosting!</h1>
                        <p className="text-black/70 text-center">Boost your LinkedIn profile to stand out to recruiters and clients. Professional branding, clear positioning, and a strong presentation of your experience.</p>
                        <button
                            onClick={() => { setLoading(true);navigate("/dashboard/interview-prep") }}
                            className="text-up-container px-4 py-4 rounded-xl bg-primary text-white font-medium flex items-center justify-center gap-x-[4px]">
                            <div className="text-up text-[1rem]/[1]">
                                <span className="text">Get It Now</span>
                                <span className="text">Get It Now</span>
                            </div>
                        </button>
                        <div className="w-full h-[250px]">
                            <img src="/linkedin-banner.webp" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardTab;