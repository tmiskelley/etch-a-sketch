function makeGrid(rows, cols) {
    document.getElementById('grid').style.setProperty('--grid-rows', rows);
    document.getElementById('grid').style.setProperty('--grid-cols', cols);

    for(let i = 0; i < (rows * cols); i++) {
        let item = document.createElement('div');
        item.className = "item";
        document.getElementById('grid').appendChild(item);
    }
}

makeGrid(2, 2);

const grid = document.getElementById('#grid');
const items = document.querySelectorAll('.item');

    items.forEach((item) => {
        item.addEventListener('click',() => {
            item.setAttribute('style', 'background-color: black;');
        })
    });

const reset = document.getElementById('reset');

    reset.addEventListener('click', () => {
        const MAX_SIZE = 64;
        const grid = document.getElementById('grid');
        while(grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }

        let row = prompt("Enter desired rows: ");
        let col = prompt("Enter desired columns: ");

        if(row > MAX_SIZE || col > MAX_SIZE) {
            alert("Exceeds maximum grid size");
            row = prompt("Enter desired rows: ");
            col = prompt("Enter desired columns: ");

            makeGrid(row, col);
        } else {
            makeGrid(row, col);
        }

        const items = document.querySelectorAll('.item');

            items.forEach((item) => {
                item.addEventListener('click',() => {
                    item.setAttribute('style', 'background-color: black;');
                })
            });
    });

