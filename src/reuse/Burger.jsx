import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Burger = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        pauseOnHover: false,
    };

    const features = [
        { icon: 'mdi:clock-fast', text: '30 Min Delivery' },
        { icon: 'mdi:leaf', text: 'Fresh Ingredients' },
        { icon: 'mdi:shield-check', text: 'Safe Packaging' },
    ];

    return (
        <section className='poppins relative h-full flex items-center'>
            
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-10 w-72 h-72 bg-amber-500/20 rounded-full"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full"></div>
            </div>

            {/* Main Content */}
            <div className='w-full max-w-screen-xl mx-auto px-5 py-10'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    
                    {/* Left: Slider Content */}
                    <div className="slider-container">
                        <Slider {...settings}>
                            {restaurant.map((element, index) => (
                                <div key={index}>
                                    <div className="pr-0 lg:pr-10">
                                        {/* Badge */}
                                        <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 border border-amber-500/30 backdrop-blur-sm">
                                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                                            {element.badge}
                                        </span>
                                        
                                        {/* Title */}
                                        <h1 className="dancing mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                                            <span className="text-white">{element.name.split(' ').slice(0, -1).join(' ')} </span>
                                            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                                                {element.name.split(' ').slice(-1)}
                                            </span>
                                        </h1>
                                        
                                        {/* Description */}
                                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg mb-8">
                                            {element.description}
                                        </p>
                                        
                                        {/* Buttons */}
                                        <div className="flex flex-wrap gap-4">
                                            <Link to="/menu">
                                                <button type="button" className='group flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-6 py-2.5 sm:px-8 sm:py-4 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105'>
                                                    Order Now <Icon icon="mdi:arrow-right" width="20" height="20" className="group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </Link>
                                            <Link to="/menu">
                                                <button type="button" className='group flex items-center gap-2 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold px-6 py-2.5 sm:px-8 sm:py-4 rounded-full border border-white/20 hover:border-amber-500/50 transition-all duration-300'>
                                                    <Icon icon="mdi:food" width="20" height="20" className="text-amber-400" /> View Menu
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Right: Stats & Features */}
                    <div className="hidden lg:block">
                        <div className="relative">
                            {/* Main Stats Card */}
                            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                                
                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    <div className="text-center p-4 rounded-2xl bg-white/5">
                                        <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">15K+</h3>
                                        <p className="text-sm text-gray-400 mt-1">Happy Customers</p>
                                    </div>
                                    <div className="text-center p-4 rounded-2xl bg-white/5">
                                        <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">50+</h3>
                                        <p className="text-sm text-gray-400 mt-1">Menu Items</p>
                                    </div>
                                    <div className="text-center p-4 rounded-2xl bg-white/5">
                                        <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">4.9</h3>
                                        <p className="text-sm text-gray-400 mt-1">Rating</p>
                                    </div>
                                    <div className="text-center p-4 rounded-2xl bg-white/5">
                                        <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">12</h3>
                                        <p className="text-sm text-gray-400 mt-1">Locations</p>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="space-y-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                                                <Icon icon={feature.icon} className="text-white" width="20" height="20" />
                                            </div>
                                            <span className="text-gray-300 font-medium">{feature.text}</span>
                                            <Icon icon="mdi:check-circle" className="text-green-400 ml-auto" width="20" height="20" />
                                        </div>
                                    ))}
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Burger;

const restaurant = [
    {
        "badge": "Fast Delivery",
        "name": "Food Delivered Fast",
        "description": "Order your favorite meals online from top restaurants near you. Fast delivery, easy payments, and delicious food in just a few clicks away."
    },
    {
        "badge": "Fresh & Tasty",
        "name": "Crave Click Eat",
        "description": "Craving something tasty? Browse menus, pick your favorites, and get hot, fresh food delivered right to your doorstep. Yum made easy!"
    },
    {
        "badge": "24/7 Service",
        "name": "Hunger Our Priority",
        "description": "A seamless food ordering experience—discover top-rated restaurants, track your order live, and enjoy fast, reliable delivery, anytime, anywhere."
    }
];
