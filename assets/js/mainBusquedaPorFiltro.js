import { mostrarListaPokemon, mostrarCardPokemon } from "./DOM/busquedaPorFiltro.js"
import { obtenerPokemon, crearPokemon } from "./api/pokeApi.js";
import { obtenerTarjetasPokemon, tarjetaGraficoDinamico } from "./DOM/graficoDinamico.js";

document.addEventListener("DOMContentLoaded", () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";
    obtenerPokemon(url, crearPokemon)
    setTimeout(() => {
        mostrarListaPokemon();
    }, 1000)
})

document.getElementById("searchForm").addEventListener("submit", e => {
    mostrarCardPokemon(document.getElementById("seleccionPokemon").value);
    e.preventDefault();
    obtenerTarjetasPokemon();
    tarjetaGraficoDinamico("#header", "#infoPokemon", "#main", "#nav", "#footer");
})