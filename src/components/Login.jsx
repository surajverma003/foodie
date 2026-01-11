import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import myContext from '../context/myContext';
import account from '../appwrite/appWrieConfig';

const Login = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { setUser, Toaster, googleAuth, githubAuth, successFunc, errorFunc, popup, setPopup } = context;

    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const [togglePassword, setTogglePassword] = useState(false);
    const [forgotEmail, setForgotEmail] = useState("");

    const togglePass = () => setTogglePassword(!togglePassword);

    const onchange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    // Change Password
    const forgotPassword = async (e) => {
        e.preventDefault();

        try {
            const redirectUrl = "http://localhost:3000/foodie#/reset-password";
            const response = await account.createRecovery(forgotEmail, redirectUrl);
            if (response) {
                successFunc("Email sent successfully.");
                e.target.reset();
            }
        } catch (error) {
            console.error(error.message);
             errorFunc(error.message.split(":")[1]?.trim() || error.message);
        }
    };

    // Login User
    const loginUser = async (e) => {
        e.preventDefault();

        try {
            await account.createEmailPasswordSession(userInfo.email, userInfo.password);
            const response = await account.get();
            if (response) {
                successFunc("Logged in successfully.");
                setUser(response);
                localStorage.setItem("userDetails", JSON.stringify(response));
                navigate("/");
            }
        } catch (error) {
            console.error(error.message);
            errorFunc(error.message.split(":")[1]?.trim() || error.message);
            console.error("Registration error:", error);
        }
    };

    return (
        <>
            <Toaster position="top-right" />
            <div className="poppins text-white flex h-screen w-screen">
                <div className="p-10 sm:py-20 w-full md:w-[35rem] h-full overflow-y-auto chrome-scrollbar">
                    <div className="">
                        <img src={require("../Images/Logo.png")} alt="" className="w-28 mb-5" />
                        <h1 className="text-3xl sm:text-4xl">Log in to your account</h1>
                        <p className="sm:text-xl my-2">
                            <span className="">Don't have an account? </span>
                            <Link to="/signup" className="text-blue-400 hover:underline">Sign Up</Link>
                        </p>
                    </div>

                    <form onSubmit={loginUser} className="space-y-4 md:space-y-6 text-white pt-3">
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-3 text-2xl font-medium text-white pb-2">
                            <button onClick={googleAuth} type="button" className="group w-full bg-transparent hover:bg-white/10 active:bg-white/20 rounded-lg px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:bg-orange-700 border border-white/20 flex justify-center items-center">
                                <span className="md:group-hover:hidden "><Icon icon="flat-color-icons:google" width="24" height="24"></Icon></span>
                                <span className="hidden md:group-hover:block"><Icon icon="logos:google" width="73.15" height="24"></Icon></span>
                            </button>

                            <button onClick={githubAuth} type="button" className="group w-full bg-[#333333] hover:bg-[#242424] active:bg-[#1b1b1b] rounded-lg px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#333333] disabled:active:bg-[#333333]">
                                <i className="md:group-hover:hidden ri-github-fill"></i>
                                <center className="hidden md:group-hover:block"><Icon icon="octicon:logo-github-16" width="65" height="32"></Icon></center>
                            </button>
                        </div>

                        <div className="relative border border-slate-600">
                            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-gray-300 bg-gray-900 px-2 inline-block whitespace-nowrap">
                                or with email and password
                            </span>
                        </div>

                        <div>
                            <input onChange={onchange} type="email" name="email" id="email" className="block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 dark focus:ring-blue-500 focus:border-blue-500 rounded-lg" placeholder="name@gmail.com" required />
                        </div>
                        <div className='relative'>
                            <input onChange={onchange} type={togglePassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 rounded-lg" required />
                            <i onClick={togglePass} className={`${togglePassword ? 'hidden' : 'block'} absolute text-neutral-400 hover:text-neutral-200 text-xl top-2 right-4 bi bi-eye-slash-fill transition-all`}></i>
                            <i onClick={togglePass} className={`${togglePassword ? 'block' : 'hidden'} absolute text-neutral-400 hover:text-neutral-200 text-xl top-2 right-4 bi bi-eye-fill transition-all`}></i>
                        </div>
                        <button onClick={() => setPopup(!popup)} type="button" className="flex items-center justify-between gap-x-5 gap-y-2 flex-wrap">
                            <span className="text-sm font-medium text-blue-400 hover:underline ">Forgot password?</span>
                        </button>
                        <button type="submit" className="w-fit focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-yellow-600">Sign in</button>
                    </form>
                </div>

                <div className="hidden md:block w-full flex-1">
                    <img src={require("../Images/login_desktop.png")} alt="login_desktop" className=" object-cover w-full h-full" />
                </div>
            </div>









            <div className={`${!popup ? "hidden" : "block"} absolute top-0 poppins text-white px-5 pb-5 sm:pt-5 md:py-20 h-full w-screen bg-slate-900 backdrop-blur-md`}>
                <div className="max-w-screen-md mx-auto w-full h-full">
                    <div className="relative flex-1 max-w-screen-xl mx-auto mt-5 sm:mt-0 border border-gray-700 rounded-xl">

                        <button type="button" onClick={() => setPopup(!popup)} className="absolute right-4 top-4 bg-blue-600 p-1 rounded-md active:scale-110">
                            <Icon icon="material-symbols:close" width="20" height="20"></Icon>
                        </button>

                        <div className="py-8 px-8 mx-auto max-w-screen-xl lg:py-16 lg:px-6 bg-gray-800">
                            <div className="mx-auto max-w-screen-md sm:text-center">
                                <h1 className="text-3xl sm:text-4xl mb-5">Reset Account Password</h1>
                                <p className="mx-auto mb-8 max-w-2xl font-light md:mb-12 sm:text-xltext-gray-400 text-sm md:text-base">Enter your account email to receive a secure password reset link. This link will expire shortly for your security.</p>
                                <form className="" onSubmit={forgotPassword}>
                                    <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                                        <div className="relative w-full">
                                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                            </div>
                                            <input onChange={(e) => setForgotEmail(e.target.value)} type="email" id="email" className="block p-3 pl-10 w-full text-sm rounded-lg border sm:rounded-none sm:rounded-l-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-4 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email" required />
                                        </div>
                                        <div>
                                            <button type="submit" className="py-3 px-5 w-full text-sm font-medium rounded-lg border cursor-pointer bg-blue-700 border-blue-600 sm:rounded-none sm:rounded-r-lg focus:ring-4 hover:bg-blue-700 focus:ring-blue-800 text-nowrap">Send Email</button>
                                        </div>
                                    </div>
                                    <div className="mx-auto max-w-screen-sm text-sm text-left newsletter-form-footer text-gray-300">We care about the protection of your data. <Link to="/term-conditions" className="font-medium text-blue-500 hover:underline">Read our Privacy Policy</Link>.</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;