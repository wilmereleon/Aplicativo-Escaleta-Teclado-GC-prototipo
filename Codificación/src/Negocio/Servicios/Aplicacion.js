const SALApp = require('../../Persistencia/SistemaAlmacenamientoLocal/SALApp');
const ModuloDCSHA = require('./ModuloDCSHA');
const ModuloPlantillas = require('./ModuloPlantillas');
const ModuloZocalos = require('./ModuloZocalos');
const ModuloEscaleta = require('./ModuloEscaleta');

/**
 * Clase Aplicacion
 * Esta clase representa la aplicación principal que maneja los diferentes módulos y la interacción con el sistema de almacenamiento local.
 */
class Aplicacion {
    /**
     * Constructor de la clase Aplicacion
     * Inicializa la aplicación con una instancia del sistema de almacenamiento local.
     * @param {SALApp} salApp - Instancia del sistema de almacenamiento local.
     */
    constructor(salApp) {
        this.salApp = salApp;
    }

    /**
     * Método abrir
     * Abre la aplicación y almacena los datos en el sistema de almacenamiento local.
     */
    abrir() {
        this.salApp.almacenarDatos();
    }

    /**
     * Método cerrar
     * Cierra la aplicación y recupera los datos del sistema de almacenamiento local.
     */
    cerrar() {
        this.salApp.recuperarDatos();
    }
}

module.exports = Aplicacion;