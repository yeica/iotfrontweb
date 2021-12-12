const GREEN_LIGHT_TIME = 5000;
const YELLOW_LIGHT_TIME = 2000;
const RED_LIGHT_TIME = 5000;

//traffic lights circles
let tlLights = document.querySelectorAll(".tl-light");
let tlGreen = document.getElementById("tl-green");
let tlYellow = document.getElementById("tl-yellow");
let tlRed = document.getElementById("tl-red");

// current tl status message
let tlStatus = document.getElementById("tl-light-status");

//buttons
let tlGreenBtn = document.getElementById("tl-green-btn");
let tlYellowBtn = document.getElementById("tl-yellow-btn");
let tlRedBtn = document.getElementById("tl-red-btn");


tlGreenBtn.onclick = () => changeStatus("GREEN")
tlYellowBtn.onclick = () => changeStatus("YELLOW")
tlRedBtn.onclick = () => changeStatus("RED")

const changeStatus = status => {
    clearLightsColors();

    if (status == 'GREEN') {
        tlGreen.classList.add("tl-green-bg")
        tlStatus.innerText = "GREEN"
    }
    else if (status == 'YELLOW') {
        tlYellow.classList.add("tl-yellow-bg")
        tlStatus.innerText = "YELLOW"
    }
    else {
        tlRed.classList.add("tl-red-bg");
        tlStatus.innerText = "RED"
    }
}

//clearing lights colors
const clearLightsColors = () => {
    if (tlGreen.classList.contains("tl-green-bg")) {
        tlGreen.classList.remove("tl-green-bg");
    }
    else if (tlYellow.classList.contains("tl-yellow-bg")) {
        tlYellow.classList.remove("tl-yellow-bg");
    }
    else {
        tlRed.classList.remove("tl-red-bg");
    }
}