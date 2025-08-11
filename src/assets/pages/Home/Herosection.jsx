import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Make sure this is imported

const HeroSection = () => {
  const navigate = useNavigate(); // ✅ This must be inside the component

  return (
    <section className="text-center py-20 bg-[url('/goyam.jpg')] bg-cover bg-center bg-no-repeat">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-green-800 mb-4"
      >
        Welcome to ALFAGRI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-700 mb-6"
      >
        Empowering Farmers with Smart Agriculture Solutions
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition"
        onClick={() => navigate('/about')}
      >
        Learn More
      </motion.button>
    </section>
  );
};

export default HeroSection;
