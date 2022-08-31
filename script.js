const container = document.querySelector('.Grid');

function makeGrid (rows, columns) {
    const board = document.querySelector(".Grid");
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    for(let i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.classList.add('block');
        board.insertAdjacentElement("beforeend", square);
    }
    hoverColor();

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

makeGrid(6, 6);