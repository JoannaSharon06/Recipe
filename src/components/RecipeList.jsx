import React from "react";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title}</h3>
          <p>{recipe.provider}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
