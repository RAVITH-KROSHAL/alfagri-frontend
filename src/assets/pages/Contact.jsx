const Contact = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-6">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">Contact Us</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-4">
            Have questions about our products or services? Feel free to reach out.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>
              📍 <strong>Address:</strong> 227 F 1st Flr Galle Road, 03 · Colombo
            </li>
            <li>
              📞 <strong>Phone:</strong> 0777450722
            </li>
            <li>
              📧 <strong>Email:</strong> Alfagri@gmail.com
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="bg-green-50 p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
