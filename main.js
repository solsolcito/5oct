const cuandollegueelpokemon = (pokemon) => {

console.log(pokemon.sprites.front_default)
const image = document.getElementById("pokemon-image")
image.src = pokemon.sprites.front_default
}

const pokemonname = prompt ("Elige tu pokemon: ")

fetch("https://pokeapi.co/api/v2/pokemon/"+ pokemonname)
.then(response => response.json())
.then(cuandollegueelpokemon);