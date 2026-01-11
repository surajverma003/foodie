import React, { useContext, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import myContext from '../context/myContext';
import account from '../appwrite/appWrieConfig';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const context = useContext(myContext);
    const navigate = useNavigate();

    const { successFunc, errorFunc } = context;
    const [password, setPassword] = useState({ new_pass: "", confirm_pass: "" });
    const [showPassword, setShowPassword] = useState({ new_pass: false, confirm_pass: false });
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
        }
    }

    return (
        <>
            <div className={`poppins text-white px-5 py-16 sm:py-24 h-full w-full bg-slate-900`}>

                <div className="flex-1 max-w-screen-lg mx-auto mt-5 sm:mt-0 border border-gray-700 rounded-xl">

                    <div className="max-w-screen-lg mx-auto rounded-2xl p-7 sm:p-16 bg-slate-800">
                        <form onSubmit={changePassword} className='flex flex-col gap-5'>
                            <h1 className="text-3xl sm:text-4xl">Create a new password</h1>
                            <p className="text-gray-300 text-sm md:text-base">Your password must be at least 8 characters and should include a combination of numbers, uppercase letters, and special characters (!$@%).</p>
                            <div className="flex flex-col gap-3">
                                {Object.keys(password).map((field, index) => (
                                    <div key={index} className="relative">
                                        <input
                                            onChange={onchange}
                                            value={password[field]}
                                            type={!showPassword[field] ? "password" : "text"}
                                            name={field}
                                            className='px-4 py-2.5 w-full border focus:border-white border-slate-600 bg-gray-700 outline-none focus:placeholder:text-white rounded-lg'
                                            placeholder={
                                                field === 'old_pass' ? 'Current Password' :
                                                    field === 'new_pass' ? 'New Password' : 'Confirm New Password'}
                                            required
                                        />
                                        <div className="absolute top-3.5 right-3 flex text-slate-400 hover:text-white/70 transition-all">
                                            <span onClick={() => togglePassword(field)}>
                                                <Icon icon={showPassword[field] ? "mdi:eye" : "mdi:eye-off"} width="20" height="20" />
                                            </span>
                                        </div>
                                    </div>
                                ))}

                                <div className="flex justify-between items-start">
                                    <ul id="validation" className="text-sm mt-2 space-y-1">
                                        <li className="flex gap-2 items-center">
                                            <span className={isLengthValid ? "hidden" : "block"}>❌</span>
                                            <span className={isLengthValid ? "block" : "hidden"}>✔️</span>
                                            <span>8 characters</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <span className={hasSpecialChar ? "hidden" : "block"}>❌</span>
                                            <span className={hasSpecialChar ? "block" : "hidden"}>✔️</span>
                                            <span>1 special character</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <span className={hasUppercase ? "hidden" : "block"}>❌</span>
                                            <span className={hasUppercase ? "block" : "hidden"}>✔️</span>
                                            <span>1 uppercase letter</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <span className={hasNumber ? "hidden" : "block"}>❌</span>
                                            <span className={hasNumber ? "block" : "hidden"}>✔️</span>
                                            <span>1 number</span>
                                        </li>
                                        <li className="flex gap-2 items-center">
                                            <span className={hasMatch ? "hidden" : "block"}>❌</span>
                                            <span className={hasMatch ? "block" : "hidden"}>✔️</span>
                                            <span>New password and confirm password match</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button disabled={!isFormValid} type="submit" className='text-sm px-6 sm:px-10 py-3 sm:py-4 rounded-md bg-blue-600 hover:bg-blue-700 active:scale-95 disabled:active:scale-100 w-fit transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-600'>
                                Change Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword
