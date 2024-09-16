import Pokemon from "./class/pokemonClass.js";

const listaPokemon = [],
    listaNombrePokemon = new Map;

async function obtenerPokemon(url, callback) {
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

function crearPokemon(nombrePokemon) {
    nombrePokemon.forEach(e => {
        const pokemon = new Pokemon(e.name)
        listaNombrePokemon.set(pokemon.getNombrePokemon(), pokemon.getIdPokemon());
        listaPokemon.push(pokemon);
    })
    consultarListaPokemon();
}

function consultarListaPokemon() {
    for(const pokemon of listaPokemon) {
        const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon.getIdPokemon() + 1}`;
        obtenerDatosPokemon(urlPokemon)
    }
}

async function obtenerDatosPokemon(urlPokemon) {
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

function anadirDatosPokemon(pokemon) {
    const idPokemon = listaNombrePokemon.get(pokemon.forms[0].name);
    const idPokedex = pokemon.id;
    const imgPokemon = pokemon.sprites["front_default"];
    const tipoPokemon = [];
    pokemon.types.forEach(tipo => {
        tipoPokemon.push(tipo.type.name)
    })
    listaPokemon[idPokemon].agregarCaracteristicasPokemon(idPokedex, imgPokemon, tipoPokemon)
}

export {obtenerPokemon, crearPokemon, listaPokemon};