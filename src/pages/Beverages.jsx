import React from "react";
import '../styles/pages/beverages.css'; 


const beverageRecipes = [
  {
    id: 1,
    name: "Perfect Iced Coffee",
    description: "A refreshing iced coffee made with strong brewed coffee and ice.",
    method: "Brew coffee, let it cool, then pour over ice and add milk or sweetener.",
  },
  {
    id: 2,
    name: "Green Smoothie",
    description: "A healthy green smoothie with spinach, banana, and almond milk.",
    method: "Blend spinach, banana, and almond milk until smooth.",
  },
  {
    id: 3,
    name: "Lemonade",
    description: "A sweet and tangy homemade lemonade.",
    method: "Mix fresh lemon juice, water, and sugar to taste, then chill.",
  },
];

const Beverages = () => {
  return (
    <div className="beverages-container">
      <h1 className="beverages-title">Beverages Recipes</h1>
      <div>
        {beverageRecipes.map(({ id, name, description, method }) => (
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

export default Beverages;
