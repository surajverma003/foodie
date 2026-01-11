import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Icon } from '@iconify/react/dist/iconify.js';
import myContext from '../context/myContext';

const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const context = useContext(myContext);
    const { cart, addIntoCart, removeFromCart, user } = context;

    const [category, setCategory] = useState('All');
    const [load, setLoad] = useState("hidden");

    const highlight = (e) => {
        setCategory(e.target.innerText);
        removeBg();
        e.target.style.background = '#475569';
    };

    const removeBg = () => {
        const categories = ['all', 'burger', 'pizza', 'pasta', 'fries'];
        categories.forEach(cat => {
            document.getElementById(cat).style.background = 'transparent';
        });
    };

    const loadItems = () => {
        if (location.pathname === "/") {
            setLoad("block");

            setTimeout(() => {
                setLoad("hidden");
                navigate("/menu");
            }, 2000);
        }
    };

    const userCart = cart[user?.$id] || [];

    useEffect(() => { }, [location.pathname, cart]);

    return (
        <section className={`text-white ${location.pathname === '/' ? 'py-20 px-5' : 'py-20 md:py-40 px-5'}`}>
            <h1 className="dancing text-5xl text-center">Our Menu</h1>

            <ul className='max-w-screen-sm mx-auto grid grid-cols-1 sm:grid-cols-5 justify-center items-center gap-2 sm:gap-7 text-sm sm:text-[17px] font-semibold my-10'>
                <li onClick={highlight} className='bg-slate-600 px-5 py-2 rounded-3xl text-center' id='all'>All</li>
                <li onClick={highlight} className='px-5 py-2 rounded-3xl text-center' id='burger'>Burger</li>
                <li onClick={highlight} className='px-5 py-2 rounded-3xl text-center' id='pizza'>Pizza</li>
                <li onClick={highlight} className='px-5 py-2 rounded-3xl text-center' id='pasta'>Pasta</li>
                <li onClick={highlight} className='px-5 py-2 rounded-3xl text-center' id='fries'>Fries</li>
            </ul>

            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    menu?.filter(menu => (
                        category === 'All' || menu.heading.includes(category)
                    )).slice(0, location.pathname !== "/menu" ? 6 : menu.length).map((menu, index) => {
                        const isInCart = userCart.find(item => item.heading === menu.heading);

                        return (
                            <div key={index} className="border border-transparent rounded-2xl overflow-hidden bg-[#222831] h-full">
                                <div className="menuDiv bg-slate-600 h-60 w-full flex justify-center items-center rounded-es-[45px] rounded-ee-[45px]">
                                    <img className='w-44 transition-all select-none' src={menu.image} alt={menu.heading} />
                                </div>
                                <div className="flex flex-col justify-between p-5 h-fit sm:h-[12rem]">
                                    <div>
                                        <h1 className="text-[18px] sm:text-[20px] mb-2 select-none font-semibold">{menu.heading}</h1>
                                        <p className="text-xs sm:text-[15px] sm:leading-snug select-none text-neutral-300">{menu.para}</p>
                                    </div>

                                    <div className="flex justify-between items-center mt-6">
                                        <span className="text-[18px] md:text-[22px] font-semibold">${menu.price}</span>
                                        <span onClick={() => {
                                            isInCart ? removeFromCart(menu) : addIntoCart(menu);
                                        }} className='flex gap-1 p-2 rounded-md hover:scale-110 cursor-pointer'>
                                            {
                                                isInCart ?
                                                    <span className="text-white"><Icon icon="gg:remove" width="22" height="22" /></span> :
                                                    <span className="text-yellow-600"><Icon icon="gg:add" width="22" height="22" /></span>
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <center>
                <button onClick={loadItems} type="button" className={`flex justify-center items-center ${location.pathname !== "/" ? "hidden" : "block"} text-xs sm:text-[18px] bg-yellow-500 hover:bg-yellow-700 focus:bg-yellow-700 px-4 py-3 mt-10 w-40 rounded-3xl transition-all`}>
                    <span className={`${load !== "hidden" ? "hidden" : "block"}`}>View More</span>
                    <span className={`${load}`}>
                        <Icon icon="svg-spinners:ring-resize" width="24" height="24" />
                    </span>
                </button>
            </center>
        </section>
    );
};

export default Menu;


const menu = [
    {
        heading: 'Cheese Pizza',
        para: 'Loaded with rich mozzarella and a crispy base, perfect for cheese lovers.',
        image: require("../Images/menu/f1.png"),
        price: '12'
    },
    {
        heading: 'Veggie Burger',
        para: 'A healthy mix of fresh veggies and sauces packed in a soft bun.',
        image: require("../Images/menu/f2.png"),
        price: '8'
    },
    {
        heading: 'Crown Crust Pizza',
        para: 'Special crown crust with cheesy bites on the edges, a royal treat.',
        image: require("../Images/menu/f3.png"),
        price: '14'
    },
    {
        heading: 'Delicious Pasta',
        para: 'Creamy and flavorful pasta tossed with herbs and spices.',
        image: require("../Images/menu/f4.png"),
        price: '11'
    },
    {
        heading: 'French Fries',
        para: 'Crispy golden fries, perfect companion for any meal.',
        image: require("../Images/menu/f5.png"),
        price: '5'
    },
    {
        heading: 'Veg Pizza',
        para: 'Topped with fresh veggies, olives, and a layer of cheese.',
        image: require("../Images/menu/f6.png"),
        price: '10'
    },
    {
        heading: 'Tasty Burger',
        para: 'Juicy patty with flavorful sauces, a delight in every bite.',
        image: require("../Images/menu/f7.png"),
        price: '9'
    },
    {
        heading: 'Chicken Burger',
        para: 'Tender chicken patty grilled to perfection with spicy mayo.',
        image: require("../Images/menu/f8.png"),
        price: '13'
    },
    {
        heading: 'Macaroni Pasta',
        para: 'Classic macaroni in creamy cheese sauce, a comforting meal.',
        image: require("../Images/menu/f9.png"),
        price: '10'
    },
    {
        heading: 'Tomato Pizza',
        para: 'Zesty tomato sauce and herbs baked on a soft pizza base.',
        image: require("../Images/menu/f10.png"),
        price: '11'
    },
    {
        heading: 'Chicken Pizza',
        para: 'Loaded with spicy chicken chunks and melting cheese.',
        image: require("../Images/menu/f11.png"),
        price: '15'
    },
    {
        heading: 'Burger King',
        para: 'A king-sized burger with double patty and loaded toppings.',
        image: require("../Images/menu/f12.png"),
        price: '10'
    },
    {
        heading: 'Tasty Beef Burger',
        para: 'Savory beef patty grilled and served with BBQ sauce.',
        image: require("../Images/menu/f13.png"),
        price: '16'
    },
    {
        heading: 'Juicy Burger',
        para: 'Tender and juicy burger that satisfies your cravings.',
        image: require("../Images/menu/f14.png"),
        price: '12'
    },
    {
        heading: 'Burger',
        para: 'Classic burger with fresh lettuce, tomato and sauce.',
        image: require("../Images/menu/f15.png"),
        price: '9'
    },
    {
        heading: 'Veg Burger',
        para: 'Crispy veggie patty served with mayo and crunchy lettuce.',
        image: require("../Images/menu/f16.png"),
        price: '8'
    },
    {
        heading: 'Cheese and Chicken Pizza',
        para: 'A cheesy explosion topped with spicy chicken chunks.',
        image: require("../Images/menu/f17.png"),
        price: '16'
    },
    {
        heading: 'Steak Fries',
        para: 'Thick-cut fries with a crispy outer and soft inside.',
        image: require("../Images/menu/f18.png"),
        price: '7'
    },
    {
        heading: 'Natural Cut Fries',
        para: 'Freshly sliced and fried to golden perfection.',
        image: require("../Images/menu/f19.png"),
        price: '6'
    },
    {
        heading: 'Bacon Onion Pizza',
        para: 'Smoky bacon and caramelized onions on cheesy crust.',
        image: require("../Images/menu/f20.png"),
        price: '18'
    },
    {
        heading: 'Delicious Fries',
        para: 'Simple yet tasty fries with seasoning and crunch.',
        image: require("../Images/menu/f21.png"),
        price: '6'
    },
    {
        heading: 'Belgian Fries',
        para: 'Thick Belgian-style fries with a hint of spice.',
        image: require("../Images/menu/f22.png"),
        price: '7'
    },
    {
        heading: 'Sweet Potato Fries',
        para: 'Sweet and crispy fries for a unique snack experience.',
        image: require("../Images/menu/f23.png"),
        price: '8'
    },
    {
        heading: 'Waffle Fries',
        para: 'Waffle-cut potatoes deep fried till golden brown.',
        image: require("../Images/menu/f24.png"),
        price: '9'
    },
    {
        heading: 'Shoestring Fries',
        para: 'Thin, crispy and full of flavor – the perfect munch.',
        image: require("../Images/menu/f25.png"),
        price: '6'
    },
    {
        heading: 'Veggie Cheese Burger',
        para: 'Stuffed with veggies and cheese, full of flavor.',
        image: require("../Images/menu/f26.png"),
        price: '11'
    },
    {
        heading: 'Fried Chicken Burger',
        para: 'Crispy fried chicken with lettuce and tangy sauce.',
        image: require("../Images/menu/f27.webp"),
        price: '17'
    },
];

