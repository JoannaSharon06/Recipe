import React from "react";
import '../styles/pages/dinner.css'; 


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
    <div className="dinner">
      <h1 className="title">Dinner Recipes</h1>
      <div>
        {dinnerRecipes.map(({ id, name, description, method }) => (
          <div key={id} className="recipecard">
            <h2 className="recipename">{name}</h2>
            <p className="recipedescription">
              <strong>Description:</strong> {description}
            </p>
            <p className="recipemethod">
              <strong>Method:</strong> {method}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dinner;
