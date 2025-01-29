import React from "react";
import '../styles/pages/lunch.css'; 

const lunchRecipes = [
  {
    id: 1,
    name: "Jalapeno Popper Grilled Cheese Sandwich",
    description: "A spicy twist on the classic grilled cheese sandwich.",
    method: "Spread cream cheese on bread, add jalapenos, cheddar cheese, and grill until golden.",
  },
  {
    id: 2,
    name: "Avocado Toast with Egg",
    description: "A healthy and quick lunch option with creamy avocado and a fried egg.",
    method: "Toast bread, mash avocado with lemon juice, top with a fried egg, and season with salt and pepper.",
  },
  {
    id: 3,
    name: "Chicken Caesar Wrap",
    description: "A portable Caesar salad in a tortilla wrap.",
    method: "Combine grilled chicken, romaine lettuce, Caesar dressing, and parmesan cheese in a wrap.",
  },
  
];

const Lunch = () => {
  return (
    <div className="lunch">
      <h1 className="title">Lunch Recipes</h1>
      <div>
        {lunchRecipes.map(({ id, name, description, method }) => (
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

export default Lunch;

