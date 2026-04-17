import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const Discount = () => {
    return (
        <section className='transition-colors duration-500 py-16 lg:py-24 px-5 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950'>
            <div className="max-w-screen-xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Special Offers</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Grab Your <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Deals</span></h2>
                </div>

                {/* Discount Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {discount.map((item, index) => (
                        <div key={index} className="group relative overflow-hidden bg-white dark:bg-zinc-900 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-zinc-800 transition-all duration-500 hover:-translate-y-2">
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 dark:from-amber-500/10 dark:to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative flex flex-col lg:flex-row items-center gap-6 p-8">
                                {/* Image */}
                                <div className="relative flex-shrink-0">
                                    <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                    <img className='relative w-36 h-36 rounded-full border-4 border-amber-500 object-cover shadow-xl' src={item.image} alt={item.heading} />
                                    {/* Discount Badge */}
                                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">{item.discount} OFF</div>
                                </div>

                                {/* Content */}
                                <div className="text-center lg:text-left flex-1">
                                    <h2 className="dancing text-3xl lg:text-4xl bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-2">{item.heading}</h2>
                                    <p className="text-gray-500 dark:text-zinc-400 text-sm mb-4">Limited time offer. Don't miss out!</p>
                                    <Link to="/menu">
                                        <button type="button" className='group/btn flex items-center gap-2 mx-auto lg:mx-0 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl transition-all duration-300'>
                                            <span>Order Now</span>
                                            <Icon icon="mdi:cart-outline" width="20" height="20" className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Discount;

const discount = [
    {
        "heading": "Tasty Thursdays",
        "discount": "20%",
        "image": "../Images/o/o1.jpg"
    },
    {
        "heading": "Pizza Days",
        "discount": "15%",
        "image": "../Images/o/o2.jpg"
    }
];
