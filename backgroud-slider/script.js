const body = document.body
const slides = document.querySelectorAll(".slide")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

let activeSlide = 0;

function mod(n, m) {
    let remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);
}

rightBtn.addEventListener('click', () => {
    activeSlide++;
    activeSlide = mod(activeSlide, slides.length);
    setBgToBody();
    setActiveSlide();
})

leftBtn.addEventListener('click', () => {
    activeSlide--;
    activeSlide = mod(activeSlide, slides.length);
    setBgToBody();
    setActiveSlide();
})

setBgToBody()

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}