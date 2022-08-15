// Referenced hidden file to access APIKEY
const KEY = config.MYKEY;

// API call to get weather data
const apiWeather = async (city,state,key) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=${key}`)
    console.log(response)
    console.log('search worked!')
    currentWeather(response.data);
};

let search = document.getElementById('search')
search.addEventListener('submit', (event) => {
    event.stopPropagation();
    event.preventDefault()
    let city = document.getElementById('city')
    let state = document.getElementById('state')
    let key = KEY
    apiWeather(city.value, state.value,key)
});

function currentWeather(data){
    let high = Math.round(data.main.temp_max)
    let low = Math.round(data.main.temp_min)
    let feel = Math.round(data.main.feels_like)
    let forecast = data.weather[0].main
    let humidity = data.main.humidity
    let icon= data.weather[0].icon
    
    document.getElementById('high').innerHTML = high + ' F'
    document.getElementById('low').innerHTML = low + ' F'
    document.getElementById('feel').innerHTML = feel + ' F'
    document.getElementById('forecast').innerHTML = forecast
    document.getElementById('humidity').innerHTML = humidity + ' %'
    document.getElementById('icon').innerHTML = `<img src=http://openweathermap.org/img/wn/${icon}@2x.png>`
}
