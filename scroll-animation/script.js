const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
    const enableAnimation = 4 * window.innerHeight / 5;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < enableAnimation) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}