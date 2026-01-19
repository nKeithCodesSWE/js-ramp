// 1. Collect Elements From DOM
const input = document.getElementById('input');
const submitBtn = document.getElementById('submit');
const display = document.getElementById('display');

// 2. User event 
let state = [];

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let value = input.value;
    state.push(value);
    display.textContent = state.join(", ");
});