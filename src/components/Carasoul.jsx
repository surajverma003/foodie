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
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    

    const btnClickAuto = () => {
        const btn = document.querySelector('.slick-next');
        setInterval(() => {
            btn.click();
        }, 5000);
    }

    useEffect(() => {
        btnClickAuto();
    }, [])

    return (
        <section className='poppins py-10 px-5'>
            <h1 className="dancing text-4xl sm:text-5xl text-center text-white">What Says Our Customers</h1>
            <div className='max-w-screen-xl mx-auto slider-container mt-10 mb-20'>
                <Slider {...settings}>
                    {
                        object.map((element, index) => {
                            return (
                                <div id='mycarasoul' className="" key={index} >
                                    <div className="block mx-auto p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700">
                                        <p className="font-normal text-sm sm:text-[18px] sm:leading-snug text-gray-400 mb-3">{element?.description}</p>
                                        <h5 className="my-2 text-sm sm:text-xl tracking-tight text-gray-300">{element?.name}</h5>
                                        <h5 className="mb-2 text-xs sm:text-sm tracking-tight text-gray-300">{element?.lastname}</h5>
                                    </div>
                                    <div className="relative w-fit my-10">
                                        <img className='w-28 border-[5px] border-yellow-500 rounded-full' src={element.image} alt="" />
                                        <span className='absolute left-12 -top-4 text-yellow-500'><Icon icon="bxs:up-arrow" width="24" height="24"></Icon></span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    );
}

export default Carasoul;


const object = [
    {
        name: "Moana Michell",
        lastname: "magna kulpa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image : require("../Images/client/client1.jpg")
    },
    {
        name: "Mike Hamell",
        lastname: "magna aliqua",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image : require("../Images/client/client2.jpg")
    },
    {
        name: "Mike Hamell",
        lastname: "magna aliqua",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image : require("../Images/client/client3.png")
    },
    {
        name: "Mike Hamell",
        lastname: "magna aliqua",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image : require("../Images/client/client4.png")
    },
    {
        name: "Mike Hamell",
        lastname: "magna aliqua",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image : require("../Images/client/client5.jpg")
    }
]

