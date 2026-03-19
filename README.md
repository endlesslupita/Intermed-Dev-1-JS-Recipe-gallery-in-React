# Recipe Gallery in React

## Objective

Develop a Recipe Gallery using React to display a curated list of recipes, focusing on rendering static data. This assignment emphasizes understanding **list rendering in React** without involving state management or interactivity.

> Note: This assignment can be completed using Vite or Expo, but the instructions below are specifically tailored for Vite.

---

## Setup and Initial Configuration

Initialize a new React application using Vite by running the following commands in your terminal:

```bash
npm create vite@latest recipe-gallery -- --template react
cd recipe-gallery
npm install
npm run dev
```

Create a `RecipeGallery.jsx` component that will be responsible for rendering the gallery of recipes.

> Note: Vite uses the `.jsx` extension for files containing JSX.

---

## Recipe Data

Inside the `RecipeGallery` component or in a separate data file, define a constant array named `recipes`. Each element in the array should represent a recipe as an object with properties: `id`, `title`, `ingredients`, and `image` (URL to an image).

**Example recipe object:**

```js
{
  id: 1,
  title: "Spaghetti Carbonara",
  ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
  image: "https://example.com/carbonara.jpg"
}
```

---

## Rendering the Gallery

- Use the `map()` function to iterate over the `recipes` array and return a JSX structure for each recipe.
- Consider using a **card layout** to display each recipe's title, a list of ingredients, and an image.
- Ensure each recipe card has a unique `key` prop, ideally using the recipe's `id`.

---

## Styling (Optional)

- Apply CSS to style the gallery and recipe cards.
- You can use inline styles, CSS stylesheets (e.g., `App.css`), or CSS-in-JS libraries like `styled-components`.
- Ensure the layout is **responsive** and looks good on different screen sizes.
- Consider using **CSS Grid** or **Flexbox** for the layout.

---

## Relevant Study Material

- [W3Schools: React Lists and Keys](https://www.w3schools.com/react/react_lists.asp)
- [W3Schools: JavaScript Array .map() Method](https://www.w3schools.com/jsref/jsref_map.asp)

---

## Assignment Submission

Once you have completed the assignment, prepare the following for submission:

### GitHub Repository
- Push your program to a new **public** GitHub repository.
- Your repository should include all source code files and this `README.md`.

### Video Demonstration
Provide a video demonstrating your program in action, including:
- The program's functionality
- At least **3 normal test cases** and **3 edge case test cases**

### Submission
- Submit the link to your GitHub repository.
- Include a link to your **YouTube video demonstration** (public or unlisted).
