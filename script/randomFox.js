const randomFox = document.getElementById('randomFox');
const fox_btn = document.getElementById('fox-btn');

fox_btn.addEventListener('click', getRandomFox);

function getRandomFox() {
    fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(data => {
        randomFox.innerHTML = `<img src="${data.image}"/>`
    })
}