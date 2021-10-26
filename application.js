function makeGrid(rows, cols) {
    document.getElementById('grid').style.setProperty('--grid-rows', rows);
    document.getElementById('grid').style.setProperty('--grid-cols', cols);

    for(let i = 0; i < (rows * cols); i++) {
        let item = document.createElement('div');
        item.className = "item";
        document.getElementById('grid').appendChild(item);
    }
}

makeGrid(10, 10);

const grid = document.getElementById('#grid');
const items = document.querySelectorAll('.item');

    items.forEach((item) => {
        item.addEventListener('mouseover',() => {
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

        let gridSize = prompt("Enter grid size: ");

        if(gridSize > MAX_SIZE) {
            alert("Exceeds maximum grid size");
            gridSize = prompt("Enter grid size: ");

            makeGrid(gridSize, gridSize);
        } else {
            makeGrid(gridSize, gridSize);
        }

        const items = document.querySelectorAll('.item');

            items.forEach((item) => {
                item.addEventListener('mouseover',() => {
                    item.setAttribute('style', 'background-color: black;');
                })
            });
        
        const clear = document.getElementById('clear');
            clear.addEventListener('click', () => {
                items.forEach((item) => {
                    item.setAttribute('style', 'background-color: none;');
                });
            });
    });

const clear = document.getElementById('clear');
    clear.addEventListener('click', () => {
        items.forEach((item) => {
            item.setAttribute('style', 'background-color: none;');
        });
    });


