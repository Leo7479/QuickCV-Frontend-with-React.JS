import {
    BriefcaseBusiness,
    ChevronLeft,
    Crown,
    File,
    GraduationCap,
    KeyRound,
    LayoutDashboard,
    LogOut,
    PieChart,
    Settings,
    ShieldCheck,
    TrendingUp,
    UserCheck,
    UserCircle
} from "lucide-react";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DashboardTab from "../components/DashboardTab";
import DocumentTab from "../components/DocumentTab";
import JobSearchTab from "../components/JobSearchTab";
import ATSCheckerTab from "../components/ATSCheckerTab";
import InterviewPrepTab from "../components/InterviewPrepTab";
import SalaryAnalyzerTab from "../components/SalaryAnalyzerTab";
import CoachingTab from "../components/CoachingTab";
import LinkedinOptimizer from "../components/LinkedInOptimizer";
import UserProfile from "../components/UserProfile";
import { toast } from "react-toastify";

const Dashboard = () => {
    const { currentTab } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Define all tabs
    const tabs = [
        {
            name: "Dashboard",
            url: "dashboard",
            icon: <LayoutDashboard strokeWidth={1} className="w-[1em] text-primary group-hover:text-primary" />,
            display: <DashboardTab />
        },
        {
            name: "Your Profile",
            url: "user-profile",
            icon: <UserCircle strokeWidth={1} className="w-[1em] text-primary group-hover:text-primary" />,
            display: <UserProfile />
        },
        {
            name: "Document",
            url: "document",
            icon: <File strokeWidth={1} className="w-[1em] text-primary group-hover:text-primary" />,
            display: <DocumentTab />
        },
        {
            name: "Job Search",
            url: "job-search",
            icon: <BriefcaseBusiness strokeWidth={1} className="w-[1em] text-primary group-hover:text-primary" />,
            display: <JobSearchTab />
        },
        {
            name: "ATS Checker",
            url: "ats-checker",
            icon: <ShieldCheck strokeWidth={1} className="w-[1em] text-primary group-hover:text-primary" />,
            display: <ATSCheckerTab />
        },
        {
            name: "Interview Prep",
            url: "interview-prep",
            icon: <UserCheck strokeWidth={1} className="w-[1em] text-primary group-hover:text-primary" />,
            display: <InterviewPrepTab />
        },
        {
            name: "Salary Analyzer",
            url: "salary-analyzer",
            icon: <PieChart strokeWidth={1} className="w-[1em] text-primary group-hover:text-primary" />,
            display: <SalaryAnalyzerTab />
        },
        {
            name: "Coaching",
            url: "coaching",
            icon: <GraduationCap strokeWidth={1} className="w-[1em] text-primary group-hover:text-primary" />,
            display: <CoachingTab />
        },
        {
            name: "LinkedIn Optimizer",
            url: "linkedin-optimizer",
            icon: <TrendingUp strokeWidth={1} className="w-[1em] text-primary group-hover:text-primary" />,
            display: <LinkedinOptimizer />
        }
    ];
    const allowedMenus = tabs.map(t => t.url);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            navigate("/login", { replace: true });
            return;
        }
        try {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        } catch (e) {
            console.error("Invalid user data in localStorage");
            navigate("/login", { replace: true });
        }
        if (!allowedMenus.includes(currentTab)) {
            navigate("/dashboard/dashboard", { replace: true });
        }
    }, [currentTab, navigate]);

    // Handle sidebar clicks
    const handleSubMenuChange = (e) => {
        navigate("/dashboard/" + e.currentTarget.dataset.value);
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        toast.success("Logged Out Successfully",{
            closeOnClick: true
        });
        navigate("/", { replace: true });
    };

    return (
        <div className="w-full h-screen">
            {/* HEADER */}
            <div className="h-[13%] md:h-[11%] lg:h-[10%] px-8 py-2 flex justify-between items-center border-b-[1px] border-b-solid border-b-gray-200">
                <div
                    className="w-fit h-full flex items-center justify-start cursor-pointer"
                    onClick={() => { navigate("/") }}
                >
                    <img src="/logo.png" alt="" />
                    <h1 className="font-semibold text-2xl text-[#3a3a3a]">QuickCV</h1>
                </div>

                <div className="flex gap-x-4 relative">
                    <div className="flex gap-x-[10px] text-sm font-semibold h-fit px-4 py-[4px] rounded-md bg-dark text-white justify-center items-center cursor-pointer">
                        <Crown strokeWidth={1} fill="#fff" className="w-[1.25em] aspect-square" />
                        Upgrade Now
                    </div>
                    <div className="w-fit h-fit py-[4px] grid place-items-center cursor-pointer relative group">
                        <Settings className="w-[2em] aspect-square" strokeWidth={1} />
                        <div className="hidden group-hover:inline-block z-[10] absolute bottom-0 right-0 translate-y-[100%] bg-white shadow-lg border-2 border-solid border-gray-200 p-6 rounded-b-xl">
                            <ul className="w-full h-fit flex flex-col whitespace-nowrap gap-y-2">
                                <li className="w-full h-fit text-[1.05em] flex gap-x-2 hover:text-primary hover:bg-secondary rounded-md transition-all duration-200 p-2">
                                    <KeyRound strokeWidth={1} />
                                    Change Password
                                </li>
                                <li
                                    onClick={handleLogout}
                                    className="w-full h-fit text-[1.05em] flex gap-x-2 hover:text-primary hover:bg-secondary rounded-md transition-all duration-200 p-2"
                                >
                                    <LogOut strokeWidth={1} />
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* BODY */}
            <div className="grid grid-cols-[15%_85%] grid-rows-1 w-full h-[87%] md:h-[89%] lg:h-[90%]">
                {/* SIDEBAR */}
                <div className="w-full h-full flex flex-col justify-start items-start border-r-[1px] border-r-solid border-r-gray-200 pt-4">
                    <div className="w-full h-fit mb-4 flex flex-row gap-x-2 justify-start items-center px-4 py-2">
                        <div className="overflow-hidden rounded-full border-2 border-solid border-primary w-fit h-fit p-0">
                            <img
                                src={user?.avatar || "https://cdn-icons-png.flaticon.com/512/4159/4159471.png"}
                                alt=""
                                className="w-[35px] aspect-square object-cover"
                            />
                        </div>
                        <div className="w-fit h-fit flex flex-col justify-start itmes-start">
                            <h1 className="text-[1em] text-dark">{user?.name || "Guest User"}</h1>
                            <h3 className="text-[0.9em]/[1] text-lightText">{user?.title || "No Title"}</h3>
                        </div>
                    </div>

                    <div className="w-full h-full px-4 relative group">
                        <div className="absolute right-0 translate-x-[100%] bg-primary text-white p-[5px] rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-200">
                            <ChevronLeft />
                        </div>
                        <ul className="w-full h-fit flex flex-col gap-y-4 relative">
                            {tabs.map(t => (
                                <li
                                    key={t.name}
                                    onClick={handleSubMenuChange}
                                    data-value={t.url}
                                    className={`flex cursor-pointer py-2 px-4 gap-x-2 hover:text-primary group transition-all duration-200 ${t.url === currentTab ? "bg-secondary text-primary" : ""
                                        }`}
                                >
                                    {t.icon}
                                    {t.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* MAIN TAB CONTENT */}
                <div>
                    {tabs.map(t => (
                        t.url === currentTab ? t.display : null
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
