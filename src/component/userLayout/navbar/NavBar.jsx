import React, { useState } from 'react';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="">
            <div className=' p-4  flex shadow-lg bg-white z-50'>

                <svg className="mx-3 w-8 lg:hidden"  fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <div className=' '>
                    <h1 className='font-semibold text-[1.1rem]  tracking-[3px] text-[#232232]'>SKYDASH</h1>
                    <p className='text-black text-[0.7rem]'>E-Commerse </p>
                </div>

                <div className=' w-full flex justify-end items-center'>
                    <input className='w-42 border rounded-lg py-1 border-gray-300 ps-4' placeholder='search' type="text" />
                </div>


                <div className=' flex justify-center  ml-8 mt-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>


                    <span className='mx-2'>Kishore</span>
                </div>

            </div>
        </div>
    );
}
