import React from 'react'
import Navbar from './navbar'

function Header() {
return (
    <div className='min-h-screen mb-4 bg-cover bg-center
     bg-no-repeat flex items-center w-full over' 
    style={{backgroundImage: 'url(src/assets/pexels-marketingtuig-87223.jpg)'}}
    id='Header'>
            <Navbar></Navbar>
            <div className='container mx-auto text-white text-center
            py-4 px-6 pt-120 md:px-20 lg:px-32'>
                     <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-lg text-center 
                                rounded-full px-10 py-6 shadow-lg">
                    <h2 className='font-semibold text-white lg:text-4xl md:text-2xl sm:text-xl'>
                            Explore Your Dream Home With Us
                    </h2>
                    <div class="text-center mt-6">
                    <a href="#Projects" class="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300 inline-block">
                            View Projects
                    </a>
                    <a href="#Contact" class="px-6 py-3 bg-[#D4AF37] text-white font-semibold rounded-lg shadow-md hover:bg-[#B89C2D] transition duration-300 inline-block ml-4">
                            Enquire
                    </a>
                    </div>
                    </div>


            </div>


    </div>
)
}

export default Header