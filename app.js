
const calendar = document.getElementById('calendar')
const monthEl = document.getElementById('month');
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
let events;
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
let dayOfWeek = days[firstDayOfWeek];

console.log(firstDayOfWeek, dayOfWeek)


const drawBlankCalendar = () => {
  for (let i = 0; i < 35; i++) {
    const day = document.createElement('div');
    day.classList.add('day');

    const dayText = document.createElement('p');
    dayText.classList.add('day-text');
    dayText.innerText = days[i % 7];

    const dayNumber = document.createElement('p');
    dayNumber.classList.add('day-number');

    const eventName = document.createElement('small');
    eventName.classList.add('event-name');

    day.appendChild(dayText);
    day.appendChild(dayNumber);
    day.appendChild(eventName);
    calendar.appendChild(day);
  }
};

const updateCalendar = (month, year, events) => {
  const dayElements = document.querySelectorAll('.day');

  const theFirst = new Date();
  theFirst.setMonth(month);
  theFirst.setYear(year);


  let theFirstDayOfWeek = new Date(year, month, 1).getDay();
  let dayOfWeek = days[theFirstDayOfWeek];

  const monthName = months[month];
  const monthWithYear = `${year} - ${monthName}`;
  monthEl.innerText = monthWithYear;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let dayCounter = 1;
  for (let i = 0; i < dayElements.length; i++) {
    const day = dayElements[i];

    const dayNumber = day.querySelector('.day-number');
    if (i >= theFirstDayOfWeek && dayCounter <= daysInMonth) {
      const thisDate = new Date(year, month, dayCounter);

      // const eventName = day.querySelector('.event-name');
      // if (events[thisDate]) {
      //   const event = events[thisDate];
      //   eventName.innerText = `* ${event.title}`;
      // } else {
      //   eventName.innerText = ``;
      // }

      dayNumber.innerText = dayCounter;
      dayCounter++;
    } else {
      dayNumber.innerText = '';
    }
  }
};



const previousMonth = () => {
  if (currentMonth === 0) {
    currentMonth = 12;
    currentYear--;
  }
  updateCalendar(--currentMonth, currentYear, events);
};

const nextMonth = () => {
  if (currentMonth === 11) {
    currentMonth = -1;
    currentYear++;
  }
  updateCalendar(++currentMonth, currentYear, events);
};

drawBlankCalendar();
updateCalendar(currentMonth, currentYear, {});