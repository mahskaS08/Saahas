
import React, { useState } from 'react';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between 
            items-center py-4 px-6 md:px-20 lg:px-32
            bg-transparent'>
                <a href="#Header"><img src="src/assets/logo.svg" alt="logo" className='mr-auto '/></a>

                <ul className='hidden md:flex gap-7 text-white text-lg'>
                    <a href="#Header" className='cursor-pointer 
                    hover:text-gray-400 '>ABOUT US</a>
                    <a href="#Projects" className='cursor-pointer
                    hover:text-gray-400 '>PROJECTS</a>
                    <a href="#Pricing" className='cursor-pointer
                    hover:text-gray-400 '>PRICING</a>
                    <a href="#Testimonials" className='cursor-pointer
                    hover:text-gray-400 '>TESTIMONIALS</a>
                    <a href="#Contact" className='cursor-pointer
                    hover:text-gray-400 '>CONTACT US</a>
                </ul>

                <img 
                    src="src/assets/menuicon.svg" 
                    alt="menu icon" 
                    className='md:hidden w-7 cursor-pointer' 
                    onClick={toggleMenu} 
                />
            </div>

            {isMenuOpen && (
                <div className='md:hidden bg-white text-black transition-all absolute top-16 left-0 w-full py-4 px-6'>
                    <div className='flex justify-start items-center'> 

                    <h1 className='pb-5'>X CLOSE</h1>

                    </div>
                    <ul className='flex flex-col gap-4'>
                        <a href="#Header" className='cursor-pointer 
                        hover:text-gray-400 '>ABOUT US</a>
                        <a href="#Projects" className='cursor-pointer
                        hover:text-gray-400 '>PROJECTS</a>
                        <a href="#Pricing" className='cursor-pointer
                        hover:text-gray-400 '>PRICING</a>
                        <a href="#Testimonials" className='cursor-pointer
                        hover:text-gray-400 '>TESTIMONIALS</a>
                        <a href="#Contact" className='cursor-pointer
                        hover:text-gray-400 '>CONTACT US</a>
                    </ul>
                </div>
            )}
        </div>
    );
};




export default Navbar