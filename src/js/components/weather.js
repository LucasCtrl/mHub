import config from '../../config.json'

const displayCurrentWeather = async () => {
  if (config.header.weather != undefined) {
    // ----- GET CURRENT WEATHER -----
    const { lat, lon, tempUnits, apiKey } = config.header.weather
    let currentWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${tempUnits}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => data)

    // ----- DISPLAY CURRENT WEATHER -----
    let currentTemp = document.querySelector('#currentTemp')
    let currentWeatherIcon = document.querySelector('#currentWeatherIcon')

    if (currentWeather.cod != 200) {
      currentTemp.innerHTML = '--°C'
      currentWeatherIcon.style = 'display: none;'
    } else {
      currentTemp.innerHTML = `${Math.round(currentWeather.main.temp)}°C`
      let imgUrl = await import(
        `../../img/weather-icons/light/${currentWeather.weather[0].icon}.png`
      )
      currentWeatherIcon.src = imgUrl.default
    }
  } else {
    document.querySelector('.weather').style = 'display: none;'
  }
}

export default displayCurrentWeather
