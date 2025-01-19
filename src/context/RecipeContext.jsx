import React, { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState(["All", "Sandwich", "Beverage", "Dessert"]);

  const addRecipe = (newRecipe) => setRecipes([...recipes, { ...newRecipe, id: Date.now() }]);
  const editRecipe = (id, updatedRecipe) => {
    setRecipes(recipes.map((recipe) => (recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe)));
  };

  return (
    <RecipeContext.Provider value={{ recipes, categories, addRecipe, editRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
