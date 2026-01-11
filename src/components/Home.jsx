import React from 'react';

import Burger from '../reuse/Burger';
import Carasoul from './Carasoul';
import Discount from '../reuse/Discount';
import Menu from '../reuse/Menu';
import BookTable from '../reuse/BookTable';
import About from './About';

const Home = () => {
    return (
        <>
            <section className="poppins text-whitebg-gray-900">

                <div className="bg-pizza relative h-[33rem] sm:h-screen w-full pt-20">
                    <div className="fastFood absolute left-10 top-40">
                        <Burger />
                    </div>
                </div>

                <Discount />
                <Menu />
                <About />
                <BookTable />
                <Carasoul />
            </section >
        </>
    );
};

export default Home;









/* 
<div className="flex flex-col items-center px-6 py-8 mx-auto md:h-fit lg:py-10">

    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md md:max-w-screen-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Logout to your account
            </h1>
            <div className="space-y-4 md:space-y-6">
                <button type="submit" className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Logout</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    <Link to="/login" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Login account</Link>
                </p>
            </div>
        </div>
    </div>
</div>
 */