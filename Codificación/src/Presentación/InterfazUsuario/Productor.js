const Usuario = require('./Usuario');
const AsistenteProduccion = require('../Presentación/InterfazUsuario/AsistenteProduccion');

class Productor extends Usuario {
  constructor() {
    super();
    this.asistenteProduccion = new AsistenteProduccion();
  }

  abrirAplicacion() {}

  seleccionarPlantillaBase() {}

  seleccionarPlantillaDiaAnterior() {}

  importarHistorico() {}

  asignarTiempo() {}

  crearCelda(id, type, name, startTime, duration, elapsedTime) {
    return this.asistenteProduccion.crearCelda(id, type, name, startTime, duration, elapsedTime);
  }
}

module.exports = Productor;