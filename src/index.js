
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
]

let backgroundInterval = null;

const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

start.addEventListener('click', onColorChangeStart);
stop.addEventListener('click', onColorChangeStop);

stop.disabled = true;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function bacgroundChange() {
    return body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]

};

function onColorChangeStart() {
    backgroundInterval = setInterval(bacgroundChange, 1500);

    stop.disabled = false;
    start.disabled = true;
};

function onColorChangeStop() {
    clearInterval(backgroundInterval);

    stop.disabled = true;
    start.disabled = false;

}