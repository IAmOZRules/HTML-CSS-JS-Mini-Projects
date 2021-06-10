const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
const inner_left = document.querySelector(".inner-left");
const inner_right = document.querySelector(".inner-right");

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
    inner_right.classList.add('hide');
    inner_right.classList.remove('show');
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
    inner_right.classList.remove('hide');
    inner_right.classList.add('show');

});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
    inner_left.classList.add('hide');
    inner_left.classList.remove('show');
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
    inner_left.classList.remove('hide');
    inner_left.classList.add('show');
});