const statusText = document.getElementById("crosswalk-status");
const timeLeft = document.getElementById("time-left");
const crosstBtn = document.getElementById("cross-btn")
const stopBtn = document.getElementById("stop-btn")
const waitBtn = document.getElementById("wait-btn")
const body = document.getElementById("body");
const img = document.getElementById("img");
const DEFAULT_TIME = 30; //30 seconds

crosstBtn.onclick = () => changeStatus("CROSS")
waitBtn.onclick = () => changeStatus("WAIT")
stopBtn.onclick = () => changeStatus("STOP")

const changeStatus = status => {
    clearBodyColor();

    if (status == 'CROSS') {
        statusText.innerText = "CROSS"
        body.classList.add("body-green")
        img.src = 'assets/pedestrian-walking.png'
    }
    else if (status == 'WAIT') {
        statusText.innerText = "WAIT"
        body.classList.add("body-yellow")
        img.src = 'assets/pedestrian-stop.png'
    }
    else {
        statusText.innerText = "STOP"
        body.classList.add("body-red")
        img.src = 'assets/pedestrian-stop.png'
    }
}

const clearBodyColor = () => {
    body.classList.forEach((colorClass) => {
        body.classList.remove(colorClass)
    });
}

/*
const startDisplay = () => {
    let start = DEFAULT_TIME;
    setInterval(() => {
        if (start == -1) {
            start = DEFAULT_TIME;
        }
        statusText.innerText = 'CROSS'
        timeLeft.innerText = start.toString();
        start--;
    }, 1000 every second);
}*/
