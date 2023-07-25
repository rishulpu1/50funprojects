const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJokes();

async function generateJokes(){
    jokeEl.innerHTML = "Loading..."
    const response = await fetch('https://icanhazdadjoke.com',{
        headers: {
            "Accept": 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
    jokeEl.innerHTML = data.joke;
}

jokeBtn.addEventListener('click', generateJokes);