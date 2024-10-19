const GestionProgramacion = require('../../Dominio/ModelosDeDominio/GestionProgramacion');

class ModuloDCSHA {
    gestionarProgramacion() {
        const gestionProgramacion = new GestionProgramacion();
        gestionProgramacion.programarContenido();
    }
}

module.exports = ModuloDCSHA;