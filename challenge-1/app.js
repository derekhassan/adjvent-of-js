const minutesInput = document.querySelector('.minutes > input');
const secondsInput = document.querySelector('.seconds > input');
const startBtn = document.querySelector('.start');
const settingsBtn = document.querySelector('.settings');
const ring = document.querySelector('.ring');

let isStarted = false;
let timerInterval;
let startingTimeSec = 900;
let currentTimeSec = 0;

const resetRing = () => {
    if (ring.classList.contains('ending')) {
        ring.classList.remove('ending');
    }
};

const convertSecToDisplayTime = (seconds) => {
    const currentMin = Math.floor(seconds / 60).toString();
    const currentSec = (seconds % 60).toString();

    minutesInput.value = currentMin.padStart('2', '0');
    secondsInput.value = currentSec.padStart('2', '0');
};

const updateTime = () => {
    currentTimeSec -= 1;
    convertSecToDisplayTime(currentTimeSec);
    if (currentTimeSec <= 0) {
        ring.classList.add('ending');
        stopTimer();
    }
};

const checkForValidNumberEntered = () => {
    const minutes = parseInt(minutesInput.value);
    const seconds = parseInt(secondsInput.value);
    return !(isNaN(minutes) || isNaN(seconds));
};

const startTimer = () => {
    isStarted = true;
    minutesInput.disabled = true;
    secondsInput.disabled = true;
    if (!checkForValidNumberEntered()) {
        alert('Invalid value entered!');
        convertSecToDisplayTime(startingTimeSec);
        return;
    }
    startingTimeSec =
        parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);
    startBtn.innerHTML = 'stop';
    resetRing();
    currentTimeSec = startingTimeSec;
    timerInterval = setInterval(updateTime, 1000);
};

const stopTimer = () => {
    isStarted = false;
    startBtn.innerHTML = 'start';

    if (timerInterval) {
        clearInterval(timerInterval);
    }

    if (currentTimeSec === 0) {
        setTimeout(() => {
            alert('Timer finished!');
            convertSecToDisplayTime(startingTimeSec);
            resetRing();
        }, 0);
    } else {
        convertSecToDisplayTime(startingTimeSec);
        resetRing();
    }
};

const toggleTimeInput = () => {
    minutesInput.disabled = !minutesInput.disabled;
    secondsInput.disabled = !secondsInput.disabled;
};

const handleTimerEvent = () => (isStarted ? stopTimer() : startTimer());

startBtn.addEventListener('click', handleTimerEvent);
settingsBtn.addEventListener('click', toggleTimeInput);
