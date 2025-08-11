import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-white to-green-500 text-white px-6 py-4 shadow-md">

    {/* <nav className="bg-black  text-white px-6 py-4 shadow-md"> */}
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/Alfagri-Icon.png" alt="Alfagri Logo" className="h-20 w-auto" />
             <span className="text-xl font-bold text-black">ALFAGRI</span>
        </Link>
        <div className="space-x-4 font-bold">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/products" className="hover:text-yellow-300">Products</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
