import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  // Array of image paths
  const images = [
    "/src/assets/img.jpg",
    "/src/assets/img2.jpg", // Make sure these images exist in your assets folder
    "/src/assets/img3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-1000 mb-4">
            Welcome to RecipeHub 🍔
          </h1>
          <p className="text-gray-600 mb-8">
            Discover and share your favourite recipes with our community.
            Whether you're a beginner or a seasoned chef, you'll find something
            to inspire you.
          </p>
          <Link
            to="/find"
            className="bg-blue-500 text-white py-2 button rounded hover:bg-blue-600"
          >
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={images[currentImageIndex]}
            alt="Delicious food"
            className="w-full rounded-lg shadow-md transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
