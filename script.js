let dishName = document.querySelector(".dishName")
let category = document.querySelector(".category")
let area = document.querySelector(".area")
let instruction = document.querySelector(".instruction")
let video = document.querySelector(".video")
let img = document.querySelector(".img")
let source = document.querySelector(".source")

const url = "https://www.themealdb.com/api/json/v1/1/random.php";

async function getRecipe() {
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data.meals[0]);
    dishName.innerText =`Dish Name: ${data.meals[0].strMeal}`;

    category.innerText = `Category: ${data.meals[0].strCategory}`;

    area.innerText = `Rigion: ${data.meals[0].strArea}`;

    instruction.innerText = ` ${data.meals[0].strInstructions}`;

    if (data.meals[0].strYoutube == "") {
        video.innerText = "Video Unavailable";
        video.style.color = "black";
        video.style.textDecoration = "none";
    } else {
        video.setAttribute("href", data.meals[0].strYoutube)
        video.innerText = `Video Link: ${data.meals[0].strYoutube}`
    }

    img.setAttribute("src", data.meals[0].strMealThumb)

    if (data.meals[0].strSource == "") {
        video.innerText = "Source Unavailable";
        video.style.color = "black";
        video.style.textDecoration = "none";
    } else {
         source.setAttribute("src", data.meals[0].strSource)
        source.innerText = `Video Source: ${data.meals[0].strSource}`
    }
}

getRecipe();