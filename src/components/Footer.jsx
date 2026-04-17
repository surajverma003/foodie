import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle subscription
        setEmail('');
        alert('Thanks for subscribing!');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/menu', label: 'Our Menu' },
        { path: '/book-table', label: 'Book Table' },
    ];

    const socialLinks = [
        { icon: 'ri:facebook-fill', label: 'Facebook', href: '#' },
        { icon: 'ri:instagram-fill', label: 'Instagram', href: '#' },
        { icon: 'ri:twitter-x-fill', label: 'Twitter', href: '#' },
        { icon: 'ri:whatsapp-fill', label: 'WhatsApp', href: '#' },
    ];

    return (
        <footer className="poppins relative transition-colors duration-500 bg-gray-100 dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800">

            {/* Main Footer Content */}
            <div className="max-w-screen-xl mx-auto px-5 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="inline-flex items-center gap-3 mb-6">
                            <img className="w-12 h-12 object-contain" src="../Images/Logo.png" alt="Logo" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Feane</span>
                        </Link>
                        <p className="text-gray-600 dark:text-zinc-400 leading-relaxed mb-6">
                            Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words combined with love.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-2">
                            {socialLinks.map((social, index) => (
                                <a key={index} href={social.href} className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-zinc-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 flex items-center justify-center text-gray-600 dark:text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110" aria-label={social.label} >
                                    <Icon icon={social.icon} width="18" height="18" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path} className="group flex items-center gap-2 text-gray-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
                                        <Icon icon="mdi:chevron-right" className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" width="16" height="16" /> {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="flex items-start gap-3 text-gray-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                                        <Icon icon="mdi:map-marker" className="text-amber-500" width="20" height="20" />
                                    </div>
                                    <Link to="https://maps.app.goo.gl/Sc54TWUm2qXxeY597" target="_blank" className="pt-2">Near Chandni Chowk, New Delhi, India</Link>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                                        <Icon icon="mdi:phone" className="text-amber-500" width="20" height="20" />
                                    </div>
                                    <span>+91 9876543210</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@feane.com" className="flex items-center gap-3 text-gray-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                                        <Icon icon="mdi:email" className="text-amber-500" width="20" height="20" />
                                    </div>
                                    <span>suraj03@help.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Opening Hours</h4>
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-gray-200 dark:border-zinc-800">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                                    <Icon icon="mdi:clock" className="text-white" width="20" height="20" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">Everyday</p>
                                    <p className="text-sm text-gray-500 dark:text-zinc-400">We're open all week</p>
                                </div>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between py-2 border-b border-gray-100 dark:border-zinc-800">
                                    <span className="text-gray-600 dark:text-zinc-400">Morning</span>
                                    <span className="font-medium text-gray-900 dark:text-white">10:00 AM - 2:00 PM</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100 dark:border-zinc-800">
                                    <span className="text-gray-600 dark:text-zinc-400">Evening</span>
                                    <span className="font-medium text-gray-900 dark:text-white">5:00 PM - 10:00 PM</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="text-gray-600 dark:text-zinc-400">Weekend</span>
                                    <span className="font-medium text-green-500">Extended Hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 dark:border-zinc-800">
                <div className="max-w-screen-xl mx-auto px-5 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-500 dark:text-zinc-500 text-center md:text-left">
                            © {new Date().getFullYear()} <span className="text-amber-500 font-medium">Feane</span>. All Rights Reserved. || Suraj Verma
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-zinc-500">
                            <Link to="/term-conditions" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
                            <Link to="/term-conditions" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button onClick={scrollToTop} className="fixed bottom-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30 hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40" >
                <Icon icon="mdi:arrow-up" width="24" height="24" />
            </button>
        </footer>
    );
};

export default Footer;
