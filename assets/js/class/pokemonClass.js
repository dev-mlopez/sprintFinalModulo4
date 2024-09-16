export default class Pokemon {
    static contadorId = 0;
    constructor(nombrePokemon) {
        this.idPokemon = Pokemon.contadorId++;
        this.nombrePokemon = nombrePokemon;
    }

    agregarCaracteristicasPokemon = (idPokedex, imgPokemon, tipoPokemon) => {
        this.idPokedex = idPokedex;
        this.imgPokemon = imgPokemon;
        this.tipoPokemon = [];
        tipoPokemon.forEach(tipo => {
            this.tipoPokemon.push(tipo)
        })
    }

    getNombrePokemon = () => this.nombrePokemon;
    getIdPokemon = () => this.idPokemon;
    getIdPokedex = () => this.idPokedex;
    getImgPokemon = () => this.imgPokemon;
    getTipoPokemon = () => this.tipoPokemon;

    listarTipo = () => {
        let listadoTipo = "";
        this.tipoPokemon.forEach(tipos => {
            listadoTipo += `<p class="tipo ${tipos}">${tipos}</p>`
        })
        return listadoTipo
    }

    mostrarDatos = ($contenedorCard) => {
        const $card = document.createElement("div");
        $card.classList.add("cardPokemon");
        $card.innerHTML += `
            <div class="contenedorImagen">
                <p class="nombrePokemon">${this.getNombrePokemon()}</p>
                <img src="${this.getImgPokemon()}" alt="${this.getNombrePokemon()}">
                <p class="idPokemon">#${this.getIdPokedex()}</p>
            </div>
            <div class="contenedorTipos">
                ${this.listarTipo()}
            </div>
        `;
        $contenedorCard.appendChild($card);
    }

}