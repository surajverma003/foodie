import React, { useContext, useState, useEffect } from 'react';
import myContext from '../context/myContext';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link, useNavigate } from 'react-router-dom';
import account from '../appwrite/appWrieConfig';
import { ID } from 'appwrite';

const Signup = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { user, setUser, Toaster, successFunc, errorFunc, googleAuth, githubAuth } = context;

    const [togglePassword, setTogglePassword] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "" });

    const onchange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    const registerUser = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.name);

            if (response) {
                await account.createEmailPasswordSession(userInfo.email, userInfo.password);
                const userResponse = await account.get();
                if (userResponse) {
                    successFunc("Account created successfully!");
                    setUser(userResponse);
                    localStorage.setItem("userDetails", JSON.stringify(userResponse));
                    navigate("/");
                }
            }
        } catch (error) {
            console.error(error.message);
            errorFunc(error.message.split(":")[1]?.trim() || error.message);
        } finally {
            setLoading(false);
        }
    };

    const togglePass = () => setTogglePassword(!togglePassword);

    useEffect(() => {
        if (user) {
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
                        <div className="absolute top-20 -right-20 w-72 h-72 bg-amber-500/10 rounded-full    "></div>
                        <div className="absolute top-40 right-1/2 w-96 h-96 bg-amber-500/10 rounded-full    "></div>
                        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-orange-500/10 rounded-full "></div>
                    </div>

                    <div className="relative w-full max-w-screen-md">
                        {/* Logo & Header */}
                        <div className="text-center mb-8">
                            <Link to="/" className="inline-flex items-center gap-3 mb-6">
                                <img src="./Images/Logo.png" alt="Logo" className="w-14 h-14 object-contain" />
                                <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Feane</span>
                            </Link>
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">Create Account</h1>
                            <p className="text-gray-500 dark:text-zinc-400">
                                Already have an account?{' '} <Link to="/login" className="text-amber-500 hover:text-amber-600 font-medium hover:underline">Sign In</Link>
                            </p>
                        </div>

                        {/* Social Login Buttons */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <button onClick={googleAuth} type="button" className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 hover:border-amber-300 dark:hover:border-amber-600 shadow-sm hover:shadow-lg transition-all duration-300">
                                <Icon icon="flat-color-icons:google" width="24" height="24" />
                                <span className="font-medium text-gray-700 dark:text-zinc-300 hidden sm:inline">Google</span>
                            </button>

                            <button onClick={githubAuth} type="button" className="group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-zinc-900 dark:bg-zinc-800 border-2 border-zinc-900 dark:border-zinc-700 hover:bg-zinc-800 dark:hover:bg-zinc-700 shadow-sm hover:shadow-lg transition-all duration-300">
                                <Icon icon="mdi:github" className="text-white" width="24" height="24" />
                                <span className="font-medium text-white hidden sm:inline">GitHub</span>
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="relative flex items-center gap-4 mb-6">
                            <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-800"></div>
                            <span className="text-sm text-gray-400 dark:text-zinc-500 font-medium">or register with email</span>
                            <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-800"></div>
                        </div>

                        {/* Signup Form */}
                        <form onSubmit={registerUser} className="space-y-5">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Icon icon="mdi:account-outline" className="text-gray-400 dark:text-zinc-500" width="20" height="20" />
                                    </div>
                                    <input onChange={onchange} type="text" name="name" id="name" className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors" placeholder="John Doe" autoComplete="name" required />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Icon icon="mdi:email-outline" className="text-gray-400 dark:text-zinc-500" width="20" height="20" />
                                    </div>
                                    <input onChange={onchange} type="email" name="email" id="email" className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors" placeholder="name@example.com" required />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Icon icon="mdi:lock-outline" className="text-gray-400 dark:text-zinc-500" width="20" height="20" />
                                    </div>
                                    <input onChange={onchange} type={togglePassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="w-full pl-12 pr-12 py-4 rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors" required />
                                    <button type="button" onClick={togglePass} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors" >
                                        <Icon icon={togglePassword ? 'mdi:eye' : 'mdi:eye-off'} width="22" height="22" />
                                    </button>
                                </div>
                            </div>

                            {/* Terms & Conditions */}
                            <div className="flex items-start gap-3">
                                <div className="flex items-center h-5 mt-1">
                                    <input type="checkbox" id="terms" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} className="w-5 h-5 rounded border-gray-300 dark:border-zinc-600 text-amber-500 focus:ring-amber-500 cursor-pointer" required />
                                </div>
                                <label htmlFor="terms" className="text-sm text-gray-600 dark:text-zinc-400 cursor-pointer">
                                    I agree to the{' '} <Link to="/term-conditions" className="text-amber-500 hover:text-amber-600 font-medium hover:underline">Terms of Service</Link> {' '}and{' '} <Link to="/term-conditions" className="text-amber-500 hover:text-amber-600 font-medium hover:underline">Privacy Policy</Link>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" disabled={loading || !acceptedTerms} className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg  transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                {loading ? (
                                    <Icon icon="svg-spinners:ring-resize" width="24" height="24" />) : (
                                    <><Icon icon="mdi:account-plus" width="22" height="22" /> Create Account</>
                                )}
                            </button>
                        </form>

                        {/* Security Note */}
                        <div className="mt-8 p-4 rounded-xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                                    <Icon icon="mdi:shield-check" className="text-green-500" width="20" height="20" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Your data is secure</p>
                                    <p className="text-xs text-gray-500 dark:text-zinc-400">
                                        We use industry-standard encryption to protect your personal information.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
