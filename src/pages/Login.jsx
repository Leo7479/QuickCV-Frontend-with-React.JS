import { ArrowLeftCircleIcon, Eye, EyeOff } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handleLogin, handleSignUp } from "../services/UserAuthentication";
// inside your Login component file (or wherever)
import api, { setAuthToken } from '../services/api';
import { LoadingContext } from "../components/LoadingContext";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { loading, setLoading } = useContext(LoadingContext);
    const [showpassword, setShowPassword] = useState(false);
    const userDetailsFormRef = useRef(null);
    const navigate = useNavigate();
    const handleShowPassword = (e) => {
        if (showpassword)
            setShowPassword(false)
        else
            setShowPassword(true);
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token)
            navigate("/dashboard/dashboard")
        setLoading(false);
    }, []);


    useEffect(() => {
        const parent = userDetailsFormRef.current;
        const forms = parent.children;
        if (isLogin) {
            parent.style.height = forms[1].clientHeight + "px";
        } else {
            parent.style.height = forms[0].clientHeight + "px";
        }
    }, [isLogin]);
    const handleSignUp = async (e) => {
        e.preventDefault();
        const email = document.getElementById('signinemail').value.trim();
        const name = document.getElementById('signinname').value.trim();
        const password = document.getElementById('signinpassword').value;
        const passwordRepeat = document.getElementById('signinpasswordRepeat').value;
        const agreed = document.getElementById('signintermsandconditions').checked;

        if (!agreed) return toast.error('Please accept terms');
        if (password !== passwordRepeat) return toast.error('Passwords do not match');
        if (!email || !name || !password) return toast.error('Please fill all fields');

        try {
            const res = await api.post('/api/auth/register', { name, email, password });
            const { user } = res.data;
            toast.success('Sign up complete!');
            // redirect to dashboard
            navigate('/dashboard');
        } catch (err) {
            const msg = err?.response?.data?.message || 'Sign up failed';
            toast.error(msg);
        }
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginemail').value.trim();
        const password = document.getElementById('loginpassword').value;
        if (!email) return toast.error('Enter email address', { closeOnClick: true });
        if (!password) return toast.error('Enter password', { closeOnClick: true });
        console.log("Sending login request with:", { email, password });
        const toastID = toast.loading("Logging In");
        try {
            const res = await api.post('/api/auth/login', { email, password });
            const { token, user } = res.data;
            setAuthToken(token);
            toast.update(toastID, {
                render: "Logged in Successfully",
                autoClose: 3000,
                type: "success",
                isLoading: false,
                closeOnClick: true
            });
            navigate('/dashboard/dashboard');
            localStorage.setItem("user", JSON.stringify({
                id: user.id,
                name: user.name,
                email: user.email,
                title: "Frontend Developer",
                avatar: "https://cdn-icons-png.flaticon.com/512/4159/4159471.png"
            }));
            localStorage.setItem("token", token);
        } catch (err) {
            const msg = err?.response?.data?.message || 'Login failed';
            toast.update(toastID, {
                render: msg,
                autoClose: 3000,
                type: "error",
                isLoading: false,
                closeOnClick: true
            })
        }
    };
    // to call protected GET /auth/me
    const fetchMe = async () => {
        try {
            const res = await api.get('/auth/me');
            console.log('me', res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="w-screen h-screen grid place-items-center" style={{ backgroundImage: "linear-gradient(100deg, var(--alice-blue), white, var(--alice-blue))" }}>
            <button
                onClick={() => { navigate("/") }}
                className="flex justify-center items-center cursor-pointer gap-x-2 hover:text-white hover:bg-primary transition-all duration-200 absolute top-10 left-10 z-[1] bg-white text-primary px-4 py-2 rounded-lg">
                <ArrowLeftCircleIcon />
                Home
            </button>
            <div className="flex flex-row items-center shadow-xl rounded-xl px-4 py-2 md:px-8 md:py-6 lg:px-14 lg:py-10 bg-white relative">
                <div className={`hidden md:inline-block w-60 h-60 transition-all duration-[700ms] overflow-hidden ${isLogin ? "max-w-60 mr-10" : "max-w-0"}`}>
                    <div className="w-60 h-60">
                        <video src="./pulse-ball.mp4" autoPlay playsInline muted loop disablePictureInPicture aria-disabled />
                    </div>
                </div>
                <div className={` transition-all duration700 px-4 ${isLogin ? "md:border-l-2 md:border-l-solid md:border-l-gray-200" : "md:border-r-2 md:border-r-solid md:border-r-gray-200"}`}>
                    <div className="w-fit h-fit flex flex-row justify-center items-center mb-2 bg-lightDarker p-[5px] rounded-2xl mx-auto">
                        <button
                            onClick={() => { setIsLogin(true) }}
                            className={`transition-all duration-200 text-up-container font-semibold text-lg/[1] px-4 py-2 outline-none rounded-xl ${isLogin ? "bg-white" : ""}`}>
                            <div className="text-up">
                                <span className="text">Login</span>
                                <span className="text">Login</span>
                            </div>
                        </button>
                        <button
                            onClick={() => { setIsLogin(false) }}
                            className={`transition-all duration-200 text-up-container font-semibold text-lg/[1] px-4 py-2 outline-none rounded-xl ${isLogin ? "" : "bg-white"}`}>
                            <div className="text-up">
                                <span className="text">Sign Up</span>
                                <span className="text">Sign Up</span>
                            </div>
                        </button>
                    </div>
                    <div className="overflow-hidden w-[25em] h-fit">
                        <div ref={userDetailsFormRef} className={`transition-all duration-[700ms] flex justify-end items-start w-[25em] h-min ${isLogin ? "" : "translate-x-[100%]"}`}>
                            <div className={`scrollbar-needed overflow-y-auto overflow-x-hidden py-4 w-[25em] h-fit shrink-0 ${isLogin ? "opacity-0" : ""}`}>
                                <div className="px-10 w-[25em] h-fit">
                                    {/* Sign Up Form */}
                                    <form method="POST" action="/login" className="w-full flex flex-col gap-y-4">
                                        <div className="w-full flex flex-col justify-start items-start gap-y-2">
                                            <label htmlFor="signinemail">Email Address<span className="text-red-600 text-[1.5em]/[1] ml-1">*</span></label>
                                            <input type="email" id="signinemail" required placeholder="eg: alason.holster@gmail.com" className="border-2 border-solid border-[#e2e2e2] rounded-md py-2 px-4 text-[1.1em] bg-[#f7f9fc] w-[100%]" />
                                        </div>
                                        <div className="w-full flex flex-col justify-start items-start gap-y-2">
                                            <label htmlFor="signinname">Full Name<span className="text-red-600 text-[1.5em]/[1] ml-1">*</span></label>
                                            <input type="text" id="signinname" required placeholder="eg: Alason Holster" className="border-2 border-solid border-[#e2e2e2] rounded-md py-2 px-4 text-[1.1em] bg-[#f7f9fc] w-[100%]" />
                                        </div>
                                        <div className="w-full flex flex-col justify-start items-start gap-y-2">
                                            <label htmlFor="signinpassword">Password<span className="text-red-600 text-[1.5em]/[1] ml-1">*</span></label>
                                            <input type="password" id="signinpassword" required placeholder="Your Password Here" className="border-2 border-solid border-[#e2e2e2] rounded-md py-2 px-4 text-[1.1em] bg-[#f7f9fc] w-[100%]" />
                                        </div>
                                        <div className="w-full flex flex-col justify-start items-start gap-y-2">
                                            <label htmlFor="signinpasswordRepeat">Repeat Password<span className="text-red-600 text-[1.5em]/[1] ml-1">*</span></label>
                                            <input type="password" id="signinpasswordRepeat" required placeholder="Your Password Here" className="border-2 border-solid border-[#e2e2e2] rounded-md py-2 px-4 text-[1.1em] bg-[#f7f9fc] w-[100%]" />
                                        </div>
                                        <div>
                                            <input type='checkbox' id="signintermsandconditions" className="cursor-pointer" required />
                                            <label htmlFor="signintermsandconditions" className="text-[0.8em] font-normal pl-2 text-center text-lightText cursor-pointer">I hereby agree to the <span className="font-semibold text-primary">Terms and Conditions</span> as mentioned in the documentation and allow QuickCV to collect my data and process it for further needs.<span className="text-red-600 text-[1.5em]/[0.8] ml-1 ml-1">*</span></label>
                                        </div>
                                        <button
                                            onClick={handleSignUp}
                                            className="text-up-container text-primary font-semibold text-lg/[1] px-4 py-2 border-2 border-solid border-primary outline-none rounded-xl before-filler filler-primary hover:text-white">
                                            <div className="text-up">
                                                <span className="text">Sign Up</span>
                                                <span className="text">Sign Up</span>
                                            </div>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className={`scrollbar-needed overflow-y-auto overflow-x-hidden flex flex-col py-4 w-[25em] h-fit shrink-0 ${isLogin ? "" : "opacity-0"}`}>
                                <div className="w-[25em] px-10 h-fit">
                                    {/* Login Form */}
                                    <form className="flex flex-col gap-y-4">
                                        <div className="flex flex-col justify-start items-start gap-y-2">
                                            <label htmlFor="loginemail">Email Address<span className="text-red-600 text-[1.5em]/[1] ml-1">*</span></label>
                                            <input type="email" id="loginemail" required placeholder="eg: alason.holster@gmail.com" className="border-2 border-solid border-[#e2e2e2] rounded-md py-2 px-4 text-[1.1em] bg-[#f7f9fc] w-[100%]" />
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-y-2">
                                            <label htmlFor="loginpassword">Password<span className="text-red-600 text-[1.5em]/[1] ml-1">*</span></label>
                                            <div className="w-full h-fit relative border-2 border-solid border-[#e2e2e2] rounded-xl bg-[#f7f9fc] flex justify-between items-cneter py-2 px-4">
                                                <input onChange={handleShowPassword} type="checkbox" id="showpassword" hidden />
                                                <input type={showpassword ? "text" : "password"} id="loginpassword" required placeholder="Your Password Here" className="bg-transparent outline-none text-[1.1em] w-[80%]" />
                                                <label htmlFor="showpassword" className="cursor-pointer">
                                                    {showpassword ? <Eye strokeWidth={1} /> : <EyeOff strokeWidth={1} />}
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <div className="flex gap-x-[2px] items-center justify-start w-fit">
                                                <input type="checkbox" id="rememberMe" className="cursor-pointer" />
                                                <label htmlFor="rememberMe" className="cursor-pointer">Remember Me</label>
                                            </div>
                                            <Link to="#" className="cursor-pointer">
                                                <span className="font-semibold text-primary">Forgot Password?</span>
                                            </Link>
                                        </div>
                                        <button
                                            onClick={handleLogin}
                                            className="text-up-container text-primary font-semibold text-lg/[1] px-4 py-2 border-2 border-solid border-primary outline-none rounded-xl before-filler filler-primary hover:text-white">
                                            <div className="text-up">
                                                <span className="text">Login</span>
                                                <span className="text">Login</span>
                                            </div>
                                        </button>
                                    </form>
                                    <div className="relative text-lightText w-full h-fit my-2 text-center before:content-[''] before:inline-block before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%] before:w-full before:h-[2px] before:bg-lightText before:z-0"><span className="bg-white relative z-[1] uppercase px-[4px]">or login with</span></div>
                                    <div className="flex flex-col gap-y-[4px]">
                                        <div className="cursor-pointer flex justify-center items-center gap-x-2 h-fit w-full border-2 border-solid border-gray-200 rounded-md bg-gray-50 px-6 py-2">
                                            <img src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0" alt="Google" className="w-[1.5em] aspect-square object-contain" />
                                            <p>Google</p>
                                        </div>
                                        <div className="cursor-pointer flex justify-center items-center gap-x-2 h-fit w-full border-2 border-solid border-gray-200 rounded-md bg-gray-50 px-6 py-2">
                                            <img src="https://logopng.com.br/logos/apple-4.png" alt="Apple" className="w-[1.5em] aspect-square object-contain" />
                                            <p>Apple</p>
                                        </div>
                                        <div className="cursor-pointer flex justify-center items-center gap-x-2 h-fit w-full border-2 border-solid border-gray-200 rounded-md bg-gray-50 px-6 py-2">
                                            <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png" alt="LinkedIn" className="w-[1.5em] aspect-square object-contain" />
                                            <p>LinkedIn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`hidden md:inline-block w-60 h-60 transition-all duration-[700ms] overflow-hidden ${isLogin ? "max-w-0" : "max-w-60 ml-10"}`}>
                    <div className="w-60 h-60">
                        <video src="./rotate-ball.mp4" autoPlay playsInline muted loop disablePictureInPicture aria-disabled />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;