const grid = document.querySelector('#grid');

for(let i = 1; i <= 100; i++) {

    let item = document.createElement('div');
    item.className = "item";

    document.getElementById('grid').appendChild(item);
}

const items = document.querySelectorAll('.item');

items.forEach((item) => {
    item.addEventListener('click',() => {
        item.setAttribute('style', 'background-color: black;');
    })
});

const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    items.forEach((item) => {
        item.setAttribute('style', 'background-color: none;');
    });
});
