const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');
const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', event => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        event.target.innerHTML = 'Dark Mode';
    } else {
        html.classList.add('dark');
        event.target.innerHTML = 'Light Mode';
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hourElement.style.transform = `translate(-50%, -100%) rotate(${(hoursForClock * 30)}deg)`
    minuteElement.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`
    secondElement.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`

    timeElement.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

setTime();
setInterval(setTime, 100)