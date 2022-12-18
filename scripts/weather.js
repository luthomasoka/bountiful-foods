// const speed = document.querySelector('#speed').value;
const speed = document.querySelector('#speed');

// const temp = document.querySelector('.temp').value;
const temp = document.querySelector('#temp');
const search = document.querySelector('search');
// const icon = document.querySelector('#weather-icon');
let description = document.querySelector("#description");
const wrapper = document.querySelector(".wrapper");
const panel = document.querySelector(".panel");
let city = document.querySelector("#city");
const weather = document.querySelector(".weather");
const group = document.querySelector(".group");
let dt = document.querySelector("#dt");
let wind = document.querySelector("#wind");
let humidity = document.querySelector("#humidity");
const temperature = document.querySelector("#temperature");
let condition = document.querySelector("#condition");
let tempNumber = document.querySelector("#num");
const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
let forecast = document.querySelector("#forecast");
const form = document.querySelector("form");
const button = document.querySelector("#button");


const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=43219341657d7557244efb66c3f4d2b9';

// console.log(speed);
// console.log(temp);

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function iterateForcast(index, weatherData, weeklyForcast) {

 switch(index) {
  case 1:
    weeklyForcast.push({
      "date": weatherData.list[1].dt_txt.substring(5, 10),
      "high": Math.round(weatherData.list[1].main.temp_max),
      "min": Math.round(weatherData.list[1].main.temp_min)
    }) // {date:, high:, low:}
    break;
  case 6:
    weeklyForcast.push({
      "date": weatherData.list[6].dt_txt.substring(5, 10),
      "high": Math.round(weatherData.list[6].main.temp_max),
      "min": Math.round(weatherData.list[6].main.temp_min)
    })
    break;
  case 14:
    weeklyForcast.push({
      "date": weatherData.list[14].dt_txt.substring(5, 10),
      "high": Math.round(weatherData.list[14].main.temp_max),
      "min": Math.round(weatherData.list[14].main.temp_min)
    })
    break;
    case 22:
      weeklyForcast.push({
        "date": weatherData.list[22].dt_txt.substring(5, 10),
        "high": Math.round(weatherData.list[22].main.temp_max),
        "min": Math.round(weatherData.list[22].main.temp_min)
      })
      break;
      case 30:
        weeklyForcast.push({
          "date": weatherData.list[30].dt_txt.substring(5, 10),
          "high": Math.round(weatherData.list[30].main.temp_max),
          "min": Math.round(weatherData.list[30].main.temp_min)
        })
        break;
  default:
    break;
  }
}

function displayResults(weatherData) {

    dt.textContent = new Date(weatherData.list[0].dt_txt * 1000).toString().split(' ');
    console.log(dt);

    city.textContent = weatherData.city.name;

    tempNumber.textContent = weatherData.list[0].main.temp;

    description.textContent = weatherData.list[0].weather[0].description;

    wind.textContent = `Wind: ${weatherData.list[0].wind.speed} mph`;

    humidity.textContent = `Humidity: ${weatherData.list[0].main.humidity}%`;

    let iconsrc = `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`;
    condition.setAttribute('src', iconsrc);
    condition.setAttribute('alt', description);

    let weeklyForcast = [];

    for (let i = 0; i < weatherData['list'].length; i++) {
      iterateForcast(i, weatherData, weeklyForcast);
    }

    console.log(weeklyForcast);

    for (let j = 0; j < weeklyForcast.length; j++) {
      // forecast.textContent += `
      //   <div class='block'><h3 class='secondary'>${weeklyForcast[j].date}</h3><h2 class='high'>${weeklyForcast[j].high}</h2><h4 class='secondary'>${weeklyForcast[j].min}</h4></div>
      // `
      let blockElt = document.createElement('div');
      const dateElt = document.createElement('h3'); 
      const highElt = document.createElement('h2');
      const minElt = document.createElement('h4');

      blockElt.className = "block";
      dateElt.className = "secondary";
      highElt.className = "high";
      minElt.className = "secondary";

      dateElt.innerHTML = weeklyForcast[j].date;
      highElt.innerHTML = weeklyForcast[j].high;
      minElt.innerHTML = weeklyForcast[j].min;

      blockElt.appendChild(dateElt);
      blockElt.appendChild(highElt);
      blockElt.appendChild(minElt);

      forecast.appendChild(blockElt);
    }

    // result = descWords.map((word) => { 
    //     return word[0].toUpperCase() + word.substring(1); 
    // }).join(" ")

}
  
apiFetch();