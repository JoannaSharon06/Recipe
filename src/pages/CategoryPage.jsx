import React from "react";
import { useParams } from "react-router-dom";
import RecipeList from "../components/RecipeList";

const CategoryPage = ({ recipes }) => {
  const { category } = useParams();

  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <h1>{category} Recipes</h1>
      {filteredRecipes.length > 0 ? (
        <RecipeList recipes={filteredRecipes} />
      ) : (
        <p>No recipes found in this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
