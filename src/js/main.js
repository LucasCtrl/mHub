import displayCurrentWeather from './components/weather.js'
import displayGreetings from './components/greetings.js'

import '../scss/main.scss'

function main() {
  displayCurrentWeather()
  displayGreetings()
}

window.onload = main()
