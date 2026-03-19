import recipes from './data/recipes.js'
import './RecipeGallery.css'

function RecipeGallery() {
  return (
    <>
    {recipes.map(function(recipe) {
      return (
        <div key={recipe.id} className="recipe-card">
          <h2>Meal: {recipe.title}</h2>
          <b>Ingredients:</b>
          <ul>
                {recipe.ingredients.map(function(ingredientList){
                return (
<li key={ingredientList}>{ingredientList}</li>
           )})
                }</ul>
          <img src={recipe.image} alt={recipe.title} />

        </div>
      )
    })}
    </>
  );
};
export default RecipeGallery