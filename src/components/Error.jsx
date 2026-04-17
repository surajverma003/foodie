import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Error = ({ errorCode = "404", errorMessage = "Page Not Found" }) => {
    return (
        <div className="poppins min-h-screen transition-colors duration-500 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 py-20">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full"></div>
                </div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="relative mx-auto mb-5">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="text-center">
                                <span className="text-7xl sm:text-8xl font-black bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                                    {errorCode}
                                </span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-gray-900 dark:text-white">Oops! </span>
                        <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">{errorMessage}</span>
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
                        Looks like this page took a wrong turn. Don't worry, our delicious food is still waiting for you!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Error;
