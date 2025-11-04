import { BriefcaseBusiness, FolderClosed, Image, Palette, ShieldCheck, Star, StickyNote } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import DefaultTemplate from "../templates/DefaultTemplate";
import Template001 from "../templates/Template001";
import Template002 from "../templates/Template002";
import Template003 from "../templates/Template003";
import GetTemplates from "../GetTemplates";
import { useContext, useEffect, useState } from "react";
import LoadTemplate from "../LoadTemplate";
import { LoadingContext } from "../components/LoadingContext";

const Templates = () => {
    const navigate = useNavigate();
    const {loading, setLoading} = useContext(LoadingContext);
    const [templates, setTemplates] = useState(null);
    useEffect(() => {
        setTemplates(GetTemplates());
    }, []);
    useEffect(()=>{
        if(templates){
            setLoading(false);
        }
    },[templates]);
    return (
        <div className="px-2 md:px-4 lg:px-6 py-2 flex flex-col">
            <div className="px-2 w-fit h-full flex items-center justify-start mb-10 cursor-pointer" onClick={
                () => { setLoading(true);navigate("/") }
            }>
                <img src="./logo.png" alt="" />
                <h1 className="font-semibold text-2xl text-[#3a3a3a]">QuickCV</h1>
            </div>
            <div className="p-2">
                <div className="w-fit h-fit mx-auto flex flex-col justify-center items-center">
                    <h1 className="text-[1.4em] md:text-[2.6em] lg:text-[3.4em] font-serif font-bold text-dark w-full text-center">Resume Templates</h1>
                    <p className="text-[1.1em] font-normal text-dark w-full text-center">Simple to use and ready in minutes resume templates — give it a try for free now!</p>
                    <Link to="/login">
                        <span className="text-primary font-bold">Choose Later</span>
                    </Link>
                </div>
                <div className=" max-w-[90%] mx-auto mt-4">
                    <div className="w-full h-fit border-b-2 border-b-solid overflow-x-auto">
                        <ul className="w-full h-fit flex justify-between gap-x-4">
                            <li className="flex pb-4 whitespace-nowrap shrink-0 items-center gap-x-[5px] text-[1.4em] text-primary border-b-4 border-b-solid border-b-primary hover:text-primary w-fit cursor-pointer active:text-primary focus:text-primary"><FolderClosed />All Templates</li>
                            <li className="flex pb-4 whitespace-nowrap shrink-0 items-center gap-x-[5px] text-[1.4em] text-lightText hover:text-primary w-fit cursor-pointer active:text-primary focus:text-primary"><Star />Simple</li>
                            <li className="flex pb-4 whitespace-nowrap shrink-0 items-center gap-x-[5px] text-[1.4em] text-lightText hover:text-primary w-fit cursor-pointer active:text-primary focus:text-primary"><Palette />Modern</li>
                            <li className="flex pb-4 whitespace-nowrap shrink-0 items-center gap-x-[5px] text-[1.4em] text-lightText hover:text-primary w-fit cursor-pointer active:text-primary focus:text-primary"><StickyNote />One Column</li>
                            <li className="flex pb-4 whitespace-nowrap shrink-0 items-center gap-x-[5px] text-[1.4em] text-lightText hover:text-primary w-fit cursor-pointer active:text-primary focus:text-primary"><Image />With Photo</li>
                            <li className="flex pb-4 whitespace-nowrap shrink-0 items-center gap-x-[5px] text-[1.4em] text-lightText hover:text-primary w-fit cursor-pointer active:text-primary focus:text-primary"><BriefcaseBusiness />Professional</li>
                            <li className="flex pb-4 whitespace-nowrap shrink-0 items-center gap-x-[5px] text-[1.4em] text-lightText hover:text-primary w-fit cursor-pointer active:text-primary focus:text-primary"><ShieldCheck />ATS</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto mt-10 gap-2 md:gap-4 lg:gap-8">
                        {
                            templates && templates.map((t) => {
                                return <div className="w-full h-fit template-container">
                                    <LoadTemplate path={t.path} className="template h-[600px] text-[0.65rem]/[1] text-black/70" />
                                    <div className="flex justify-center items-center hover-container">
                                        <button
                                        onClick={()=>{setLoading(true);navigate(`/resume/edit/${t.id}`)}}
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
        </div>
    );
}
export default Templates;