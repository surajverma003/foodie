import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import Carasoul from '../components/Carasoul';

const Discover = () => {
    return (
        <div className="poppins transition-colors duration-500">

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
                {/* Background Decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber-500/10 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-amber-500/5 rounded-full"></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-32 left-20 text-amber-500/20 animate-bounce" style={{ animationDuration: '3s' }}>
                        <Icon icon="mdi:silverware-fork-knife" width="50" height="50" />
                    </div>
                    <div className="absolute top-40 right-32 text-orange-500/20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}>
                        <Icon icon="mdi:pizza" width="60" height="60" />
                    </div>
                    <div className="absolute bottom-40 left-32 text-amber-500/20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>
                        <Icon icon="mdi:pasta" width="45" height="45" />
                    </div>
                    <div className="absolute bottom-32 right-20 text-orange-500/20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}>
                        <Icon icon="mdi:glass-wine" width="40" height="40" />
                    </div>
                </div>

                {/* Content */}
                <div className="relative text-center px-5 py-32">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-amber-500/10 border border-amber-500/20">
                        <Icon icon="mdi:star-four-points" className="text-amber-400" width="16" height="16" />
                        <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Est. 1978</span>
                        <Icon icon="mdi:star-four-points" className="text-amber-400" width="16" height="16" />
                    </div>

                    {/* Title */}
                    <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-6">
                        <span className="block text-white">Fresco</span>
                        <span className="block text-3xl sm:text-4xl lg:text-5xl mt-4 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Italian Specialities</span>
                    </h1>

                    {/* Divider with Text */}
                    <div className="relative flex items-center justify-center gap-6 my-10 max-w-2xl mx-auto">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-amber-500"></div>
                        <div className="flex items-center gap-4 text-white/80">
                            <span className="text-lg">Good Food</span>
                            <Icon icon="mdi:diamond" className="text-amber-500" width="20" height="20" />
                            <span className="text-lg">Fast Service</span>
                        </div>
                        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-500/50 to-amber-500"></div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mt-10">
                        <Link to="/menu">
                            <button className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
                                Explore Menu <Icon icon="mdi:arrow-right" width="20" height="20" className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <Link to="/book-table">
                            <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm text-white font-semibold border border-white/20 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300">
                                <Icon icon="mdi:calendar" width="20" height="20" /> Reserve Table
                            </button>
                        </Link>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
                        <span className="text-xs tracking-widest uppercase">Scroll to Explore</span>
                        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
                            <div className="w-1.5 h-3 rounded-full bg-amber-500 animate-bounce"></div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Welcome Section */}
            <section className="py-24 px-5 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Content */}
                        <div>
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Country's Most Loved</span>
                            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">Welcome to <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Fresco</span></h2>
                            <p className="text-xl text-gray-600 dark:text-zinc-300 mb-4 leading-relaxed">We Are Locally Crafted Food & Wine Serving Since 1978.</p>
                            <p className="text-gray-500 dark:text-zinc-400 mb-8 leading-relaxed">Experience the authentic taste of Italian cuisine crafted with love and tradition. Our recipes have been passed down through generations, bringing you the finest flavors of Italy.</p>

                            {/* Features */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { icon: 'mdi:chef-hat', text: 'Expert Chefs' },
                                    { icon: 'mdi:leaf', text: 'Fresh Ingredients' },
                                    { icon: 'mdi:medal', text: 'Award Winning' },
                                    { icon: 'mdi:heart', text: 'Made with Love' },
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700">
                                        <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                            <Icon icon={feature.icon} className="text-amber-500" width="20" height="20" />
                                        </div>
                                        <span className="font-medium text-gray-700 dark:text-zinc-300">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/about">
                                <button className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl transition-all duration-300">
                                    More About Us <Icon icon="mdi:arrow-right" width="20" height="20" className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: '45+', label: 'Years of Excellence', icon: 'mdi:trophy' },
                                { value: '150+', label: 'Signature Dishes', icon: 'mdi:food' },
                                { value: '50K+', label: 'Happy Customers', icon: 'mdi:account-group' },
                                { value: '4.9', label: 'Average Rating', icon: 'mdi:star' },
                            ].map((stat, index) => (
                                <div key={index} className="group p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow-lg border border-gray-100 dark:border-zinc-800 hover:border-amber-300 dark:hover:border-amber-600 hover:-translate-y-2 transition-all duration-300" >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Icon icon={stat.icon} className="text-white" width="24" height="24" />
                                    </div>
                                    <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">{stat.value}</h3>
                                    <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Menu Section Header */}
            <section className="py-16 px-5 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950">
                <div className="max-w-screen-md mx-auto text-center">
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Culinary Excellence</span>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Menu</span></h2>
                    <p className="text-xl text-gray-600 dark:text-zinc-300 mb-4">Quality Ingredients, Tasty Meals</p>
                    <p className="text-gray-500 dark:text-zinc-400">Discover our carefully curated selection of authentic Italian dishes, prepared with the finest ingredients.</p>
                </div>
            </section>


            {/* Menu Items Grid */}
            <section className="py-16 px-5 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {menuItems.map((item, index) => (
                            <div key={index} className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 dark:border-zinc-800 transition-all duration-500 hover:-translate-y-2" >
                                {/* Icon Background */}
                                <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/50 dark:from-zinc-900/50 to-transparent"></div>
                                    <Icon icon={item.icon} className="text-amber-500/30 group-hover:scale-125 transition-transform duration-500" width="120" height="120" />

                                    {/* Price Badge */}
                                    <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 shadow-lg">
                                        <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">${item.price}</span>
                                    </div>

                                    {/* Popular Badge */}
                                    {item.popular && (
                                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold">Popular</div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-500 transition-colors">{item.name}</h3>
                                    <p className="text-gray-500 dark:text-zinc-400 text-sm mb-4">{item.description}</p>
                                    <button className="w-full py-3 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 font-medium hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 hover:text-white transition-all duration-300">
                                        Add to Order
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View Full Menu Button */}
                    <div className="text-center mt-12">
                        <Link to="/menu">
                            <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
                                Discover Entire Menu <Icon icon="mdi:arrow-right" width="20" height="20" className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>


            {/* Happy Hours Section */}
            <section className="py-24 px-5 bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950">
                <div className="max-w-screen-xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 md:p-16">
                        {/* Decorations */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-20">
                            <Icon icon="mdi:glass-wine" width="200" height="200" />
                        </div>

                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div className="text-white">
                                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-white/20 border border-white/30">Wednesdays Special</span>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-4">Happy Hours!</h2>
                                <p className="text-xl text-white/90 mb-4">Half Price Bottles of Wine and Six Tasty Lunches for $9</p>
                                <p className="text-white/70 mb-8">Join us every Wednesday for our special happy hours. Enjoy premium wines at half price and exclusive lunch deals that will tantalize your taste buds.</p>

                                <div className="flex flex-wrap gap-4">
                                    <Link to="/menu">
                                        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-amber-600 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                                            <Icon icon="mdi:glass-wine" width="20" height="20" /> View Wine List
                                        </button>
                                    </Link>
                                    <Link to="/book-table">
                                        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 text-white font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300">
                                            <Icon icon="mdi:calendar-check" width="20" height="20" /> Book for Wednesday
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Time Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                                    <Icon icon="mdi:clock-start" className="text-white mx-auto mb-3" width="32" height="32" />
                                    <p className="text-white/70 text-sm">Starts At</p>
                                    <p className="text-2xl font-bold text-white">4:00 PM</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                                    <Icon icon="mdi:clock-end" className="text-white mx-auto mb-3" width="32" height="32" />
                                    <p className="text-white/70 text-sm">Ends At</p>
                                    <p className="text-2xl font-bold text-white">8:00 PM</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                                    <Icon icon="mdi:percent" className="text-white mx-auto mb-3" width="32" height="32" />
                                    <p className="text-white/70 text-sm">Wine Discount</p>
                                    <p className="text-2xl font-bold text-white">50% OFF</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                                    <Icon icon="mdi:food" className="text-white mx-auto mb-3" width="32" height="32" />
                                    <p className="text-white/70 text-sm">Lunch Special</p>
                                    <p className="text-2xl font-bold text-white">$9</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonials Section */}
            <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
                <Carasoul />
            </section>


            {/* CTA Section */}
            <section className="py-24 px-5 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Ready to Experience <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Fresco</span>?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Book your table today and indulge in an unforgettable Italian dining experience.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/book-table">
                            <button className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <Icon icon="mdi:calendar-check" width="20" height="20" />  Reserve Your Table
                            </button>
                        </Link>
                        <a href="tel:+919876543210">
                            <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm text-white font-semibold border border-white/20 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300">
                                <Icon icon="mdi:phone" width="20" height="20" /> Call Us Now
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Discover;


const menuItems = [
    { name: 'Ham and Fontina', description: 'Roasted eggplant spread, marinated tomatoes with fresh herbs.', price: '29.5', icon: 'mdi:food-steak', popular: true },
    { name: 'Chicken Italiano', description: 'Tristique perferen possimus neque fermentum vel with special sauce.', price: '11', icon: 'mdi:food-drumstick', popular: false },
    { name: 'Spaghetti Delle', description: 'Rustic baguette toasted with herb-garlic butter & parmesan.', price: '28', icon: 'mdi:pasta', popular: true },
    { name: 'Crumbled Sausage', description: 'Natural unpressed ham, fontina, provolone, aioli, fresh tomato.', price: '12.5', icon: 'mdi:sausage', popular: false },
    { name: 'Baked Meatballs', description: 'Handmade meatballs baked in savory marinara with melted cheese.', price: '32.5', icon: 'mdi:food-variant', popular: true },
    { name: 'Margherita Pizza', description: 'Classic Italian pizza with fresh mozzarella and basil leaves.', price: '24', icon: 'mdi:pizza', popular: false },
];

const testimonials = [
    { description: 'The ambiance and food quality exceeded all my expectations. A truly authentic Italian experience!', name: 'Michael Gove' },
    { description: 'Best pasta I have ever tasted outside of Italy. The staff was incredibly welcoming and attentive.', name: 'Imogen Poots' },
    { description: 'Perfect place for a romantic dinner. The wine selection is outstanding and reasonably priced.', name: 'Jack Huston' },
    { description: 'We celebrate every family occasion here. The food is consistently excellent every single time.', name: 'Emma Thompson' },
    { description: 'The happy hour deals are unbeatable! Great wine and delicious appetizers at amazing prices.', name: 'Mark Strong' },
    { description: 'From the moment we walked in, we felt like family. The tiramisu is absolutely divine!', name: 'Kate Winslet' },
];
