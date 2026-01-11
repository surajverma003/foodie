import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const About = () => {
    const location = useLocation();

    return (
        <section className={`text-white ${location.pathname === '/' ? 'py-5 px-5 bg-slate-800' : 'py-20 px-5 bg-slate-900'}`}>
            <div className="max-w-screen-lg mx-auto">

                <div className="py-5 sm:py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-20 max-w-screen-lg mx-auto">
                        <img className='w-60 md:w-full mx-auto order-2 md:order-1' src={require("../Images/about-img.png")} alt="" />
                        <div className="">
                            <h1 className="text-3xl sm:text-5xl dancing mb-3">We Are Feane</h1>
                            <p className="text-xs sm:text-[18px] sm:leading-snug">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
                            <Link to="/about"><button type="button" className='text-xs sm:text-[18px] bg-yellow-500 hover:bg-yellow-700 px-4 py-3 mt-5 w-40 rounded-3xl transition-all'>About Us</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
