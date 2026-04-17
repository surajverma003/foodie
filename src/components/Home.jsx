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
            <section className="poppins transition-colors duration-500 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
                
                <div className="bg-pizza relative h-screen sm:h-screen w-full pt-20">
                    <div className="fastFood absolute left-10">
                        <Burger />
                    </div>
                </div>

                <Discount />
                <Menu />
                <About />
                <BookTable />
                <Carasoul />
            </section>
        </>
    );
};

export default Home;