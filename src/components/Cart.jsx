import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import myContext from '../context/myContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { cart, user, removeAllItemsFromCart, removeFromCart } = context;
    const deliveryCharge = 80;
    const [couponCode, setCouponCode] = useState('');
    const [couponApplied, setCouponApplied] = useState(false);
    const [extraDiscount, setExtraDiscount] = useState(0);

    const userCart = useMemo(() => {
        return cart[user?.$id] || [];
    }, [cart, user?.$id]);

    const totalPrice = useCallback(() => {
        return userCart.reduce((acc, item) => acc + Number(item.price), 0);
    }, [userCart]);

    const discount = (totalPrice() * 0.15).toFixed(2);
    const couponDiscount = couponApplied ? (totalPrice() * 0.20).toFixed(2) : 0;
    const finalTotal = userCart.length === 0 ? 0 : ((totalPrice() + deliveryCharge) - discount - couponDiscount).toFixed(2);

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        if (couponCode.toLowerCase() === 'feane20' && !couponApplied) {
            setCouponApplied(true);
            setExtraDiscount(20);
        }
    };

    const handleRemoveCoupon = () => {
        setCouponApplied(false);
        setCouponCode('');
        setExtraDiscount(0);
    };

    useEffect(() => { }, [totalPrice]);

    return (
        <div className="poppins transition-colors duration-500">

            {/* Hero Section */}
            <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black pt-20">
                {/* Background Decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-amber-500/10 rounded-full"></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-32 left-20 text-amber-500/20 animate-bounce" style={{ animationDuration: '3s' }}>
                        <Icon icon="mdi:cart" width="50" height="50" />
                    </div>
                    <div className="absolute top-40 right-32 text-orange-500/20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}>
                        <Icon icon="mdi:shopping" width="40" height="40" />
                    </div>
                    <div className="absolute bottom-40 left-32 text-amber-500/20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>
                        <Icon icon="mdi:gift" width="35" height="35" />
                    </div>
                </div>

                {/* Content */}
                <div className="relative text-center px-5 py-12">
                    <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
                        <Icon icon="mdi:cart-outline" className="text-amber-400" width="16" height="16" />
                        <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Your Order</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                        <span className="text-white">Shopping </span>
                        <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Cart</span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-md mx-auto">
                        {userCart.length > 0 ? `You have ${userCart.length} delicious item${userCart.length > 1 ? 's' : ''} waiting for you` : "Your cart is waiting to be filled with delicious items"}
                    </p>

                    {/* Quick Stats */}
                    {userCart.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-6 mt-8">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                                <Icon icon="mdi:food" className="text-amber-400" width="20" height="20" />
                                <span className="text-white font-medium">{userCart.length} Items</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                                <Icon icon="mdi:cash" className="text-green-400" width="20" height="20" />
                                <span className="text-white font-medium">${totalPrice().toFixed(2)} Subtotal</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                                <Icon icon="mdi:percent" className="text-red-400" width="20" height="20" />
                                <span className="text-white font-medium">15% Off Applied</span>
                            </div>
                        </div>
                    )}
                </div>
            </section>


            {/* Main Cart Section */}
            <section className="py-16 px-5 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
                <div className="max-w-screen-xl mx-auto">

                    {/* Action Bar */}
                    {userCart.length > 0 && (
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                    <Icon icon="mdi:cart-check" className="text-amber-500" width="20" height="20" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">Cart Summary</p>
                                    <p className="text-sm text-gray-500 dark:text-zinc-400">{userCart.length} items • ${totalPrice().toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Link to="/menu" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-300">
                                    <Icon icon="mdi:plus" width="18" height="18" />
                                    <span className="font-medium text-sm">Add More</span>
                                </Link>

                                <button onClick={removeAllItemsFromCart} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-all duration-300">
                                    <Icon icon="mdi:trash-can-outline" width="18" height="18" />
                                    <span className="font-medium text-sm hidden sm:inline">Clear Cart</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {userCart.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* Cart Items */}
                            <div className="lg:col-span-2 space-y-4">

                                {/* Items Header */}
                                <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 text-sm font-medium text-gray-500 dark:text-zinc-400">
                                    <div className="col-span-6">Product</div>
                                    <div className="col-span-2 text-center">Quantity</div>
                                    <div className="col-span-2 text-center">Price</div>
                                    <div className="col-span-2 text-right">Action</div>
                                </div>

                                {userCart.slice().reverse().map((menu, index) => (
                                    <div key={index} className="group bg-white dark:bg-zinc-900 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-xl border border-gray-100 dark:border-zinc-800 transition-all duration-300 hover:-translate-y-1">
                                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                                            {/* Product */}
                                            <div className="sm:col-span-6 flex gap-4">
                                                <div className="relative flex-shrink-0">
                                                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-800 dark:to-zinc-900 overflow-hidden flex items-center justify-center">
                                                        <img className="w-16 h-16 sm:w-20 sm:h-20 object-contain group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" src={menu.image} alt={menu.heading} />
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg mb-1 truncate group-hover:text-amber-500 transition-colors">{menu.heading}</h3>
                                                    <p className="text-sm text-gray-500 dark:text-zinc-400 line-clamp-2">{menu.para}</p>
                                                    <span className="sm:hidden inline-block mt-2 text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">${menu.price}</span>
                                                </div>
                                            </div>

                                            {/* Quantity */}
                                            <div className="sm:col-span-2 flex items-center justify-center gap-2">
                                                <button className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 hover:bg-amber-100 dark:hover:bg-amber-900/30 hover:text-amber-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                                    <Icon icon="mdi:minus" width="18" height="18" />
                                                </button>
                                                <span className="w-10 text-center font-bold text-gray-900 dark:text-white text-lg">1</span>
                                                <button className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 hover:bg-amber-100 dark:hover:bg-amber-900/30 hover:text-amber-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                                                    <Icon icon="mdi:plus" width="18" height="18" />
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <div className="hidden sm:flex sm:col-span-2 justify-center">
                                                <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">${menu.price}</span>
                                            </div>

                                            {/* Action */}
                                            <div className="sm:col-span-2 flex justify-end">
                                                <button onClick={() => removeFromCart(menu)} className="p-3 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 group/btn">
                                                    <Icon icon="mdi:trash-can-outline" width="22" height="22" className="group-hover/btn:scale-110 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}


                                {/* Coupon Section */}
                                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                                                <Icon icon="mdi:ticket-percent" className="text-white" width="24" height="24" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 dark:text-white">Promo Code</h3>
                                                <p className="text-xs text-gray-500 dark:text-zinc-400">{couponApplied ? 'Coupon applied successfully!' : 'Try "FEANE20" for 20% extra off'}</p>
                                            </div>
                                        </div>
                                        {couponApplied && (
                                            <button onClick={handleRemoveCoupon} className="text-sm text-red-500 hover:text-red-600 font-medium">Remove</button>
                                        )}
                                    </div>

                                    {!couponApplied ? (
                                        <form onSubmit={handleApplyCoupon} className="flex gap-3">
                                            <div className="relative flex-1">
                                                <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Enter promo code" className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-zinc-800 border-2 border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors uppercase font-medium" />
                                            </div>
                                            <button type="submit" className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 transition-all duration-300" >Apply</button>
                                        </form>
                                    ) : (
                                        <div className="flex items-center justify-between p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                                            <div className="flex items-center gap-3">
                                                <Icon icon="mdi:check-circle" className="text-green-500" width="24" height="24" />
                                                <div>
                                                    <p className="font-semibold text-green-700 dark:text-green-400">FEANE20</p>
                                                    <p className="text-sm text-green-600 dark:text-green-500">20% extra discount applied</p>
                                                </div>
                                            </div>
                                            <span className="text-xl font-bold text-green-600 dark:text-green-400">-${couponDiscount}</span>
                                        </div>
                                    )}
                                </div>
                            </div>


                            {/* Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-28 space-y-6">

                                    {/* Summary Card */}
                                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-zinc-800 overflow-hidden relative">
                                        {/* Decoration */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                                        <div className="relative">
                                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                                <Icon icon="mdi:receipt-text" className="text-amber-500" width="24" height="24" /> Order Summary
                                            </h2>

                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-zinc-800">
                                                    <span className="text-gray-600 dark:text-zinc-400">Subtotal ({userCart.length} items)</span>
                                                    <span className="font-semibold text-gray-900 dark:text-white">${totalPrice().toFixed(2)}</span>
                                                </div>

                                                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-zinc-800">
                                                    <span className="text-gray-600 dark:text-zinc-400 flex items-center gap-2">
                                                        <Icon icon="mdi:truck-fast" width="18" height="18" /> Delivery
                                                    </span>
                                                    <span className="font-semibold text-gray-900 dark:text-white">${deliveryCharge.toFixed(2)}</span>
                                                </div>

                                                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-zinc-800 text-green-600 dark:text-green-400">
                                                    <span className="flex items-center gap-2">
                                                        <Icon icon="mdi:tag" width="18" height="18" /> Discount (15%)
                                                    </span>
                                                    <span className="font-semibold">-${discount}</span>
                                                </div>

                                                {couponApplied && (
                                                    <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-zinc-800 text-green-600 dark:text-green-400">
                                                        <span className="flex items-center gap-2">
                                                            <Icon icon="mdi:ticket" width="18" height="18" /> Coupon (20%)
                                                        </span>
                                                        <span className="font-semibold">-${couponDiscount}</span>
                                                    </div>
                                                )}

                                                <div className="pt-4">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-lg font-bold text-gray-900 dark:text-white">Total</span>
                                                        <div className="text-right">
                                                            <span className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">${finalTotal}</span>
                                                            <p className="text-xs text-gray-500 dark:text-zinc-500 mt-1">Including taxes</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Checkout Button */}
                                            <button className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3">
                                                <Icon icon="mdi:lock" width="22" height="22" /> Checkout Now
                                            </button>

                                            {/* Trust Badges */}
                                            <div className="mt-6 grid grid-cols-2 gap-3">
                                                <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-zinc-800">
                                                    <Icon icon="mdi:shield-check" className="text-green-500" width="20" height="20" />
                                                    <span className="text-xs text-gray-600 dark:text-zinc-400">Secure Payment</span>
                                                </div>
                                                <div className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-zinc-800">
                                                    <Icon icon="mdi:lock" className="text-blue-500" width="20" height="20" />
                                                    <span className="text-xs text-gray-600 dark:text-zinc-400">SSL Encrypted</span>
                                                </div>
                                            </div>

                                            {/* Payment Methods */}
                                            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-zinc-800">
                                                <p className="text-xs text-gray-500 dark:text-zinc-500 text-center mb-3">We Accept</p>
                                                <div className="flex justify-center gap-3">
                                                    {['logos:visa', 'logos:mastercard', 'logos:paypal', 'logos:google-pay'].map((icon, i) => (
                                                        <div key={i} className="w-12 h-8 rounded-lg bg-gray-100 dark:bg-zinc-800 flex items-center justify-center hover:scale-110 transition-transform">
                                                            <Icon icon={icon} width="28" height="28" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Promo Banner */}
                                    <div className="relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                        <div className="relative flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                                                <Icon icon="mdi:truck-fast" width="28" height="28" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Free Delivery!</h4>
                                                <p className="text-sm text-white/80">On orders above $150</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Help Card */}
                                    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 border border-gray-100 dark:border-zinc-800">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                                <Icon icon="mdi:headset" className="text-blue-500" width="24" height="24" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-900 dark:text-white">Need Help?</h4>
                                                <p className="text-sm text-gray-500 dark:text-zinc-400">Call us at +91 9876543210</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Empty Cart State */
                        <div className="max-w-2xl mx-auto text-center py-16">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your Cart is Empty</h2>
                            <p className="text-lg text-gray-500 dark:text-zinc-400 mb-10 max-w-md mx-auto">Looks like you haven't added any delicious items to your cart yet. Let's fix that!</p>

                            <Link to="/menu" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg shadow-lg shadow-amber-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300" >
                                <Icon icon="mdi:food" width="24" height="24" /> Explore Menu
                                <Icon icon="mdi:arrow-right" width="24" height="24" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>


            {/* CTA Section - Only when cart has items */}
            {userCart.length > 0 && (
                <section className="py-16 px-5 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
                    <div className="max-w-screen-lg mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Complete</span> Your Order?</h2>
                        <p className="text-lg text-gray-400 mb-8">Your delicious meal is just a click away. Secure checkout with multiple payment options.</p>

                        <div className="flex flex-wrap justify-center gap-6 text-gray-400">
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:truck-fast" className="text-amber-500" width="24" height="24" />
                                <span>30 Min Delivery</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:shield-check" className="text-green-500" width="24" height="24" />
                                <span>Safe Packaging</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:cash-refund" className="text-blue-500" width="24" height="24" />
                                <span>Easy Refunds</span>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Cart;
