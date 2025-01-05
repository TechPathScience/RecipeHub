import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md relative"> {/* Set relative positioning */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center text-2xl font-bold text-gray-800">
          <img src="/src/assets/logo.png" alt="logo" className="logo mr-2" />
          <div className="brand">RecipeHub</div>
        </div>

        <div className="hidden md:flex nav">
          <Link to="/" className="text-gray-800 hover:text-gray-600 mx-2">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-gray-600 mx-2">
            About
          </Link>
          <Link to="/usage" className="text-gray-800 hover:text-gray-600 mx-2">
            Usage
          </Link>
          <Link to="/github" className="text-gray-800 hover:text-gray-600 mx-2">
            GitHub
          </Link>
        </div>

        {/* Menu icon for mobile view */}
        <div className="md:hidden menu flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 icon focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" /> // Close icon
            ) : (
              <FaBars className="w-6 h-6" /> // Menu icon
            )}
          </button>
        </div>
      </div>

      {/* Dropdown menu for mobile view */}
      {isMenuOpen && (
        <div className="dropdown"> {/* Dropdown container */}
          <Link to="/" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-gray-600">
            About
          </Link>
          <Link to="/usage" className="text-gray-800 hover:text-gray-600">
            Usage
          </Link>
          <Link to="/github" className="text-gray-800 hover:text-gray-600">
            GitHub
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
