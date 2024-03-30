function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const buttonChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});
