const products = [
  {
    id: 1,
    name: 'Organic Fertilizer A1',
    description: 'Eco-friendly organic fertilizer suitable for all types of crops.',
    price: 'Rs. 1,200',
    image: '/ProductImages/A1.png',
  },
  {
    id: 2,
    name: 'IoT Soil Sensor',
    description: 'Smart soil sensor that measures moisture, pH, and temperature.',
    price: 'Rs. 4,800',
    image: '/ProductImages/A2.png',
  },
  {
    id: 3,
    name: 'Pest Control Spray',
    description: 'Organic pest control solution with zero harmful chemicals.',
    price: 'Rs. 950',
    image: '/ProductImages/A3.png',
  },
  {
    id: 4,
    name: 'Organic Seeds Pack',
    description: 'High-quality organic seeds for seasonal vegetables and herbs.',
    price: 'Rs. 700',
    image: '/ProductImages/A5.png',
  },
  {
    id: 5,
    name: 'All-Purpose Fertilizer Mix',
    description: 'Balanced fertilizer mix to improve crop yield sustainably.',
    price: 'Rs. 1,500',
    image: '/ProductImages/A6.png',
  },
  {
    id: 6,
    name: 'Smart Sprinkler System',
    description: 'IoT-based automated watering system to conserve water and ensure optimal irrigation.',
    price: 'Rs. 8,200',
    image: '/ProductImages/A7.png',
  },
  {
    id: 7,
    name: 'Hand Tools Kit',
    description: 'Essential farming tools including spade, fork, hoe and gloves.',
    price: 'Rs. 2,300',
    image: '/ProductImages/A8.png',
  },
  {
    id: 8,
    name: 'Smart Weather Station',
    description: 'Real-time climate tracking and forecasting for your fields.',
    price: 'Rs. 9,500',
    image: '/ProductImages/A9.png',
  },
];

const Product = () => {
  return (
     <div className="p-10 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Our Products</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border shadow-md rounded-lg overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-800">{product.name}</h3>
              <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
              <p className="text-green-600 font-bold mt-3">{product.price}</p>
              <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
