const canvas = document.querySelector('#canvas');
const sizeButtons = document.querySelectorAll('#canvasSize button');
const colorButtons = document.querySelectorAll('#colorSelector button');
const reset = document.querySelector('#reset');

let pixels;
let gridSize = 16;
let color = "Black";
let unicorn = 0;

function draw () {
    pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', (e) => {
        if (color == "unicorn") {
            pixel.style.backgroundColor = `hsl(${unicorn}, 100%, 50%)`;
            unicorn++;
        } else {
            pixel.style.backgroundColor = color;
        }
    })
    })
}

function newCanvas () {
    canvas.innerHTML = "";
    for (i=0; i<gridSize; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (j=0; j<gridSize; j++) {
            let pixel = document.createElement('div');
            pixel.setAttribute('class', 'pixel');
            row.appendChild(pixel);
        }
        canvas.appendChild(row);
    }
    pixels = document.querySelectorAll('.pixel');
    draw();
}

newCanvas();

sizeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let prevButton = document.querySelector('#canvasSize .selected');
        prevButton.className = "deselected";
        gridSize = parseInt(button.id);
        button.className = "selected";
        newCanvas();
    })
})

colorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let prevButton = document.querySelector('#colorSelector .selected');
        prevButton.className = "deselected";
        color = button.id;
        button.className = "selected";
    })
})

reset.addEventListener('click', (e) => {
    newCanvas();
    draw();
})