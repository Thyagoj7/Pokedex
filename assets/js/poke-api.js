
const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json()) //Estamos pegando a lista do json e trasnformando uma lista que vai ser a lista de promessa do detalhe do pokemon.e este detalhe vai vir em json
}

pokeApi.getPokemons = (offset=0, limit=5) => {
    const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
    .then((response) => response.json()) //QUando ela entrar aqui vamos pedir para converter o body para Json/ que vai dar uma promisse de any
    .then((jsonbody) => jsonbody.results) //Depois ele vai especificar que vamos usar o result do filtro //Podemos encandear o .then o jsonbody vai ter o valor do retorno do .then de cima.Usamos o result pois este json vem cheio de coisa, de informações mas queremos apenas alguns detalhes por isso usamos o result.
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) //Aqui pegamos o retorno do getPokemonDetail()/Vamos mapear nossa lista de Pokemon em uma nova lista de reqiosoções, do detalhe dos pokemons que é um novo fetch da url do pokemon que stpu querendo acessar e convertesnto a response em um json
    .then((detailRequests) => Promise.all(detailRequests)) //Aqui ja temos a nossa lista de promisse, dai a lista vai ser resolvida, aguardamos ate que as requisições terminem finalizar o retorno
    .then((pokemonsDetails) => pokemonsDetails) //QUando as requisições terminarem vamos ter uma lisra de detalhes dos pokemons
            
    }
    //.catch((error) => console.error(error))       
