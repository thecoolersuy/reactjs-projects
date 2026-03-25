import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto flex flex-col items-center">
                        <h2 className="text-4xl font-bold sm:text-5xl text-center">
                            Best Architecture Firm & Construction Company in Nepal
                            <span className="hidden sm:block text-xl font-medium mt-8 ">We look forward in creating your dream spaces with a little of our's and more of your's.</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            Completed Projects
                        </Link>
                    </div>
                </div>

            </aside>
        </div>
    );
}