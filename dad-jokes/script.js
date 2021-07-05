const joke_element = document.getElementById('joke');
const joke_btn = document.getElementById('joke-btn');

joke_btn.addEventListener('click', generateJoke)

generateJoke();

async function generateJoke() {

    const config = {
        headers: {
            'Accept': 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    joke_element.innerHTML = data.joke
}

// function generateJoke() {

//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com',config)
//         .then(res => res.json())
//         .then(data => {
//             joke_element.innerHTML = data.joke
//         })
// }