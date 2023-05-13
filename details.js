const urlParams = new URLSearchParams(window.location.search);
const pokemonName = urlParams.get('name');

const pokemonDetailsContainer = document.getElementById('details-container');

axios({
    method: 'get',
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
}).then(function (response) {
    document.getElementById('name').innerHTML = pokemonName.toLocaleUpperCase();
    document.getElementById('image').src = response.data.sprites.other['official-artwork'].front_default;
    document.getElementById('height').innerHTML = response.data.height / 10;
    document.getElementById('weight').innerHTML = response.data.weight / 10;
});