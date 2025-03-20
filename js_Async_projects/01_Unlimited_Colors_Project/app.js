const body = document.querySelector("body");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const colorCodeDisplay = document.querySelector("#color-code");
let color;

//This function generates color in RGB values
function changeColor() {
  color = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(
    Math.random() * 255
  )}, ${Math.round(Math.random() * 255)})`;
  startButton.disabled = true;
  body.style.backgroundColor = color;
  colorCodeDisplay.textContent = color;
}

//This function generates color in HEXCODE
function randomColorHex() {
  const hex = "0123456789ABCDEF";
  color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNum_16 = Math.floor(Math.random() * 16);
    color += hex[randomNum_16];
  }
  startButton.disabled = true;
  body.style.backgroundColor = color;
  colorCodeDisplay.textContent = color;
}

let colorInterval;

startButton.addEventListener(
  "click",
  (e) => {
    console.log("Color Changing Started");
    if (!colorInterval) {
      colorInterval = setInterval(randomColorHex, 1000);
    }
  },
  false
);

stopButton.addEventListener(
  "click",
  (e) => {
    console.log("Color Changing Stopped");
    clearInterval(colorInterval);
    colorInterval = null;
    console.log(`Color RGB Value: ${color}`);
    startButton.disabled = false;
  },
  false
);
