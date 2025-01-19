import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackgroundImage from '../assets/recipe.jpg';

const EditRecipePage = () => {
  // Define the recipes array directly within the component
  const recipes = [
    { id: 1, name: "Jalapeno Popper Grilled Cheese Sandwich", description: "A spicy twist on the classic grilled cheese sandwich." },
    { id: 2, name: "Perfect Iced Coffee", description: "A refreshing iced coffee with the perfect balance of flavors." },
    { id: 3, name: "Crash Hot Potatoes", description: "Crispy, roasted potatoes with a crispy, golden crust." },
    { id: 4, name: "Blueberry Pancakes", description: "Fluffy pancakes loaded with fresh blueberries." },
  ];

  const navigate = useNavigate();
  const { id } = useParams(); // Get the recipe ID from the URL

  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [editing, setEditing] = useState(false);

  const recipeToEdit = recipes.find((recipe) => recipe.id === parseInt(id));

  useEffect(() => {
    if (recipeToEdit) {
      setRecipeName(recipeToEdit.name);
      setRecipeDescription(recipeToEdit.description);
      setEditing(true);
    }
  }, [recipeToEdit]);

  const handleEditClick = (recipeId) => {
    // Navigate to the edit page for the selected recipe
    navigate(`/edit/${recipeId}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedRecipe = { id: parseInt(id), name: recipeName, description: recipeDescription };
    console.log("Updated Recipe:", updatedRecipe);
    // Navigate back to the home page or recipe list after saving
    navigate("/");
  };

  return (
    <div>
                  <img src={BackgroundImage} alt="Background" id="background-img" />

      <h2>Edit Recipe</h2>

      {!editing ? (
        <>
          <p>Select a recipe to edit:</p>
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <span>{recipe.name}</span>
                <button onClick={() => handleEditClick(recipe.id)}>Edit</button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="edit-recipe-container">
          <h3>Edit {recipeToEdit.name}</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Recipe Name:
              <input
                type="text"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                value={recipeDescription}
                onChange={(e) => setRecipeDescription(e.target.value)}
                required
              />
            </label>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditRecipePage;
