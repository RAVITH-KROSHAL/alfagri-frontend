import { FaLeaf, FaSeedling, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaLeaf className="text-green-600 text-4xl mb-2" />,
    title: "Eco-Friendly",
    description: "Sustainable farming for a greener planet."
  },
  {
    icon: <FaSeedling className="text-green-600 text-4xl mb-2" />,
    title: "Smart Cultivation",
    description: "Automated and data-driven agriculture tools."
  },
  {
    icon: <FaChartLine className="text-green-600 text-4xl mb-2" />,
    title: "Analytics",
    description: "Monitor growth, weather, and yield predictions."
  },
];

const Featuressection = () => {
  return (
    <section className="py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center transition hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-green-800 mt-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Featuressection;
