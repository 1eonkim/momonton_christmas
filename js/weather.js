API_KEY = "7115103c484556c5029feb599411041a";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // const cityNameContainer = document.querySelector(
            //     "#weather span:first-child"
            // );
            // const weatherContainer = document.querySelector(
            //     "#weather span:nth-child(2)"
            // );
            const tempContainer = document.querySelector(
                "#weather span:first-child"
            );
            const humidityContainer = document.querySelector(
                "#weather span:last-child"
            );

            // const name = "이름: " + data.name;
            // const weather = "날씨:" + data.weather[0].main;
            const temp = "온도: " + Math.round(data.main.temp) + "°C";
            const humidity = "습도:" + Math.round(data.main.humidity) + "%";

            // cityNameContainer.innerText = name;
            // weatherContainer.innerText = weather;
            tempContainer.innerText = temp;
            humidityContainer.innerText = humidity;
        });
}

function onGeoError() {
    alert("위치를 불러올수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
