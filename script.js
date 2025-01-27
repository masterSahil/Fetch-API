let dishName = document.querySelector(".dishName")
let category = document.querySelector(".category")
let area = document.querySelector(".area")
let instruction = document.querySelector(".instruction")
let video = document.querySelector(".video")
let img = document.querySelector(".img")

const url = "https://www.themealdb.com/api/json/v1/1/random.php";

async function getRecipe() {
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data.meals[0]);
    dishName.innerText = data.meals[0].strMeal;
    // console.log(`Dish Name: ${data.meals[0].strMeal}`);

    category.innerText = data.meals[0].strCategory;
    // console.log(`Dish Category: ${data.meals[0].strCategory}`);

    area.innerText = data.meals[0].strArea;
    // console.log(`Dish Area: ${data.meals[0].strArea}`);

    instruction.innerText = data.meals[0].strInstructions;
    // console.log(`Dish Instructions: ${data.meals[0].strInstructions}`);

    video.innerText = data.meals[0].strYoutube;
    video.setAttribute("href", data.meals[0].strYoutube)
    // console.log(`Dish Video: ${data.meals[0].strYoutube}`);

    img.innerText = data.meals[0].strMealThumb;
    img.setAttribute("href", data.meals[0].strMealThumb)
    // console.log(`Dish Thumbnail: ${data.meals[0].strMealThumb}`);
}