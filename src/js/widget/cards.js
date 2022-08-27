import config from '../../config.json'

const cardsWidget = async () => {
  if (config.cardsWidget) {
    const cards = document.querySelector('#cards')

    config.cardsWidget.forEach((card) => {
      const div = document.createElement('div')
      div.classList.add('card')
      div.classList.add('col-xs-12')
      div.classList.add('col-md-6')
      div.innerHTML = `
          <a href="${card.link}">
            <div class="img">
              <img src="./img/logo/${card.image}" />
            </div>
            ${card.title}
          </a>
      `
      cards.appendChild(div)
    })
  }
}

export default cardsWidget
