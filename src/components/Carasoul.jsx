import React, { useEffect } from 'react';
import Slider from "react-slick";
import { Icon } from '@iconify/react/dist/iconify.js';

const Carasoul = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className='poppins transition-colors duration-500 py-16 lg:py-24 px-5 '>
            <div className="max-w-screen-xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Testimonials</span>
                    <h2 className="text-3xl sm:text-5xl dancing font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">What Our Customers Say</h2>
                    <p className="mt-3 text-gray-500 dark:text-zinc-400 max-w-md mx-auto">Don't just take our word for it</p>
                </div>

                {/* Slider */}
                <div className='slider-container'>
                    <Slider {...settings}>
                        {testimonials.map((item, index) => (
                            <div key={index} className="px-3 pb-8">
                                <div className="relative bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800 h-full">

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4 mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Icon key={i} icon="mdi:star" className="text-amber-400" width="18" height="18" />
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-gray-600 dark:text-zinc-400 leading-relaxed mb-6">"{item.description}"</p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-sm opacity-50"></div>
                                            <img className='relative w-14 h-14 rounded-full border-2 border-white dark:border-zinc-800 object-cover' src={item.image} alt={item.name} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">{item.name}</h4>
                                            <p className="text-sm text-gray-500 dark:text-zinc-400">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Carasoul;

const testimonials = [
    {
        name: "Moana Michell",
        role: "Food Blogger",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image: "../Images/client/client1.jpg"
    },
    {
        name: "Mike Hamell",
        role: "Regular Customer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image: "../Images/client/client2.jpg"
    },
    {
        name: "Sarah Johnson",
        role: "Food Critic",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image: "../Images/client/client3.png"
    },
    {
        name: "David Wilson",
        role: "Loyal Customer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image: "../Images/client/client4.png"
    },
    {
        name: "Emily Brown",
        role: "Food Enthusiast",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image: "../Images/client/client5.jpg"
    }
];
