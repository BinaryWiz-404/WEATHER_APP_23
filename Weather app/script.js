const inputbox= document.querySelector(`.input-box`);
const searchbtn=document.getElementById(`searchbtn`);
const weather_img=document.querySelector(`.weather-image`);
const temperature=document.querySelector('.temp');
const description=document.querySelector('.description');
const humidity=document.getElementById(`humidity`);
const wind_speed=document.getElementById(`wind-speed`);
const location_not_found =document.querySelector(`.location-not-found`);
const weather_body = document.querySelector(`.weather-body`);

async function checkweather(city){
const myapi="ef478609fbb7c5c91c11829a59e991f9";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myapi}`;

const weather_data = await fetch(`${url}`).then(response => response.json());

if(weather_data.cod == '404'){
   location_not_found.style.display = "flex";
   weather_body.style.display = "none";
    console.log("error");
    return;
}
else{
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
}



temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
description.innerHTML =`${weather_data.weather[0].description}`;
humidity.innerHTML =`${weather_data.main.humidity}%`;
wind_speed.innerHTML =`${weather_data.wind.speed}km/h`;

switch(weather_data.weather[0].main){
    case 'Clouds':weather_img.src="/images/cloud.png";
    break;
    case 'Snow':weather_img.src="/images/snow.png";
    break;
    case 'Mist':weather_img.src="/images/mist.png";
    break;
    case 'Clear':weather_img.src="/images/clear.png";
    break;
    case 'Rain':weather_img.src="/images/rain.png";
    break;

}
console.log(weather_data);

}


searchbtn.addEventListener(`click`,()=>{
checkweather(inputbox.value);
});
