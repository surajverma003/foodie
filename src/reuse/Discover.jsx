import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Discover = () => {
    return (
        <>
            <section className="bg-burger text-white pt-48 h-screen px-5 sm:px-10">
                <div className="flex justify-between items-center gap-10 max-w-screen-xl mx-auto">
                    <img className='hidden md:flex' src={require("../Images/fork-free-img.png")} alt="fork-free-img" />
                    <div className="text-center flex-1">
                        <img className='mx-auto' src={require("../Images/frill-free-img.png")} alt="frill-free-img" />
                        <h1 className="berkshire text-5xl md:text-[9.725rem] mt-10 mb-5 md:mb-0 md:mt-0">Fresco.</h1>
                        <h5 className="text-3xl">Italian Specialities</h5>
                        <div className="relative py-6">
                            <h5 className="text-3xl mx-auto bg-transparent px-6 w-fit">Good Food | Fast Food</h5>
                            <hr className='border-[1.5px] absolute top-1/2 -z-10 w-full' />
                        </div>
                    </div>
                    <img className='hidden md:flex' src={require("../Images/knife-free-imge.png")} alt="" />
                </div>
            </section >


            <section className='poppins bg-fower w-full h-full bg-slate-900 text-white pt-10 sm:pt-20 py-20 px-5 sm:px-10'>
                <div className="w-full h-full ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 max-w-screen-xl mx-auto">
                        <div className="ps-0 p-10 pt-0 sm:pt-10">
                            <p className="berkshire text-xl">Country's Most Loved!</p>
                            <h2 className="berkshire text-4xl my-3">Welcome</h2>
                            <p className="raleway text-2xl sm:text-3xl">We Are Locally Crafted Food & Wine Serving Since 1978.</p>
                            <p className="text-[16px] mt-4 mb-6 text-slate-500">Congue, gravida. Placeat nibh sunt semper elementum anim! Integer lectus debitis auctor. Molestias vivamus eligendi ut, cupidatat nisl iaculis etiam! Laboris aenean .</p>
                            <button type="button" className="group flex justify-center items-center gap-2 bg-orange-500 active:bg-orange-700 text-white rounded-3xl transition-all w-fit sm:w-80 px-10 py-2 sm:py-3 text-xs sm:text-[16px] font-semibold sm:font-normal">
                                <span>More About Us</span>
                                <span className="relative top-0 left-0 transition-all group-hover:left-2" style={{ display: 'inline-block' }}>
                                    <Icon icon="cuida:arrow-right-outline" width="auto" height="auto" />
                                </span>
                            </button>
                        </div>
                        <div style={{ background: `url(${require("../Images/Pizza-slice.jpg")}) no-repeat center 10%/cover` }} className="flower-img-1 w-full h-96 md:w-full md:h-full"></div>
                        <div style={{ background: `url(${require("../Images/food-table-meet.jpg")}) no-repeat center 10%/cover` }} className="flower-img-2 w-full h-96 md:w-full md:h-full"></div>
                    </div>



                    <div className="max-w-screen-md mx-auto text-center pt-36">
                        <img className='mx-auto' src={require("../Images/parcelli.png")} alt="" />
                        <h2 className="berkshire text-4xl my-3 mx-auto">Our Menu</h2>
                        <p className="raleway text-3xl">Quality Ingredients, Tasty Meals</p>
                        <p className="text-[16px] mt-4 mb-6 text-slate-500">Congue, gravida. Placeat nibh sunt semper elementum anim! Integer lectus debitis auctor. Molestias vivamus eligendi ut, cupidatat nisl iaculis etiam! Laboris aenean</p>
                    </div>
                </div>
            </section>




            <section className='bg-sweetHouse poppins text-white py-20 px-5 sm:px-10'>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center bg-transparent text-center mb-16">
                    <div className="flex justify-center items-center flex-col p-5 border-2 border-slate-600" style={{ backdropFilter: 'blur(10px)' }}>
                        <h3 className="text-2xl font-semibold">Ham and Fontina</h3>
                        <p className="text-sm sm:text-xl py-4 text-slate-400">Roasted eggplant spread, marinated tomatoes.</p>
                        <h1 className="raleway text-4xl">$29.5</h1>
                    </div>
                    <img className='w-full h-full object-cover' src={require("../Images/menuItems/Menu-item-1.jpg")} alt="" />
                    <div className="flex justify-center items-center flex-col p-5 border-2 border-slate-600" style={{ backdropFilter: 'blur(10px)' }}>
                        <h3 className="text-2xl font-semibold">Chicken Italiano</h3>
                        <p className="text-sm sm:text-xl py-4 text-slate-400">Tristique perferen possimus neque fermentum vel.</p>
                        <h1 className="raleway text-4xl">$11</h1>
                    </div>
                    <img className='w-full h-full object-cover'src={require("../Images/menuItems/Menu-item-2.jpg")} alt="" />
                    <div className="flex justify-center items-center flex-col p-5 border-2 border-slate-600" style={{ backdropFilter: 'blur(10px)' }}>
                        <h3 className="text-2xl font-semibold">Spaghetti Delle</h3>
                        <p className="text-sm sm:text-xl py-4 text-slate-400">Rustic baguette toasted with herb-garlic butter & parmesan</p>
                        <h1 className="raleway text-4xl">$28</h1>
                    </div>
                    <img className='w-full h-full object-cover' src={require("../Images/menuItems/Menu-item-3.jpg")} alt="" />
                    <div className="flex justify-center items-center flex-col p-5 border-2 border-slate-600" style={{ backdropFilter: 'blur(10px)' }}>
                        <h3 className="text-2xl font-semibold">Crumbled Sausage</h3>
                        <p className="text-sm sm:text-xl py-4 text-slate-400">Natural unpressed ham, fontina, provolone, aioli, fresh tomato</p>
                        <h1 className="raleway text-4xl">$12.5</h1>
                    </div>
                    <img className='w-full h-full object-cover' src={require("../Images/menuItems/Menu-item-4.jpg")} alt="" />
                    <div className="flex justify-center items-center flex-col p-5 border-2 border-slate-600 h-fit md:h-96" style={{ backdropFilter: 'blur(10px)' }}>
                        <h3 className="text-2xl font-semibold">Baked Meatballs</h3>
                        <p className="text-sm sm:text-xl py-4 text-slate-400">Our handmade meatballs baked in savory marinara with melted cheese</p>
                        <h1 className="raleway text-4xl">$32.5</h1>
                    </div>
                </div>

                <button type="button" className="group flex justify-center items-center gap-2 bg-orange-500 active:bg-orange-700 text-white rounded-3xl transition-all w-fit sm:w-80 px-10 py-2 sm:py-3 text-xs sm:text-[16px] font-semibold sm:font-normal mx-auto">
                    <span>Discover Entire Menu</span>
                    <span className="relative top-0 left-0 transition-all group-hover:left-2" style={{ display: 'inline-block' }}>
                        <Icon icon="cuida:arrow-right-outline" width="26" height="26" />
                    </span>
                </button>
            </section>



            <section className="text-white py-32 px-5 sm:px-10">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5">
                        <div className="h-96 md:h-full" style={{ background: `url(${require("../Images/pic34-free-img.jpg")}) no-repeat center center/cover` }}></div>
                        <div className="py-10 md:p-10">
                            <p className="berkshire text-xl">Wednesdays Means</p>
                            <h2 className="berkshire text-4xl my-5">Happy Hours!</h2>
                            <p className="raleway text-2xl sm:text-3xl">Half Price Bottles of Wine and Six Tasty Lunches for $9</p>
                            <p className="text-[16px] mt-4 mb-6 text-slate-500">Congue, gravida. Placeat nibh sunt semper elementum anim! Integer lectus debitis auctor. Nunc quisquam adipisicing leo, tempora ipsam pede nostrum. Turpis tempus fusce, sed, orci eligendi</p>
                            <button type="button" className="group flex justify-center items-center gap-2 bg-orange-500 active:bg-orange-700 text-white rounded-3xl transition-all w-fit sm:w-72 px-10 py-2 sm:py-3 text-xs sm:text-[16px] font-semibold sm:font-norma">
                                <span>Discover Entire Menu</span>
                                <span className="relative top-0 left-0 transition-all group-hover:left-2" style={{ display: 'inline-block' }}>
                                    <Icon icon="cuida:arrow-right-outline" width="26" height="26" />
                                </span>
                            </button>
                        </div>
                    </div>




                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-5 gap-y-16 mt-36">
                        {
                            admins.map((element, index) => {
                                return (
                                    <div key={index} className="">
                                        <img className="w-28 sm:w-32 rounded-full" src={element.image} alt="" />
                                        <h5 className="berkshire text-xl sm:text-2xl my-3">{element.description}</h5>
                                        <p className="text-slate-400">- {element.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Discover

const admins = [
    {
        description: '"Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque. Fuga reprehenderit quis.',
        name: 'Michael Gove',
        image: require("../Images/client/client1.jpg")
    },
    {
        description: '"Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque. Fuga reprehenderit quis.',
        name: 'Imogen Poots',
        image: require("../Images/client/client2.jpg")
    },
    {
        description: '"Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque. Fuga reprehenderit quis.',
        name: 'Jack Huston',
        image: require("../Images/client/client3.png")
    },
    {
        description: '"Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque. Fuga reprehenderit quis.',
        name: 'Emma Thompson',
        image: require("../Images/client/client4.png")
    },
    {
        description: '"Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque. Fuga reprehenderit quis.',
        name: 'Mark Strong',
        image: require("../Images/client/client5.jpg")
    },
    {
        description: '"Aliquip habitant ea suscipit ea varius cras habitasse ligula doloremque. Fuga reprehenderit quis.',
        name: 'Kate Winslet',
        image: require("../Images/client/client1.jpg")
    }
];
