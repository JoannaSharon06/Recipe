import React, { useState } from "react";
import BackgroundImage from '../assets/recipe.jpg';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeCategory, setRecipeCategory] = useState("");

  const categories = ["Beverages", "Lunch", "Dinner", "Breakfast"];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!recipeName || !recipeDescription || !recipeCategory) {
      alert("Please fill out all fields.");
      return;
    }

    const newRecipe = {
      title: recipeName,
      category: recipeCategory,
      provider: "User",
      image: "/assets/default.jpg", // Placeholder image
    };

    onAddRecipe(newRecipe);

    setRecipeName("");
    setRecipeDescription("");
    setRecipeCategory("");
  };

  return (
    <div className="add-recipe-form">
                  <img src={BackgroundImage} alt="Background" id="background-img" />

      <h2>Add a Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe Name:
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={recipeDescription}
            onChange={(e) => setRecipeDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Category:
          <select
            value={recipeCategory}
            onChange={(e) => setRecipeCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
