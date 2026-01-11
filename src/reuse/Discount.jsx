import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const Discount = () => {
    return (
        <section className='text-white bg-slate-8 00 p-5 lg:py-20'>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                {
                    discount.map((discount, index) => {
                        return (
                            <div key={index} className="block lg:flex justify-start items-center gap-5 p-7 bg-[#222831] rounded-3xl">
                                <img className='w-44 mx-auto lg:mx-0 rounded-full border-4 border-yellow-500 object-cover' src={discount.image} alt="" />
                                <div className="mt-5 text-center lg:text-start">
                                    <h2 className="dancing text-4xl lg:text-2xl">{discount.heading}</h2>
                                    <h1 className="dancing text-3xl sm:text-5xl my-4">{discount.discount} <span className='text-xl'>off</span></h1>
                                    <Link to="/menu">
                                        <button type="button" className='flex justify-center items-center gap-2 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 mx-auto lg:mx-0'>
                                            <span className='text-xs sm:text-[18px]'>Order Now</span>
                                            <span><Icon icon="mdi:trolley" width="20" height="20"></Icon></span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Discount



const discount = [
    {
        "heading": "Tasty Thursdays",
        "discount": "20%",
        "image": require("../Images/o/o1.jpg")
    },
    {
        "heading": "Pizza Days",
        "discount": "15%",
        "image": require("../Images/o/o2.jpg")
    }
]
