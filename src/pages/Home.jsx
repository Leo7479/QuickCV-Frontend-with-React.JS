import { ArrowBigDownDash, MousePointer, MoveLeft, PackageSearch, Quote, ShieldCheck, Sparkles, Star, Wrench } from "lucide-react";
import Header from "../components/Header.jsx";
import DefaultTemplate from "../templates/DefaultTemplate.jsx";
import ReviewCard from "../components/ReviewCard.jsx";
import { useEffect, useState } from "react";
import GetReviews from "../GetReviews.js";
import Template001 from "../templates/Template001.jsx";
import Template002 from "../templates/Template002.jsx";
import Template003 from "../templates/Template003.jsx";
// import Template004 from "./templates/Template004.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();
    const activateReviews = async () => {
        const reviewsRef = document.querySelectorAll(".reviews");
        const reviewContainerRef = document.getElementById("review-container");
        let index = 0;
        const total = reviewsRef.length / 2;
        try {
            while (true) {
                const element = reviewsRef[index];
                element.classList.add("active-review");
                reviewContainerRef.children[1].style.transform = "translateX(" + (-(index * 400)) + "px";
                element.classList.add("z-[3]");

                await new Promise(resolve => setTimeout(resolve, 2000));

                element.classList.remove("z-[3]");
                element.classList.remove("active-review");

                index = (index + 1) % total;
            }
        } catch (e) { }
    };
    useEffect(() => {
        setReviews(GetReviews());
    }, []);
    useEffect(() => {
        try {
            activateReviews();
        } catch (e) { }
    }, [reviews]);

    return (
        <>
            <Header />
            <main>
                <section id="hero" className="w-full h-[87vh] md:h-[89vh] lg:h-[90vh] bg-aliceBlue grid grid-cols-2 grid-rows-[9fr_1fr] px-10 pt-6">
                    <div className="w-full h-full flex flex-col justify-center items-start gap-y-8">
                        <div className="flex justify-start items-center gap-x-2">
                            <span className="w-2 h-2 rounded-full bg-[#00bb00] animate-blink duration-300"></span>
                            <b>50,032</b> resumes created today
                        </div>
                        <div className="flex flex-col justify-start items-start gap-y-6">
                            <h1 className="text-[1.3rem]/[1] md:text-[2.5rem]/[1] lg:text-[3.3rem]/[1.1] font-bold font-serif text-[#3a3a3a]">The only <span className="text-primary">resume Builder</span> you'll ever need</h1>
                            <p className="text-[#6a6a6a] font-sans font-semibold">The first step to a better job? A better resume. Only 2% of resumes win, and yours will be one of them. Create it now with our free resume builder!</p>
                        </div>
                        <div className="w-full h-fit flex justify-start items-center gap-x-4">
                            <button
                                onClick={() => { navigate("/templates") }}
                                className="text-up-container text-[1.1em]/[0.9] px-6 py-4 bg-primary rounded-xl text-white glow-primary outline-none">
                                <div className="text-up">
                                    <span className="text">Create a New Resume</span>
                                    <span className="text">Create a New Resume</span>
                                </div>
                            </button>
                            <button
                                onClick={() => { navigate("/templates") }}
                                className="text-up-container text-primary bg-white before-filler filler-primary hover:text-white font-semibold text-lg/[0.9] px-8 py-4 border-2 border-solid border-primary rounded-xl outline-none">
                                <div className="text-up">
                                    <span className="text">Improve My Resume</span>
                                    <span className="text">Improve My Resume</span>
                                </div>
                            </button>
                        </div>
                        <div className="w-full h-fit flex items-center justify-start gap-x-2">
                            <div className="w-fit h-full px-4">
                                <div className="bg-bgGreen text-textGreen w-fit h-fit text-[1.5rem]/[1] p-2 rounded-lg">48%</div>
                                <p className="text-[#1a1a1a66] font-semibold">more chance to get hired</p>
                            </div>
                            <div className="w-[1px] h-full bg-[#1a1a1a33]"></div>
                            <div className="w-fit h-full px-4">
                                <div className="bg-bgYellow text-textYellow w-fit h-fit text-[1.5rem]/[1] p-2 rounded-lg">12%</div>
                                <p className="text-[#1a1a1a66] font-semibold">better pay with your next job</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="relative w-[350px] h-[80%]">
                            <DefaultTemplate className="w-full h-full glow-primary text-[0.5rem]/[1] text-black/70" />
                            <div className="absolute top-0 right-0 animate-bounce flex flex-col gap-y-2">
                                <div className="p-2 bg-aliceBlue rounded-lg border-2 border-solid border-glow cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="none" viewBox="0 0 33 32" className="rightSide_innerFormatIcon__ebXf7" data-sentry-element="PdfIcon" data-sentry-source-file="RightSide.tsx"><path fill="#F1F9FE" d="M28.443 9.792v18.04c0 .778-.312 1.526-.867 2.077-.556.55-1.309.86-2.094.86H7.716c-.785 0-1.539-.31-2.094-.86a2.93 2.93 0 0 1-.867-2.078V4.17c0-.78.312-1.527.867-2.078a2.97 2.97 0 0 1 2.094-.86h12.098m8.629 8.56c0-.778-.312-1.525-.868-2.076l-5.667-5.623a2.97 2.97 0 0 0-2.094-.861"></path><path stroke="#2E404A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" d="m16.599 25.872-4.442-4.407m4.442 4.407 4.441-4.407M16.6 25.872v-8.814m11.844-7.266v18.04c0 .778-.312 1.526-.867 2.077-.556.55-1.309.86-2.094.86H7.716c-.785 0-1.539-.31-2.094-.86a2.93 2.93 0 0 1-.867-2.078V4.17c0-.78.312-1.527.867-2.078a2.97 2.97 0 0 1 2.094-.86h12.098c.786 0 1.539.31 2.094.86l5.667 5.624c.556.55.868 1.298.868 2.077"></path><path fill="#FFD2DD" d="M19.655 6.86H2.628A2.12 2.12 0 0 0 .5 8.97v7.033a2.12 2.12 0 0 0 2.128 2.11h17.027a2.12 2.12 0 0 0 2.129-2.11V8.969a2.12 2.12 0 0 0-2.129-2.11"></path><path fill="#FB7E6D" d="M5.166 15.106q-.312 0-.482-.17-.17-.175-.17-.485v-3.713q0-.317.17-.486.177-.168.49-.168h1.745q.851 0 1.312.436.468.429.468 1.188 0 .76-.468 1.196-.461.429-1.312.429h-1.1v1.118q0 .31-.163.486-.163.168-.49.168m.653-2.765h.873q.369 0 .567-.154.2-.162.199-.479 0-.323-.199-.478-.198-.155-.567-.155h-.873zm3.815 2.701q-.333 0-.51-.169-.17-.175-.17-.499v-3.622q0-.324.17-.493.177-.175.51-.175h1.39q1.306 0 2.016.647.716.646.716 1.828 0 .591-.184 1.055-.184.457-.532.781a2.35 2.35 0 0 1-.859.486 3.8 3.8 0 0 1-1.156.161zm.625-1.048h.68q.377 0 .646-.091.277-.091.454-.268.184-.175.27-.443.093-.267.092-.633 0-.73-.361-1.076-.363-.351-1.1-.351h-.681zm4.577 1.111q-.312 0-.49-.168-.17-.176-.17-.5v-3.685q0-.324.17-.493.178-.175.511-.175h2.363q.255 0 .383.126.127.126.127.366 0 .245-.127.38-.128.126-.384.126h-1.738v.999h1.582q.248 0 .377.127.135.126.134.365 0 .247-.135.373-.127.127-.376.127h-1.582v1.364q0 .668-.645.668"></path></svg>
                                </div>
                                <div className="p-2 bg-aliceBlue rounded-lg border-2 border-solid border-glow cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="none" viewBox="0 0 33 32" className="rightSide_innerFormatIcon__ebXf7" data-sentry-element="DocxIcon" data-sentry-source-file="RightSide.tsx"><path fill="#EDF9FF" d="M29.797 9.435v18.039c0 .779-.325 1.526-.902 2.077s-1.36.86-2.177.86H8.248c-.817 0-1.6-.309-2.177-.86a2.87 2.87 0 0 1-.902-2.077V3.81c0-.779.324-1.526.902-2.077a3.16 3.16 0 0 1 2.176-.86h12.58m8.97 8.56c0-.779-.325-1.526-.902-2.077l-5.892-5.623a3.16 3.16 0 0 0-2.177-.86"></path><path stroke="#2E404A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" d="m17.483 25.515-4.618-4.407m4.618 4.407 4.618-4.407m-4.618 4.407V16.7m12.314-7.267v18.04c0 .779-.325 1.526-.902 2.077s-1.36.86-2.177.86H8.248c-.817 0-1.6-.309-2.177-.86a2.87 2.87 0 0 1-.902-2.077V3.81c0-.779.324-1.526.902-2.077a3.16 3.16 0 0 1 2.176-.86h12.58c.815 0 1.598.31 2.176.86l5.892 5.623c.577.551.902 1.298.902 2.077"></path><path fill="#BDE7FF" d="M21.117 6.921H3.007A2.256 2.256 0 0 0 .743 9.17v7.494a2.256 2.256 0 0 0 2.264 2.249h18.11a2.256 2.256 0 0 0 2.264-2.249V9.17a2.256 2.256 0 0 0-2.264-2.249"></path><path fill="#05A2FF" d="M17.8 15.168q-.828 0-1.423-.317a2.2 2.2 0 0 1-.914-.893q-.312-.577-.312-1.35 0-.577.177-1.049.185-.47.524-.808.348-.339.836-.514.495-.183 1.112-.183.326 0 .673.078.354.07.623.218.198.105.276.267a.54.54 0 0 1 .05.33.63.63 0 0 1-.12.303.5.5 0 0 1-.255.183.48.48 0 0 1-.34-.05 2.2 2.2 0 0 0-.425-.147 1.6 1.6 0 0 0-.432-.056q-.44 0-.737.168-.29.162-.439.479t-.149.78.149.788q.149.316.439.486.297.162.737.162.184 0 .396-.043a2 2 0 0 0 .418-.147.58.58 0 0 1 .375-.05.48.48 0 0 1 .27.17q.105.126.134.295a.52.52 0 0 1-.05.323.55.55 0 0 1-.254.26q-.249.148-.616.232-.361.085-.723.085M12.321 15.168q-.757 0-1.33-.317a2.3 2.3 0 0 1-.893-.9q-.312-.576-.312-1.344 0-.576.177-1.047.184-.472.517-.81a2.3 2.3 0 0 1 .807-.513 2.8 2.8 0 0 1 1.034-.183q.759 0 1.325.317.573.316.892.893.32.57.319 1.344 0 .576-.184 1.048-.177.471-.517.816a2.3 2.3 0 0 1-.8.52 2.9 2.9 0 0 1-1.035.176m0-1.083q.375 0 .638-.176.263-.175.404-.507.141-.33.141-.794 0-.697-.311-1.084t-.872-.387q-.367 0-.637.176-.263.17-.403.5a2 2 0 0 0-.142.794q0 .697.311 1.09.312.388.871.388M5.386 15.09q-.333 0-.51-.169-.17-.175-.17-.5V10.8q0-.323.17-.492.177-.176.51-.176h1.388q1.304 0 2.011.647.716.647.716 1.83 0 .59-.184 1.054-.184.457-.532.781a2.35 2.35 0 0 1-.857.485q-.503.162-1.154.162zm.623-1.048h.68q.375 0 .645-.091.276-.091.453-.268.184-.176.269-.443.092-.268.092-.633 0-.732-.361-1.076-.361-.352-1.098-.352h-.68z"></path></svg>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-x-[2px] absolute top-[75%] left-0 -translate-y-[50%] -translate-x-[50%] shadow-lg px-2 py-[4px] bg-bgGreen text-textGreen border-2 border-solid backdrop-blur-xl rounded-md text-[0.7rem] font-semibold">
                                <ShieldCheck width={20} />
                                <p>ATS Perfect</p>
                            </div>
                            <div className="w-fit h-[35px] bg-white rounded-lg shadow-lg flex justify-center items-center gap-x-[5px] flex-row p-2 absolute top-[50%] left-0 -translate-y-[50%] -translate-x-[30%]">
                                <div className="h-[20px] w-[20px] rounded-full bg-red-600"></div>
                                <div className="h-[20px] w-[20px] rounded-full bg-green-600"></div>
                                <div className="h-[20px] w-[20px] rounded-full bg-blue-600"></div>
                                <div className="h-[20px] w-[20px] rounded-full bg-yellow-600"></div>
                                <div className="h-[20px] w-[20px] rounded-full bg-pink-600"></div>
                            </div>
                            <div className="text-[0.8em]/[1] bg-white rounded-lg w-[55%] h-fit p-2 absolute bottom-0 right-0 translate-y-[30%] translate-x-[30%] shadow-md">
                                <h1 className="flex justify-start items-center mb-2 gap-x-2 font-semibold"><Sparkles width={16} color="var(--primary)" fill="var(--primary)" />AI Powered Ideas</h1>
                                <div className="flex flex-col gap-y-[4px]">
                                    <div className="flex gap-x-[4px] bg-[#0000ff09] text-primary p-[4px] rounded-md">
                                        <div className="bg-primary rounded-full w-fit h-fit p-[2px] text-white">
                                            <MoveLeft width={15} height={15} />
                                        </div>
                                        <p className="text-[0.8em]/[1.3]">Analyzed Market trends to identify new growth opportunities</p>
                                    </div>
                                    <div className="flex gap-x-[4px] bg-[#0000ff09] text-primary p-[4px] rounded-md">
                                        <div className="bg-primary rounded-full w-fit h-fit p-[2px] text-white">
                                            <MoveLeft width={15} height={15} />
                                        </div>
                                        <p className="text-[0.8em]/[1.3]">Analyzed Market trends to identify new growth opportunities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 w-full h-full flex items-center justify-center flex-col md:flex-row gap-y-4 md:gap-x-4">
                        <h1 className="w-fit flex-none shrink-0 whitespace-nowrap">Our Customers are hired at:</h1>
                        <div className="flex justify-start items-center overflow-hidden w-[80%] marque relative">
                            <div className="absolute top-0 left-0 w-full h-full z-[1]" style={{backgroundImage:"linear-gradient(to right, var(--alice-blue), transparent 20% 80%, var(--alice-blue))"}}></div>
                            <div className="w-fit flex justify-center md:justify-start items-center gap-x-4 marque-elements">
                                <div className="w-[100px] h-[40px] aspect-square"><img className="object-contain w-full h-full" src="./google.png" alt="" /></div>
                                <div className="w-[100px] h-[70px] aspect-square"><img className="object-contain w-full h-full" src="./facebook.png" alt="" /></div>
                                <div className="w-[100px] h-[70px] aspect-square"><img className="object-contain w-full h-full" src="./amazon.png" alt="" /></div>
                                <div className="w-[100px] h-[70px] aspect-square"><img className="object-contain w-full h-full" src="./spotify.png" alt="" /></div>
                                <div className="w-[100px] h-[50px] aspect-square"><img className="object-contain w-full h-full" src="./apple.png" alt="" /></div>
                                <div className="w-[100px] h-[70px] aspect-square"><img className="object-contain w-full h-full" src="./microsoft.png" alt="" /></div>
                                <div className="w-[100px] h-[70px] aspect-square"><img className="object-contain w-full h-full" src="./dhl.png" alt="" /></div>
                                <div className="w-[100px] h-[30px] aspect-square"><img className="object-contain w-full h-full" src="./sbi.png" alt="" /></div>
                                <div className="w-[100px] h-[30px] aspect-square"><img className="object-contain w-full h-full" src="./goldman-sachs.png" alt="" /></div>
                                <div className="w-[100px] h-[70px] aspect-square"><img className="object-contain w-full h-full" src="./american-express.png" alt="" /></div>
                            </div>
                            <div className="w-fit flex justify-center md:justify-start items-center gap-x-4 marque-elements">
                                <div className="w-[100px] h-[40px] aspect-square"><img className="object-contain w-full h-full" src="./google.png" alt="" /></div>
                                <div className="w-[100px] h-[70px] aspect-square"><img className="object-contain w-full h-full" src="./facebook.png" alt="" /></div>
                                <div className="w-[100px] h-[70px] aspect-square"><img className="object-contain w-full h-full" src="./amazon.png" alt="" /></div>
                                <div className="w-[100px] h-[70px] aspect-square"><img className="object-contain w-full h-full" src="./spotify.png" alt="" /></div>
                                <div className="w-[100px] h-[50px] aspect-square"><img className="object-contain w-full h-full" src="./apple.png" alt="" /></div>
                                <div className="w-[100px] h-[70px] aspect-square"><img className="object-contain w-full h-full" src="./microsoft.png" alt="" /></div>
                                <div className="w-[100px] h-[70px] aspect-square"><img className="object-contain w-full h-full" src="./dhl.png" alt="" /></div>
                                <div className="w-[100px] h-[30px] aspect-square"><img className="object-contain w-full h-full" src="./sbi.png" alt="" /></div>
                                <div className="w-[100px] h-[30px] aspect-square"><img className="object-contain w-full h-full" src="./goldman-sachs.png" alt="" /></div>
                                <div className="w-[100px] h-[70px] aspect-square"><img className="object-contain w-full h-full" src="./american-express.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full h-fit pt-14">
                    <div className="w-[75%] max-w-[1200px] h-[80px] flex justify-between items-center m-auto bg-aliceBlue px-8 py-2 rounded-lg overflow-hidden">
                        <div className="relative w-[90px] h-[50px]">
                            <img src="./template-pic.webp" alt="" className="absolute right-0 top-0 w-[80px] rotate-[15deg] z-[1]" />
                            <img src="./template-pic.webp" alt="" className="absolute left-0 top-0 w-[80px] -rotate-[15deg]" />
                        </div>
                        <div className="text-[1.5em] flex justify-center items-center gap-x-2"><span className="p-2 bg-glow text-primary rounded-lg animate-shine font-serif font-semibold"><p className="relative z-[1]">1209</p></span> people are creating their resumes with QuickCV right now!</div>
                        <button
                            onClick={() => { navigate("/templates") }}
                            className="text-up-container text-[1.1em]/[1] bg-primary px-4 py-2 rounded-xl text-white">
                            <div className="text-up">
                                <span className="text">Create My Resume</span>
                                <span className="text">Create My Resume</span>
                            </div>
                        </button>
                    </div>
                </section>
                <section className="w-full h-fit mt-10">
                    <div className="w-full h-[100vh] px-2 md:px-4 xl:px-8 flex justify-center items-center gap-x-20">
                        <div className="relative h-full bg-aliceBlue rounded-lg shadow-lg w-full md:w-[55%] xl:w-[40%] overflow-hidden grid place-items-center">
                            <div className="w-full h-fit relative grid place-items-center">
                                <div className="w-fit overflow-visible absolute -top-[20%] left-[5%]"><img src="./template-pic2.webp" alt="" className="w-[10em] max-w-none relative z-[0] shadow-xl rounded-lg" /></div>
                                <div className="w-fit overflow-visible relative"><img src="./template-pic3.webp" alt="" className="w-[17em] max-w-none relative z-[2] shadow-xl border-2 border-dashed border-black rounded-lg" /></div>
                                <div className="w-fit overflow-visible absolute -bottom-[20%] right-[5%]"><img src="./template-pic4.webp" alt="" className="w-[14em] max-w-none relative z-[1] shadow-xl rounded-lg" /></div>
                                <div className="w-[10em] gap-x-2 h-fit rounded-2xl relative -top-[50%] cursor-pointer bg-dark text-white shadow-xl flex justify-center items-center px-4 py-2 z-[2]"><MousePointer fill="#ffdf00" color="#ffdf00" width={15} className="shrink-0" /> Get the Job 2x faster!</div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start w-full md:w-[40%] lg:w-[50%]">
                            <h1 className="text-[1.5rem]/[1] md:text-[2.3rem]/[1] lg:text-[3rem]/[1] flex flex-col font-bold font-serif">Build your job-winning <span className="text-primary">resume in 3 simple steps</span></h1>
                            <div className="relative w-full h-fit flex flex-col justify-start items-start gap-y-8 my-10">
                                <div className="w-[1px] h-full bg-black/20 absolute left-[30px] top-0"></div>
                                <div className="flex flex-row gap-x-4 relative">
                                    <div className="p-2 rounded-full w-[60px] h-[50px] bg-aliceBlue shrink-0">
                                        <PackageSearch strokeWidth={1} className="w-full h-full" />
                                    </div>
                                    <div className="flex flex-col justify-center items-start gap-y-[5px]">
                                        <h3 className="w-full h-fit text-[0.9em] text-lightText">Step 1</h3>
                                        <h1 className="w-full h-fit text-[1.2em] font-semibold text-dark">Choose a Stylish Builder in our template</h1>
                                        <p className="w-full h-fit text-[1em] font-normal text-lightText">Select one of the recruiter-approved templates designed specifically to always make it past the screening stage.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-x-4 relative">
                                    <div className="p-2 rounded-full w-[60px] h-[50px] bg-aliceBlue shrink-0">
                                        <Wrench strokeWidth={1} className="w-full h-full" />
                                    </div>
                                    <div className="flex flex-col justify-center items-start gap-y-[5px]">
                                        <h3 className="w-full h-fit text-[0.9em] text-lightText">Step 2</h3>
                                        <h1 className="w-full h-fit text-[1.2em] font-semibold text-dark">Customize each section</h1>
                                        <p className="w-full h-fit text-[1em] font-normal text-lightText">Add details about your experience, education, and skills with one click. Need more sections? We’ve got plenty.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-x-4 relative">
                                    <div className="p-2 rounded-full w-[60px] h-[50px] bg-aliceBlue shrink-0">
                                        <ArrowBigDownDash strokeWidth={1} className="w-full h-full" />
                                    </div>
                                    <div className="flex flex-col justify-center items-start gap-y-[5px]">
                                        <h3 className="w-full h-fit text-[0.9em] text-lightText">Step 3</h3>
                                        <h1 className="w-full h-fit text-[1.2em] font-semibold text-dark">Download your resume in seconds</h1>
                                        <p className="w-full h-fit text-[1em] font-normal text-lightText">You’ve saved hours on resume creation—now use that extra time to prepare for job interviews and shine on them.</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => { navigate("/templates") }}
                                className="text-up-container px-6 py-4 rounded-xl bg-primary text-white font-medium">
                                <div className="text-up text-[1.1rem]/[1]">
                                    <span className="text">Create my resume</span>
                                    <span className="text">Create my resume</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="w-full h-fit mt-10 flex justify-center">
                    <div className="relative w-full h-fit text-white p-8 flex flex-col justify-center items-center bg-dark">
                        <div className="absolute w-full h-full left-[50%] -translate-x-[50%]" style={{ backgroundImage: "radial-gradient(at 50% 150%,#05a2ff77 1px, transparent 70%" }}>
                        </div>
                        <div className="w-full h-full relative flex flex-col justify-center items-center gap-y-4">
                            <h1 className="text-[1.3em]/[1] md:text-[2.5em]/[1] font-semibold font-serif">Choose your resume template, AI will do the rest</h1>
                            <p className="text-md text-white/80">With BetterCV’s AI resume generator, you’ll get a professional, typo-free, and ATS-friendly resume ready in no time. Explore 40+ modern templates.</p>
                            <button
                                onClick={() => { navigate("/templates") }}
                                className="text-up-container px-6 py-4 rounded-xl bg-white text-primary font-medium before-filler filler-primary hover:text-white">
                                <div className="text-up text-[1.1rem]/[1]">
                                    <span className="text">View all templates</span>
                                    <span className="text">View all templates</span>
                                </div>
                            </button>
                            <div className="w-[90%] max-w-fit h-fit flex gap-x-4 mt-8 templates-container">
                                <div className="w-fit h-fit template-container">
                                    <DefaultTemplate className="template w-[100px] h-[400px] text-[0.5rem]/[1] text-black/70" />
                                    <div className="flex justify-center items-center hover-container">
                                        <button className="text-up-container bg-white before-filler filler-primary hover:text-white text-primary font-semibold text-lg/[0.9] px-8 py-4 border-2 border-solid border-primary rounded-xl outline-none">
                                            <div className="text-up">
                                                <span className="text">Use This Template</span>
                                                <span className="text">Use This Template</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-fit h-fit template-container">
                                    <Template001 className="template w-[100px] h-[400px] text-[0.5rem]/[1] text-black/70" />
                                    <div className="flex justify-center items-center hover-container">
                                        <button className="text-up-container bg-white before-filler filler-primary hover:text-white text-primary font-semibold text-lg/[0.9] px-8 py-4 border-2 border-solid border-primary rounded-xl outline-none">
                                            <div className="text-up">
                                                <span className="text">Use This Template</span>
                                                <span className="text">Use This Template</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-fit h-fit template-container">
                                    <Template002 className="template w-[100px] h-[400px] text-[0.5rem]/[1] text-black/70" />
                                    <div className="flex justify-center items-center hover-container">
                                        <button className="text-up-container bg-white before-filler filler-primary hover:text-white text-primary font-semibold text-lg/[0.9] px-8 py-4 border-2 border-solid border-primary rounded-xl outline-none">
                                            <div className="text-up">
                                                <span className="text">Use This Template</span>
                                                <span className="text">Use This Template</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-fit h-fit template-container">
                                    <Template003 className="template w-[100px] h-[400px] text-[0.5rem]/[1] text-black/70" />
                                    <div className="flex justify-center items-center hover-container">
                                        <button className="text-up-container bg-white before-filler filler-primary hover:text-white text-primary font-semibold text-lg/[0.9] px-8 py-4 border-2 border-solid border-primary rounded-xl outline-none">
                                            <div className="text-up">
                                                <span className="text">Use This Template</span>
                                                <span className="text">Use This Template</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                {/* <Template004 className="template w-[100px] h-[400px] text-[0.5rem]/[1] text-black/70" /> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full h-fit bg-aliceBlue mt-20 py-10 px-6 flex flex-col justify-start items-center">
                    <h1 className="text-[1.3rem]/[1] md:text-[2.3rem]/[1] lg:text-[3rem]/[1] font-serif font-bold text-dark text-center">What our customers are <span>saying about us</span></h1>
                    <div className="w-full flex flex-row gap-x-2 mt-8 justify-around items-center">
                        <div className="w-[30%] h-fit flex flex-col gap-y-6">
                            <div className="flex flex-col justify-start items-center gap-y-2">
                                <h1 className="text-[1.5rem]/[1] font-sm text-dark">4.5 out of 5</h1>
                                <span className="flex gap-x-[4px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" className="relative" data-sentry-element="IconTrustpilotSquare" data-sentry-source-file="Trustpilot.tsx"><path fill="#00B67A" d="M20.47 0H.59v21.38h19.88z"></path><path fill="#fff" d="m10.53 14.4 3.02-.82 1.27 4.19-4.29-3.36ZM17.5 9h-5.32l-1.64-5.4L8.9 9H3.57l4.31 3.34-1.63 5.38 4.3-3.34 2.65-2.04z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" className="relative" data-sentry-element="IconTrustpilotSquare" data-sentry-source-file="Trustpilot.tsx"><path fill="#00B67A" d="M20.47 0H.59v21.38h19.88z"></path><path fill="#fff" d="m10.53 14.4 3.02-.82 1.27 4.19-4.29-3.36ZM17.5 9h-5.32l-1.64-5.4L8.9 9H3.57l4.31 3.34-1.63 5.38 4.3-3.34 2.65-2.04z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" className="relative" data-sentry-element="IconTrustpilotSquare" data-sentry-source-file="Trustpilot.tsx"><path fill="#00B67A" d="M20.47 0H.59v21.38h19.88z"></path><path fill="#fff" d="m10.53 14.4 3.02-.82 1.27 4.19-4.29-3.36ZM17.5 9h-5.32l-1.64-5.4L8.9 9H3.57l4.31 3.34-1.63 5.38 4.3-3.34 2.65-2.04z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" className="relative" data-sentry-element="IconTrustpilotSquare" data-sentry-source-file="Trustpilot.tsx"><path fill="#00B67A" d="M20.47 0H.59v21.38h19.88z"></path><path fill="#fff" d="m10.53 14.4 3.02-.82 1.27 4.19-4.29-3.36ZM17.5 9h-5.32l-1.64-5.4L8.9 9H3.57l4.31 3.34-1.63 5.38 4.3-3.34 2.65-2.04z"></path></svg>
                                    <div className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" className="absolute top-0 left-0" data-sentry-element="IconTrustpilotSquare" data-sentry-source-file="Trustpilot.tsx"><path fill="var(--light-text)" d="M20.47 0H.59v21.38h19.88z"></path><path fill="#fff" d="m10.53 14.4 3.02-.82 1.27 4.19-4.29-3.36ZM17.5 9h-5.32l-1.64-5.4L8.9 9H3.57l4.31 3.34-1.63 5.38 4.3-3.34 2.65-2.04z"></path></svg>
                                        <div className="w-[50%] h-full overflow-hidden relative z-[1]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" className="relative" data-sentry-element="IconTrustpilotSquare" data-sentry-source-file="Trustpilot.tsx"><path fill="#00B67A" d="M20.47 0H.59v21.38h19.88z"></path><path fill="#fff" d="m10.53 14.4 3.02-.82 1.27 4.19-4.29-3.36ZM17.5 9h-5.32l-1.64-5.4L8.9 9H3.57l4.31 3.34-1.63 5.38 4.3-3.34 2.65-2.04z"></path></svg>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 98 24" className="w-[100px]" data-sentry-element="IconTrustpilot" data-sentry-source-file="Trustpilot.tsx"><path fill="#000" d="M25.573 8.66h9.843v1.848h-3.875v10.379h-2.125V10.508h-3.86l.017-1.849Zm9.422 3.372h1.816v1.72h.032c.173-.524.5-.982.94-1.314.228-.195.487-.357.78-.47a2.3 2.3 0 0 1 .859-.163h.47l.26.033v1.88l-.422-.064-.422-.032a2.24 2.24 0 0 0-1.686.762c-.227.28-.403.599-.52.94-.129.39-.194.811-.194 1.298v4.216h-1.946zm14.075 8.855h-1.913v-1.233h-.033c-.243.454-.6.795-1.07 1.07a2.8 2.8 0 0 1-1.443.406c-1.151 0-1.995-.276-2.514-.86-.519-.567-.778-1.46-.778-2.594v-5.66h1.946v5.433c0 .778.146 1.33.454 1.654.292.324.713.486 1.249.486q.607 0 1.021-.194c.276-.13.503-.292.665-.52.178-.21.292-.47.373-.762a3.6 3.6 0 0 0 .114-.956v-5.125h1.946v8.855zm3.308-2.838c.065.567.276.973.649 1.216.373.227.827.324 1.346.324.429-.004.855-.07 1.265-.194.2-.075.373-.204.503-.373a.83.83 0 0 0 .178-.6.88.88 0 0 0-.276-.617c-.178-.162-.389-.275-.648-.389a5.6 5.6 0 0 0-.909-.243l-1.037-.227a11 11 0 0 1-1.054-.292 2.7 2.7 0 0 1-.909-.486 1.8 1.8 0 0 1-.632-.746c-.162-.309-.243-.65-.243-1.12 0-.486.113-.875.357-1.2.233-.324.538-.59.891-.778.357-.21.763-.357 1.2-.438a6.8 6.8 0 0 1 2.546.033c.406.097.795.26 1.12.486.34.211.615.487.826.844.227.324.357.762.422 1.248h-2.027c-.097-.47-.308-.778-.633-.94a2.6 2.6 0 0 0-1.15-.26 2.9 2.9 0 0 0-1.022.162 1.3 1.3 0 0 0-.422.276.65.65 0 0 0-.178.487c0 .227.08.405.243.55.162.163.373.26.648.374a6 6 0 0 0 .908.243l1.055.243c.356.082.697.163 1.037.292a2.84 2.84 0 0 1 1.557 1.2c.17.337.254.71.243 1.087 0 .519-.113.973-.356 1.346-.241.36-.556.664-.925.892-.373.227-.81.389-1.264.502-.96.24-1.965.229-2.92-.032a3.9 3.9 0 0 1-1.232-.568 2.7 2.7 0 0 1-.81-.973 3.15 3.15 0 0 1-.325-1.362h1.962v.016h.016zm6.406-6h1.476V9.357h1.945V12h1.752v1.46h-1.752v4.718l.033.535c.016.163.065.292.113.39.07.1.165.178.276.227.13.048.292.08.519.08l.405-.015.406-.065v1.508l-.633.065c-.21.032-.405.032-.632.032-.519 0-.924-.048-1.233-.146a1.8 1.8 0 0 1-.73-.422 1.5 1.5 0 0 1-.356-.697 5.5 5.5 0 0 1-.113-.973v-5.221h-1.476V12zm6.535 0h1.832v1.2h.033a2.52 2.52 0 0 1 1.135-1.12c.486-.226 1.005-.324 1.59-.324.696 0 1.296.098 1.815.373.502.227.942.572 1.281 1.006.352.441.61.948.763 1.492a6.7 6.7 0 0 1 .032 3.567c-.162.535-.39 1.054-.697 1.46a3.45 3.45 0 0 1-2.87 1.427 4.9 4.9 0 0 1-1.655-.325 2.9 2.9 0 0 1-1.264-1.054h-.033v4.411h-1.946v-12.13h-.016zm6.794 4.427a4 4 0 0 0-.632-2.157 2.6 2.6 0 0 0-.762-.697 2.06 2.06 0 0 0-1.054-.26c-.81 0-1.427.276-1.849.843a3.88 3.88 0 0 0-.616 2.27c0 .47.049.876.162 1.25.096.353.262.683.487.972.21.276.47.487.778.649s.649.26 1.054.26c.454 0 .81-.098 1.119-.276s.551-.438.762-.714c.195-.292.34-.616.422-.973a6 6 0 0 0 .13-1.167Zm3.422-7.817h1.946v1.85h-1.946zm0 3.373h1.946v8.855h-1.946zm3.681-3.373h1.946v12.228h-1.946zm7.881 12.487a4.6 4.6 0 0 1-1.88-.373c-.526-.227-1-.558-1.395-.973a4.2 4.2 0 0 1-.86-1.46 5.82 5.82 0 0 1 0-3.73 3.9 3.9 0 0 1 2.254-2.432c.552-.26 1.184-.389 1.881-.389s1.33.114 1.881.357a4.3 4.3 0 0 1 1.395.973c.373.405.665.908.86 1.476a5.72 5.72 0 0 1 0 3.73 3.9 3.9 0 0 1-2.255 2.432 4.9 4.9 0 0 1-1.88.373v.016Zm0-1.557a2.24 2.24 0 0 0 1.898-1.005 3.1 3.1 0 0 0 .454-.973 4.5 4.5 0 0 0 0-2.27 2.9 2.9 0 0 0-.454-1.006 2.27 2.27 0 0 0-1.898-.973 2.24 2.24 0 0 0-1.897.973 2.9 2.9 0 0 0-.454.99 4.46 4.46 0 0 0 0 2.27c.088.355.242.69.454.989.21.292.47.551.778.73.34.194.728.289 1.12.275Zm5.027-7.557H93.6v-2.66h1.946V12h1.751v1.46h-1.751v4.718l.032.535c.017.163.065.292.114.39a.65.65 0 0 0 .276.227c.13.048.291.08.519.08l.405-.015.405-.065v1.508l-.632.065c-.211.032-.406.032-.633.032-.519 0-.924-.048-1.232-.146a1.8 1.8 0 0 1-.73-.422 1.5 1.5 0 0 1-.356-.697 5.5 5.5 0 0 1-.114-.973v-5.221h-1.476V12z"></path><path fill="#00B67A" d="M23.303 8.66H14.4L11.66.161 8.902 8.66H0l7.2 5.255-2.757 8.497 7.2-5.254 7.2 5.254-2.74-8.498z"></path><path fill="#005128" d="m16.72 15.843-.617-1.93-4.443 3.244z"></path></svg>
                                </div>
                                <p className="text-md text-lightText font-light">Based on 3,112 reviews</p>
                            </div>
                        </div>
                        <div id="review-container" className="w-full h-[400px] md:w-[65%] max-w-[700px] flex items-center pl-[150px] overflow-x-auto bg-white relative" >
                            <div className="w-full h-full absolute top-0 left-0 z-[5] inset-0" style={{ backgroundImage: "linear-gradient(to right, var(--alice-blue), transparent 10% 90%, var(--alice-blue))" }}></div>
                            <div className="w-fit h-fit flex items-center relative shrink-0 transition-all duration-[100]">
                                {
                                    reviews.map((r, idx) => {
                                        return <ReviewCard key={idx} {...r} extraClass="reviews" />
                                    })
                                }
                                {
                                    reviews.map((r, idx) => {
                                        return <ReviewCard key={idx} {...r} extraClass="reviews" />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full h-fit mt-10 flex justify-center">
                    <div className="relative max-w-[1000px] w-[75%] h-fit text-white rounded-2xl p-8 flex flex-col justify-center items-center bg-dark">
                        <div className="absolute w-full h-full left-[50%] -translate-x-[50%]" style={{ backgroundImage: "radial-gradient(at 50% 150%,#05a2ff77 1px, transparent 70%" }}>
                        </div>
                        <div className="absolute w-full h-full" style={{ backgroundImage: "url(./landing-banner.webp", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                        <div className="w-full h-full relative flex flex-col justify-center items-center gap-y-4">
                            <h1 className="text-[1.3em]/[1] md:text-[2.5em]/[1] font-semibold font-serif">Get noticed, get hired faster</h1>
                            <p className="text-xl text-white/80">If you want a better job, start with a standout resume. Create yours now to get a step closer to your next big opportunity.</p>
                            <button
                                onClick={() => { navigate("/templates") }}
                                className="text-up-container px-6 py-4 rounded-xl bg-white text-primary font-medium before-filler filler-primary hover:text-white">
                                <div className="text-up text-[1.1rem]/[1]">
                                    <span className="text">Land your dream job now</span>
                                    <span className="text">Land your dream job now</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="w-full h-fit flex flex-col justify-center items-center mt-10">
                    <h1 className="w-full h-fit text-[1.3em]/[1] md:text-[2.5em]/[1] font-serif text-center text-primary mb-10">Frequently Asked Questions</h1>
                    <div className="w-full max-w-[1000px] bg-white rounded-2xl divide-y divide-gray-200">
                        <div className="p-4">
                            <input type="checkbox" id="faq1" className="peer hidden" />
                            <label htmlFor="faq1" className="flex justify-between items-center cursor-pointer select-none">
                                <span className="text-[1.1em] md:text-[1.4em]/[1] font-semibold text-gray-800 font-serif">What is BetterCV?</span>
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 peer-checked:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out peer-checked:max-h-40">
                                <p className="mt-4 text-gray-600 text-[1.05em] md:text-[1.25em]">
                                    BetterCV is an online resume builder that helps you create a professional, ATS-friendly resume in just minutes. You’ll get structured templates, AI writing support, and tools that help your resume get noticed by employers.
                                </p>
                            </div>
                        </div>

                        <div className="p-4">
                            <input type="checkbox" id="faq2" className="peer hidden" />
                            <label htmlFor="faq2" className="flex justify-between items-center cursor-pointer select-none">
                                <span className="text-[1.1em] md:text-[1.4em]/[1] font-semibold text-gray-800 font-serif">Do I need any design or writing experience?</span>
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 peer-checked:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out peer-checked:max-h-40">
                                <p className="mt-4 text-gray-600 text-[1.05em] md:text-[1.25em]">
                                    Not at all. BetterCV guides you step-by-step with intuitive tools and smart suggestions. You don’t need design skills or writing expertise. Fill in your details, and we’ll help with the rest.
                                </p>
                            </div>
                        </div>

                        <div className="p-4">
                            <input type="checkbox" id="faq3" className="peer hidden" />
                            <label htmlFor="faq3" className="flex justify-between items-center cursor-pointer select-none">
                                <span className="text-[1.1em] md:text-[1.4em]/[1] font-semibold text-gray-800 font-serif">What does ATS-friendly mean?</span>
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 peer-checked:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out peer-checked:max-h-40">
                                <p className="mt-4 text-gray-600 text-[1.05em] md:text-[1.25em]">
                                    ATS stands for Applicant Tracking Systems. It’s software that many companies use to scan resumes before a recruiter sees them. An ATS-friendly resume is formatted so the system can read your experience correctly and pass it on to a recruiter.
                                </p>
                            </div>
                        </div>
                        <div className="p-4">
                            <input type="checkbox" id="faq3" className="peer hidden" />
                            <label htmlFor="faq3" className="flex justify-between items-center cursor-pointer select-none">
                                <span className="text-[1.1em] md:text-[1.4em]/[1] font-semibold text-gray-800 font-serif">Why do I need an ATS-friendly resume?</span>
                                <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 peer-checked:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </label>
                            <div className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out peer-checked:max-h-40">
                                <p className="mt-4 text-gray-600 text-[1.05em] md:text-[1.25em]">
                                    If your resume isn’t optimized for ATS, it might not reach the recruiter. BetterCV helps ensure your resume gets past ATS scans and into the hands of hiring managers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
export default Home;