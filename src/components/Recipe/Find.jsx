import React, { useState } from "react";
import axios from "axios";
import "./Find.css"; // Import your CSS file
import Navbar from "../Navbar/Navbar";

const Find = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [instructions, setInstructions] = useState([]); // State for storing cooking instructions as an array
  const [offset, setOffset] = useState(0); // For pagination
  const [loading, setLoading] = useState(false); // Loading state
  const [noResults, setNoResults] = useState(false); // No results state
  const [firstSearch, setFirstSearch] = useState(true); // To track if it's the first search attempt

  const fetchRecipes = async (reset = false) => {
    if (reset) {
      setFirstSearch(false); // User has searched at least once
    }

    if (!query) {
      setNoResults(true);
      return; // If query is empty, set noResults to true and return
    }

    const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=71b1180398d54a08970520720cdaf733&number=10&offset=${
      reset ? 0 : offset
    }`;
    setLoading(true); // Set loading to true when fetching starts
    setNoResults(false); // Reset no results state
    try {
      const response = await axios.get(API_URL);
      if (reset) {
        setRecipes(response.data.results); // Reset recipes if searching again
        setOffset(10); // Reset offset for next load
      } else {
        setRecipes((prev) => [...prev, ...response.data.results]); // Append new recipes
      }
      setSelectedRecipe(null); // Clear previous selected recipe
      setInstructions([]); // Clear instructions when fetching new recipes

      // Check if no recipes found
      if (response.data.results.length === 0) {
        setNoResults(true); // Set no results state to true
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const fetchRecipeDetails = async (id) => {
    const API_URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=71b1180398d54a08970520720cdaf733`;
    try {
      const response = await axios.get(API_URL);
      setSelectedRecipe(response.data);
      setInstructions([]); // Clear instructions when selecting a new recipe
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  };

  const fetchInstructions = async (id) => {
    const API_URL = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=71b1180398d54a08970520720cdaf733`;
    try {
      const response = await axios.get(API_URL);
      // Assuming we're only interested in the first set of instructions
      if (response.data.length > 0) {
        const instructionSteps = response.data[0].steps; // Store steps as an array
        setInstructions(instructionSteps);
      } else {
        setInstructions(["No instructions available for this recipe."]);
      }
    } catch (error) {
      console.error("Error fetching recipe instructions:", error);
    }
  };

  const loadMoreRecipes = () => {
    fetchRecipes(); // Load more recipes using the current offset
    setOffset((prev) => prev + 10); // Increment offset for the next load
  };

  return (
    <>
    <Navbar />
      <div className="container-tag">
        <h1 className="heading">Recipe Finder</h1>
        <div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                fetchRecipes(true); // Call fetchRecipes when Enter is pressed
              }
            }}
            placeholder="Search for a recipe..."
          />
          <button onClick={() => fetchRecipes(true)}>Search</button>
        </div>
        {loading && (
          <div className="loading-cards">
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="recipe-card loading" key={index}>
                <div className="loading-image"></div>
                <div className="loading-title"></div>
                <div className="loading-button"></div>
              </div>
            ))}
          </div>
        )}
        {selectedRecipe ? (
          <div className="recipe-details">
            <h2>{selectedRecipe.title}</h2>
            <img
              src={selectedRecipe.image}
              alt={selectedRecipe.title}
              width="300"
            />
            <h2>Ingredients:</h2>
            <ul>
              {selectedRecipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
            <button onClick={() => setSelectedRecipe(null)}>Back</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => fetchInstructions(selectedRecipe.id)}>
              How to Make
            </button>
            {instructions && instructions.length > 0 && (
              <div className="instructions">
                <h2>How To Make:</h2>
                <ul>
                  {instructions.map((step, index) => (
                    <li key={index}>{step.step}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div>
            {noResults &&
              !firstSearch && ( // Show prompt message when no results and user has searched
                <p>No recipes found. Please search again.</p>
              )}
            <div className="recipe-grid">
              {recipes.map((recipe) => (
                <div className="recipe-card" key={recipe.id}>
                  <img src={recipe.image} alt={recipe.title} />
                  <h2>{recipe.title}</h2>
                  <div className="button-container">
                    <button onClick={() => fetchRecipeDetails(recipe.id)}>
                      View Recipe
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {recipes.length > 0 && !loading && (
              <button onClick={loadMoreRecipes}>Load More Recipes</button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Find;
