// const Footer = () => {
//   return (
//     <footer className="bg-green-800 text-white text-center py-4">
//       <p>© {new Date().getFullYear()} Alfagri. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-8 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ALFAGRI</h2>
          <p className="text-sm">
            We are committed to providing the best organic and eco-friendly
            products for your healthy lifestyle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-green-600 rounded-full hover:bg-green-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-green-600 rounded-full hover:bg-green-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-green-600 rounded-full hover:bg-green-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-green-600 rounded-full hover:bg-green-500 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center mt-6 border-t border-green-500 pt-4 text-sm">
        © {new Date().getFullYear()} Copyright 2025 © ALFAGRI. All Rights Reserved. Concept, Design, and ALFAGAN (Pvt) Ltd
      </div>
    </footer>
  );
};

export default Footer;
