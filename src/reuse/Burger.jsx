import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Burger = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000, // 7 seconds
    };

    return (
        <>
            <section className='poppins slider-container text-white'>
                <div className='mainDiv mt-10 mb-20 mx-auto'>
                    <Slider {...settings}>
                        {
                            restaurant.map((element, index) => {
                                return (
                                    <div key={index} className="block w-full p-6 rounded-lg shadow">
                                        <h5 className="dancing mb-2 text-3xl sm:text-5xl font-bold tracking-tight">{element?.name}</h5>
                                        <p className="font-normal text-xs sm:text-xl my-5 text-gray-300">{element?.description}</p>
                                        <Link to="/menu">
                                            <button type="button" className='bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 mx-auto lg:mx-0'>Order Now</button>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Burger

const restaurant = [
    {
        "name": "Food Delivered Fast",
        "description": "Order your favorite meals online from top restaurants near you. Fast delivery, easy payments, and delicious food in just a few clicks away."
    },
    {
        "name": "Crave. Click. Eat",
        "description": "Craving something tasty? Browse menus, pick your favorites, and get hot, fresh food delivered right to your doorstep. Yum made easy!"
    },
    {
        "name": "Your Hunger, Our Priority",
        "description": "A seamless food ordering experience—discover top-rated restaurants, track your order live, and enjoy fast, reliable delivery, anytime, anywhere."
    }
]
