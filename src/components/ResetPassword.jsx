import React, { useContext, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import myContext from '../context/myContext';
import account from '../appwrite/appWrieConfig';
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const context = useContext(myContext);
    const navigate = useNavigate();

    const { successFunc, errorFunc } = context;
    const [password, setPassword] = useState({ new_pass: "", confirm_pass: "" });
    const [showPassword, setShowPassword] = useState({ new_pass: false, confirm_pass: false });
    const [loading, setLoading] = useState(false);
    const { new_pass, confirm_pass } = password;

    const isLengthValid = new_pass.length >= 8;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(new_pass);
    const hasUppercase = /[A-Z]/.test(new_pass);
    const hasNumber = /\d/.test(new_pass);
    const hasMatch = new_pass === confirm_pass && confirm_pass.length > 0;
    const isFormValid = isLengthValid && hasSpecialChar && hasUppercase && hasNumber && hasMatch;

    const togglePassword = (key) => {
        setShowPassword(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const onchange = (e) => {
        setPassword(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const changePassword = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const href = window.location.href;
            const queryString = href.includes('?') ? href.split('?')[1].split('#')[0] : '';
            const params = new URLSearchParams(queryString);

            const response = await account.updateRecovery(params.get('userId'), params.get('secret'), password.new_pass, password.confirm_pass);
            if (response) {
                successFunc("Password changed successfully.");
                e.target.reset();
                setTimeout(() => { navigate("/login"); }, 1500);
            }
        } catch (error) {
            console.error(error.message);
            errorFunc(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="poppins min-h-screen flex items-center justify-center px-5 py-20 transition-colors duration-500 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">

            {/* Background Decorations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full"></div>
            </div>

            <div className="relative w-full max-w-screen-md">

                {/* Card */}
                <div className="relative bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-gray-100 dark:border-zinc-800 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative p-8 sm:p-10">
                        <form onSubmit={changePassword} className='flex flex-col gap-5'>

                            {/* Header */}
                            <div className="text-center mb-2">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                                    <Icon icon="mdi:lock-reset" className="text-white" width="32" height="32" />
                                </div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Create a new password</h1>
                            </div>

                            <p className="text-gray-500 dark:text-zinc-400 text-sm text-center">
                                Your password must be at least 8 characters and should include a combination of numbers, uppercase letters, and special characters (!$@%).
                            </p>

                            <div className="flex flex-col gap-4 mt-2">
                                {Object.keys(password).map((field, index) => (
                                    <div key={index} className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Icon icon={field === 'new_pass' ? 'mdi:lock-outline' : 'mdi:lock-check-outline'} className="text-gray-400 dark:text-zinc-500" width="20" height="20" />
                                        </div>
                                        <input onChange={onchange} value={password[field]} type={!showPassword[field] ? "password" : "text"} name={field} className='w-full pl-12 pr-12 py-4 rounded-xl bg-gray-50 dark:bg-zinc-800 border-2 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors' placeholder={field === 'new_pass' ? 'New Password' : 'Confirm New Password'} required />
                                        <button type="button" onClick={() => togglePassword(field)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors" >
                                            <Icon icon={showPassword[field] ? "mdi:eye" : "mdi:eye-off"} width="20" height="20" />
                                        </button>
                                    </div>
                                ))}

                                {/* Validation List */}
                                <div className="bg-gray-50 dark:bg-zinc-800/50 rounded-xl p-4 border border-gray-100 dark:border-zinc-800">
                                    <ul className="text-sm space-y-2">
                                        {[
                                            { check: isLengthValid, label: '8 characters' },
                                            { check: hasSpecialChar, label: '1 special character' },
                                            { check: hasUppercase, label: '1 uppercase letter' },
                                            { check: hasNumber, label: '1 number' },
                                            { check: hasMatch, label: 'Passwords match' },
                                        ].map((item, index) => (
                                            <li key={index} className="flex gap-3 items-center">
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${item.check ? 'bg-green-500 text-white' : 'bg-gray-200 dark:bg-zinc-700'}`}>{item.check && <Icon icon="mdi:check" width="14" height="14" />}</div>
                                                <span className={`transition-colors ${item.check ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-zinc-400'}`}>{item.label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <button disabled={!isFormValid || loading} type="submit" className='w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg flex items-center justify-center gap-2'>
                                {loading ? (
                                    <Icon icon="svg-spinners:ring-resize" width="24" height="24" />) : (
                                    <><Icon icon="mdi:lock-check" width="22" height="22" /> Change Password</>
                                )}
                            </button>
                        </form>

                        {/* Back to Login */}
                        <div className="mt-6 text-center">
                            <Link to="/login" className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-zinc-400 hover:text-amber-500 transition-colors" >
                                <Icon icon="mdi:arrow-left" width="18" height="18" /> Back to Login
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Security Badge */}
                <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-400 dark:text-zinc-500">
                    <div className="flex items-center gap-1">
                        <Icon icon="mdi:shield-check" className="text-green-500" width="16" height="16" /> Secure Connection
                    </div>
                    <div className="flex items-center gap-1">
                        <Icon icon="mdi:lock" width="16" height="16" /> Encrypted
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
