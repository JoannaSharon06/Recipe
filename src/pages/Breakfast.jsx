import React from "react";
import '../styles/breakfast.css'; // Import the CSS file

const breakfastRecipes = [
  {
    id: 1,
    name: "Blueberry Pancakes",
    description: "Fluffy pancakes loaded with fresh blueberries.",
    method: "Mix the ingredients, pour batter onto a heated griddle, and cook until golden brown.",
  },
  {
    id: 2,
    name: "Avocado Toast",
    description: "A simple, healthy toast with mashed avocado and a sprinkle of salt.",
    method: "Toast a slice of bread, mash avocado with lemon juice, and spread on top of the toast.",
  },
  {
    id: 3,
    name: "Omelette",
    description: "A classic scrambled egg omelette with cheese and vegetables.",
    method: "Beat eggs, pour into a heated pan, add your desired fillings, and cook until set.",
  },
];

const Breakfast = () => {
  return (
    <div className="breakfast-container">
      <h1 className="breakfast-title">Breakfast Recipes</h1>
      <div>
        {breakfastRecipes.map(({ id, name, description, method }) => (
          <div key={id} className="recipe-card">
            <h2 className="recipe-name">{name}</h2>
            <p className="recipe-description">
              <strong>Description:</strong> {description}
            </p>
            <p className="recipe-method">
              <strong>Method:</strong> {method}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
