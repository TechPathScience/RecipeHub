import React from "react";
import { Link } from "react-router-dom";
import "./Usage.css";
import Navbar from "../Navbar/Navbar";

const UsagePage = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        {/* Header Section */}
        <h1 className="heading">How to Use RecipeHub</h1>
        <p className="definition">
          RecipeHub is your ultimate companion for discovering, creating, and
          sharing delicious recipes tailored to your taste.
        </p>

        {/* Quote Section */}
        <blockquote className="quote">
          "Cooking is at once child's play and adult joy. And cooking done with
          care is an act of love." — Craig Claiborne
        </blockquote>

        {/* Follow These Steps Section */}
        <section className="section">
          <h2 className="subheading">Follow These Steps:</h2>
          <ol className="list">
            <li>
              Open RecipeHub to unlock a world of{" "}
              <span>culinary inspiration</span> and
              <span> delicious possibilities</span>.
            </li>
            <li>
              Click on the <span>"Get Started"</span> button to dive into the
              vast collection of recipes, tailored for <span>every taste</span>{" "}
              and <span>occasion</span>.
            </li>
            <li>
              Use the powerful <span>search bar</span> to find your desired
              recipe by simply entering its <span>name</span> or a{" "}
              <span>key ingredient</span>. Our <span>intelligent search</span>{" "}
              will deliver quick and accurate results.
            </li>
            <li>
              Explore the recipes, follow the{" "}
              <span>step-by-step instructions</span>, and create{" "}
              <span>mouthwatering dishes</span> in your kitchen. Transform your
              cooking experience with RecipeHub!
            </li>
          </ol>
        </section>

        {/* Why Choose RecipeHub Section */}
        <section className="section">
          <h2 className="subheading">Why Choose RecipeHub?</h2>
          <ul className="list">
            <li>
              Gain access to <span>thousands of recipes</span> meticulously
              curated by
              <span> professional chefs</span> and{" "}
              <span>passionate food enthusiasts</span>. Every recipe is a
              journey into <span>culinary art</span>.
            </li>
            <li>
              Enjoy a <span>user-friendly interface</span> equipped with{" "}
              <span>advanced search</span> and
              <span> filter options</span>, making it effortless to find recipes
              based on
              <span> ingredients</span>, <span>cuisine types</span>, or{" "}
              <span>dietary preferences</span>.
            </li>
            <li>
              Receive <span>personalized recommendations</span> crafted just for
              you. RecipeHub learns your <span>preferences</span> and serves up
              recipes that align with your <span>tastes</span> and{" "}
              <span>needs</span>.
            </li>
            <li>
              Be a part of a thriving, <span>community-driven platform</span>.
              Share your own recipes, connect with fellow food lovers, and
              discover <span>hidden gems</span>
              contributed by our diverse and global audience.
            </li>
          </ul>
        </section>

        {/* Start Your Journey Section */}
        <section className="start-journey">
          <p>
            Start your journey with RecipeHub and transform your cooking
            experience!
          </p>
          <Link to="/find" className="button-tag">
            Explore Recipes
          </Link>
        </section>
      </div>
    </>
  );
};

export default UsagePage;
