import greetingsWidget from './widget/greetings.js'
import weatherWidget from './widget/weather.js'

import '../scss/main.scss'

function main() {
  greetingsWidget()
  weatherWidget()
}

window.onload = main()
