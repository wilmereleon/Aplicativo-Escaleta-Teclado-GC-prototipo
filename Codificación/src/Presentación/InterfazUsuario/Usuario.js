const SALApp = require('../../Persistencia/SistemaAlmacenamientoLocal/SALApp');

/**
 * Clase Usuario
 * Esta clase representa un usuario en la aplicación.
 */
class Usuario {
    /**
     * Constructor de la clase Usuario
     * Inicializa el rol del usuario.
     */
    constructor() {
        this.rol = ''; // Rol del usuario
    }

    /**
     * Método accederModulo
     * Método para acceder a un módulo.
     * (Actualmente no implementado)
     */
    accederModulo() {}

    /**
     * Método seleccionarPlantilla
     * Método para seleccionar una plantilla.
     * (Actualmente no implementado)
     */
    seleccionarPlantilla() {}
}

module.exports = Usuario;