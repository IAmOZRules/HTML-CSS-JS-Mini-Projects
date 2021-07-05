const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0;
let int = setInterval(Blurring, 20)

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

console.log(bg.style.filter);

function Blurring() {
    load++;

    if (load>99) {
        clearInterval(int);
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = 1 - load/100;
    bg.style.filter = `blur(${90 - load}px)`;

    // loadText.style.opacity = scale(load, 0, 100, 1, 0);
    // bg.style.filter = `blur(${scale(load, 100, 0, 0, 70)}px)`;

    if (load === 100){
        loadText.innerText = "";
    }
}