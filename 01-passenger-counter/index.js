let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count++;
  countEl.innerText = count;
}

let storeValue = document.getElementById("save-el");

function save() {
  storeValue.innerText += " " + count + " - ";
  count = countEl.innerText = 0;
}
