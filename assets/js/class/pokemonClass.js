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

    agregarPoderesPokemon = (hp, attack, defense, specialAttack, specialDefense, speed) => {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.specialAttack = specialAttack;
        this.specialDefense = specialDefense;
        this.speed = speed;
    }

    getNombrePokemon = () => this.nombrePokemon;
    getIdPokemon = () => this.idPokemon;

    getIdPokedex = () => this.idPokedex;
    getImgPokemon = () => this.imgPokemon;
    getTipoPokemon = () => this.tipoPokemon;

    getHpPokemon = () => this.hp;
    getAttackPokemon = () => this.attack;
    getDefensePokemon = () => this.defense;
    getSpecialAttackPokemon = () => this.specialAttack;
    getSpecialDefensePokemon = () => this.specialDefense;
    getSpeedPokemon = () => this.speed;

    listarTipo = () => {
        let listadoTipo = "";
        this.tipoPokemon.forEach(tipos => {
            listadoTipo += `<p class="tipo ${tipos}">${tipos}</p>`
        })
        return listadoTipo
    }

    mostrarDatos = ($contenedorCard) => {
        const $card = document.createElement("button");
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

    mostrarPoderes = () => {
        console.log(`Nombre: ${this.getNombrePokemon()}, HP ${this.getHpPokemon()}, Attack: ${this.getAttackPokemon()}, Deffense ${this.getDefensePokemon()}, Special-attack ${this.getSpecialAttackPokemon()}, Special-defense ${this.getSpecialDefensePokemon()}, Speed ${this.getSpeedPokemon()}`);
    }
}