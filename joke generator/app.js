const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

jokeBtn.addEventListener("click", generateJoke)

generateJoke()

// function generateJoke() {
//     fetch("https://icanhazdadjoke.com/", {
//         headers: {
//             "Accept": "application/json"
//         }
//     }).then(res => res.json()).then(data => {
//         jokeElement.innerText = data.joke
//     })
// }

async function generateJoke() {
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    });

    const data = await response.json();

    jokeElement.innerText = data.joke
}

