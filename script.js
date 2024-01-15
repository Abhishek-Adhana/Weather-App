const apiKey = "6b61357690344ec175b15613eb5e5d47";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block"
            document.querySelector(".weather").style.display = "none"
        }else{
            var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name ;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "/WeatherApp/clouds.png"
        }
        else if(data.weather[0].main == "Rain"){
             weatherIcon.src = "/WeatherApp/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
             weatherIcon.src = "/WeatherApp/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
             weatherIcon.src = "/WeatherApp/mist.png"
        }
        else if(data.weather[0].main == "Snow"){
             weatherIcon.src = "/WeatherApp/snow.png"
        }
        else{
            weatherIcon.src = "/WeatherApp/clear.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
        } 
    }

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })