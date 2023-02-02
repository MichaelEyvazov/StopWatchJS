let screen = document.getElementById("screen");
let startBtn = document.getElementById("start-btn");
let timeoutId = null;
let sec = 0;
let min = 0;
/* function to start stopwatch */
function start(flag) {
    if (flag) {
        startBtn.disabled = true;
    }
    timeoutId = setTimeout(function () {
        sec = parseInt(sec);
        min = parseInt(min);
        sec++;
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (min < 10) {
            min = '0' + min;
        }
        screen.innerHTML = min + ':' + sec;
        // calling start() function recursivly to continue stopwatch
        start();
    }, 1000);
    // setTimeout delay time 1 seconds
}
/* function to pause stopwatch */
function pause() {
    clearTimeout(timeoutId);
    startBtn.disabled = false;
}
/* function to reset stopwatch */
function reset() {
    sec = 0;
    min = 0;
    clearTimeout(timeoutId);
    screen.innerHTML = '00:00';
    startBtn.disabled = false;
}