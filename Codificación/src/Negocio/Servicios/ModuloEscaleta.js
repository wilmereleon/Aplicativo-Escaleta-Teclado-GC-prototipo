const GestionEscaleta = require('../../Dominio/ModelosDeDominio/GestionEscaleta');
const Reloj = require('../../Dominio/ModelosDeDominio/Reloj');

class ModuloEscaleta {
    gestionarEscaleta() {
        const gestionEscaleta = new GestionEscaleta();
        gestionEscaleta.editarEscaleta();
    }

    mostrarHora() {
        const reloj = new Reloj();
        reloj.mostrarHora();
    }
}

module.exports = ModuloEscaleta;