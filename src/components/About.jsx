import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

const About = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const values = [
        { icon: 'mdi:leaf', title: 'Fresh Ingredients', desc: 'We source only the finest, locally-grown ingredients for authentic flavors.' },
        { icon: 'mdi:chef-hat', title: 'Expert Chefs', desc: 'Our passionate chefs bring years of culinary expertise to every dish.' },
        { icon: 'mdi:heart-outline', title: 'Made with Love', desc: 'Every meal is crafted with care, just like homemade cooking.' },
        { icon: 'mdi:clock-fast', title: 'Quick Service', desc: 'Hot, fresh food delivered to your table or doorstep in no time.' },
    ];

    const milestones = [
        { year: '2010', title: 'The Beginning', desc: 'Started as a small family kitchen', icon: 'mdi:seed' },
        { year: '2015', title: 'First Restaurant', desc: 'Opened our flagship location downtown', icon: 'mdi:store' },
        { year: '2020', title: 'Going Digital', desc: 'Launched online ordering & delivery', icon: 'mdi:cellphone' },
        { year: '2024', title: '12 Locations', desc: 'Expanded across the country', icon: 'mdi:map-marker-multiple' },
    ];

    const stats = [
        { value: '50+', label: 'Menu Items', icon: 'mdi:food' },
        { value: '15K+', label: 'Happy Customers', icon: 'mdi:account-group' },
        { value: '4.9', label: 'Average Rating', icon: 'mdi:star' },
        { value: '14+', label: 'Years Experience', icon: 'mdi:trophy' },
    ];

    const team = [
        { name: 'Marco Rossi', role: 'Head Chef', desc: '20+ years of culinary excellence' },
        { name: 'Sofia Chen', role: 'Pastry Chef', desc: 'Award-winning dessert specialist' },
        { name: 'James Wilson', role: 'Restaurant Manager', desc: 'Ensuring perfect dining experiences' },
    ];

    return (
        <div className="poppins transition-colors duration-500">
            
            {/* Hero Section - Only on About Page */}
            {!isHomePage && (
                <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black pt-20">
                    {/* Background Decorations */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-amber-500/10 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-amber-500/5 rounded-full"></div>
                    </div>

                    {/* Floating Icons */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-32 left-20 text-amber-500/20 animate-bounce" style={{ animationDuration: '3s' }}>
                            <Icon icon="mdi:chef-hat" width="50" height="50" />
                        </div>
                        <div className="absolute top-40 right-32 text-orange-500/20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}>
                            <Icon icon="mdi:heart" width="40" height="40" />
                        </div>
                        <div className="absolute bottom-40 left-32 text-amber-500/20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>
                            <Icon icon="mdi:food" width="45" height="45" />
                        </div>
                        <div className="absolute bottom-32 right-20 text-orange-500/20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}>
                            <Icon icon="mdi:star" width="35" height="35" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative text-center px-5 py-20">
                        <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
                            <Icon icon="mdi:information" className="text-amber-400" width="16" height="16" />
                            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">About Us</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="text-white">We Are </span>
                            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Feane</span>
                        </h1>

                        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                            Born from a passion for authentic flavors, serving happiness on a plate since 2010.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link to="/menu">
                                <button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 transition-all duration-300 hover:scale-105">
                                    Explore Menu <Icon icon="mdi:arrow-right" width="18" height="18" className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link to="/book-table">
                                <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm text-white font-semibold border border-white/20 hover:border-amber-500/50 transition-all duration-300">
                                    <Icon icon="mdi:calendar" width="18" height="18" /> Book a Table
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}


            {/* Stats Section */}
            <section className={`${isHomePage ? 'py-16' : 'py-24'} px-5 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950`}>
                <div className="max-w-screen-xl mx-auto">
                    
                    {/* Header for Home Page */}
                    {isHomePage && (
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Our Story</span>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                                <span className="text-gray-900 dark:text-white">We Are </span>
                                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Feane</span>
                            </h2>
                            <p className="text-gray-600 dark:text-zinc-400">
                                What started as a small family kitchen has grown into a beloved destination for food lovers everywhere.
                            </p>
                        </div>
                    )}

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                        {stats.map((stat, index) => (
                            <div key={index} className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow-lg border border-gray-100 dark:border-zinc-800 hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Icon icon={stat.icon} className="text-white" width="24" height="24" />
                                </div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">{stat.value}</h3>
                                <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>


                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                        <div className="group relative bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800 overflow-hidden hover:shadow-2xl transition-all duration-300">
                            {/* Decoration */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                            
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                                        <Icon icon="mdi:flag-variant" className="text-white" width="28" height="28" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                                </div>
                                <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-lg">
                                    To bring people together through exceptional food experiences. We believe every meal should be a celebration of flavor, quality, and connection.
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-amber-500">
                                    <Icon icon="mdi:check-circle" width="20" height="20" />
                                    <span className="text-sm font-medium">Committed since 2010</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="group relative bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800 overflow-hidden hover:shadow-2xl transition-all duration-300">
                            {/* Decoration */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                            
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                                        <Icon icon="mdi:eye-outline" className="text-white" width="28" height="28" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
                                </div>
                                <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-lg">
                                    To become the most loved food destination, known for our commitment to quality, innovation, and creating memorable dining experiences for everyone.
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-amber-500">
                                    <Icon icon="mdi:trending-up" width="20" height="20" />
                                    <span className="text-sm font-medium">Growing stronger every day</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Values Section */}
            <section className="py-24 px-5 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950">
                <div className="max-w-screen-xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Why Choose Us</span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">What Makes Us <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Different</span></h2>
                        <p className="text-gray-500 dark:text-zinc-400 max-w-2xl mx-auto">
                            We're committed to delivering the best food experience through quality, passion, and dedication.
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((item, index) => (
                            <div key={index} className="group relative bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800 hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-3 transition-all duration-300 text-center overflow-hidden">
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="relative">
                                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-amber-500/30">
                                        <Icon icon={item.icon} className="text-white" width="40" height="40" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h4>
                                    <p className="text-gray-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>  

            {/* Team Section - Only on About Page */}
            {!isHomePage && (
                <section className="py-24 px-5 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950">
                    <div className="max-w-screen-xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Meet The Team</span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">The <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Masters</span> Behind</h2>
                            <p className="text-gray-500 dark:text-zinc-400 max-w-2xl mx-auto">Our talented team brings passion and expertise to every dish</p>
                        </div>

                        {/* Team Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="group relative bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-zinc-800 hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-2 transition-all duration-300 text-center overflow-hidden">
                                    {/* Avatar */}
                                    <div className="relative w-28 h-28 mx-auto mb-6">
                                        <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-3xl font-bold">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>
                                    
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h4>
                                    <p className="text-amber-500 font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-500 dark:text-zinc-400 text-sm">{member.desc}</p>
                                    
                                    {/* Social Links */}
                                    <div className="flex justify-center gap-2 mt-6">
                                        {['ri:linkedin-fill', 'ri:twitter-x-fill', 'ri:instagram-fill'].map((icon, i) => (
                                            <button key={i} className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 flex items-center justify-center text-gray-500 dark:text-zinc-400 hover:text-white transition-all duration-300">
                                                <Icon icon={icon} width="16" height="16" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}


            {/* Testimonial - Only on About Page */}
            {!isHomePage && (
                <section className="py-24 px-5 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
                    <div className="max-w-screen-lg mx-auto">
                        <div className="relative bg-white dark:bg-zinc-900 rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden">
                            {/* Decorations */}
                            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
                            
                            {/* Quote Icon */}
                            <div className="absolute top-8 left-8 text-amber-500/10">
                                <Icon icon="mdi:format-quote-open" width="120" height="120" />
                            </div>

                            <div className="relative text-center">
                                {/* Stars */}
                                <div className="flex justify-center gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Icon key={i} icon="mdi:star" className="text-amber-400" width="28" height="28" />
                                    ))}
                                </div>

                                <p className="text-2xl md:text-3xl text-gray-700 dark:text-zinc-300 italic leading-relaxed mb-8 font-light">
                                    "The best food I've ever tasted! Feane has become our family's favorite place. The quality, taste, and service are simply unmatched. Every visit feels like coming home."
                                </p>

                                {/* Author */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xl mb-4">
                                        JD
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">John Doe</h4>
                                    <p className="text-amber-500 font-medium">Loyal Customer since 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}


            {/* CTA Section */}
            <section className="py-24 px-5 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
                <div className="max-w-screen-lg mx-auto text-center">
                    {/* Decorations */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-10 left-10 text-amber-500/10">
                            <Icon icon="mdi:food" width="100" height="100" />
                        </div>
                        <div className="absolute bottom-10 right-10 text-orange-500/10">
                            <Icon icon="mdi:silverware" width="100" height="100" />
                        </div>
                    </div>

                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">Join Us Today</span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to Taste the <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Difference</span>?</h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Experience the flavors that have made us a favorite for food lovers everywhere.</p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/menu">
                            <button className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <Icon icon="mdi:food" width="20" height="20" /> Explore Our Menu
                                <Icon icon="mdi:arrow-right" width="20" height="20" className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <Link to="/book-table">
                            <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm text-white font-semibold border border-white/20 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300">
                                <Icon icon="mdi:calendar-check" width="20" height="20" /> Reserve a Table
                            </button>
                        </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400">
                        <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                            <Icon icon="mdi:phone" width="20" height="20" /> +91 9876543210
                        </a>
                        <a href="mailto:hello@feane.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                            <Icon icon="mdi:email" width="20" height="20" /> hello@feane.com
                        </a>
                        <span className="flex items-center gap-2">
                            <Icon icon="mdi:map-marker" width="20" height="20" /> New Delhi, India
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
