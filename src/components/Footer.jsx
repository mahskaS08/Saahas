import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] text-[#27262f] py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
          {/* Logo and Company Info */}
          <div className="flex flex-col items-start">

            <h3 className="text-xl font-bold">Saahas Infrabuild</h3>
            <p className="text-md text-gray-700 mt-2">
              126/1, Block-I, Govind Nagar
              <br />
              Kanpur Nagar, Uttar Pradesh
              <br />
              208 006
            </p>
            <p className="text-md text-gray-700 mt-2">
              Phone: +91 22 6169 6169
              <br />
              Email: info@godrejproperties.com
            </p>
          </div>

          {/* About Section */}
            
            <div className="flex flex-col w-full lg:w-3/4">
            <h3 className="text-xl font-bold mb-4">About Saahas Infrabuild</h3>
            <p className="text-md text-gray-700 text-justify leading-relaxed">
                Established in 1990, Godrej Properties is the first real estate company to have ISO certification. 
                The company is developing landmark projects in 12 cities across India, covering over 18.58 million 
                square meters.
            </p>
            </div>



          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-500">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-500">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-500">Projects</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-500">Careers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-500">Contact</a></li>
            </ul>
          </div>

          
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <img src="src/assets/logo.svg" alt="logo" />
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
