for (let i = 0; i < 7236; i++) {
    const canvas = document.querySelector('.container');
    const square = document.querySelector('.tiles');
    const swatch = document.querySelector('.swatch')
    const reset = document.querySelector('.reset');
    const box = document.createElement('div');

    // create grid
    box.className = 'tiles';
    canvas.appendChild(box);

    // prepare the functions!!!
    const reseT = () => box.style.backgroundColor = 'transparent';
    const coloR = () => box.style.backgroundColor = swatch.value;

    // brush behaviour
    canvas.addEventListener('mousedown', (e) => {
        box.addEventListener('mouseover', coloR, false);
    })

    // when i want to stop painting
    canvas.addEventListener('mouseup', (e) => {
        box.removeEventListener('mouseover', coloR, false);
    });

    //reset, why erase one pixel when you can erase all?!!!
    reset.addEventListener('click', reseT, false);
}
