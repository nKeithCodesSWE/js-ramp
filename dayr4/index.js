const input = document.getElementById("textInput");
const button = document.getElementById("showBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    output.textContent = input.value;
});