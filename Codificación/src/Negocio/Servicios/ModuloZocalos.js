const GestionZocalos = require('../../Dominio/ModelosDeDominio/GestionZocalos');
const GestionPlacas = require('../../Dominio/ModelosDeDominio/GestionPlacas');

/**
 * Clase ModuloZocalos
 * Esta clase maneja la gestión de zócalos y placas en la aplicación.
 */
class ModuloZocalos {
    /**
     * Método gestionarZocalos
     * Gestiona los zócalos.
     */
    gestionarZocalos() {
        const gestionZocalos = new GestionZocalos();
        gestionZocalos.insertarZocalo();
    }

    /**
     * Método gestionarPlacas
     * Gestiona las placas.
     */
    gestionarPlacas() {
        const gestionPlacas = new GestionPlacas();
        gestionPlacas.gestionarPlacas();
    }
}

module.exports = ModuloZocalos;