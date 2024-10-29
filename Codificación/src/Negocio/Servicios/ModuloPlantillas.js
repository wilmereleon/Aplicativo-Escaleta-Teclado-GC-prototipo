const OpcionesPlantilla = require('../../Dominio/ModelosDeDominio/OpcionesPlantilla');

class ModuloPlantillas {
    seleccionarPlantilla() {
        const opcionesPlantilla = new OpcionesPlantilla();
        opcionesPlantilla.cargarPlantilla();
    }
}

module.exports = ModuloPlantillas;