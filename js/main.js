const form = document.querySelector("form");
const input = document.querySelector("input");
const result = document.querySelector("#result");

form.addEventListener("submit", e => {
    e.preventDefault();
    const city = input.value;
    const apiKey = "cad4ca0592479da05f632c56252dc2af";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const description = data.weather[0].description;
        const temp = data.main.temp;
        const feelsLike = data.main.feels_like;
        let tempF = (temp * 9/5) + 32;
        let feelsLikeF = (feelsLike * 9/5) + 32;
        result.innerHTML = `Current weather in ${city}: ${description}, <br> Temperature: ${tempF.toFixed(2)} °F, <br> Feels like: ${feelsLikeF.toFixed(2)} °F`;
        console.log(tempF);
    })
    .catch(error => console.error(error));

});