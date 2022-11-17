//controles para a url
 const offset = 0;
 const limit = 10;
//url da api
 const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`   

 function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}<li>`)  //Utilizamos aqui pegar o type e jogar para o HTML
 }

//Conveter o pokemon para html
function convertPokemonToLi(pokemon) {
    return `
            <li class="pokemon">
            <span class="number">${pokemon.order}#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                   ${convertPokemonTypesToLi(pokemon.types).join('')}  
                </ol>

                <img src="${pokemon.sprites.other.dream_world.front_default}"
                    alt=${pokemon.name}>
            </div>
        </li>`
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml =  pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml  //Desta forma vamos substituir o HTMl antigo pelo HTMl novo
})
    

    





