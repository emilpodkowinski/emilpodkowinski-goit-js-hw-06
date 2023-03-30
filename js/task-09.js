const buttonEl = document.querySelector(".change-color");
const colorBg = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonEl.addEventListener("click", () => {
  colorBg.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
