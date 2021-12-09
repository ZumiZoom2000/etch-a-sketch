const container = document.querySelector('.container');
let boxes = document.querySelectorAll('.box');
const startButton = document.querySelector('#start-button');
const resetButton = document.querySelector('#reset-button');
startButton.addEventListener('click', getOptions);
let gridSize = 0;
colorPalette = "";

function getOptions() {
    boxes.forEach(box => box.remove());
    gridSize = document.querySelector('input[name="size"]').value;
    colorPalette = document.querySelector('#color-select').value;
    createGrid(gridSize);
}

// const gridSize = Number(prompt('size'));

function createGrid(gridSize) {
    let numOfBoxes = gridSize ** 2;
    let size = 599.8 / gridSize;
    boxSize = `${size}px`
    for (let i = 0; i < numOfBoxes; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }
    boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.style.width = boxSize);
    boxes.forEach(box => box.style.height = boxSize);
    boxes.forEach(box => box.addEventListener('mouseover', event => setRandomColor(event)))
}

function setRandomColor(event) {
    let h = "";
    let s = "";
    let l = Math.floor(Math.random() * 50) + 25;
    switch (colorPalette) {
        case 'red':
            h = "0"
            s = "100%";
            break;
        case 'blue':
            h = "240";
            s = "100%";
            break;
        case 'green':
            h = "140";
            s = "100%";
            break;
    }
    let num = Math.floor(Math.random() * 100);
    let hsl = `hsl(${h}, ${s}, ${l}%)`;
    event.target.style.backgroundColor = hsl;
}