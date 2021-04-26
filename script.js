const cityName = document.getElementById("location");
const search = document.getElementById("search");
const currentCity = document.getElementById("current-city");
const currentTemp = document.getElementById("temp");
const description = document.getElementById("description");
const currentIcon = document.getElementById("current-icon");
const country = document.getElementById("country");

search.addEventListener("click", function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=4d13fa09002e9e6e93242ab2fc7af7f2`)
        .then(response => response.json())
        .then(data => {
            currentCity.innerText = data.name+',';
            country.innerText = data.sys.country;
            const temp = data.main.temp;
            const celsiusTemp = (temp - 273.15).toFixed(2) ; //from kelvin to Celsius & add two digits after decimal.
            currentTemp.innerText= celsiusTemp;
            let icon = data.weather[0].icon;
            currentIcon.src = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
            description.innerText = data.weather[0].main;
        })

})

