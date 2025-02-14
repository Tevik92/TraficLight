const redLight = document.getElementById("red-light");
const yellowLight = document.getElementById("yellow-light");
const greenLight = document.getElementById("green-light");
const startButton = document.getElementById("btn-on");
console.dir(startButton);

let currentLight = "red";

const switchLight = () => {
  redLight.style.backgroundColor = "white";
  yellowLight.style.backgroundColor = "white";
  greenLight.style.backgroundColor = "white";

  if (currentLight === "red") {
    redLight.style.backgroundColor = "red";
    currentLight = "yellow";
    setTimeout(switchLight, 10000);
  } else if (currentLight === "yellow") {
    yellowLight.style.backgroundColor = "yellow";
    currentLight = "green";
    setTimeout(switchLight, 3000);
  } else if (currentLight === "green") {
    greenLight.style.backgroundColor = "green";
    currentLight = "yellow-to-red";
    setTimeout(switchLight, 10000);
  } else if (currentLight === "yellow-to-red") {
    yellowLight.style.backgroundColor = "yellow";
    currentLight = "red";
    setTimeout(switchLight, 3000);
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
