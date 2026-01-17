let count = 0;

const countEL = document.getElementById('count');
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    count++;
    countEL.textContent = count;
});