// 1.Change text
const button = document.getElementById('btn');

button.addEventListener('click', () => {
  button.textContent = 'Done';

  console.log('done');
})