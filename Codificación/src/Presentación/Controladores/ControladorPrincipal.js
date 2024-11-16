/**
 * Clase ControladorPrincipal
 * Esta clase representa el controlador principal que maneja la interacción con el servicio de la aplicación.
 */
class ControladorPrincipal {
    /**
     * Constructor de la clase ControladorPrincipal
     * Inicializa el controlador con una instancia del servicio.
     * @param {object} servicio - Instancia del servicio de la aplicación.
     */
    constructor(servicio) {
        this.servicio = servicio;
    }

    /**
     * Método gestionarAplicacion
     * Gestiona la aplicación llamando al método abrir del servicio.
     */
    gestionarAplicacion() {
        this.servicio.abrir();
    }
}

module.exports = ControladorPrincipal;