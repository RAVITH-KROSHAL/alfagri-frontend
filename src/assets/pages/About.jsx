import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg mb-6 text-center">
          Welcome to <span className="font-semibold text-green-700">ALFAGRI</span> – your trusted smart agriculture solution provider.
        </p>

        <div className="space-y-4 text-justify">
          <p>
            At Alfagan, we are committed to revolutionizing agriculture using technology. Our mission is to empower farmers and agricultural businesses with intelligent tools that simplify, optimize, and automate crop management.
          </p>
          <p>
            With our IoT-based monitoring systems, AI-driven disease detection, and real-time environmental data analysis, we provide farmers with insights that lead to higher yields and sustainable practices.
          </p>
          <p>
            Our team is passionate about creating modern agricultural solutions that are affordable and accessible, even in remote areas. Alfagan continues to grow and innovate with the goal of transforming traditional farming into smart farming.
          </p>
          <p>
            Thank you for trusting us on your journey toward a smarter, greener future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
