for (let i = 0; i < 7236; i++) {
    const canvas = document.querySelector('.container');
    const box = document.createElement('div');
    const coloR = () => box.style.backgroundColor = document.querySelector('.swatch').value;
    const reseT = () => box.style.backgroundColor = 'transparent';
    box.className = 'tiles'; // make the tiles visible
    canvas.appendChild(box); // add the tiles to the DOM
    canvas.addEventListener('mousedown', (e) => { // start painting
        e.preventDefault() // hijack the mouse drag
        box.addEventListener('mouseover', coloR, false)
    });
    canvas.addEventListener('mouseup', (e) => box.removeEventListener('mouseover', coloR, false));
    document.querySelector('.reset').addEventListener('click', reseT, false);
}
