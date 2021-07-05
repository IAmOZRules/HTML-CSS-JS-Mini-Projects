const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        const x = event.clientX
        const y = event.clientY

        const buttonTop = event.target.offsetTop;
        const buttonLeft = event.target.offsetLeft;

        const xIn = x - buttonLeft;
        const yIn = y - buttonTop;
        
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yIn + 'px';
        circle.style.left = xIn + 'px';

        this.appendChild(circle);

        setInterval(() => circle.remove(), 300);
    });
});