import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [user] = useState(JSON.parse(window.localStorage.getItem("userDetails")) || null);

    useEffect(() => {}, [user]);

    return (
        <>
            <footer className={`poppins bg-slate-800 text-neutral-300 w-full h-full py-32 px-5`}>
                <div className="max-w-screen-xl mx-auto ">
                    <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-20 lg:gap-10">
                        <div className="flex flex-col items-center text-center">
                            <h2 className="dancing text-3xl">Contact Us</h2>
                            <ul className='flex flex-col gap-1 mt-5 text-[14px] sm:text-[17px]'>
                                <li className='flex justify-center items-center gap-1'><span className=""><Icon icon="mdi:location" width="20" height="20"></Icon></span>Location</li>
                                <li className='flex justify-center items-center gap-1'><span className=""><Icon icon="fluent:call-28-filled" width="20" height="20"></Icon></span>Call +91 9876543210</li>
                                <li className='flex justify-center items-center gap-1'><span className=""><Icon icon="ic:baseline-email" width="20" height="20"></Icon></span>example@gmail.com</li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <h2 className="dancing text-3xl">Feane</h2>
                            <ul className='flex flex-col justify-start items-center gap-1 mt-5 text-[14px] sm:text-[17px]'>
                                <li style={{ wordBreak: 'break-word', lineHeight: '28px' }} className=''>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</li>
                                <li className='flex justify-start items-center gap-2 mt-5'>
                                    <span className='p-2 bg-yellow-600 text-neutral-100 hover:text-white rounded-lg hover:scale-110'><Icon icon="ri:facebook-fill" width="20" height="20"></Icon></span>
                                    <span className='p-2 bg-yellow-600 text-neutral-100 hover:text-white rounded-lg hover:scale-110'><Icon icon="ri:instagram-fill" width="20" height="20"></Icon></span>
                                    <span className='p-2 bg-yellow-600 text-neutral-100 hover:text-white rounded-lg hover:scale-110'><Icon icon="ri:whatsapp-fill" width="20" height="20"></Icon></span>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center">
                            <h2 className="dancing text-3xl">Opening Hours</h2>
                            <ul className='flex flex-col gap-1 mt-5 text-[14px] sm:text-[17px]'>
                                <li className='flex justify-center items-center gap-1'><span><Icon icon="mingcute:time-fill" width="20" height="20"></Icon></span>Everyday</li>
                                <li>10.00 am - 10.00 pm</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-20 lg:mt-16 text-[12px] sm:text-[17px]">
                        <p className="mt-3">© 2024 All Rights Reserved By Free Html Templates</p>
                        <p className="mt-3">© Distributed By ThemeWagon</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
