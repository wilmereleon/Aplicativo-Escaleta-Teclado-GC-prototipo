const GestionEscaleta = require('../../Dominio/ModelosDeDominio/GestionEscaleta');
const Reloj = require('../../Dominio/ModelosDeDominio/Reloj');

/**
 * Clase ModuloEscaleta
 * Esta clase maneja la gestión de la escaleta y la visualización de la hora en la aplicación.
 */
class ModuloEscaleta {
    /**
     * Método gestionarEscaleta
     * Gestiona la escaleta.
     */
    gestionarEscaleta() {
        const gestionEscaleta = new GestionEscaleta();
        gestionEscaleta.editarEscaleta();
    }

    /**
     * Método mostrarHora
     * Muestra la hora actual.
     */
    mostrarHora() {
        const reloj = new Reloj();
        reloj.mostrarHora();
    }
}

module.exports = ModuloEscaleta;