// Sample data for initial demonstration
let recipes = [
    { id: 1, name: "Spaghetti Carbonara", ingredients: "Spaghetti, eggs, bacon, Parmesan cheese, black pepper", instructions: "Boil spaghetti; cook bacon; mix eggs, cheese, and pepper; combine all ingredients." },
    { id: 2, name: "Chicken Stir Fry", ingredients: "Chicken breast, soy sauce, vegetables (bell peppers, broccoli, carrots), garlic, ginger", instructions: "Cook chicken; stir fry vegetables; add sauce; combine all ingredients." }
];

const recipeForm = document.getElementById('recipeForm');
const recipeList = document.getElementById('recipeList');

// Function to display recipes
function displayRecipes() {
    recipeList.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <button onclick="editRecipe(${recipe.id})">Edit</button>
            <button onclick="deleteRecipe(${recipe.id})">Delete</button>
        `;
        recipeList.appendChild(recipeElement);
    });
}

// Function to add a new recipe
recipeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const recipeName = document.getElementById('recipeName').value;
    const recipeIngredients = document.getElementById('recipeIngredients').value;
    const recipeInstructions = document.getElementById('recipeInstructions').value;
    
    const newRecipe = {
        id: recipes.length + 1,
        name: recipeName,
        ingredients: recipeIngredients,
        instructions: recipeInstructions
    };

    recipes.push(newRecipe);
    displayRecipes();

    // Reset form fields
    recipeForm.reset();
});

// Function to delete a recipe
function deleteRecipe(id) {
    recipes = recipes.filter(recipe => recipe.id !== id);
    displayRecipes();
}

// Function to edit a recipe (not implemented in this basic example)
function editRecipe(id) {
    alert("Edit functionality is not implemented in this basic example.");
}

// Initial display of recipes
displayRecipes();