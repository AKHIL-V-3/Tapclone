import React, { useState } from 'react'

function Header() {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);


    return (
        <>
            <div className='bg-black/20 xl:h-40 h-20 w-full flex flex-col items-center justify-center z-10'>


                <div className=' h-full w-11/12 flex justify-end items-center'>



                    <div className='w-7/12 h-4/6 flex justify-between items-end'>



                        <header className="text-white p-4 flex items-center justify-end">
                            {/* Hamburger Icon */}


                            {/* Menu for larger screens */}
                            <nav className="hidden lg:flex space-x-4 text-xl ">
                                <a href="#" className="text-green-400 px-3 py-2 rounded font-semibold">Home</a>
                                <a href="#" className=" px-3 py-2 rounded">About Us</a>
                                <a href="#" className=" px-3 py-2 rounded">Courses</a>
                                <a href="#" className=" px-3 py-2 rounded">Gallery</a>
                            </nav>

                            {/* Mobile Menu */}
                            <div className={`lg:hidden fixed top-16 right-0 bg-gray-800 text-white w-48 transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
                                <nav className="flex flex-col space-y-2 p-4">
                                    <a href="#" className=" px-3 py-2 rounded">Home</a>
                                    <a href="#" className=" px-3 py-2 rounded">About Us</a>
                                    <a href="#" className=" px-3 py-2 rounded">Courses</a>
                                    <a href="#" className=" px-3 py-2 rounded">Gallery</a>
                                </nav>
                            </div>
                        </header>

                        <button
                            onClick={toggleMenu}
                            className="lg:hidden flex items-end px-3 py-2 border rounded text-white border-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 mr-10"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>


                        <div className='h-full xl:flex justify-center items-end mr-2 mb-3 cursor-pointer hidden'>

                            <button className='border-white border-2 rounded-full text-center items-center px-10 py-2 text-xl text-white bg-white/20 cursor-pointer'>
                                Contact
                            </button>

                        </div>


                    </div>




                </div>

                <hr className='w-11/12 pb-4 hidden xl:block' />



            </div>
        </>
    )
}

export default Header