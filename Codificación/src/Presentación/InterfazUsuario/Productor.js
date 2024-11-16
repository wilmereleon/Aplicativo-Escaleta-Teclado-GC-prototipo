const Usuario = require('./Usuario');
const AsistenteProduccion = require('../Presentación/InterfazUsuario/AsistenteProduccion');

/**
 * Clase Productor
 * Esta clase representa un productor que extiende la clase Usuario y maneja la interacción con el Asistente de Producción.
 */
class Productor extends Usuario {
  /**
   * Constructor de la clase Productor
   * Inicializa el productor con una instancia del Asistente de Producción.
   */
  constructor() {
    super();
    this.asistenteProduccion = new AsistenteProduccion();
  }

  /**
   * Método abrirAplicacion
   * Abre la aplicación.
   * (Actualmente no implementado)
   */
  abrirAplicacion() {}

  /**
   * Método seleccionarPlantillaBase
   * Selecciona la plantilla base.
   * (Actualmente no implementado)
   */
  seleccionarPlantillaBase() {}

  /**
   * Método seleccionarPlantillaDiaAnterior
   * Selecciona la plantilla del día anterior.
   * (Actualmente no implementado)
   */
  seleccionarPlantillaDiaAnterior() {}

  /**
   * Método importarHistorico
   * Importa datos históricos.
   * (Actualmente no implementado)
   */
  importarHistorico() {}

  /**
   * Método asignarTiempo
   * Asigna el tiempo a una tarea.
   * (Actualmente no implementado)
   */
  asignarTiempo() {}

  /**
   * Método crearCelda
   * Crea una nueva celda utilizando el Asistente de Producción.
   * @param {string} id - ID de la celda.
   * @param {string} type - Tipo de la celda.
   * @param {string} name - Nombre de la celda.
   * @param {string} startTime - Tiempo de inicio de la celda.
   * @param {string} duration - Duración de la celda.
   * @param {string} elapsedTime - Tiempo transcurrido de la celda.
   * @returns {Array} - Lista actualizada de elementos.
   */
  crearCelda(id, type, name, startTime, duration, elapsedTime) {
    return this.asistenteProduccion.crearCelda(id, type, name, startTime, duration, elapsedTime);
  }
}

module.exports = Productor;