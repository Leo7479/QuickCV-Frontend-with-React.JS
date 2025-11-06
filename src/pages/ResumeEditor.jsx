import { useNavigate, useParams } from "react-router-dom";
import LoadTemplate from "../LoadTemplate";
import { useContext, useEffect, useRef, useState } from "react";
import GetTemplates from "../GetTemplates";
import GetFormConfig from "../GetFormConfig";
import { Check, ChevronDown, LayoutDashboardIcon, Plus, Printer, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import { LoadingContext } from "../components/LoadingContext";
import api from "../services/api";

const ResumeEditor = (props) => {
    const navigate = useNavigate();
    const { templateNo } = useParams();
    const [direction, setDirection] = useState("forwards");
    const [template, setTemplate] = useState();
    const stepRefs = useRef([]);
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState([]);
    const [formConfig, setFormConfig] = useState([]);
    const [formData, setFormData] = useState([]);
    const formRef = useRef();
    const livePreviewRef = useRef();
    const [showPreview, setShowPreview] = useState();
    const templateRef = useRef();
    const [templateHeight, setTemplateHeight] = useState("auto");
    const { loading, setLoading } = useContext(LoadingContext);
    const [userId, setUserId] = useState(null);

    async function getFormData(){
        try{
        const result = await api.get(`/api/user-details/${userId}`);
        console.log(result);
        setFormData(result.data.formData);
        }catch(e){

        }
    }

    async function saveFormData(){
        const result = await api.post(`/api/user-details/save/${userId}`,formData);
        console.log("Saved data");
    }

    useEffect(() => {
        const updateHeight = () => {
            if (templateRef.current) {
                const width = templateRef.current.offsetWidth;
                const height = width * (29.7 / 21); // A4 aspect ratio
                setTemplateHeight(height + "px");
            }
        };

        updateHeight(); // run once
        window.addEventListener("resize", updateHeight); // recalc on resize
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    useEffect(() => {
        async function loadTemplate() {
            const result = GetTemplates();
            for (let i = 0; i < result.length; i++) {
                if (result[i].id === parseInt(templateNo)) {
                    setTemplate(result[i]);
                    break;
                }
            }
        }
        async function loadForm() {
            const result = GetFormConfig();
            setFormConfig(result);
            let output = [];
            for (let i = 0; i < result.length; i++) {
                const element = result[i];
                if (!steps.includes(element.name)) {
                    steps.push(element.name);
                    if (element.multiple)
                        output = [...output, { name: element.name, entries: 1, data: [{}] }];
                    else
                        output = [...output, { name: element.name, data: {} }];
                }
            }
            if (output.length > 0)
                setFormData(output);
        }

        async function getUserId() {
            try{
                console.log("Getting user id");
                const user = JSON.parse(localStorage.getItem("user"));
                setUserId(user.id);
                console.log("Got User ID ",user.id);
            }catch(e){
                console.log(e);
            }
        }
        loadTemplate();
        loadForm();
        getUserId();
        setLoading(false);
    }, []);

    useEffect(()=>{
        console.log(userId);
        if(userId!==null && userId!==undefined){
            console.log("Getting form data for User Id: ",userId);
            getFormData();
        }
    },[userId]);

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <div className="w-screen h-screen flex">
            <div className="w-full h-full bg-[#eef2f9] p-4">
                <div className="w-full h-full p-2 rounded-xl bg-white shadow-lg flex flex-col justify-between items-start gap-y-4">
                    <div className="w-full h-fit overflow-x-auto scrollbar-needed flex-none">
                        <div className="w-fit min-w-full h-fit flex justify-around items-center py-4">
                            {
                                steps.map((s, i) => {
                                    return <div key={i} ref={stepRefs} className="w-full h-full text-center">
                                        <h1 className={`text-[0.7em]/[1] md:text-[1.2em]/[1] whitespace-nowrap pb-6 transition-all duration-[1000ms] ${activeStep === i ? "text-primary" : activeStep>i?"text-textGreen ":"text-lightText"}`}>{s}</h1>
                                        <div className="flex justify-between items-center relative">
                                            <div className={`w-full h-[2px] bg-gray-300`}>
                                                <div className={`progress-before w-full h-full transition-all duration-[500ms] ${direction === "forwards" ? "delay-[500ms] ease-out" : "ease-in"} ${activeStep === i ? "max-w-full bg-primary" : activeStep>i?"max-w-full bg-textGreen":"max-w-0"}`}></div>
                                            </div>
                                            <div className={`w-full h-[2px] bg-gray-300`}>
                                                <div className={`progress-after w-full h-full transition-all duration-[500ms] ${direction === "backwards" ? "delay-[500ms] ease-out" : "ease-in"} ${activeStep === i ? "max-w-0" : activeStep>i? activeStep===i+1?"max-w-full bg-primary":"max-w-full bg-textGreen":"max-w-0"}`}></div>
                                            </div>
                                            <div className={`absolute grid place-items-center p-[4px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[20px] h-[20px] aspect-square border-full border-2 border-solid rounded-full transition-all duration-[500ms] delay-[500ms] ease ${activeStep === i ? "bg-primary border-primary text-white" : activeStep>i?"bg-textGreen border-textGreen ":"bg-gray-300 border-gray-300"}`}>
                                                <Check className={`transition-all duration-200 ${i<activeStep?"opacity-100":"opacity-0"}`} strokeWidth={2} size="15px" width="10px" height="10px"/>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="w-full grow overflow-y-auto overflow-x-hidden scrollbar-needed px-4">
                        <div className="w-full h-fit mb-4">
                            <h1 className="font-serif text-[1.3em] md:text-[2em] font-semibold text-dark">{steps[activeStep]}</h1>
                            <p className="text-lightText text-[0.8em]/[1]">{formConfig.length > 0 ? formConfig[activeStep].description : null}</p>
                        </div>

                        {/* Main Input Form */}
                        <form ref={formRef}
                            onSubmit={
                                (e) => {
                                    try {
                                        e.preventDefault();
                                        setDirection("forwards");
                                        saveFormData();
                                        setActiveStep(activeStep + 1);
                                    } catch (e) { }
                                }
                            }
                            className={`w-full h-fit grid gap-4 mb-4 ${formConfig.length > 0 && !formConfig[activeStep].multiple ? "grid-cols-" + formConfig[activeStep].gridCols : "grid-cols-1"}`}>
                            {/* Inputs */}

                            {
                                // If everything is available
                                formConfig.length > 0 && formConfig[activeStep].fields ?
                                    // If Multiple entry 
                                    formConfig[activeStep].multiple ?
                                        // For Each Data entry
                                        formData[activeStep].data.map((d, idx) => {
                                            return (
                                                <div key={idx} className="w-full h-fit flex flex-col border-2 border-solid border-lightDarker rounded-md px-2 md:px-10 py-2 overflow-hidden" >
                                                    {/* For Each Input */}
                                                    {formConfig[activeStep].withHeading ?
                                                        <div className="flex flex-row justify-between items-center">
                                                            <div className="w-fit h-fit flex flex-col justify-center items-start">
                                                                <h1 className="text-[0.9em] md:text-[1em] font-serif text-lightText uppercase">{formData[activeStep].name==="Experience"? d.Job_Title ? d.Job_Title : "Job Title" : formData[activeStep].name==="Education"?d.Degree?d.Degree:"Education Title":null}</h1>
                                                                <p className="text-[0.6em] font-serif text-lightText">{d.Start_Date ? d.Start_Date.split("-")[1] + "/" + d.Start_Date.split("-")[0] : "MM/YYYY"} - {d.End_Date ? d.End_Date.split("-")[1] + "/" + d.End_Date.split("-")[0] : "MM/YYYY"}</p>
                                                            </div>
                                                            <div className="flex flex-row shrink-0 gap-x-4">
                                                                <div
                                                                    onClick={(e) => {
                                                                        const previous = [...formData];
                                                                        const active = previous[activeStep];
                                                                        active.entries -= 1;
                                                                        active.data.splice(idx, 1);
                                                                        setFormData(previous);
                                                                    }}
                                                                    className="cursor-pointer transition-all duration-200 hover:text-[#b00] text-lightText"><Trash2 strokeWidth={1.5} size={20} /></div>
                                                                <input type="checkbox" id={`collapse-${idx}`} hidden
                                                                    onChange={(e) => {
                                                                        const underlying_element = e.target.parentNode.parentNode.parentNode.children[1];
                                                                        const label = e.target.parentNode.children[2];
                                                                        if (e.target.checked) {
                                                                            underlying_element.classList.add("max-h-0", "opacity-0");
                                                                            underlying_element.classList.remove("py-4");
                                                                            label.classList.remove("rotate-[180deg]");
                                                                        }
                                                                        else {
                                                                            underlying_element.classList.remove("max-h-0", "opacity-0");
                                                                            underlying_element.classList.add("py-4");
                                                                            label.classList.add("rotate-[180deg]");
                                                                        }
                                                                    }}
                                                                />
                                                                <label
                                                                    htmlFor={`collapse-${idx}`}
                                                                    className="cursor-pointer transition-all duration-200 rotate-[180deg] text-lightText hover:text-primary"><ChevronDown size={20} strokeWidth={1.5} /></label>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div className="w-full h-fit flex justify-end items-center pt-2">
                                                            <div
                                                                onClick={(e) => {
                                                                    const previous = [...formData];
                                                                    const active = previous[activeStep];
                                                                    active.entries -= 1;
                                                                    active.data.splice(idx, 1);
                                                                    setFormData(previous);
                                                                }}
                                                                className="cursor-pointer transition-all duration-200 hover:text-[#b00] text-lightText"><Trash2 strokeWidth={1.5} size={20} /></div>

                                                        </div>
                                                    }
                                                    <div className={`w-full h-fit grid gap-4 ${formConfig[activeStep].multiple && formConfig[activeStep].withHeading ? "py-4" : null}`} style={{ gridTemplateColumns: "repeat(" + formConfig[activeStep].gridCols + ",1fr)" }}>
                                                        {
                                                            formConfig[activeStep].fields.map(({ name, type, required, multiple, className, ...f }) => {
                                                                return (
                                                                    <div key={name} className={`flex flex-col justify-between min-w-0 items-start gap-y-2 ${className ? className : null}`}>
                                                                        <label className="text-dark uppercase text-[0.8em]/[1] md:text-[1em]/[1]">{name.replaceAll("_", " ")}{required ? <span className="text-red-600 text-[1.5em]/[1]">*</span> : null}</label>
                                                                        <input name={name} type={type} required={required}
                                                                            value={formData ? formData[activeStep].data[idx] ? formData[activeStep].data[idx][name] : null : null}
                                                                            onChange={(e) => {
                                                                                const newFormData = formData.map((stepdata, id) => {
                                                                                    if (id === activeStep) {
                                                                                        const value = { ...stepdata };
                                                                                        value.data[idx][name] = e.target.value;
                                                                                        return value;
                                                                                    }
                                                                                    else
                                                                                        return stepdata;
                                                                                });
                                                                                setFormData(newFormData);
                                                                            }}
                                                                            className={`w-full border-[1px] border-solid border-lightDarker bg-lightDark rounded-lg px-2 py-2 md:py-4 text-dark outline-none focus:glow-primary transition-all duration-200 ${type === "text" ? "capitalize" : null}`} {...f} />
                                                                    </div>);
                                                            })
                                                        }
                                                    </div>
                                                </div>);
                                        })
                                        :
                                        // If Single entry
                                        formConfig[activeStep].fields.map(({ name, type, required, multiple, className, ...f }) => {
                                            return (
                                                <div className={`flex flex-col justify-between items-start gap-y-2 ${className}`}>
                                                    <label className="text-dark uppercase text-[0.8em]/[1] md:text-[1em]/[1]">{name.replaceAll("_", " ")}{required ? <span className="text-red-600 text-[1.5em]/[1]">*</span> : null}</label>
                                                    <input name={name} type={type} required={required}
                                                        value={formData ? formData[activeStep].data ? formData[activeStep].data[name] : null : null}
                                                        onChange={(e) => {
                                                            const newFormData = formData.map((stepdata, id) => {
                                                                if (id === activeStep) {
                                                                    return {
                                                                        ...stepdata,
                                                                        data: {
                                                                            ...stepdata.data,
                                                                            [name]: e.target.value
                                                                        }
                                                                    }
                                                                }
                                                                else
                                                                    return stepdata;
                                                            });
                                                            setFormData(newFormData);
                                                        }}
                                                        className={`w-full border-[1px] border-solid border-lightDarker bg-lightDark rounded-lg px-2 py-2 md:py-4 text-dark outline-none focus:glow-primary transition-all duration-200 ${type === "text" ? "capitalize" : null}`} {...f} />
                                                </div>);
                                        })
                                    :
                                    // Everything is not available
                                    null
                            }
                        </form>
                        {
                            formConfig.length > 0 && formConfig[activeStep].multiple ?
                                <button
                                    onClick={(e) => {
                                        const previous = [...formData];
                                        const active = previous[activeStep];
                                        active.data.push({});
                                        active.entries += 1;
                                        setFormData(previous);
                                    }}
                                    className={`flex gap-x-2 text-up-container px-4 py-2 rounded-xl bg-white text-primary font-normal border-2 border-solid border-primary ${activeStep > 0 ? "visible" : "invisible pointer-events-none"}`}>
                                    <Plus size={20} className="text-primary" />
                                    <div className="text-up text-[1.1rem]/[1] font-semibold">
                                        <span className="text">Add {formConfig[activeStep].name}</span>
                                        <span className="text">Add {formConfig[activeStep].name}</span>
                                    </div>
                                </button> : null
                        }
                    </div>
                    <div className="w-full h-fit flex flex-none justify-between items-center relative">
                        <div className="flex md:hidden justify-end gap-x-2 items-center w-full h-fit absolute top-0 left-0 w-full -translate-y-[125%]">
                            <button
                                onClick={(e) => {
                                    const resumeElement = document.querySelector(".mobiletemplate");
                                    import("html2canvas").then(html2canvas => {
                                        import("jspdf").then(jsPDF => {
                                            html2canvas.default(resumeElement, {
                                                scale: 2, useCORS: true,
                                                allowTaint: true,
                                                logging: false,
                                                backgroundColor: "#ffffff"
                                            }).then(canvas => {
                                                const imgData = canvas.toDataURL("image/png");
                                                const pdf = new jsPDF.jsPDF("p", "mm", "a4");
                                                const pdfWidth = pdf.internal.pageSize.getWidth();
                                                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                                                pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
                                                const user = localStorage.getItem("user");
                                                if (user) {
                                                    const userJSON = JSON.parse(user);
                                                    console.log(userJSON.name);
                                                    pdf.save(`${userJSON.name}_QuickCV.pdf`);
                                                }
                                                else
                                                    pdf.save("My_Resume_QuickCV.pdf");
                                                toast.success("Pdf Downloaded");
                                            });
                                        });
                                    });
                                }} className="border-2 border-solid border-primary text-primary px-4 py-2 md:px-6 md:py-4 rounded-xl text-up-container">
                                <div className="text-up text-[1em]/[1] md:text-[1.1rem]/[1]">
                                    <span className="text">Download PDF</span>
                                    <span className="text">Download PDF</span>
                                </div>
                            </button>
                            <button
                                onClick={(e) => {
                                    setShowPreview(true);
                                }}
                                className={`text-up-container px-4 py-2 md:px-6 md:py-4 rounded-xl bg-primary text-white font-normal cursor-pointer`}>
                                <div className="text-up text-[1em]/[1] md:text-[1.1rem]/[1]">
                                    <span className="text">Preview</span>
                                    <span className="text">Preview</span>
                                </div>
                            </button>
                        </div>
                        {/* Fullscreen Mobile Preview Overlay */}
                        <div
                            className={`fixed inset-0 z-50 px-4 py-6 bg-white transition-transform duration-700 ease-in-out ${showPreview ? "translate-y-0" : "translate-y-full"
                                }`}
                        >
                            <div className="w-full h-full overflow-y-auto flex justify-center items-center p-4">
                                {/* Close Button */}
                                <button
                                    onClick={() => setShowPreview(false)}
                                    className="absolute top-4 right-4 text-dark bg-gray-100 rounded-full p-2 shadow-md hover:bg-gray-200 transition"
                                >
                                    ✕
                                </button>

                                {/* Inject Live Preview content */}
                                <div className="w-fit h-fit">
                                    {template && template.path ? (
                                        <LoadTemplate
                                            ref={templateRef}
                                            path={template.path}
                                            className={`mobiletemplate w-full h-[500px] text-[0.6rem]/[1] text-black/70`}
                                            style={{ height: templateHeight }}
                                            data={formData}
                                        />
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setDirection("backwards");
                                setActiveStep(activeStep - 1);
                            }}
                            className={`text-up-container px-4 py-2 md:px-6 md:py-4 rounded-xl bg-white text-dark font-normal border-2 border-solid border-lightText ${activeStep > 0 ? "visible" : "invisible pointer-events-none"}`}>
                            <div className="text-up text-[1em]/[1] md:text-[1.1rem]/[1]">
                                <span className="text">Back: {steps[activeStep - 1] ? steps[activeStep - 1] : null}</span>
                                <span className="text">Back: {steps[activeStep - 1] ? steps[activeStep - 1] : null}</span>
                            </div>
                        </button>
                        <button
                            onClick={(e) => {
                                formRef.current.requestSubmit();
                            }}
                            className="text-up-container px-4 py-2 md:px-6 md:py-4 rounded-xl bg-primary text-white font-normal">
                            <div className="text-up text-[1em]/[1] md:text-[1.1rem]/[1]">
                                <span className="text">{activeStep !== (steps.length - 1) ? `Next: ${steps[activeStep + 1] ? steps[activeStep + 1] : null}` : "Finalize"}</span>
                                <span className="text">{activeStep !== (steps.length - 1) ? `Next: ${steps[activeStep + 1] ? steps[activeStep + 1] : null}` : "Finalize"}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div ref={livePreviewRef} className="hidden md:flex w-full h-screen bg-[#eef2f9] overflow-auto scrollbar-needed justify-center items-center">
                <div className="w-fit h-full relative group scrollbar-needed py-10">
                    <div className="relative w-full h-fit flex justify-between items-center bg-gray-100 px-2 rounded-t-lg text-[1em] shadow-xl">
                        <div className="flex gap-x-2 w-fit h-fit justify-start items-center">
                            <div className="bg-[#fba86d] text-white px-[10px] py-[2px] rounded-lg">40%</div>
                            Your Resume Score 😊
                        </div>
                        <div
                            onClick={(e) => {
                                setLoading(true);
                                navigate("/templates");
                            }}
                            className="cursor-pointer w-fit h-fit px-4 py-2 flex gap-x-2 bg-white text-primary font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200"><LayoutDashboardIcon strokeWidth={1} />Change Template</div>
                        <div className="absolute top-0 right-0 translate-x-[125%] flex flex-col gap-y-2">
                            <button
                                onClick={() => {
                                    const resumeElement = document.querySelector(".template");
                                    import("html2canvas").then(html2canvas => {
                                        import("jspdf").then(jsPDF => {
                                            html2canvas.default(resumeElement, {
                                                scale: 2, useCORS: true,
                                                allowTaint: true,
                                                logging: false,
                                                backgroundColor: "#ffffff"
                                            }).then(canvas => {
                                                const imgData = canvas.toDataURL("image/png");
                                                const pdf = new jsPDF.jsPDF("p", "mm", "a4");
                                                const pdfWidth = pdf.internal.pageSize.getWidth();
                                                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                                                pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
                                                const user = localStorage.getItem("user");
                                                if (user) {
                                                    const userJSON = JSON.parse(user);
                                                    console.log(userJSON.name);
                                                    pdf.save(`${userJSON.name}_QuickCV.pdf`);
                                                }
                                                else
                                                    pdf.save("My_Resume_QuickCV.pdf");
                                                toast.success("Pdf Downloaded");
                                            });
                                        });
                                    });
                                }}
                                title="Save as PDF"
                                className="shadow-xl cursor-pointer w-fit h-fit px-[10px] py-[5px] flex gap-x-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all duration-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="none" viewBox="0 0 33 32" className="rightSide_innerFormatIcon__ebXf7" data-sentry-element="PdfIcon" data-sentry-source-file="RightSide.tsx"><path fill="#F1F9FE" d="M28.443 9.792v18.04c0 .778-.312 1.526-.867 2.077-.556.55-1.309.86-2.094.86H7.716c-.785 0-1.539-.31-2.094-.86a2.93 2.93 0 0 1-.867-2.078V4.17c0-.78.312-1.527.867-2.078a2.97 2.97 0 0 1 2.094-.86h12.098m8.629 8.56c0-.778-.312-1.525-.868-2.076l-5.667-5.623a2.97 2.97 0 0 0-2.094-.861"></path><path stroke="#2E404A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" d="m16.599 25.872-4.442-4.407m4.442 4.407 4.441-4.407M16.6 25.872v-8.814m11.844-7.266v18.04c0 .778-.312 1.526-.867 2.077-.556.55-1.309.86-2.094.86H7.716c-.785 0-1.539-.31-2.094-.86a2.93 2.93 0 0 1-.867-2.078V4.17c0-.78.312-1.527.867-2.078a2.97 2.97 0 0 1 2.094-.86h12.098c.786 0 1.539.31 2.094.86l5.667 5.624c.556.55.868 1.298.868 2.077"></path><path fill="#FFD2DD" d="M19.655 6.86H2.628A2.12 2.12 0 0 0 .5 8.97v7.033a2.12 2.12 0 0 0 2.128 2.11h17.027a2.12 2.12 0 0 0 2.129-2.11V8.969a2.12 2.12 0 0 0-2.129-2.11"></path><path fill="#FB7E6D" d="M5.166 15.106q-.312 0-.482-.17-.17-.175-.17-.485v-3.713q0-.317.17-.486.177-.168.49-.168h1.745q.851 0 1.312.436.468.429.468 1.188 0 .76-.468 1.196-.461.429-1.312.429h-1.1v1.118q0 .31-.163.486-.163.168-.49.168m.653-2.765h.873q.369 0 .567-.154.2-.162.199-.479 0-.323-.199-.478-.198-.155-.567-.155h-.873zm3.815 2.701q-.333 0-.51-.169-.17-.175-.17-.499v-3.622q0-.324.17-.493.177-.175.51-.175h1.39q1.306 0 2.016.647.716.646.716 1.828 0 .591-.184 1.055-.184.457-.532.781a2.35 2.35 0 0 1-.859.486 3.8 3.8 0 0 1-1.156.161zm.625-1.048h.68q.377 0 .646-.091.277-.091.454-.268.184-.175.27-.443.093-.267.092-.633 0-.73-.361-1.076-.363-.351-1.1-.351h-.681zm4.577 1.111q-.312 0-.49-.168-.17-.176-.17-.5v-3.685q0-.324.17-.493.178-.175.511-.175h2.363q.255 0 .383.126.127.126.127.366 0 .245-.127.38-.128.126-.384.126h-1.738v.999h1.582q.248 0 .377.127.135.126.134.365 0 .247-.135.373-.127.127-.376.127h-1.582v1.364q0 .668-.645.668"></path></svg>

                            </button>
                            {/* Print Resume Button */}
                            <button
                                onClick={() => {
                                    const resumeElement = document.querySelector(".template");
                                    import("html2canvas")
                                        .then(html2canvas => {
                                            import("jspdf").then(jsPDF => {
                                                html2canvas.default(resumeElement, {
                                                    scale: 2, useCORS: true,
                                                    allowTaint: true,
                                                    logging: false,
                                                    backgroundColor: "#ffffff"
                                                }).then(canvas => {
                                                    const imgData = canvas.toDataURL("image/png");
                                                    const pdf = new jsPDF.jsPDF("p", "mm", "a4");
                                                    const pdfWidth = pdf.internal.pageSize.getWidth();
                                                    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                                                    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
                                                    pdf.autoPrint();
                                                    const printWindow = window.open(pdf.output("bloburl"), "_blank");
                                                    if (printWindow) {
                                                        printWindow.onload = () => {
                                                            try {
                                                                printWindow.focus(); // focus the new window in case of new window in background or popup blocker
                                                                printWindow.print();
                                                            } catch (e) {
                                                                console.log(e);
                                                                toast.error("Error Occured. Try Again.")

                                                            }
                                                        }
                                                        toast.success("Print Dialog Opened.")
                                                    } else {
                                                        toast.error("Error Occured. Try Again.")
                                                    }
                                                }).catch(error => {
                                                    console.log(error);
                                                })
                                            });
                                        })
                                }}
                                title="Print Resume"
                                className="shadow-xl cursor-pointer w-fit h-fit px-[10px] py-[5px] flex gap-x-2 bg-white text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
                            >
                                <Printer strokeWidth={1} />
                            </button>
                        </div>
                    </div>
                    <div className="w-fit h-fit shadow-xl">
                        {
                            template && template.path ? <LoadTemplate id="mainTemplate" path={template.path} className="template w-[550px] h-[660px] text-[0.8rem]/[1] text-black/70" data={formData} /> : null
                        }
                    </div>
                </div>
            </div>

        </div>)
}
export default ResumeEditor;