import React from "react";
import '../styles/lunch.css'; // Import the CSS file

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
  {
    id: 4,
    name: "Caprese Sandwich",
    description: "A fresh sandwich with mozzarella, tomato, and basil.",
    method: "Layer fresh mozzarella, tomato slices, and basil leaves on bread. Drizzle with olive oil and balsamic vinegar.",
  },
  {
    id: 5,
    name: "Turkey Club Sandwich",
    description: "A classic sandwich with turkey, bacon, lettuce, and tomato.",
    method: "Layer turkey, crispy bacon, lettuce, and tomato on toasted bread. Add mayonnaise.",
  },
  {
    id: 6,
    name: "Vegetable Stir-Fry Noodles",
    description: "A quick and healthy noodle dish with mixed vegetables.",
    method: "Stir-fry vegetables, add cooked noodles, and toss with soy sauce and sesame oil.",
  },
];

const Lunch = () => {
  return (
    <div className="lunch-container">
      <h1 className="lunch-title">Lunch Recipes</h1>
      <div>
        {lunchRecipes.map(({ id, name, description, method }) => (
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

export default Lunch;
