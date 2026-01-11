import React, { useState } from 'react';
import myContext from './myContext';
import toast, { Toaster } from 'react-hot-toast';
import account from '../appwrite/appWrieConfig';
import { useNavigate } from 'react-router-dom';

const ContextState = (props) => {
    const navigate = useNavigate();
    
    const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem("cart")) || {});
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("userDetails")) || null);
    const [popup, setPopup] = useState(false);


    // Add item into user-wise cart
    const addIntoCart = (menu) => {
        if (!user) return errorFunc("Please login first");

        const userId = user.$id;
        const currentUserCart = cart[userId] || [];

        const isMenuInCart = currentUserCart.some((item) => item.heading === menu.heading);
        if (!isMenuInCart) {
            const menuWithUserId = { ...menu, userId };

            const updatedUserCart = [...currentUserCart, menuWithUserId];
            const updatedCart = { ...cart, [userId]: updatedUserCart };

            setCart(updatedCart);
            window.localStorage.setItem("cart", JSON.stringify(updatedCart));
            successFunc("Added to cart");
        } else {
            errorFunc("Item already in cart");
        }
    };

    // Remove one item
    const removeFromCart = (menu) => {
        const userId = user?.$id;
        if (!userId) return;

        const updatedUserCart = (cart[userId] || []).filter((item) => item.heading !== menu.heading);
        const updatedCart = { ...cart, [userId]: updatedUserCart };

        setCart(updatedCart);
        window.localStorage.setItem("cart", JSON.stringify(updatedCart));
        successFunc("Item removed");
    };

    // Remove all items
    const removeAllItemsFromCart = () => {
        const confirm = window.confirm("Confirm to remove all items from your cart.");
        if (confirm && user) {
            const updatedCart = { ...cart, [user.$id]: [] };
            setCart(updatedCart);
            window.localStorage.setItem("cart", JSON.stringify(updatedCart));
            successFunc("Removed all items!!");
        }
    };

    // Logout
    const logout = async () => {
        try {
            const confirm = window.confirm("Do you really want to logout account ??");
            if (confirm) {
                await account.deleteSession("current");
                window.localStorage.setItem("userDetails", null);
                successFunc("Signed out successfully.!");
                setUser(null);
                setTimeout(() => {
                    navigate("/login");
                }, 2500);
            }
        } catch (error) {
            console.error(error.message);
            errorFunc("Unable to log out.!");
        }
    };

    const successUrl = window.location.origin + "/foodie/";
    const failureUrl = window.location.origin + "/foodie/login";

    // Google Auth
    const googleAuth = async () => {
        try {
            // await account.createOAuth2Session("google", "https://surajverma406.github.io/foodie", "https://surajverma406.github.io/foodie/login");
            await account.createOAuth2Session("google", successUrl, failureUrl);
        } catch (error) {
            console.error(error.message);
            errorFunc("Login failed. Please try again.!");
        }
    };

    // GitHub Auth
    const githubAuth = async () => {
        try {
            await account.createOAuth2Session("github", "https://surajverma406.github.io/foodie", "https://surajverma406.github.io/foodie/login");
            // await account.createOAuth2Session("github", successUrl, failureUrl);

        } catch (error) {
            console.error(error.message);
            errorFunc("Login failed. Please try again.!");
        }
    };

    // Toast Messages
    const successFunc = (message) => toast.success(message);
    const errorFunc = (message) => toast.error(message);

    return (
        <myContext.Provider value={{
            Toaster,
            cart, user, popup,
            setUser, setPopup,
            addIntoCart, removeAllItemsFromCart, removeFromCart,
            googleAuth, githubAuth, logout, navigate,
            successFunc, errorFunc
        }}>
            {props.children}
        </myContext.Provider>
    );
};

export default ContextState;
