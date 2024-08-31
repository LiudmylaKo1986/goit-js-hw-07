function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxCreateCount = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divElems = document.querySelector("#boxes");
createBtn.addEventListener("click", () => {
  const amount = Number(boxCreateCount.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    boxCreateCount.value = "";
  }
});
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  divElems.textContent = "";
  let boxSize = 30;
  let incBoxSize = 10;
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${boxSize}px`;
    newDiv.style.height = `${boxSize}px`;
    divElems.appendChild(newDiv);
    boxSize += incBoxSize;
  }
}
function destroyBoxes() {
  divElems.textContent = "";
}