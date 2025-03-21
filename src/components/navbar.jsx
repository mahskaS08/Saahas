import React from 'react'

const Navbar = () => {
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
                    <button className='hidden md:block bg-white px-8 py-2 
                    rounded-full'>CONTACT US</button>
                    </div>
    </div>
)
}

export default Navbar