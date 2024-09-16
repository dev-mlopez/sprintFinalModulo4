import { obtenerPokemon, crearPokemon } from "./main.js";
import { cargarPrimeraPagina, cambiarPagina, mostrarListaPokemon, borrarTodo } from "./DOM/btnCargar.js";

document.addEventListener("DOMContentLoaded", () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";
    obtenerPokemon(url, crearPokemon)
})

document.getElementById("btnCargar").addEventListener("click", () => {
    mostrarListaPokemon(document.getElementById("listadoPokemon"),cargarPrimeraPagina);
})

document.getElementById("btnCargarMas").addEventListener("click", () => {
    mostrarListaPokemon(document.getElementById("listadoPokemon"),cambiarPagina);
})

document.getElementById("btnBorrarTodo").addEventListener("click", () => {
    borrarTodo(document.getElementById("listadoPokemon"))
})