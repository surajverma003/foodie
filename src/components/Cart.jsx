import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import myContext from '../context/myContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const context = useContext(myContext);
    const { cart, user, removeAllItemsFromCart, removeFromCart } = context;
    const deliveryCharge = 80;

    const userCart = useMemo(() => {
        return cart[user?.$id] || [];
    }, [cart, user?.$id]);

    const totalPrice = useCallback(() => {
        return userCart.reduce((acc, item) => acc + Number(item.price), 0);
    }, [userCart]);

    const discount = (totalPrice() * 0.15).toFixed(2);
    useEffect(() => { }, [totalPrice]);

    return (
        <div className="poppins bg-slate-900 text-white py-24 sm:py-32 px-5">
            <aside className="max-w-screen-lg mx-auto">
                <div className="h-full overflow-y-auto chrome-scrollbar">

                    <div className="flex justify-between items-center gap-1 border-y border-gray-700 py-1 md:py-3">
                        <div className="flex items-center">
                            <Link to="/menu" className="text-gray-400 hover:text-white">
                                <Icon icon="ri:arrow-drop-left-line" width="40" height="40" />
                            </Link>
                            <p className="font-semibold text-sm md:text-[18px]">Continue Ordering</p>
                        </div>

                        <button type="button" onClick={removeAllItemsFromCart} className='text-gray-400 hover:text-white'>
                            <Icon icon="pajamas:remove-all" width="17" height="17" />
                        </button>
                    </div>

                    {
                        userCart && userCart.length > 0 ? userCart.slice().reverse().map((menu, index) => {
                            return (
                                <div key={index} className="hover:bg-slate-800/20">
                                    <div className="flex justify-between items-center gap-10 h-full py-6">
                                        <div className="flex gap-4 items-center h-full">
                                            <img className="w-12 sm:w-20 rounded-xl" src={menu.image} alt="" />
                                            <div className="text-[10px] sm:text-sm">
                                                <p className="font-semibold mb-1">{menu.heading}</p>
                                                <p className="text-gray-400 md:w-full">{menu.para}</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center gap-3 w-24 h-full">
                                            <p className="text-sm sm:text-xl font-semibold w-10">${menu.price}</p>
                                            <span onClick={() => removeFromCart(menu)} className="text-gray-400 hover:text-white">
                                                <Icon icon="material-symbols:close" width="24" height="24" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        }) : (
                            <img className="mx-auto w-40 sm:w-96 mt-20 sm:mt-10" src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="empty cart!" />
                        )
                    }
                </div>

                <div className="max-w-screen-xl mx-auto mt-20 text-sm md:text-[18px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                        <div className="order-1 md:order-first">
                            <h1 className="text-xl md:text-2xl mb-4">Cart Totals</h1>

                            <p className="flex justify-between items-center border-b border-gray-700 py-3">
                                <span>Total Price</span>
                                <span>${totalPrice().toFixed(2)}</span>
                            </p>

                            <p className="flex justify-between items-center border-b border-gray-700 py-3">
                                <span>Delivery Charges</span>
                                <span>${userCart.length === 0 ? "0.00" : deliveryCharge.toFixed(2)}</span>
                            </p>

                            <p className="flex justify-between items-center border-b border-gray-700 py-3">
                                <span>Discount</span>
                                <span>${discount}</span>
                            </p>

                            <p className="flex justify-between items-center py-3">
                                <span>Total</span>
                                <span>${userCart.length === 0 ? "0.00" : ((totalPrice() + deliveryCharge) - discount).toFixed(2)}</span>
                            </p>

                            <button className="px-4 py-2.5 bg-yellow-600 active:bg-yellow-700 mt-5">Proceed to checkout</button>
                        </div>

                        <div>
                            <p>Have coupon ?</p>
                            <form className="flex mt-3" onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Coupon code" className="w-full px-4 py-2.5 bg-slate-800 outline-none lowercase" />
                                <button type="submit" className="bg-black w-28 px-4 py-2.5">Apply</button>
                            </form>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Cart;
