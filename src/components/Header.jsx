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
    const toggleList = () => { setIsOpen(!isOpen); };

    useEffect(() => {
        window.scrollTo(0, 0);
        const clickOutsideNav = (e) => {
            if (listRef.current && !listRef.current.contains(e.target)) setIsOpen(false);
        };

        if (isOpen) document.addEventListener("mousedown", clickOutsideNav);
        return () => document.removeEventListener("mousedown", clickOutsideNav);

    }, [isOpen, location.pathname, navigate]);

    return (
        <>
            <Toaster position="bottom-right" />
            <nav ref={listRef} className="poppins fixed bg-black/50 md:bg-transparent w-full z-50 top-0 start-0" style={{ backdropFilter: 'blur(5px)' }}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img className="w-16" src={require("../Images/Logo.png")} alt="Logo" />
                    </Link>
                    <div className="flex gap-2 md:order-2">
                        <div className="flex justify-center items-center gap-2 text-white">
                            {
                                user ?
                                    <button type="button" onClick={logout} className="relative bg-white/10 active:bg-white/20 rounded-lg p-2 border border-white/20 transition-all">
                                        <span className=""><Icon icon="solar:logout-outline" width="20" height="20"></Icon></span>
                                    </button> :
                                    <button type="button" onClick={googleAuth} className="relative bg-white/10 active:bg-white/20 rounded-lg p-2 border border-white/20 transition-all">
                                        <span className=""><Icon icon="flat-color-icons:google" width="20" height="20"></Icon></span>
                                    </button>
                            }

                            <button onClick={() => navigate("/cart")} type="button" className='order-2 relative bg-white/10 active:bg-white/20 rounded-lg p-[7px] border border-white/20 transition-all'>
                                <span className=""><Icon icon="mdi:trolley-outline" width="22" height="22"></Icon></span>
                                {user && <span className={`${cart?.[user?.$id]?.length < 1 ? "hidden" : "block"} absolute -top-2.5 -right-3 text-xs bg-red-600 rounded-full h-5 w-5 flex justify-center items-center`}>{cart?.[user?.$id]?.length || 0}</span>}
                            </button>

                            {/* setting button */}
                            {/* <button type="button" className="relative bg-white/10 active:bg-white/20 rounded-lg p-2 border border-white/20 transition-all">
                                <span className=""><Icon icon="uil:setting" width="20" height="20"></Icon></span>
                            </button> */}

                            <button onClick={toggleList} type="button" className="md:hidden relative bg-white/10 active:bg-white/20 rounded-lg p-2 border border-white/20 transition-all text-white" aria-controls="navbar-sticky" aria-expanded={isOpen}>
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {
                        user && <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-center gap-3 w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-1 text-sm text-center font-semibold bg-transparent md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 uppercase text-gray-400">
                                <li><Link to="/" className={`block hover:bg-slate-400 sm:bg-transparent sm:hover:bg-transparent px-3 py-2 mt-2 lg:mt-0 rounded-md w-full hover:text-white ${location.pathname === '/' ? 'text-white bg-slate-400 sm:bg-transparent' : 'text-gray-300'}`}>Home</Link></li>
                                <li><Link to="/about" className={`block hover:bg-slate-400 sm:bg-transparent sm:hover:bg-transparent px-3 py-2 mt-2 lg:mt-0 rounded-md w-full hover:text-white ${location.pathname === '/about' ? 'text-white bg-slate-400 sm:bg-transparent' : 'text-gray-300'}`}>About</Link></li>
                                <li><Link to="/menu" className={`block hover:bg-slate-400 sm:bg-transparent sm:hover:bg-transparent px-3 py-2 mt-2 lg:mt-0 rounded-md w-full hover:text-white ${location.pathname === '/menu' ? 'text-white bg-slate-400 sm:bg-transparent' : 'text-gray-300'}`}>Menu</Link></li>
                                <li className='group px-3 py-1.5 mt-2 lg:mt-0 focus:text-white rounded-md w-full relative block text-gray-300 hover:text-white'>
                                    <span className='flex justify-center items-center'>Resources <Icon icon="iconamoon:arrow-down-2" width="24" height="24"></Icon></span>
                                    <div className="hidden group-hover:flex justify-start text-start items-start gap-2 flex-col w-full sm:w-80 absolute right-0 top-[36px] sm:top-9 z-10 bg-black/50 p-4 rounded-lg border border-gray-600" style={{ backdropFilter: "blur(5px)" }}>
                                        <Link to="/discover" className={`block text-gray-400 hover:text-white hover:bg-slate-400 px-3 py-2 mt-2 lg:mt-0 rounded-md w-full ${location.pathname === '/discover' ? 'text-white bg-slate-400' : 'text-gray-400'}`}>Discover</Link>
                                        <Link to="/book-table" className={`block text-gray-400 hover:text-white hover:bg-slate-400 px-3 py-2 mt-2 lg:mt-0 rounded-md w-full ${location.pathname === '/book-table' ? 'text-white bg-slate-400' : 'text-gray-400'}`}>Book Table</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </nav>
        </>
    );
}

export default Header;