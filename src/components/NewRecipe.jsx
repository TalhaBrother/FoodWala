import { useState } from "react";
import axios from "axios";

const NewRecipe = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    const recipe = {
      name,
      category,
      desc,
      ingredients: ingredients.split(","), // convert input string to array
      steps: steps.split(","), // convert input string to array
      cookTime,
      difficulty,
    };

    console.log(recipe);
      try {
    let response=await axios.post("http://localhost:3000/recipe",recipe)
    console.log("Recipe saved!",response.data)
    alert("Recipe has been added successfully!")
  } catch (error) {
    console.error(error.message)
  }
  };


  return (
    <div>
      <h2>Add New Recipe</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />

        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        /><br /><br />

        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea><br /><br />

        <input
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        /><br /><br />

        <input
          placeholder="Steps (comma separated)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        /><br /><br />

        <input
          placeholder="Cook Time"
          value={cookTime}
          onChange={(e) => setCookTime(e.target.value)}
        /><br /><br />

        <input
          placeholder="Difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        /><br /><br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default NewRecipe;
