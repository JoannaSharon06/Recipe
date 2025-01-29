import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackgroundImage from '../assets/recipe.jpg';

const EditRecipePage = () => {
  const recipes = [
    { id: 1, name: "Jalapeno Popper Grilled Cheese Sandwich", description: "A spicy twist on the classic grilled cheese sandwich." },
    { id: 2, name: "Perfect Iced Coffee", description: "A refreshing iced coffee with the perfect balance of flavors." },
    { id: 3, name: "Crash Hot Potatoes", description: "Crispy, roasted potatoes with a crispy, golden crust." },
    { id: 4, name: "Blueberry Pancakes", description: "Fluffy pancakes loaded with fresh blueberries." },
  ];

  const navigate = useNavigate();
  const { id } = useParams(); 

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
    navigate(`/edit/${recipeId}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedRecipe = { id: parseInt(id), name: recipeName, description: recipeDescription };
    console.log("Updated Recipe:", updatedRecipe);
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
        <div className="editrecipe">
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
