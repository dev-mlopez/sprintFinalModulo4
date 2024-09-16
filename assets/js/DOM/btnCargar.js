import { listaPokemon } from "../main.js";

let valor = 1;
const idPokemon = [
    { idMin: 0, idMax: 20 },
    { idMin: 20, idMax: 40 },
    { idMin: 60, idMax: 80 },
    { idMin: 80, idMax: 100 },
    { idMin: 100, idMax: 120 },
    { idMin: 120, idMax: 140 },
    { idMin: 140, idMax: 151 }
]

const mostrarListaPokemon = ($contenedorCard, callback) => {
    $contenedorCard.innerHTML = ""
    callback($contenedorCard);
}

const cargarPrimeraPagina = $contenedorCard => {
    const $btnCargarMas = document.getElementById("btnCargarMas"),
        $btnBorrarTodo = document.getElementById("btnBorrarTodo");
    $btnCargarMas.classList.remove("is-active");
    $btnBorrarTodo.classList.remove("is-active");

    valor = 0;
    for(let i = idPokemon[valor].idMin; i < idPokemon[valor].idMax; i++) {
        listaPokemon[i].mostrarDatos($contenedorCard);
    }
}

const cambiarPagina = $contenedorCard => {
    (valor == 6)
        ? valor = 0
        : valor++;
    for(let i = idPokemon[valor].idMin; i < idPokemon[valor].idMax; i++){
        listaPokemon[i].mostrarDatos($contenedorCard)
    }
    
}

const borrarTodo = $contenedorCard => {
    const $btnCargarMas = document.getElementById("btnCargarMas"),
        $btnBorrarTodo = document.getElementById("btnBorrarTodo");
    $btnCargarMas.classList.add("is-active");
    $btnBorrarTodo.classList.add("is-active");

    $contenedorCard.innerHTML = ""
    valor = 1;
}

export {cargarPrimeraPagina, cambiarPagina, mostrarListaPokemon, borrarTodo}