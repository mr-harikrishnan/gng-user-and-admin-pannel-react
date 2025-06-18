import React, { useState } from 'react';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="w-full">
            <nav className="bg-gray-800">
                <div className="mx-auto  px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        {/* Mobile menu button */}
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                <span className="sr-only">Open main menu</span>
                                {menuOpen ? (
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Logo & menu */}
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                    alt="Logo"
                                />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                                </div>
                            </div>
                        </div>

                        {/* Profile & notification */}
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-white">
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022 23.848 23.848 0 0 0 5.454 1.31m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </button>

                            {/* Profile dropdown */}
                            <div className="relative ml-3 group">
                                <button className="flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-offset-2 focus:ring-white">
                                    <span className="sr-only">Open user menu</span>
                                    <p className='text-white'>Kishore</p>
                                </button>

                                <div className="absolute hidden group-hover:block right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700">Sign out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                {menuOpen && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
