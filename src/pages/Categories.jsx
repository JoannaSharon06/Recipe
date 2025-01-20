import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/categories.css';
import pan from '../assets/pan.jpg';
import coffee from '../assets/coffee.jpg';
import pot from '../assets/pot.jpg';
import sand from '../assets/sand.jpg';

const recipes = [
  {
    id: 1,
    title: 'Jalapeno Popper Grilled Cheese Sandwich',
    provider: 'Closet Cooking',
    image: sand,
    category: 'Lunch',
  },
  {
    id: 2,
    title: 'Perfect Iced Coffee',
    provider: 'The Pioneer Woman',
    image: coffee,
    category: 'Beverages',
  },
  {
    id: 3,
    title: 'Crash Hot Potatoes',
    provider: 'The Pioneer Woman',
    image: pot,
    category: 'Dinner',
  },
  {
    id: 4,
    title: 'Blueberry Pancakes',
    provider: 'Simply Recipes',
    image: pan,
    category: 'Breakfast',
  },
];

// Get unique categories with their images
const getUniqueCategories = (recipes) => {
  const categoryMap = new Map();
  recipes.forEach((recipe) => {
    if (!categoryMap.has(recipe.category)) {
      categoryMap.set(recipe.category, recipe.image);
    }
  });
  return Array.from(categoryMap.entries());
};

const Categories = () => {
  const categories = getUniqueCategories(recipes);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category.toLowerCase() === 'lunch') {
      navigate('/lunch'); // Navigate to the Lunch page for lunch recipes
    } 
    else if (category.toLowerCase() === 'breakfast') {
      navigate('/breakfast'); // Navigate to the Lunch page for lunch recipes
    }
    else if (category.toLowerCase() === 'beverages') {
      navigate('/beverages'); // Navigate to the Lunch page for lunch recipes
    }
    else if (category.toLowerCase() === 'dinner') {
      navigate('/dinner'); // Navigate to the Lunch page for lunch recipes
    }else {
      navigate(`/recipes/${category.toLowerCase()}`);
    }
  };

  return (
    <div className="categories-container">
      <h1 className="categories-title">Recipe Categories</h1>
      <div className="categories-grid">
        {categories.map(([category, image], index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => handleCategoryClick(category)}
          >
            <img src={image} alt={category} className="category-image" />
            <h2 className="category-name">{category}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
