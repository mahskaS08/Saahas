import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] text-[#27262f] py-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
          {/* Logo and Company Info */}
          <div className="flex flex-col items-start">

            <h3 className="text-xl font-bold mb-4">Saahas Infrabuild</h3>
            <p className="text-md text-gray-700 ">
              126/1, Block-I, Govind Nagar
              <br />
              Kanpur Nagar, Uttar Pradesh
              <br />
              208 006
            </p>
            <p className="text-md text-gray-700 mt-2">
              Phone: +91 9415125383
                     +91 9628463454
              <br />
              Email: info@godrejproperties.com
            </p>
          </div>

          {/* About Section */}
            
            <div className="flex flex-col w-full lg:w-3/4">
            <h3 className="text-xl font-bold mb-4">About Saahas Infrabuild</h3>
            <p className="text-md text-gray-700 text-justify leading-relaxed">
                Established in 2022. 
                The company aims to provide sustainable and innovative real estate solutions, ensuring customer satisfaction and contributing to the development of modern infrastructure.
            </p>
            </div>



          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#Header" className="text-gray-700 hover:text-gray-500">Home</a></li>
              <li><a href="#Header" className="text-gray-700 hover:text-gray-500">About Us</a></li>
              <li><a href="#Projects" className="text-gray-700 hover:text-gray-500">Projects</a></li>
              
              <li><a href="#Contact" className="text-gray-700 hover:text-gray-500">Contact</a></li>
            </ul>
          </div>

          
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <img src="src/assets/logoFooter.svg" alt="logo" />
          <div>&copy; {new Date().getFullYear()} Saahas InfraBuild. All rights reserved.</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-500">Privacy Policy</a>
            <a href="#" className="hover:text-gray-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
