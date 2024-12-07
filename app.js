
const calendar = document.getElementById('calendar')

const months = [
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
];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const drawBlankCalendar = () => {
  for (let i = 0; i < 35; i++) {
    const day = document.createElement('div')
    day.classList.add('day')

    const dayText = document.createElement('p')
    dayText.classList.add('day-text')
    dayText.innerText = days[i % 7];

    const dayNumber = document.createElement('p')
    dayNumber.classList.add('day-number')

    const eventName = document.createElement('small');
    eventName.classList.add('event-name')

    day.appendChild(dayText);
    day.appendChild(dayNumber)
    day.appendChild(eventName);
    calendar.appendChild(day)
  }
}

const updateCalendar = (month, year, events) => {
  const dayElements = document.querySelectorAll('.day');

  const theFirst = new Date();
  theFirst.setMonth(month);
  theFirst.setYear(year);

  const theFirstDayOfWeek = theFirst.getDay();
  const monthName = months[month];
  const monthWithYear = `${year} - ${monthName}`;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let dayCounter = 1;
  for (let i = 0; i < dayElements.length; i++) {
    const day = dayElements[i];

    const dayNumber = day.querySelector('.day-number');
    if (i >= theFirstDayOfWeek && dayCounter <= daysInMonth) {
      const thisDate = new Date(year, month, dayCounter);

      const eventName = day.querySelector('.event-name');
      if (events[thisDate]) {
        const event = events[thisDate];
        eventName.innerText = `* ${event.title}`;
      } else {
        eventName.innerText = ``;
      }
      console.log(thisDate);

      dayNumber.innerText = dayCounter;
      dayCounter++;
    } else {
      dayNumber.innerText = '';
    }
  }
};


drawBlankCalendar();
updateCalendar(currentMonth, currentYear, {});