// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imageUrl from '../img/alert-icon.svg'

const iziToastOptions = {
  message: 'Please choose a date in the future',
  position: 'topRight',
  backgroundColor: '#B51B1B',
  messageColor: '#fff',
  messageSize: '16',
  imageWidth: 302,
  close: true,
  closeOnEscape: true,
  closeOnClick: true,
  progressBar: true,
  progressBarColor: '#b51b1b',
  iconUrl: imageUrl,
  iconColor: '#FAFAFB',
};

const dateInput = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let userSelectedDate;
let timeInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      iziToast.show(iziToastOptions);
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
      userSelectedDate = selectedDates[0];
      // console.log("Selected Date: " + userSelectedDate);
    }
  },
};

flatpickr("#datetime-picker", options);

buttonStart.addEventListener('click', startTimer);
let diff;

function startTimer() {
  const intervalId = setInterval(() => {
    buttonStart.disabled = true;
    dateInput.setAttribute('disabled', 'true');
    const nowTime = Date.now();
    const endTime = userSelectedDate.getTime();
    diff = endTime - nowTime;
    // console.log(diff);
    const time = convertMs(diff);
    const timeObj = getTime(time);
    // console.log(timeObj);
    days.textContent = timeObj.days;
    hours.textContent = timeObj.hours;
    minutes.textContent = timeObj.minutes;
    seconds.textContent = timeObj.seconds;
  }, 1000);

  
  setTimeout(() => {
    clearInterval(intervalId);
    dateInput.removeAttribute('disabled');
  }, userSelectedDate - Date.now());
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function getTime({days, hours, minutes, seconds}) {
  days = days.toString().padStart(2,'0');
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');
  return {days, hours, minutes, seconds};
}