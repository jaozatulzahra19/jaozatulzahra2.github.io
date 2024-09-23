const addJoke = async () => {
    const jokeText = await getJokes();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
};


const getJokes = async () => {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
};