function makeGrid(rows, cols) {
    document.getElementById('grid').style.setProperty('--grid-rows', rows);
    document.getElementById('grid').style.setProperty('--grid-cols', cols);

    for(let i = 0; i < (rows * cols); i++) {
        let item = document.createElement('div');
        item.className = "item";
        document.getElementById('grid').appendChild(item);
    }
}

makeGrid(32, 32)

const grid = document.getElementById('grid');
const items = document.querySelectorAll('.item');

    items.forEach((item) => {
        item.addEventListener('mouseover',() => {
            item.setAttribute('style', 'background-color: black;');
        })
    });

const slider = document.getElementById('myRange');

    slider.onchange = function() {
        const grid = document.getElementById('grid');

        while(grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }

        let gridSize = this.value;
        makeGrid(gridSize, gridSize);

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
    }

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


