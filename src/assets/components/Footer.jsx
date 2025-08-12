import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // Scroll to top handler
  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <li><Link to="/" onClick={handleNavigation} className="hover:underline">Home</Link></li>
            <li><Link to="/about" onClick={handleNavigation} className="hover:underline">About</Link></li>
            <li><Link to="/products" onClick={handleNavigation} className="hover:underline">Products</Link></li>
            <li><Link to="/contact" onClick={handleNavigation} className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 bg-green-600 rounded-full hover:bg-green-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 bg-green-600 rounded-full hover:bg-green-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-2 bg-green-600 rounded-full hover:bg-green-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 bg-green-600 rounded-full hover:bg-green-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center mt-6 border-t border-green-500 pt-4 text-sm">
        © {new Date().getFullYear()} ALFAGRI. All Rights Reserved. Concept, Design & Development by ALFAGAN (Pvt) Ltd.
      </div>
    </footer>
  );
};

export default Footer;
