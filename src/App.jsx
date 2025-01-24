import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AddRecipeForm from "./pages/AddRecipePage";
import EditRecipePage from "./pages/EditRecipePage";
import CategoryPage from "./pages/CategoryPage";
import RecipeList from "./components/RecipeList";
import Categories from "./pages/Categories";
import Lunch from "./pages/Lunch";
import Breakfast from "./pages/Breakfast";
import Dinner from "./pages/Dinner";
import Beverages from "./pages/Beverages";

const App = () => {
  const [recipes, setRecipes] = useState([
    { id: 1, title: "Jalapeno Popper Grilled Cheese Sandwich", category: "Lunch", provider: "Closet Cooking", image: "/assets/sand.jpg" },
    { id: 2, title: "Perfect Iced Coffee", category: "Beverages", provider: "The Pioneer Woman", image: "/assets/coffee.jpg" },
    { id: 3, title: "Crash Hot Potatoes", category: "Dinner", provider: "The Pioneer Woman", image: "/assets/pot.jpg" },
    { id: 4, title: "Blueberry Pancakes", category: "Breakfast", provider: "Simply Recipes", image: "/assets/pan.jpg" },
  ]);
  
  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }]);
  };
  

  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} />
        <Route path="/edit/:id" element={<EditRecipePage recipes={recipes} onSave={handleAddRecipe} />} />
        <Route path="/categories" element={<Categories recipes={recipes} />} />
        <Route path="/categories/:category" element={<CategoryPage recipes={recipes} />} />
        <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
        <Route path="/lunch" element={<Lunch />} /> 
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/beverages" element={<Beverages />} />
  
      </Routes>
    </Router>
  );
};

export default App;
