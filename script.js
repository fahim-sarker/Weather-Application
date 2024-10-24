let apikey = "ebc1ee98d2d34b376b7882342f42d104";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchbox = document.querySelector(".search input");
let searchbtn = document.querySelector(".search button");
let cloudsicon = document.querySelector(".rain");

async function checkweather(city) {
  let response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "clouds") {
      cloudsicon.src = "images/clouds.png";
    } else if (data.weather[0].main == "clear") {
      cloudsicon.src = "images/clear.jpeg";
    } else if (data.weather[0].main == "Drizzle") {
      cloudsicon.src = "images/drizzle.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
