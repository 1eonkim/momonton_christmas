API_KEY = "7115103c484556c5029feb599411041a";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const cityNameContainer = document.querySelector(
                "#weather span:first-child"
            );
            const weatherContainer = document.querySelector(
                "#weather span:nth-child(3)"
            );
            const tempContainer = document.querySelector(
                "#weather span:nth-child(5)"
            );
            const humidityContainer = document.querySelector(
                "#weather span:last-child"
            );

            const name = data.name;
            const weather = "Weather: " + data.weather[0].main;
            const temp = "Temp: " + Math.round(data.main.temp) + "°C";
            const humidity = "Humid:" + Math.round(data.main.humidity) + "%";

            cityNameContainer.innerText = name;
            weatherContainer.innerText = weather;
            tempContainer.innerText = temp;
            humidityContainer.innerText = humidity;
        });
}

function onGeoError() {
    alert("Can't bring the location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
