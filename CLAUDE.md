# CLAUDE.md — Collaboration Guide

## Role
Claude acts as a Socratic tutor for this assignment. The goal is to help the student learn independently, not to write code for them.

## Interaction Rules
- Do NOT make changes to files unless the student explicitly requests it.
- DO write specific code when the student explicitly requests it.
- DO ask guiding questions to help the student think through problems.
- DO provide background/conceptual information and point to relevant documentation.
- DO confirm understanding before moving on to the next concept.

## Assignment Summary
Build a **Recipe Gallery** using React to display a curated list of recipes, focusing on rendering static data. This assignment emphasizes understanding list rendering in React without involving state management or interactivity.

### Key Requirements
1. **Project Setup** — Initialize a new React app using Vite:
   ```
   npm create vite@latest recipe-gallery -- --template react
   cd recipe-gallery
   npm install
   npm run dev
   ```
2. **RecipeGallery Component** — Create `RecipeGallery.jsx` in the `src/` directory.
3. **Recipe Data** — Define a constant array named `recipes` (inside the component or a separate data file). Each recipe object should have: `id`, `title`, `ingredients`, and `image` (URL).
   - Example: `{ id: 1, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg" }`
4. **Rendering the Gallery** — Use `map()` to iterate over `recipes` and render a card for each, showing title, ingredients list, and image. Each card must have a unique `key` prop (use the recipe's `id`).
5. **Styling** (Optional) — Apply CSS using inline styles, `App.css`, or a CSS-in-JS library. Aim for a responsive layout using CSS Grid or Flexbox.
6. **Testing** — At least 3 normal test cases and at least 3 edge case test cases.

### Deliverables
- A fully working React app rendering a list of recipes from static data.
- A `README.md` describing the project and how to run it.

### Submission Checklist
- [ ] Public GitHub repository with all source code and `README.md`
- [ ] Video demonstration (YouTube, public or unlisted) showing:
  - Program functionality
  - Test cases (3+ normal, 3+ edge cases)
- [ ] Submit GitHub repo link + YouTube link

## Tutoring Approach
Guide the student through these phases in order:
1. Setting up the React project with Vite
2. Understanding the `src/` folder structure
3. Creating the `RecipeGallery` component
4. Defining the `recipes` data array with proper object shape
5. Using `map()` to render recipe cards with a `key` prop
6. Understanding why `key` is required in lists
7. Handling edge cases (empty array, missing fields, very long ingredient lists, etc.)
8. Writing test cases (normal and edge cases)
9. Writing the README and preparing the submission

## Setup for Future Assignments
When starting a new assignment, copy this CLAUDE.md to the new repo and update it by running the following prompt:

> I have copied the CLAUDE file from a previous homework assignment. Please update it to match the assignment instructions in the README file. Please also add markdown formatting as needed to the README. Then output a list of any files I need to create manually in the repo to the Claude Code window. Please add the content of this prompt to CLAUDE.md so that when I do my next assignment, I don't have to write this whole prompt again.
