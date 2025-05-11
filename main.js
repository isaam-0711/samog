const searchMealUrl = "https://themealdb.com/api/json/v1/1/search.php?s=";

let searchBar = document.querySelector("#search-bar");
let searchButton = document.querySelector("#search-button");
let nosearchText = document.querySelector("#no-search-text");

let recipeArea = document.querySelector("#recipe-area");
let recipeImage = document.querySelector("#recipe-image");
let recipeName = document.querySelector("#recipe-name");
let recipeCategory = document.querySelector("#recipe-category");
let recipeInstructions = document.querySelector("#recipe-instructions");

recipeArea.style.display = "none";

searchButton.addEventListener("click", function () {
  let searchUrl = searchMealUrl +  searchBar.value;
  fetch(searchUrl)
    .then(response => response.json())
    .then(data => {

      if (data.meals !== null) {
        nosearchText.style.display = "none";
        recipeArea.style.display = "block";

        const recipe = data.meals[0];

        recipeName.innerHTML = recipe.strMeal;
        recipeImage.src = recipe.strMealThumb;

        recipeCategory.innerHTML = recipe.strCategory;
        recipeInstructions.innerHTML = recipe.strInstructions;

        searchBar.value = "";

      }

    });
});







