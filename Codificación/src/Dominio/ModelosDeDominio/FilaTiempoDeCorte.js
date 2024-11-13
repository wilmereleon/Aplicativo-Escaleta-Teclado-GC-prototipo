import Fila from './Fila';

/**
 * Clase FilaTiempoDeCorte
 * Esta clase representa una fila de tipo 'Tiempo de Corte' en la escaleta.
 * Extiende la clase Fila.
 */
class FilaTiempoDeCorte extends Fila {
  /**
   * Constructor de la clase FilaTiempoDeCorte
   * Inicializa las propiedades de la fila de tiempo de corte.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Tiempo de Corte', name, startTime, duration, elapsedTime); // Llama al constructor de la clase base Fila
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila de tiempo de corte.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return [];
  }
}

export default FilaTiempoDeCorte;