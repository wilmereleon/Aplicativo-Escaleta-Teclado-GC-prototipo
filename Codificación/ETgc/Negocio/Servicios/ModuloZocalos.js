const GestionZocalos = require('../../Dominio/ModelosDeDominio/GestionZocalos');
const GestionPlacas = require('../../Dominio/ModelosDeDominio/GestionPlacas');

class ModuloZocalos {
    gestionarZocalos() {
        const gestionZocalos = new GestionZocalos();
        gestionZocalos.insertarZocalo();
    }

    gestionarPlacas() {
        const gestionPlacas = new GestionPlacas();
        gestionPlacas.gestionarPlacas();
    }
}

module.exports = ModuloZocalos;