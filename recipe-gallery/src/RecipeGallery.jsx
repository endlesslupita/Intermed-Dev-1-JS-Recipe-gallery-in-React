function App() {
  return (
    <>
    {recipes.map(function(recipe) {
      return (
        <div key={recipe.id}>
          <h2>Meal: {recipe.title}</h2>
          <ul>Ingredients: {recipe.ingredients.map(function(ingredientList){
<li key={ingredientList}>{ingredientList}</li>
          })
                
                }</ul>
          <img src={recipe.image} alt={recipe.title} />

        </div>
      )
    })}
    </>
  );
};