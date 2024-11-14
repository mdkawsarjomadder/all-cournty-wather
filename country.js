const apikey = "8e775212912b94a928b443e88a7b0e7b";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=&`;

const sercheBox = document.querySelector(".search input");
const sercheBtn = document.querySelector(".search button");

async function checkWeather(city) {
const respones = await fetch(apiUrl + city + `&appid=${apikey}`);
var data = await respones.json();
console.log(data); 
 document.querySelector(".city").innerHTML = data.name;
 document.querySelector(".weather-rain").innerHTML = Math.round(data.main.temp)+"°c";
 document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
 document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

 
}
sercheBox.addEventListener("click", ()=>{
    checkWeather(sercheBox.value);
})

