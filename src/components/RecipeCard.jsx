import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/pages/recipeList.css';

const recipes = [
  {
    id: 1,
    title: 'Jalapeno Popper Grilled Cheese Sandwich',
    provider: 'Closet Cooking',
    image: '/assets/sand.jpg',
    category: 'Lunch',
  },
  {
    id: 2,
    title: 'Perfect Iced Coffee',
    provider: 'The Pioneer Woman',
    image: '/assets/coffee.jpg',
    category: 'Beverages',
  },
  {
    id: 3,
    title: 'Crash Hot Potatoes',
    provider: 'The Pioneer Woman',
    image: '/assets/pot.jpg',
    category: 'Dinner',
  },
  {
    id: 4,
    title: 'Blueberry Pancakes',
    provider: 'Simply Recipes',
    image: '/assets/pan.jpg',
    category: 'Breakfast',
  },
];

const RecipeList = () => {
  const { category } = useParams();

  // Filter recipes by category
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="recipe-list-container">
      <h1 className="recipe-list-title">{category} Recipes</h1>
      <div className="recipe-grid">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <h2 className="recipe-title">{recipe.title}</h2>
            <p className="recipe-provider">{recipe.provider}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
