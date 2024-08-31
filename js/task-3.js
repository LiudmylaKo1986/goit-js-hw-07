const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");
inputElem.addEventListener("input", onInputChange);
function onInputChange() {
  const text = inputElem.value.trim();

  if (text === "") {
    outputElem.textContent = "Anonymous";
  } else {
    outputElem.textContent = text;
  }
}