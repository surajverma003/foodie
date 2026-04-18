import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import myContext from '../context/myContext';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const listRef = useRef();

    const context = useContext(myContext);
    const { user, cart, Toaster, googleAuth, logout } = context;

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const toggleList = () => setIsOpen(!isOpen);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle dark mode
    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const clickOutsideNav = (e) => {
            if (listRef.current && !listRef.current.contains(e.target)) setIsOpen(false);
        };

        if (isOpen) document.addEventListener("mousedown", clickOutsideNav);
        return () => document.removeEventListener("mousedown", clickOutsideNav);
    }, [isOpen, location.pathname, navigate]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/menu', label: 'Menu' },
    ];

    const resourceLinks = [
        { path: '/discover', label: 'Discover', icon: 'mdi:compass' },
        { path: '/book-table', label: 'Book Table', icon: 'mdi:table-chair' },
    ];

    const cartCount = cart?.[user?.$id]?.length || 0;

    return (
        <>
            <Toaster position="bottom-right" />
            <nav ref={listRef} className={`poppins fixed w-full z-50 top-0 start-0 transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-zinc-900/80 shadow-lg shadow-black/5 dark:shadow-black/20' : 'bg-transparent'}`} style={{ backdropFilter: scrolled ? 'blur(20px)' : 'blur(5px)' }}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                            <img className="relative w-12 h-12 object-contain" src="./Images/Logo.png" alt="Logo" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent hidden sm:block">Feane</span>
                    </Link>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 md:order-2">

                        {/* Theme Toggle */}
                        <button onClick={() => setDarkMode(!darkMode)} className="relative p-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 border border-gray-200 dark:border-zinc-700 transition-all duration-300 hover:scale-105" >
                            {darkMode ? (
                                <Icon icon="line-md:sun-rising-loop" className="text-amber-400" width="20" height="20" />) : (
                                <Icon icon="line-md:moon-rising-loop" className="text-zinc-700" width="20" height="20" />
                            )}
                        </button>

                        {/* Cart Button */}
                        {
                            user &&
                            <button onClick={() => navigate("/cart")} className="relative p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-amber-500/30 transition-all duration-300 hover:scale-105" >
                                <Icon icon="mdi:cart-outline" width="20" height="20" />
                                {user && cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs font-bold bg-red-500 text-white rounded-full border-2 border-white dark:border-zinc-900">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        }

                        {/* Auth Button */}
                        {user ? (
                            <button onClick={logout} className="relative p-2.5 rounded-xl bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 border border-red-200 dark:border-red-800 transition-all duration-300 hover:scale-105 group">
                                <Icon icon="solar:logout-outline" className="text-red-500" width="20" height="20" />
                            </button>
                        ) : (
                            <button onClick={googleAuth} className="relative p-2.5 rounded-xl bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 border border-gray-200 dark:border-zinc-700 shadow-sm transition-all duration-300 hover:scale-105">
                                <Icon icon="flat-color-icons:google" width="20" height="20" />
                            </button>
                        )}

                        {/* Mobile Menu Button */}
                        <button onClick={toggleList} className="md:hidden relative p-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 border border-gray-200 dark:border-zinc-700 transition-all duration-300">
                            <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} className="text-gray-700 dark:text-white" width="20" height="20" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    {user && (
                        <div className={`${isOpen ? 'block' : 'hidden'} md:flex items-center w-full md:w-auto md:order-1 mt-4 md:mt-0`}>
                            <ul className="flex flex-col md:flex-row items-center gap-2 p-4 md:p-0 rounded-2xl bg-white/90 dark:bg-zinc-900/90 md:bg-transparent md:dark:bg-transparent border border-gray-200 dark:border-zinc-800 md:border-none">

                                {navLinks.map((link) => (
                                    <li key={link.path} className="w-full">
                                        <Link to={link.path} onClick={() => setIsOpen(false)} className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${location.pathname === link.path ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800'}`}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}

                                {/* Resources Dropdown */}
                                <li className="relative group w-full">
                                    <button className="flex justify-between items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-300 w-full">
                                        Resources <Icon icon="mdi:chevron-down" className="group-hover:rotate-180 transition-transform duration-300" width="20" height="20" />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div className="hidden group-hover:block absolute top-full left-0 mt-0 w-56 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 overflow-hidden">
                                        <div className="p-2">
                                            {resourceLinks.map((link) => (
                                                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${location.pathname === link.path ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800'}`}>
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${location.pathname === link.path ? 'bg-amber-100 dark:bg-amber-900/30' : 'bg-gray-100 dark:bg-zinc-800'}`}>
                                                        <Icon icon={link.icon} className={location.pathname === link.path ? 'text-amber-500' : 'text-gray-500 dark:text-gray-400'} width="18" height="18" />
                                                    </div>
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Header;
