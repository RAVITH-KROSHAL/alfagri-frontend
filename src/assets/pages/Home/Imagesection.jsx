import React, { useEffect, useState } from "react";

const images = [
  "/ImageSection/sf.jpg",
  "/ImageSection/sf1.jpg",
  "/ImageSection/sf.png",
  "/ImageSection/sf1.png",
  "/ImageSection/sf2.png",
  "/ImageSection/sf3.png",
  "/ImageSection/sf4.png",
  "/ImageSection/sf5.png",
  "/ImageSection/sf6.png",
];

const ImageSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center py-10 px-4">
      <div className="mx-auto w-full max-w-4xl h-[500px] overflow-hidden rounded-xl shadow-md">
        <img
          src={images[currentIndex]}
          alt="Smart Farming"
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default ImageSection;
