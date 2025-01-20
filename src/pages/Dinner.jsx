import React from "react";
import '../styles/dinner.css'; // Import the CSS file

const dinnerRecipes = [
  {
    id: 1,
    name: "Crash Hot Potatoes",
    description: "Crispy potatoes with a garlic and herb topping.",
    method: "Boil potatoes, smash them, then bake with olive oil and seasoning until crispy.",
  },
  {
    id: 2,
    name: "Grilled Chicken Breast",
    description: "Simple, flavorful grilled chicken breasts.",
    method: "Season chicken breasts and grill until golden brown and cooked through.",
  },
  {
    id: 3,
    name: "Vegetable Stir-Fry",
    description: "A mix of colorful vegetables stir-fried in soy sauce.",
    method: "Stir-fry vegetables with soy sauce and sesame oil in a hot pan.",
  },
];

const Dinner = () => {
  return (
    <div className="dinner-container">
      <h1 className="dinner-title">Dinner Recipes</h1>
      <div>
        {dinnerRecipes.map(({ id, name, description, method }) => (
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

export default Dinner;
