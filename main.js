const listContainer = document.getElementById('list-container');
const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');

let pokemonList = [];
let previousUrl = null;
let nextUrl = null;

getPokemonList('https://pokeapi.co/api/v2/pokemon');

function getPokemonList(url) {
    axios({
        method: 'get',
        url: url
    }).then(function (response) {
        pokemonList = response.data.results;
        nextUrl = response.data.next;
        previousUrl = response.data.previous;

        displayPokemonList(pokemonList);
    });
}

function displayPokemonList(pokemonList) {
    listContainer.innerHTML = '';
    pokemonList.forEach(function (pokemon) {
        const pokemonListItem = document.createElement('li');
        const viewDetailsLink = document.createElement('a');
        pokemonListItem.innerText = pokemon.name.toUpperCase();
        viewDetailsLink.href = `./details.html?name=${pokemon.name}`;
        viewDetailsLink.innerText = 'View Details >';
        listContainer.appendChild(pokemonListItem);
        pokemonListItem.appendChild(viewDetailsLink);
    });
}


nextButton.addEventListener('click', function () {
    if (nextUrl) {
        getPokemonList(nextUrl);
    }
});

previousButton.addEventListener('click', function () {
    if (previousUrl) {
        getPokemonList(previousUrl);
    }
});