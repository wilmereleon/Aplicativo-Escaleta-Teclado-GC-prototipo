class ControladorPrincipal {
    constructor(servicio) {
        this.servicio = servicio;
    }

    gestionarAplicacion() {
        this.servicio.abrir();
    }
}

module.exports = ControladorPrincipal;