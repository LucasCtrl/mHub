import config from '../../config.json'

const searchBarWidget = async () => {
  let form = document.querySelector('#searchBarForm')
  let searchBar = document.querySelector('#searchBarInput')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    let query = searchBar.value.split(' ')
    let zapShortcut = null

    config.searchBar.zap.forEach((zapCommand) => {
      if (query[0] == zapCommand.shortcut) zapShortcut = zapCommand
    })

    if (zapShortcut) {
      window.location = zapShortcut.link + query.slice(1).join(' ')
    } else {
      switch (config.searchBar.defaultEngine) {
        case 'google':
          window.location = `https://www.google.com/search?q=${query.join(' ')}`
          break
        case 'duckduckgo':
          window.location = `https://duckduckgo.com/?q=${query.join(' ')}`
          break
        case 'ecosia':
          window.location = `https://www.ecosia.org/search?q=${query.join(' ')}`
          break
      }
    }

    // Reinitialize input
    searchBar.value = ''
  })
}

export default searchBarWidget
