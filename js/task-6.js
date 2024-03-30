function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("[data-create]");
const inputEl = document.querySelector("input");
const divEl = document.querySelector("#boxes");
const btnDestroy = document.querySelector("[data-destroy]");

btnCreate.addEventListener("click", () => {
  if (inputValue < 100 && inputValue > 1) {
    createBoxes(inputValue);
  }
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});

let inputValue;

inputEl.addEventListener("input", (event) => {
  inputValue = event.target.value;
});

function createBoxes(amount) {
  let boxWidth = 30;
  let boxHeight = 30;

  divEl.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    divEl.insertAdjacentHTML(
      "beforeend",
      `<div style = "width: ${boxWidth}px; height: ${boxHeight}px; background-color: ${getRandomHexColor()}">`
    );

    boxWidth += 10;
    boxHeight += 10;
  }
}

function destroyBoxes() {
  divEl.innerHTML = "";
}
