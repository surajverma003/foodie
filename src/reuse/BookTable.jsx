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
            booked.current.innerText = "Table Booked!";
            e.target.reset();

            setTimeout(() => {
                booked.current.innerText = "Book Your Table";
            }, 5000);
        }, 2000);
    };

    useEffect(() => { }, [location.pathname]);

    return (
        <section className={`poppins transition-colors duration-500 ${location.pathname === '/' ? 'py-16 px-5' : 'py-20 md:py-32 px-5'} bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950`}>
            <div className="max-w-screen-xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Reservations</span>
                    <h2 className="text-3xl sm:text-5xl dancing font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">Book A Table</h2>
                    <p className="mt-3 text-gray-500 dark:text-zinc-400 max-w-md mx-auto">Reserve your spot for an unforgettable dining experience</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Form Card */}
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-zinc-800">
                        <form onSubmit={bookTable} className="space-y-6">

                            {/* Name Fields */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input type="text" name="first_name" id="first_name" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-2 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors peer placeholder-transparent" placeholder="First Name" autoComplete="name" required />
                                    <label htmlFor="first_name" className="absolute left-4 -top-2.5 px-1 text-xs font-medium text-gray-500 dark:text-zinc-400 bg-white dark:bg-zinc-900 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-amber-500">First Name</label>
                                </div>
                                <div className="relative">
                                    <input type="text" name="last_name" id="last_name" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-2 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors peer placeholder-transparent" placeholder="Last Name" autoComplete="family-name" required />
                                    <label htmlFor="last_name" className="absolute left-4 -top-2.5 px-1 text-xs font-medium text-gray-500 dark:text-zinc-400 bg-white dark:bg-zinc-900 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-amber-500">Last Name</label>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <input type="email" name="email" id="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-2 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors peer placeholder-transparent" placeholder="Email" autoComplete="email" required />
                                <label htmlFor="email" className="absolute left-4 -top-2.5 px-1 text-xs font-medium text-gray-500 dark:text-zinc-400 bg-white dark:bg-zinc-900 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-amber-500">Email Address</label>
                            </div>

                            {/* Persons */}
                            <div className="relative">
                                <input type="number" min={1} max={20} name="persons" id="persons" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-2 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors peer placeholder-transparent appearance-none" placeholder="Persons" required />
                                <label htmlFor="persons" className="absolute left-4 -top-2.5 px-1 text-xs font-medium text-gray-500 dark:text-zinc-400 bg-white dark:bg-zinc-900 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-amber-500">Number of Guests</label>
                                <Icon icon="mdi:account-group" className="absolute right-4 top-3.5 text-gray-400 dark:text-zinc-500" width="22" height="22" />
                            </div>

                            {/* Contact & Date */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input type="tel" name="contact" id="contact" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-2 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors peer placeholder-transparent" placeholder="Phone" autoComplete="tel" required />
                                    <label htmlFor="contact" className="absolute left-4 -top-2.5 px-1 text-xs font-medium text-gray-500 dark:text-zinc-400 bg-white dark:bg-zinc-900 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-amber-500">Phone Number</label>
                                    <Icon icon="mdi:phone" className="absolute right-4 top-3.5 text-gray-400 dark:text-zinc-500" width="22" height="22" />
                                </div>
                                <div className="relative">
                                    <input type="date" name="date" id="date" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border-2 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors" required />
                                    <label className="absolute left-4 -top-2.5 px-1 text-xs font-medium text-gray-500 dark:text-zinc-400 bg-white dark:bg-zinc-900">Booking Date</label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                                <span ref={booked} className={`${load !== "hidden" ? "hidden" : "flex items-center gap-2"}`}>
                                    <Icon icon="mdi:calendar-check" width="22" height="22" /> Book Your Table
                                </span>
                                <span className={`${load} flex justify-center items-center`}>
                                    <Icon icon="svg-spinners:ring-resize" width="24" height="24" />
                                </span>
                            </button>
                        </form>
                    </div>

                    {/* Map Card */}
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-zinc-800">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17980.51792217211!2d77.21099466402022!3d28.651410796562313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1a88dcc559%3A0x24fa43c081dbe51!2sChandni%20Chowk%2C%20Delhi!5e1!3m2!1sen!2sin!4v1776448587597!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        {/* Location Badge */}
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 dark:border-zinc-800">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                                    <Icon icon="mdi:map-marker" className="text-white" width="24" height="24" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">Visit Us</h4>
                                    <p className="text-sm text-gray-500 dark:text-zinc-400">Near Chandni Chowk, New Delhi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookTable;
