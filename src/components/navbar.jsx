
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
       if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }  
        return () => {
            document.body.style.overflow = 'auto';
        };
    }
    , [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between 
            items-center py-4 px-6 md:px-20 lg:px-32
            bg-transparent'>
            <a href="#Header" ><img src="src/assets/logo.svg" alt="logo" className='mr-auto '/></a>

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
    <motion.div 
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        exit={{ x: 100, opacity: 0 }} 
        transition={{ type: "spring", stiffness: 120 }}
        className='md:hidden bg-[rgba(0,0,0,0.69)] backdrop-blur-lg justify-start text-start 
        text-white transition-all rounded-bl-xl rounded-tl-xl absolute top-25 right-0 w-3/5 max-w-[225px]  py-4 px-6 pr-6'>
        
        <div className='flex justify-start items-center text-start' onClick={toggleMenu}> 
            <h1 className='pb-5 cursor-pointer text-2xl' >X CLOSE</h1>
        </div>
        
        <ul className='flex flex-col gap-6 text-xl'>
            {["ABOUT US", "PROJECTS", "PRICING", "TESTIMONIALS", "CONTACT US"].map((item, index) => (
                <motion.a 
                    key={index} 
                    href={`#${item.replace(" ", "")}`} 
                    className='cursor-pointer hover:text-gray-400'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                    {item}
                </motion.a>
            ))}
        </ul>
    </motion.div>
)}
        </div>
        );
};




export default Navbar