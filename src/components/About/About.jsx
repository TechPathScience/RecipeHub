import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-header">
          <h1>About RecipeHub</h1>
          <p>
            Your ultimate destination for discovering, sharing, and enjoying
            recipes!
          </p>
        </div>
        <div className="about-content">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              RecipeHub is dedicated to bringing together food enthusiasts from
              around the world. Whether you're a seasoned chef or just starting
              your culinary journey, we provide a platform to explore and share
              recipes that inspire creativity and delight taste buds.
            </p>
          </section>
          <section className="about-section">
            <h2>Key Features</h2>
            <ul>
              <li>Discover recipes from various cuisines and cultures.</li>
              <li>Share your favorite recipes with the community.</li>
              <li>Save and organize your personal recipe collection.</li>
              <li>Follow and connect with other food lovers.</li>
            </ul>
          </section>
          <section className="about-section">
            <h2>Why RecipeHub?</h2>
            <p>
              RecipeHub stands out by combining a user-friendly design with a
              vibrant community of food lovers. It's not just a recipe platform;
              it's a hub for creativity, connection, and culinary joy.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
