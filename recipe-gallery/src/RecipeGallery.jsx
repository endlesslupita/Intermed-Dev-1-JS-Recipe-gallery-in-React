function App() {
  return (
    <>
    {recipes.map(function(recipe) {
      return (
        <div key={recipe.id}>
          <h2>Meal: {recipe.title}</h2>
          <p>Ingredients: {recipe.ingredients.map(function(ingredientList){})
                
                }</p>
          <p>{recipe.image}</p>

        </div>
      )
    })}
    </>
  );
};