const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.height = 0;
        percentage.style.visibility = 'hidden';
        liters.innerText = `2 L`;

    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 290}px`
        const percent = fullCups / totalCups * 100;
        percentage.innerText = `${percent}%`;

        if (percent <= 25) {
            percentage.style.color = '#FF0000';
        } else if (percent < 75 && percent > 25) {
            percentage.style.color = '#B3F86A';
        } else if (percent >= 75) {
            percentage.style.color = '#00FF00';
        }

        if (fullCups === totalCups) {
            remained.style.visibility = 'hidden';
            remained.style.height = 0;
        } else {
            remained.style.visibility = 'visible';
            liters.innerText = `${(2000 - (250 * fullCups)) / 1000} L`;
        }
    }
}