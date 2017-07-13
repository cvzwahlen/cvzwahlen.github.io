function getJSON(url) {
        return fetch(url)
            .then(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log(error);
        });
    }

    // Get the data from the wunderground API
    function getBreads() {
        var url = "cookbook.json";
        getJSON(url).then(function (data) {
            console.log(data);

          var breads = data.Breads;


            var recipeListElement = document.getElementById("recipeList");
            breads.forEach(function(recipe){
               var recipeCall = createRecipe(recipe);
                recipeListElement.appendChild(recipeCall);
            });

        });


    };

function getDesserts() {
    var url = "cookbook.json";
    getJSON(url).then(function (data) {
        console.log(data);

        var desserts = data.Desserts;


        var recipeListElement = document.getElementById("recipeList");
        desserts.forEach(function(recipe){
            var recipeCall = createRecipe(recipe);
            recipeListElement.appendChild(recipeCall);
        });

    });


};

function getMainDish() {
    var url = "cookbook.json";
    getJSON(url).then(function (data) {
        console.log(data);

        var mainDish = data.mainDish;


        var recipeListElement = document.getElementById("recipeList");
        mainDish.forEach(function(recipe){
            var recipeCall = createRecipe(recipe);
            recipeListElement.appendChild(recipeCall);
        });

    });


};


function getSalads() {
    var url = "cookbook.json";
    getJSON(url).then(function (data) {
        console.log(data);

        var salads = data.Salads;


        var recipeListElement = document.getElementById("recipeList");
        salads.forEach(function(recipe){
            var recipeCall = createRecipe(recipe);
            recipeListElement.appendChild(recipeCall);
        });

    });


};

function getSnacks() {
    var url = "cookbook.json";
    getJSON(url).then(function (data) {
        console.log(data);

        var snacks = data.Snacks;


        var recipeListElement = document.getElementById("recipeList");
        snacks.forEach(function(recipe){
            var recipeCall = createRecipe(recipe);
            recipeListElement.appendChild(recipeCall);
        });

    });


};










function createRecipe(recipe){
    var container = document.createElement('div');
    var title = document.createElement('h1');
    var img = document.createElement('img');
    var ingredientList = document.createElement('dl');
    var steps = document.createElement('p');
    var cookTime = document.createElement('p');

    title.innerHTML = recipe.name;
    steps.innerHTML = recipe.steps;
    cookTime.innerHTML = "Cook Time: " + recipe.cookTime;
    img.setAttribute("src", recipe.imageURL);


    recipe.ingredients.forEach(function(ing){
        var quantity = document.createElement('dt');
        var ingName = document.createElement('dd');
        quantity.innerHTML = ing.quantity;
        ingName.innerHTML = ing.name;
        ingredientList.appendChild(quantity);
        ingredientList.appendChild(ingName);
    });




    container.appendChild(title);

    container.appendChild(img);
    container.appendChild(ingredientList);
    container.appendChild(steps);
    container.appendChild(cookTime);
    return container;
}
