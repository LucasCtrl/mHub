import config from '../../config.json'

const displayGreetings = () => {
  // ----- DISPLAY GREETINGS -----
  let greetings = document.querySelector('#greetings')
  if (getCurrentDate().hours >= 5 && getCurrentDate().hours < 12)
    greetings.innerHTML = config.header.greetings.morning
  if (getCurrentDate().hours >= 12 && getCurrentDate().hours < 18)
    greetings.innerHTML = config.header.greetings.afternoon
  if (getCurrentDate().hours >= 18 || getCurrentDate().hours < 5)
    greetings.innerHTML = config.header.greetings.night

  // ----- DISPLAY CURRENT DATE -----
  let currentDate = document.querySelector('#currentDate')
  currentDate.innerHTML = `${getCurrentDate().sDay}, ${
    getCurrentDate().sMonth
  } ${getCurrentDate().date}`
}

export default displayGreetings

const getCurrentDate = () => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const daysNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  let cDate = new Date()

  return {
    year: cDate.getFullYear(),
    month: cDate.getMonth(),
    sMonth: monthNames[cDate.getMonth()],
    date: cDate.getDate(),
    day: cDate.getDay(),
    sDay: daysNames[cDate.getDay()],
    hours: cDate.getHours(),
    minutes: cDate.getMinutes(),
    seconds: cDate.getSeconds(),
  }
}
