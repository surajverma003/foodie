import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import myContext from '../context/myContext';
import account from '../appwrite/appWrieConfig';

const Login = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { user, setUser, Toaster, googleAuth, githubAuth, successFunc, errorFunc, popup, setPopup } = context;

    const [userInfo, setUserInfo] = useState({ email: "admin@gmail.com", password: "admin123" });
    const [togglePassword, setTogglePassword] = useState(false);
    const [forgotEmail, setForgotEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const togglePass = () => setTogglePassword(!togglePassword);

    const onchange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    // Change Password
    const forgotPassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const redirectUrl = "http://localhost:3000/foodie#/reset-password";
            const response = await account.createRecovery(forgotEmail, redirectUrl);
            if (response) {
                successFunc("Email sent successfully.");
                e.target.reset();
                setPopup(false);
            }
        } catch (error) {
            console.error(error.message);
            errorFunc(error.message.split(":")[1]?.trim() || error.message);
        } finally {
            setLoading(false);
        }
    };

    // Login User
    const loginUser = async (e) => {
        e.preventDefault();
        setLoading(true);

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
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(user) {
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } 
    }, [])
    

    return (
        !user &&
        <>
            <Toaster position="top-right" />
            <div className="poppins min-h-screen flex bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">

                {/* Form */}
                <div className="relative w-full flex items-center justify-center p-6 sm:p-10 overflow-y-auto">
                    {/* Background Decorations */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-20 -left-20 w-72 h-72 bg-amber-500/10 rounded-full"></div>
                        <div className="absolute top-40 left-1/2 w-96 h-96 bg-amber-500/10 rounded-full"></div>
                    </div>

                    <div className="relative w-full max-w-screen-md">

                        {/* Logo & Header */}
                        <div className="text-center mb-10">
                            <Link to="/" className="inline-flex items-center gap-3 mb-8">
                                <img src="./Images/Logo.png" alt="Logo" className="w-14 h-14 object-contain" />
                                <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Feane</span>
                            </Link>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Welcome Back</h1>
                            <p className="text-gray-500 dark:text-zinc-400">
                                Don't have an account?{' '}
                                <Link to="/signup" className="text-amber-500 hover:text-amber-600 font-medium hover:underline">Sign Up</Link>
                            </p>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <button onClick={googleAuth} type="button" className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 hover:border-amber-300 dark:hover:border-amber-600 shadow-sm hover:shadow-lg transition-all duration-300" >
                                <Icon icon="flat-color-icons:google" width="24" height="24" />
                                <span className="font-medium text-gray-700 dark:text-zinc-300 hidden sm:inline">Google</span>
                            </button>

                            <button onClick={githubAuth} type="button" className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-zinc-900 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-700 hover:bg-zinc-800 dark:hover:bg-zinc-700 shadow-sm hover:shadow-lg transition-all duration-300" >
                                <Icon icon="mdi:github" className="text-white" width="24" height="24" />
                                <span className="font-medium text-white hidden sm:inline">GitHub</span>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="relative flex items-center gap-4 mb-8">
                            <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-800"></div>
                            <span className="text-sm text-gray-400 dark:text-zinc-500 font-medium">or continue with email</span>
                            <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-800"></div>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={loginUser} className="space-y-5">
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Icon icon="mdi:email-outline" className="text-gray-400 dark:text-zinc-500" width="20" height="20" />
                                    </div>
                                    <input onChange={onchange} type="email" name="email" id="email" className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors" placeholder="name@example.com" value={userInfo?.email} required />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Icon icon="mdi:lock-outline" className="text-gray-400 dark:text-zinc-500" width="20" height="20" />
                                    </div>
                                    <input onChange={onchange} type={togglePassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="w-full pl-12 pr-12 py-4 rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors" value={userInfo?.password} required />
                                    <button type="button" onClick={togglePass} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors" >
                                        <Icon icon={togglePassword ? 'mdi:eye' : 'mdi:eye-off'} width="22" height="22" />
                                    </button>
                                </div>
                            </div>

                            {/* Forgot Password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 dark:border-zinc-600 text-amber-500 focus:ring-amber-500" />
                                    <span className="text-sm text-gray-600 dark:text-zinc-400">Remember me</span>
                                </label>
                                <button onClick={() => setPopup(!popup)} type="button" className="text-sm font-medium text-amber-500 hover:text-amber-600 hover:underline" >
                                    Forgot password?
                                </button>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" disabled={loading} className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2" >
                                {loading ? (
                                    <Icon icon="svg-spinners:ring-resize" width="24" height="24" />) : (
                                    <><Icon icon="mdi:login" width="22" height="22" /> Sign In</>
                                )}
                            </button>
                        </form>

                        {/* Security Note */}
                        <div className="mt-8 flex items-center justify-center gap-4 text-xs text-gray-400 dark:text-zinc-500">
                            <div className="flex items-center gap-1">
                                <Icon icon="mdi:shield-check" className="text-green-500" width="16" height="16" /> Secure Login
                            </div>
                            <div className="flex items-center gap-1">
                                <Icon icon="mdi:lock" width="16" height="16" /> SSL Encrypted
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Forgot Password Modal */}
            {popup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm">
                    <div className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden">

                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        {/* Close Button */}
                        <button type="button" onClick={() => setPopup(false)} className="absolute right-4 top-4 p-2 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors z-10" >
                            <Icon icon="mdi:close" width="20" height="20" />
                        </button>

                        <div className="relative p-8 sm:p-10">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                                    <Icon icon="mdi:lock-reset" className="text-white" width="32" height="32" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Reset Password</h2>
                                <p className="text-gray-500 dark:text-zinc-400 text-sm">Enter your email address and we'll send you a secure link to reset your password.</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={forgotPassword} className="space-y-5">
                                <div>
                                    <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Icon icon="mdi:email-outline" className="text-gray-400 dark:text-zinc-500" width="20" height="20" />
                                        </div>
                                        <input onChange={(e) => setForgotEmail(e.target.value)} type="email" id="reset-email" className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 dark:bg-zinc-800 border-2 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors" placeholder="Enter your email" required />
                                    </div>
                                </div>

                                <button type="submit" disabled={loading} className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2" >
                                    {loading ? (
                                        <Icon icon="svg-spinners:ring-resize" width="24" height="24" />) : (
                                        <><Icon icon="mdi:email-fast" width="22" height="22" /> Send Reset Link</>
                                    )}
                                </button>
                            </form>

                            {/* Footer */}
                            <div className="mt-6 text-center">
                                <button onClick={() => setPopup(false)} className="text-sm text-gray-500 dark:text-zinc-400 hover:text-amber-500 transition-colors" >
                                    ← Back to Login
                                </button>
                            </div>

                            {/* Privacy Note */}
                            <p className="mt-6 text-xs text-center text-gray-400 dark:text-zinc-500">
                                We care about your data.{' '}
                                <Link to="/term-conditions" className="text-amber-500 hover:underline">
                                    Read our Privacy Policy
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;