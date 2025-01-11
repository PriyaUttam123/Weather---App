const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=50eabb10a03a45f5ac8125145251101&q=${cityName}&aqi=yes`);
    return await promise.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    
    // Set time in cityTime
    cityTime.innerText = result.location.localtime;
    
    // Set temperature in cityTemp
    cityTemp.innerText = `${result.current.temp_c}°C`;
});
