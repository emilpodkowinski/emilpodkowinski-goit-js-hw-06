const inputEl = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  output.style.fontSize = event.currentTarget.value + "px";
});
