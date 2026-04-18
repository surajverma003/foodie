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
    const [searchQuery, setSearchQuery] = useState('');
    const [load, setLoad] = useState("hidden");
    const isHomePage = location.pathname === '/';

    const highlight = (cat) => {
        setCategory(cat);
    };

    const loadItems = () => {
        if (isHomePage) {
            setLoad("block");
            setTimeout(() => {
                setLoad("hidden");
                navigate("/menu");
            }, 2000);
        }
    };

    const userCart = cart[user?.$id] || [];

    const categories = [
        { name: 'All', icon: 'mdi:food' },
        { name: 'Burger', icon: 'mdi:hamburger' },
        { name: 'Pizza', icon: 'mdi:pizza' },
        { name: 'Pasta', icon: 'mdi:pasta' },
        { name: 'Fries', icon: 'mdi:french-fries' },
    ];

    const filteredMenu = menu?.filter(item => {
        const matchesCategory = category === 'All' || item.heading.includes(category);
        const matchesSearch = item.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.para.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const displayedMenu = isHomePage ? filteredMenu.slice(0, 6) : filteredMenu;

    useEffect(() => { }, [location.pathname, cart]);

    return (
        <div className="poppins transition-colors duration-500">

            {/* Hero Section - Only on Menu Page */}
            {!isHomePage && (
                <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black pt-20">
                    {/* Background Decorations */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
                    </div>

                    {/* Floating Icons */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-32 left-20 text-amber-500/20 animate-bounce" style={{ animationDuration: '3s' }}>
                            <Icon icon="mdi:pizza" width="50" height="50" />
                        </div>
                        <div className="absolute top-40 right-32 text-orange-500/20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}>
                            <Icon icon="mdi:hamburger" width="45" height="45" />
                        </div>
                        <div className="absolute bottom-40 left-32 text-amber-500/20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>
                            <Icon icon="mdi:french-fries" width="40" height="40" />
                        </div>
                        <div className="absolute bottom-32 right-20 text-orange-500/20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}>
                            <Icon icon="mdi:pasta" width="35" height="35" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative text-center px-5 py-16">
                        <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-amber-500/10 border border-amber-500/20">
                            <Icon icon="mdi:silverware-fork-knife" className="text-amber-400" width="16" height="16" />
                            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Delicious Choices</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="text-white">Our </span>
                            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Menu</span>
                        </h1>

                        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
                            Handcrafted with love, served with passion. Explore our wide variety of delicious dishes.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-md mx-auto relative">
                            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for dishes..." className="w-full px-6 py-4 pl-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50 transition-colors" />
                            <Icon icon="mdi:magnify" className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" width="24" height="24" />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors" >
                                    <Icon icon="mdi:close" width="20" height="20" />
                                </button>
                            )}
                        </div>
                    </div>
                </section>
            )}


            {/* Main Menu Section */}
            <section className={`${isHomePage ? 'py-20' : 'py-16'} px-5 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950`}>
                <div className="max-w-screen-xl mx-auto">

                    {/* Header - Only on Home Page */}
                    {isHomePage && (
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">Delicious Choices</span>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                                <span className="text-gray-900 dark:text-white">Our </span>
                                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Menu</span>
                            </h2>
                            <p className="text-gray-500 dark:text-zinc-400 max-w-md mx-auto">Handcrafted with love, served with passion</p>
                        </div>
                    )}


                    {/* Category Filter */}
                    <div className="mb-12">
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((cat) => (
                                <button key={cat.name} onClick={() => highlight(cat.name)} className={`group flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${category === cat.name ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30 scale-105' : 'bg-white dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800 border border-gray-200 dark:border-zinc-800 hover:border-amber-300 dark:hover:border-amber-600'}`}>
                                    <Icon icon={cat.icon} width="20" height="20" className={category === cat.name ? 'text-white' : 'text-amber-500'} /> {cat.name}
                                </button>
                            ))}
                        </div>

                        {/* Results Count - Only on Menu Page */}
                        {!isHomePage && (
                            <p className="text-center mt-6 text-gray-500 dark:text-zinc-400">
                                Showing <span className="font-semibold text-amber-500">{displayedMenu.length}</span> items
                                {category !== 'All' && ` in ${category}`}
                                {searchQuery && ` matching "${searchQuery}"`}
                            </p>
                        )}
                    </div>


                    {/* Featured Item - Only on Menu Page */}
                    {!isHomePage && !searchQuery && category === 'All' && (
                        <div className="mb-16">
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 md:p-12">
                                {/* Decorations */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                                <div className="absolute top-1/2 right-20 -translate-y-1/2 opacity-20 hidden lg:block">
                                    <Icon icon="mdi:crown" width="150" height="150" />
                                </div>

                                <div className="relative flex flex-col md:flex-row items-center gap-8">
                                    <div className="flex-1 text-white">
                                        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-white/20 text-sm font-medium">
                                            <Icon icon="mdi:fire" width="16" height="16" /> Chef's Special
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-bold mb-3">Crown Crust Pizza</h3>
                                        <p className="text-white/80 mb-6 max-w-md">
                                            Special crown crust with cheesy bites on the edges, a royal treat for pizza lovers.
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <span className="text-4xl font-bold">$14</span>
                                            <button onClick={() => addIntoCart(menu[2])} className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-amber-600 font-semibold hover:bg-gray-100 transition-colors shadow-lg" >
                                                <Icon icon="mdi:cart-plus" width="20" height="20" /> Order Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {/* Menu Grid */}
                    {displayedMenu.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayedMenu.map((item, index) => {
                                const isInCart = userCart.find(cartItem => cartItem.heading === item.heading);

                                return (
                                    <div key={index} className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-zinc-800" >
                                        {/* Image Container */}
                                        <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-800 dark:to-zinc-900 flex justify-center items-center overflow-hidden">
                                            {/* Hover Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <img className="w-36 h-36 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-2xl" src={item.image} alt={item.heading} />

                                            {/* Price Badge */}
                                            <div className="absolute top-4 right-4 px-4 py-2 rounded-2xl bg-white/95 dark:bg-zinc-800/95 backdrop-blur-sm shadow-lg border border-gray-100 dark:border-zinc-700">
                                                <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                                                    ${item.price}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="flex items-start justify-between gap-2 mb-2">
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">{item.heading}</h3>
                                                {isInCart && (
                                                    <span className="flex-shrink-0 px-2 py-1 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium">In Cart</span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed mb-5 line-clamp-2">{item.para}</p>

                                            {/* Action Button */}
                                            <button onClick={() => isInCart ? removeFromCart(item) : addIntoCart(item)} className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${isInCart ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 border border-red-200 dark:border-red-800' : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-lg shadow-amber-500/30 hover:shadow-xl'}`}>
                                                {isInCart ? (
                                                    <><Icon icon="mdi:cart-remove" width="20" height="20" /> Remove from Cart</>) : (
                                                    <><Icon icon="mdi:cart-plus" width="20" height="20" /> Add to Cart</>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="text-center py-20">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
                                <Icon icon="mdi:food-off" className="text-gray-400 dark:text-zinc-500" width="48" height="48" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No items found</h3>
                            <p className="text-gray-500 dark:text-zinc-400 mb-6">
                                Try adjusting your search or filter to find what you're looking for.
                            </p>
                            <button onClick={() => { setCategory('All'); setSearchQuery(''); }} className="px-6 py-3 rounded-full bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors" >
                                Clear Filters
                            </button>
                        </div>
                    )}


                    {/* View More Button - Only on Home Page */}
                    {isHomePage && (
                        <div className="flex justify-center mt-14">
                            <button onClick={loadItems} className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 overflow-hidden" >
                                <span className={`flex items-center gap-2 ${load !== "hidden" ? "opacity-0" : "opacity-100"}`}>
                                    Explore Full Menu <Icon icon="mdi:arrow-right" width="20" height="20" className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <span className={`absolute inset-0 flex items-center justify-center ${load === "hidden" ? "opacity-0" : "opacity-100"}`}>
                                    <Icon icon="svg-spinners:ring-resize" width="24" height="24" />
                                </span>
                            </button>
                        </div>
                    )}
                </div>
            </section>


            {/* CTA Section - Only on Menu Page */}
            {!isHomePage && (
                <section className="py-24 px-5 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
                    <div className="max-w-screen-lg mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">Don't Miss Out</span>

                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Order</span>?</h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            {userCart.length > 0 ? `You have ${userCart.length} item${userCart.length > 1 ? 's' : ''} in your cart. Proceed to checkout now!` : "Add your favorite items to cart and enjoy a delicious meal."}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            {userCart.length > 0 ? (
                                <button onClick={() => navigate('/cart')} className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl transition-all duration-300 hover:scale-105" >
                                    <Icon icon="mdi:cart" width="20" height="20" /> View Cart ({userCart.length})
                                    <Icon icon="mdi:arrow-right" width="20" height="20" className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            ) : (
                                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl transition-all duration-300 hover:scale-105" >
                                    <Icon icon="mdi:food" width="20" height="20" /> Start Ordering
                                    <Icon icon="mdi:arrow-up" width="20" height="20" className="group-hover:-translate-y-1 transition-transform" />
                                </button>
                            )}
                            <button onClick={() => navigate('/book-table')} className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm text-white font-semibold border border-white/20 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300" >
                                <Icon icon="mdi:calendar-check" width="20" height="20" /> Book a Table
                            </button>
                        </div>

                        {/* Features */}
                        <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400">
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:truck-fast" className="text-amber-500" width="20" height="20" />
                                <span>Free Delivery</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:clock-fast" className="text-amber-500" width="20" height="20" />
                                <span>30 Min Delivery</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon icon="mdi:shield-check" className="text-amber-500" width="20" height="20" />
                                <span>Safe Packaging</span>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Menu;

const menu = [
    { heading: 'Cheese Pizza', para: 'Loaded with rich mozzarella and a crispy base, perfect for cheese lovers.', image: "./Images/menu/f1.png", price: '12' },
    { heading: 'Veggie Burger', para: 'A healthy mix of fresh veggies and sauces packed in a soft bun.', image: "./Images/menu/f2.png", price: '8' },
    { heading: 'Crown Crust Pizza', para: 'Special crown crust with cheesy bites on the edges, a royal treat.', image: "./Images/menu/f3.png", price: '14' },
    { heading: 'Delicious Pasta', para: 'Creamy and flavorful pasta tossed with herbs and spices.', image: "./Images/menu/f4.png", price: '11' },
    { heading: 'French Fries', para: 'Crispy golden fries, perfect companion for any meal.', image: "./Images/menu/f5.png", price: '5' },
    { heading: 'Veg Pizza', para: 'Topped with fresh veggies, olives, and a layer of cheese.', image: "./Images/menu/f6.png", price: '10' },
    { heading: 'Tasty Burger', para: 'Juicy patty with flavorful sauces, a delight in every bite.', image: "./Images/menu/f7.png", price: '9' },
    { heading: 'Chicken Burger', para: 'Tender chicken patty grilled to perfection with spicy mayo.', image: "./Images/menu/f8.png", price: '13' },
    { heading: 'Macaroni Pasta', para: 'Classic macaroni in creamy cheese sauce, a comforting meal.', image: "./Images/menu/f9.png", price: '10' },
    { heading: 'Tomato Pizza', para: 'Zesty tomato sauce and herbs baked on a soft pizza base.', image: "./Images/menu/f10.png", price: '11' },
    { heading: 'Chicken Pizza', para: 'Loaded with spicy chicken chunks and melting cheese.', image: "./Images/menu/f11.png", price: '15' },
    { heading: 'Burger King', para: 'A king-sized burger with double patty and loaded toppings.', image: "./Images/menu/f12.png", price: '10' },
    { heading: 'Tasty Beef Burger', para: 'Savory beef patty grilled and served with BBQ sauce.', image: "./Images/menu/f13.png", price: '16' },
    { heading: 'Juicy Burger', para: 'Tender and juicy burger that satisfies your cravings.', image: "./Images/menu/f14.png", price: '12' },
    { heading: 'Burger', para: 'Classic burger with fresh lettuce, tomato and sauce.', image: "./Images/menu/f15.png", price: '9' },
    { heading: 'Veg Burger', para: 'Crispy veggie patty served with mayo and crunchy lettuce.', image: "./Images/menu/f16.png", price: '8' },
    { heading: 'Cheese and Chicken Pizza', para: 'A cheesy explosion topped with spicy chicken chunks.', image: "./Images/menu/f17.png", price: '16' },
    { heading: 'Steak Fries', para: 'Thick-cut fries with a crispy outer and soft inside.', image: "./Images/menu/f18.png", price: '7' },
    { heading: 'Natural Cut Fries', para: 'Freshly sliced and fried to golden perfection.', image: "./Images/menu/f19.png", price: '6' },
    { heading: 'Bacon Onion Pizza', para: 'Smoky bacon and caramelized onions on cheesy crust.', image: "./Images/menu/f20.png", price: '18' },
    { heading: 'Delicious Fries', para: 'Simple yet tasty fries with seasoning and crunch.', image: "./Images/menu/f21.png", price: '6' },
    { heading: 'Belgian Fries', para: 'Thick Belgian-style fries with a hint of spice.', image: "./Images/menu/f22.png", price: '7' },
    { heading: 'Sweet Potato Fries', para: 'Sweet and crispy fries for a unique snack experience.', image: "./Images/menu/f23.png", price: '8' },
    { heading: 'Waffle Fries', para: 'Waffle-cut potatoes deep fried till golden brown.', image: "./Images/menu/f24.png", price: '9' },
    { heading: 'Shoestring Fries', para: 'Thin, crispy and full of flavor – the perfect munch.', image: "./Images/menu/f25.png", price: '6' },
    { heading: 'Veggie Cheese Burger', para: 'Stuffed with veggies and cheese, full of flavor.', image: "./Images/menu/f26.png", price: '11' },
    { heading: 'Fried Chicken Burger', para: 'Crispy fried chicken with lettuce and tangy sauce.', image: "./Images/menu/f27.webp", price: '17' },
];
