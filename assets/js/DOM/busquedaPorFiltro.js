import { listaPokemon, listaNombrePokemon } from "../api/pokeApi.js";

const mostrarListaPokemon = () => {
    setTimeout(() => {
        const seleccionPokemon = document.getElementById("seleccionPokemon");
        listaPokemon.forEach(pokemon => {
            const opcion = document.createElement("option");
            opcion.value = pokemon.getNombrePokemon();
            opcion.textContent = `#${pokemon.getIdPokedex()} - ${pokemon.getNombrePokemon()}`;
            seleccionPokemon.appendChild(opcion)
        })
    }, 3000)
}

const mostrarCardPokemon = pokemon => {
    let nombrePokemon = pokemon;
    const $contenedorCard = document.getElementById("listadoPokemon")
    $contenedorCard.innerHTML = "";
    listaPokemon[listaNombrePokemon.get(nombrePokemon)].mostrarDatos($contenedorCard);
}


export {mostrarListaPokemon, mostrarCardPokemon};