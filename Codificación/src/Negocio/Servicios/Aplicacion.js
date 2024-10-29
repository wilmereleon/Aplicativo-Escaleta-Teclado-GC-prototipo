const SALApp = require('../../Persistencia/SistemaAlmacenamientoLocal/SALApp');
const ModuloDCSHA = require('./ModuloDCSHA');
const ModuloPlantillas = require('./ModuloPlantillas');
const ModuloZocalos = require('./ModuloZocalos');
const ModuloEscaleta = require('./ModuloEscaleta');

class Aplicacion {
    constructor(salApp) {
        this.salApp = salApp;
    }

    abrir() {
        this.salApp.almacenarDatos();
    }

    cerrar() {
        this.salApp.recuperarDatos();
    }
}

module.exports = Aplicacion;