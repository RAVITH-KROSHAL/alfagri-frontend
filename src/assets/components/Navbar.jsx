import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav role="navigation" className="bg-gradient-to-r from-white to-green-500 text-black px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/Alfagri-Icon.png" alt="Alfagri Logo" className="h-20 w-auto" />
          <span className="text-xl font-bold">ALFAGRI</span>
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            // Close Icon
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-bold">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/products" className="hover:text-yellow-300">Products</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 font-bold bg-gradient-to-r from-white to-green-500 p-4 rounded shadow-md transition-all duration-300 ease-in-out">
          <Link to="/" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-yellow-300" onClick={() => setOpen(false)}>About</Link>
          <Link to="/products" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/contact" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
