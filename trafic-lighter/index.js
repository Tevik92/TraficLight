const redLight = document.getElementById("red-light");
const yellowLight = document.getElementById("yellow-light");
const greenLight = document.getElementById("green-light");
const startButton = document.getElementById("btn-on");

let currentLight = "red";
let timerInterval;

const updateTimer = (light, duration) => {
  let timeLeft = duration;
  light.querySelector(".time").textContent = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    light.querySelector(".time").textContent = timeLeft;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
};

const switchLight = () => {
  redLight.style.backgroundColor = "white";
  yellowLight.style.backgroundColor = "white";
  greenLight.style.backgroundColor = "white";
  redLight.querySelector(".time").textContent = "";
  yellowLight.querySelector(".time").textContent = "";
  greenLight.querySelector(".time").textContent = "";

  clearInterval(timerInterval);

  if (currentLight === "red") {
    redLight.style.backgroundColor = "red";
    updateTimer(redLight, 10);
    currentLight = "yellow";
    setTimeout(switchLight, 11000);
  } else if (currentLight === "yellow") {
    yellowLight.style.backgroundColor = "yellow";
    updateTimer(yellowLight, 3);
    currentLight = "green";
    setTimeout(switchLight, 4000);
  } else if (currentLight === "green") {
    greenLight.style.backgroundColor = "green";
    updateTimer(greenLight, 10);
    currentLight = "yellow-to-red";
    setTimeout(switchLight, 11000);
  } else if (currentLight === "yellow-to-red") {
    yellowLight.style.backgroundColor = "yellow";
    updateTimer(yellowLight, 3);
    currentLight = "red";
    setTimeout(switchLight, 4000);
  }
};

const startTraficLight = () => {
  currentLight = "red";
  switchLight();
};

startButton.addEventListener("click", () => {
  yellowLight.style.backgroundColor = "yellow";

  let counter = 0;
  const refreshId1 = setInterval(() => {
    yellowLight.style.backgroundColor = "white";
  }, 500);
  const refreshId2 = setInterval(() => {
    yellowLight.style.backgroundColor = "yellow";
    counter++;
    if (counter == 3) {
      clearInterval(refreshId1);
      clearInterval(refreshId2);
      yellowLight.style.backgroundColor = "white";
      startTraficLight();
    }
  }, 1000);
});
