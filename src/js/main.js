import greetingsWidget from './widget/greetings.js'
import weatherWidget from './widget/weather.js'
import searchBarWidget from './widget/searchBar.js'
import cardsWidget from './widget/cards.js'

import '../scss/main.scss'

function main() {
  greetingsWidget()
  weatherWidget()
  searchBarWidget()
  cardsWidget()
}

window.onload = main()
