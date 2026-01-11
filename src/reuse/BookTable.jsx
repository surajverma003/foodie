import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BookTable = () => {
    const location = useLocation();
    const [load, setLoad] = useState("hidden");
    const booked = useRef();

    const bookTable = (e) => {
        e.preventDefault();
        
        setLoad("block");
        setTimeout(() => {
            setLoad("hidden");
            booked.current.innerText = "Table booked!";
            e.target.reset()
            
            setTimeout(() => {
                booked.current.innerText = "Book Table again!";
                }, 5000);
        }, 2000);
    }

    useEffect(() => {
    }, [location.pathname]);

    return (
        <>
            <div className={`poppins text-white ${location.pathname === '/' ? 'pt-20 pb-28 sm:py-20 px-5' : 'pt-20 pb-28 sm:py-20 md:py-40 px-5'}`}>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <form onSubmit={bookTable} className="">
                        <h1 className="dancing text-3xl sm:text-5xl mb-5">Book A Table</h1>

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" autoComplete="name" required />
                                <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" autoComplete="sir-name" required />
                                <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" autoComplete="email" required />
                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" autoComplete="password" required />
                            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" minLength={1} maxLength={5} name="persons" id="persons" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" autoComplete="persons" required />
                            <label htmlFor="persons" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">How many persons ?</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="contact" id="contact" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" autoComplete="tel" required />
                                <label htmlFor="contact" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact (+91 9876543210)</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="date" name="date" id="date" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
                                <label htmlFor="date" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Booking Date</label>
                                <span className='absolute top-2 right-0 -z-10 text-slate-300'><Icon icon="uil:calender" width="22" height="22"></Icon></span>
                            </div>
                        </div>
                        <button type="submit" className="text-white mt-5 bg-yellow-600 hover:bg-yellow-800 focus:ring-2 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-1/2 px-5 py-3 text-center">
                            <span ref={booked} className={`${load !== "hidden" ? "hidden" : "block"}`}>Book Table</span>
                            <span className={`${load} w-full flex justify-center items-center`}>
                                <Icon icon="svg-spinners:ring-resize" width="24" height="24"></Icon>
                            </span>
                        </button>
                    </form>

                    <div className="w-full mt-10 sm:mt-0">
                        <iframe title="Address" className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.598285491998!2d77.18263077414542!3d28.524430688983962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e065cd167c1%3A0x2611634c73883b00!2sQutab%20Minar!5e1!3m2!1sen!2sin!4v1728496406376!5m2!1sen!2sin" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BookTable
