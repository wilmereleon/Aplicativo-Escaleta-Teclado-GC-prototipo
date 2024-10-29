class VistaPrevioVentana {
    constructor(interfazZocalos, interfazPlacas) {
        this.interfazZocalos = interfazZocalos;
        this.interfazPlacas = interfazPlacas;
    }

    mostrarVistaPrevia() {
        this.interfazZocalos.mostrarZocalos();
        this.interfazPlacas.mostrarPlacas();
    }
}

module.exports = VistaPrevioVentana;