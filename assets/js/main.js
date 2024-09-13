const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

obtenerPokemon()

async function obtenerPokemon() {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            const mensaje = `No fue posible acceder a la ruta: ${response.status}`
            throw new Error(mensaje);
        }
        const pokemon = await response.json();

        console.log(pokemon.results)
    } catch (error) {
        return error;
    }
}

function listarPokemon() {
    
}