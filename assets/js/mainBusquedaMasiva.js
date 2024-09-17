import { cargarPrimeraPagina, cambiarPagina, mostrarListaPokemon, borrarTodo } from "./DOM/busquedaMasiva.js";
import { obtenerPokemon, crearPokemon } from "./api/pokeApi.js";
import { obtenerTarjetasPokemon, tarjetaGraficoDinamico } from "./DOM/graficoDinamico.js";

document.addEventListener("DOMContentLoaded", () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";
    obtenerPokemon(url, crearPokemon)

})

document.getElementById("btnCargar").addEventListener("click", () => {
    mostrarListaPokemon(document.getElementById("listadoPokemon"),cargarPrimeraPagina);

    obtenerTarjetasPokemon();
    tarjetaGraficoDinamico("#header", "#infoPokemon", "#main", "#nav", "#footer");
})

document.getElementById("btnCargarMas").addEventListener("click", () => {
    mostrarListaPokemon(document.getElementById("listadoPokemon"),cambiarPagina);
    obtenerTarjetasPokemon();
})

document.getElementById("btnBorrarTodo").addEventListener("click", () => {
    borrarTodo(document.getElementById("listadoPokemon"))
})