const GestionProgramacion = require('../../Dominio/ModelosDeDominio/GestionProgramacion');

/**
 * Clase ModuloDCSHA
 * Esta clase maneja la gestión de la programación en el módulo DCSHA.
 */
class ModuloDCSHA {
    /**
     * Método gestionarProgramacion
     * Gestiona la programación de contenido.
     */
    gestionarProgramacion() {
        const gestionProgramacion = new GestionProgramacion();
        gestionProgramacion.programarContenido();
    }
}

module.exports = ModuloDCSHA;