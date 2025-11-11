import { FileBox, FileChartLine, MoveLeftIcon, MoveRightIcon, PlusSquare, Search, Trash2, Trophy } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "./LoadingContext";
import api from "../services/api";
import { toast } from "react-toastify";
import DefaultTemplateConfig from "../templates/DefaultTemplateConfig";
import LoadTemplate from "../LoadTemplate";
import GetTemplates from "../GetTemplates";

const DashboardTab = () => {
    const [user, setUser] = useState();
    const [visitedTemplates, setVisitedTemplates] = useState([]);
    const [templates, setTemplates] = useState(null);
    const { loading, setLoading } = useContext(LoadingContext);
    const [activeTemplate, setActiveTemplate] = useState(0);
    const templatesContainerRef = useRef();
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);
    useEffect(() => {
        const getVisitedTemplates = async () => {
            try {
                const result = await api.get(`/api/visited-templates/${user.id}`);
                if(result.data.data.templates.length===0){
                    setLoading(false);
                    return;
                }
                setVisitedTemplates(result.data.data.templates);
            } catch (e) {
                console.log(e);
                setLoading(false);
                toast.error("Error fetching previous resumes");
            }

        }
        const showDashboard = async () => {
            if (user) {
                await getVisitedTemplates();
            }
        }
        showDashboard();
    }, [user]);
    useEffect(() => {
        const showVisitedTemplates = async () => {
            try {
                const allResumes = GetTemplates();
                console.log(visitedTemplates);
                const filtered = allResumes.filter((t, i) => {
                    return (visitedTemplates.includes(t.id));
                });
                setTemplates(filtered);
            } catch (e) {
                console.log(e);
                toast.error("Error displaying previous resumes");
            }
        }
        const showDashboard = async () => {
            if (visitedTemplates.length > 0) {

                await showVisitedTemplates();
                console.log(templates);
                setLoading(false);
            }
        }
        showDashboard();
    }, [visitedTemplates])
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
                            onClick={() => { setLoading(true); navigate("/templates") }}
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
                        <div className="w-full h-fit min-h-[400px] flex flex-row ">
                            {
                                visitedTemplates.length > 0 ?
                                    <div className="relative w-[100%] overflow-x-auto scrollbar-needed pb-4 h-fit flex gap-x-4 mt-8">
                                        <div className="absolute inset-0 w-full h-fit z-[5] top-[50%] left-0 -translate-y-[50%] pointer-events-none flex justify-between items-center">
                                            <div
                                                onClick={(e) => {
                                                    const totalTemplates = templatesContainerRef.current.children.length;
                                                    if (activeTemplate - 1 >= 0) {
                                                        templatesContainerRef.current.style.left = (-(activeTemplate - 1) * 300) + "px";
                                                        console.log(templatesContainerRef.current.style.left);
                                                        setActiveTemplate(activeTemplate - 1);
                                                    } else {
                                                        toast.info("No more templates available", {
                                                            closeOnClick: true
                                                        });
                                                    }
                                                }}
                                                className="w-8 h-8 pointer-events-auto rounded-full bg-gray-500 grid place-items-center cursor-pointer">
                                                <MoveLeftIcon fill="#fff" color="#fff" />
                                            </div>
                                            <div
                                                onClick={(e) => {
                                                    const totalTemplates = templatesContainerRef.current.children.length;
                                                    if (activeTemplate + 1 < totalTemplates) {
                                                        templatesContainerRef.current.style.left = (-(activeTemplate + 1) * 300) + "px";
                                                        console.log(templatesContainerRef.current.style.left);
                                                        setActiveTemplate(activeTemplate + 1);
                                                    } else {
                                                        toast.info("No more templates available", {
                                                            closeOnClick: true
                                                        });
                                                    }
                                                }}
                                                className="w-8 h-8 pointer-events-auto rounded-full bg-gray-500 grid place-items-center cursor-pointer">
                                                <MoveRightIcon fill="#fff" color="#fff" />
                                            </div>
                                        </div><div className="w-full h-fit overflow-x-auto">
                                            <div ref={templatesContainerRef} className="w-fit h-fit flex flex-row gap-x-4 relative pl-[10px] transition-all duration-200  templates-container left-0">

                                                {
                                                    templates && templates.map((t) => {
                                                        return <div className="w-full h-fit template-container">
                                                            <LoadTemplate path={t.path} data={DefaultTemplateConfig()} className="template w-[100px] h-[400px] text-[0.5rem]/[1] text-black/70" />
                                                            <div className="flex border-2 border-blue-550 justify-center items-center hover-container">
                                                                <button
                                                                    onClick={async (e) => {

                                                                        const toastID = toast.loading("Deleting Template");
                                                                        try {
                                                                            const filteredVisitedTemplates = visitedTemplates.filter((item, id) => {
                                                                                return item != t.id;
                                                                            });
                                                                            const filteredTemplates = templates.filter((item, id) => {
                                                                                return item.id != t.id;
                                                                            });
                                                                            console.log(t.id);
                                                                            const result = await api.put(`/api/visited-templates/${user.id}`, { "template": t.id });
                                                                            console.log(result);
                                                                            setTemplates(filteredTemplates);
                                                                            setVisitedTemplates(filteredVisitedTemplates);
                                                                            toast.update(toastID, {
                                                                                render: "Deleted Template",
                                                                                type: "success",
                                                                                isLoading: false,
                                                                                closeOnClick: true,
                                                                                autoClose: 3000
                                                                            });
                                                                        } catch (e) {
                                                                            console.log(e);
                                                                            toast.update(toastID, {
                                                                                render: "Try Again Later",
                                                                                type: "error",
                                                                                isLoading: false,
                                                                                closeOnClick: true,
                                                                                autoClose: 3000
                                                                            });
                                                                        }

                                                                    }}
                                                                    className="absolute top-2 right-2 text-red-600 bg-white hover:bg-red-600 hover:text-white p-[5px] rounded-full transition-all duration-200"
                                                                ><Trash2 strokeWidth={1} /></button>
                                                                <button
                                                                    onClick={() => { setLoading(true); navigate(`/resume/edit/${t.id}`) }}
                                                                    className="text-up-container bg-white before-filler filler-primary hover:text-white text-primary font-semibold text-lg/[0.9] px-8 py-4 border-2 border-solid border-primary rounded-xl outline-none">
                                                                    <div className="text-up">
                                                                        <span className="text">Use This Template</span>
                                                                        <span className="text">Use This Template</span>
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="flex flex-col justify-center items-center w-full h-full flex justify-center items-center flex-col border-b-2 border-b-solid border-b-gray-200 py-12 md:py-20">
                                        <FileBox strokeWidth={1} size={70} className="text-primary p-2 bg-secondary mb-8" />
                                        <h1 className="text-[1.05em]/[1] font-bold text-dark font-serif mb-2">No Resumes Created Yet!</h1>
                                        <p className="text-[0.9em]/[1] text-lightText">Create a resume that opens doors. Click “New Resume” to begin.</p>
                                        <button
                                            onClick={() => { setLoading(true); navigate("/templates") }}
                                            className="text-up-container px-4 py-2 mt-8 rounded-xl bg-primary text-white font-medium flex items-center justify-center gap-x-[4px]">
                                            <PlusSquare />
                                            <div className="text-up text-[1rem]/[1]">
                                                <span className="text">New resume</span>
                                                <span className="text">New resume</span>
                                            </div>
                                        </button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit py-4 flex flex-col justify-start items-center">
                    <div className="w-full h-fit flex justify-between items-center">
                        <h1 className="text-[1.4em] text-dark font-serif">Browse Other Templates</h1>
                        <button
                            onClick={() => { setLoading(true); navigate("/templates") }}
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
                                onClick={() => { setLoading(true); navigate("/templates") }}
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
                            onClick={() => { setLoading(true); navigate("/dashboard/interview-prep") }}
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
                            onClick={() => { setLoading(true); navigate("/dashboard/interview-prep") }}
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