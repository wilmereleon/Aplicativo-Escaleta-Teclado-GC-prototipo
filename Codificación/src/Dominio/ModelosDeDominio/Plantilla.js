/**
 * Clase Plantilla
 * Esta clase maneja la gestión de la última plantilla utilizada en la aplicación.
 */
class Plantilla {
  /**
   * Constructor de la clase Plantilla
   * Inicializa la propiedad ultimaPlantilla como null.
   */
  constructor() {
    this.ultimaPlantilla = null;
  }

  /**
   * Método setUltimaPlantilla
   * Establece la última plantilla utilizada.
   * @param {object} plantilla - La plantilla a establecer como última utilizada.
   */
  setUltimaPlantilla(plantilla) {
    this.ultimaPlantilla = plantilla;
  }

  /**
   * Método getUltimaPlantilla
   * Obtiene la última plantilla utilizada.
   * @returns {object|null} - La última plantilla utilizada o null si no hay ninguna.
   */
  getUltimaPlantilla() {
    return this.ultimaPlantilla;
  }
}

module.exports = Plantilla;