const searchBtn = document.querySelector('.search-btn')
const myApikey = "6420e050eafb1168564bc46f224d51ae";
const cityName = document.querySelector(".city-name");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');
const Clouddescription = document.querySelector(".description")
const Cloudicon = document.querySelector(".weather-icon")
//function for hadnle search
function handleSearch() {
    const cityInput = document.querySelector('#city').value;
    if (cityInput.trim()) {
        fetchApi(cityInput);
        cityInput.innerHTML =""
    } else {
        alert("Enter Valid City Name");
    }
}

// using async await
async function fetchApi(cityInput) {
    cityName.textContent = "Loading...";
    temperature.textContent = "--";
    humidity.textContent= "--";
    Clouddescription.textContent = "Loading..."
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${myApikey}&units=metric`);

    const data = await response.json();

    try {
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please check the spelling.');
            }
            throw new Error(`Something went wrong (status ${response.status})`);
        }
        cityName.textContent = `${data.name}`;
        windSpeed.textContent = `${data.wind.speed} m/s`;
        Clouddescription.textContent = `${data.weather[0].description}`;
        const iconCode = data.weather[0].icon;
        const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        Cloudicon.src = iconURL;
        temperature.textContent = `${data.main.temp}°C`;
        humidity.textContent = `${data.main.humidity}%`
    } catch (error) {
        cityName.textContent = "City Not Found";
        temperature.textContent = "--";
        humidity.textContent = "--";
        windSpeed.textContent = "--";
        Clouddescription.textContent = error.message;
        Cloudicon.src = "";
    }
}
// function for fetch API

// function fetchApi(cityInput) {
//     cityName.textContent = "Loading...";
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${myApikey}&units=metric`).
//         then((response) => {
//             console.log("Response got");
//             if (!response.ok) {
//                 if (response.status === 404) {
//                     throw new Error('City not found. Please check the spelling.');
//                 }
//                 throw new Error(`Something went wrong (status ${response.status})`);
//             }
//             return response.json()
//         }).then((data) => {
//             console.log(data);

//             cityName.textContent = `${data.name}`;
//             windSpeed.textContent = `${data.wind.speed} m/s`;
//             Clouddescription.textContent = `${data.weather[0].description}`;
//             const iconCode = data.weather[0].icon;
//             const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
//             Cloudicon.src = iconURL;
//             console.log(iconURL);
//             return data.main;
//         }).then((main) => {
//             console.log(main);
//             temperature.textContent = `${main.temp}°C`;
//             humidity.textContent = `${main.humidity}%`
//         })
//         .catch((error) => {
//             cityName.textContent = "City Not Found";
//             temperature.textContent = "--";
//             humidity.textContent = "--";
//             windSpeed.textContent = "--";
//             Clouddescription.textContent = error.message;
//             Cloudicon.src = "";
//         })
// }
searchBtn.addEventListener('click', handleSearch)

document.addEventListener('keydown', (event) => {
    if (event.key == "Enter") handleSearch();
    cityInput.textContent = "";
});

// fecth api using async await
