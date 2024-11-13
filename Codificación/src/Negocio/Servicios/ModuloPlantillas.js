const OpcionesPlantilla = require('../../Dominio/ModelosDeDominio/OpcionesPlantilla');

/**
 * Clase ModuloPlantillas
 * Esta clase maneja la selección y carga de plantillas en la aplicación.
 */
class ModuloPlantillas {
    /**
     * Método seleccionarPlantilla
     * Selecciona y carga una plantilla.
     */
    seleccionarPlantilla() {
        const opcionesPlantilla = new OpcionesPlantilla();
        opcionesPlantilla.cargarPlantilla();
    }
}

module.exports = ModuloPlantillas;