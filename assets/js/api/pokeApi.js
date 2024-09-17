import Pokemon from "../class/pokemonClass.js";

const listaPokemon = [],
    listaNombrePokemon = new Map;

const obtenerPokemon = async (url, callback) => {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            const mensaje = `No fue posible acceder a la ruta: ${response.status}`
            throw new Error(mensaje);
        }
        const pokemon = await response.json();
        callback(pokemon.results)
    } catch (error) {
        console.error(`Se ha producido un error inesperado ${error}`);
    }
}

const crearPokemon = nombrePokemon => {
    nombrePokemon.forEach(e => {
        const pokemon = new Pokemon(e.name)
        listaNombrePokemon.set(pokemon.getNombrePokemon(), pokemon.getIdPokemon());
        listaPokemon.push(pokemon);
    })
    consultarListaPokemon();
}

const consultarListaPokemon = () => {
    for(const pokemon of listaPokemon) {
        const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon.getIdPokemon() + 1}`;
        obtenerDatosPokemon(urlPokemon)
    }
}

const obtenerDatosPokemon = async urlPokemon => {
    try {
        const response = await fetch(urlPokemon);

        if(!response.ok) {
            const mensaje = `No fue posible acceder a la ruta: ${response.status}`;
            throw new Error(mensaje);
        }
        const pokemon = await response.json()
        anadirDatosPokemon(pokemon)
    } catch (error) {
        console.log(error)
    }
}

const anadirDatosPokemon = pokemon => {
    const idPokemon = listaNombrePokemon.get(pokemon.forms[0].name);
    const idPokedex = pokemon.id;
    const imgPokemon = pokemon.sprites["front_default"];
    const tipoPokemon = [];
    pokemon.types.forEach(tipo => {
        tipoPokemon.push(tipo.type.name)
    })
    listaPokemon[idPokemon].agregarCaracteristicasPokemon(idPokedex, imgPokemon, tipoPokemon)

    const hpPokemon = pokemon.stats[0].base_stat;
    const attackPokemon = pokemon.stats[1].base_stat;
    const defensePokemon = pokemon.stats[2].base_stat;
    const specialAttackPokemon = pokemon.stats[3].base_stat;
    const specialDefensePokemon = pokemon.stats[3].base_stat;
    const speedPokemon = pokemon.stats[3].base_stat;

    listaPokemon[idPokemon].agregarPoderesPokemon(hpPokemon, attackPokemon, defensePokemon, specialAttackPokemon, specialDefensePokemon, speedPokemon);
}

export {obtenerPokemon, crearPokemon, listaPokemon, listaNombrePokemon};