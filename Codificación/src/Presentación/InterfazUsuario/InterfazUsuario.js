const Aplicacion = require('../../Negocio/Servicios/Aplicacion');

/**
 * Clase InterfazUsuario
 * Esta clase representa la interfaz de usuario que interactúa con la aplicación.
 */
class InterfazUsuario {
    /**
     * Constructor de la clase InterfazUsuario
     * Inicializa la interfaz de usuario con una instancia de la aplicación.
     * @param {Aplicacion} aplicacion - Instancia de la aplicación.
     */
    constructor(aplicacion) {
        this.aplicacion = aplicacion;
    }

    /**
     * Método mostrarInterfaz
     * Muestra la interfaz de usuario y abre la aplicación.
     */
    mostrarInterfaz() {
        this.aplicacion.abrir();
    }
}

module.exports = InterfazUsuario;