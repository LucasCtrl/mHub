# Hub
🧰 *Your custom starting page*

[![release](https://img.shields.io/github/release/lucasctrl/mhub?style=flat-square&label=Release&logo=github&logoColor=fafafa&colorA=191b25&colorB=32cb8b)](https://github.com/lucasctrl/mhub/releases/latest)
[![licence](https://img.shields.io/github/license/lucasctrl/mhub?style=flat-square&label=License&colorA=191b25)](https://github.com/lucasctrl/mhub/blob/main/LICENSE.md)
[![issues](https://img.shields.io/github/issues/lucasctrl/mhub?style=flat-square&label=Issues&colorA=191b25)](https://github.com/lucasctrl/mhub/issues)
[![stars](https://img.shields.io/github/stars/lucasctrl/mhub?style=flat-square&label=Stars&colorA=191b25)](https://github.com/lucasctrl/mhub/stargazers)
[![forks](https://img.shields.io/github/forks/lucasctrl/mhub?style=flat-square&label=Forks&colorA=191b25)](https://github.com/lucasctrl/mhub/network)

## ✨ Pros

- 🙅‍♂️ Zero dependencies
- 📱 Supports touch devices
- 🌈 Easy to customize
- 🦄 Optimized for performance

## 🎨 Customization

Almost everything is customizable, you just need to edit the `~/src/config.json` file.

### 👋 Header component

> Greet you and give you the current weather when you start your browser 😙

![Hello image](https://github.com/lucasctrl/mhub/blob/main/.github/screenshots/header.png)

- Change all the greetings by replacing the desired value.
- Fill in your [OpenWeather](https://openweathermap.org) API key as well as your longitude and latitude ([with the Geocoding API](https://openweathermap.org/api/geocoding-api)) to see the current weather around you. *If  `weather` object is empty or does not exist, you will not being able to see the weather.*

```json
{
  "header": {
    "greetings": {
      "morning": "Good morning!",
      "afternoon": "Good afternoon!",
      "night": "Good evening!"
    },

    "weather": {
      "apiKey": "yourAPIkey",
      "tempUnits": "metric",
      "lat": "48.5839",
      "lon": "7.7455"
    }
  }
}
```

### 🔎 Search component

> Zap the web in seconds

![Search bar image](https://github.com/lucasctrl/mhub/blob/main/.github/screenshots/searchBar.png)

- Choose your favorite search engine. `google`, `duckduckgo`, `ecosia` are available but feel free to add more by [creating a new PR](#-contributing).
- Create custom **zap commands** with a custom zap shortcut. You'll be able to browse your favorite website through you personal home page.

```json
{
  "searchBar": {
    "defaultEngine": "google",
    "zap": [
      {
        "shortcut": "gh",
        "link": "https://github.com/search?q="
      },
      {
        "shortcut": "yt",
        "link": "https://www.youtube.com/results?search_query="
      }
    ]
  }
}
```

<!-- ### 🗂️ Cards component

> Displays multiple cards. *It is recommended that the total number of cards is a multiple of two (2, 4, 6, ...)*.

![Cards image](https://github.com/lucasctrl/mhub/blob/main/.github/images/cards.png)


- `title`, represent the card title
- By clicking on the card, you are redirected to the `link`
- You can display a [feather icon](https://feathericons.com) by filling `icon`. *If no value entered, you see the `title`
- If `newTab` defined to true, you open the link in a new tab.
- Removing the object `cards` will completely remove the cards component

```js
cards: {
  links: [
    {
      title: 'GitHub',
      link: 'https://github.com/',
      icon: 'github',
      newTab: true,
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/',
      icon: 'twitter',
      newTab: true,
    },
    {
      title: 'ProtonMail',
      link: 'https://protonmail.com/',
      icon: 'mail',
      newTab: true,
    },
    // ...
  ],
}
``` -->


## 👤 Author

**LucasAlt**
* Website: https://www.lucasalt.fr
* Twitter: [@LucasCtrlAlt](https://twitter.com/LucasCtrlAlt)
* GitHub: [@LucasCtrl](https://github.com/LucasCtrl)

## 🤝 Contributing

Before contributing to this project, make sure you have read the [contribution guidelines](https://github.com/lucasctrl/mhub/blob/main/CONTRIBUTING.md)!

1. Fork it (https://github.com/lucasctrl/mhub/fork)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Show your support

- Give a ⭐️ if you like this project!

<a href="https://www.buymeacoffee.com/lucasalt"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=lucasalt&button_colour=5F7FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"></a>

## 📝 License

This project is open source and available under the [MIT License](https://github.com/lucasctrl/mhub/blob/main/LICENSE.md)
