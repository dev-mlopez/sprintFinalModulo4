import { listaPokemon, listaNombrePokemon } from "../api/pokeApi.js";

const obtenerTarjetasPokemon = () => {
    const tarjetas = document.querySelectorAll(".cardPokemon");
    for(const tarjeta of tarjetas) {
        tarjeta.addEventListener("click", e => {
            const nombrePokemon = tarjeta.querySelector(".contenedorImagen").querySelector(".nombrePokemon").textContent;
            obtenerNombrePokemon(nombrePokemon, mostrarGrafico)
        })
    }
}

const obtenerNombrePokemon = (nombrePokemon, callback) => {
    setTimeout(() => {
        const idPokemon = listaNombrePokemon.get(nombrePokemon)
        callback(idPokemon);
    }, 1000)
}

let grafico;

const mostrarGrafico = idPokemon => {
    const infoPokemonContenedor = document.getElementById("infoPokemon");
    infoPokemonContenedor.classList.remove("is-active");
    const nombrePokemon = document.getElementById("infoNombrePokemon");
    nombrePokemon.textContent = `${listaPokemon[idPokemon].getNombrePokemon()}`
    const ctx = document.getElementById("myChart");
    grafico = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["HP", "Attack", "Defense", "Special-Attack", "Special-Defense", "Speed"],
            datasets: [{
                label: `Poderes de ${listaPokemon[idPokemon].getNombrePokemon()}`,
                data: [
                    listaPokemon[idPokemon].getHpPokemon(), 
                    listaPokemon[idPokemon].getAttackPokemon(),
                    listaPokemon[idPokemon].getDefensePokemon(),
                    listaPokemon[idPokemon].getSpecialAttackPokemon(),
                    listaPokemon[idPokemon].getSpecialDefensePokemon(),
                    listaPokemon[idPokemon].getSpeedPokemon()
                ],
                backgroundColor: [
                    'rgb(195, 60, 84)',
                    'rgb(37, 78, 112)',
                    'rgb(3, 206, 164)',
                    'rgb(234, 196, 53)',
                    'rgb(102, 215, 209)',
                    'rgb(255, 217, 125)',
                ],
                hoverOffset: 10
            }]
        },
    });
}

const tarjetaGraficoDinamico = (header, infoPokemon, main, nav, footer) => {
    document.addEventListener("click", e => {
        if(
            e.target.matches(header) || e.target.matches(`${header} *`) ||
            e.target.matches(main) || e.target.matches(`${main} *`) ||
            e.target.matches(nav) || e.target.matches(`${nav} *`) ||
            e.target.matches(footer) || e.target.matches(`${footer} *`))
            {
                try {
                    document.querySelector(infoPokemon).classList.add("is-active");
                    grafico.destroy()
                } catch(error) {
                }
            }
    })
}

export {obtenerTarjetasPokemon, tarjetaGraficoDinamico}