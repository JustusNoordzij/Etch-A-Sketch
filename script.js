const container = document.querySelector('.Grid');

function makeGrid (size) {
    const board = document.querySelector(".Grid");
    let squares = board.querySelectorAll("div")
    squares.forEach((div) => div.remove());
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    let amount = size * size
    for(let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.classList.add('block');
        board.insertAdjacentElement("beforeend", square);
    }

}


function changeSize(input) {
    if (input >= 2 && input <= 100) {
    makeGrid(input);
    } else {
        alert("enter number between 2 and 100");
    }
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i =0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}

function hoverColor() {
    let items = document.querySelectorAll('.block');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = `${randomColor()}`;
        });
    });


}

const rainbowColor = document.getElementById('rainbow');
rainbowColor.addEventListener('click', function() {
    let items = document.querySelectorAll('.block');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = `${randomColor()}`;
        });
    });


})

const blackColor = document.getElementById('black');

blackColor.addEventListener('click', function() {
    let items = document.querySelectorAll('.block');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "black";
        });
    });


})

const eraser = document.getElementById('eraser');

eraser.addEventListener('click', function() {
    let items = document.querySelectorAll('.block');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "white";
        });
    });


})

const select = document.getElementById('select');
select.addEventListener('click', function() {

    let items = document.querySelectorAll('.block');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = select.value;
        });
    });


})
   


makeGrid(10, 10);