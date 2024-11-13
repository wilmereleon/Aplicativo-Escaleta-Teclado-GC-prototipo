import Fila from './Fila';

/**
 * Clase FilaCortina
 * Esta clase representa una fila de tipo 'Cortina' en la escaleta.
 * Extiende la clase Fila.
 */
class FilaCortina extends Fila {
  /**
   * Constructor de la clase FilaCortina
   * Inicializa las propiedades de la fila de cortina.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Cortina', name, startTime, duration, elapsedTime); // Llama al constructor de la clase base Fila
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila de cortina.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return [];
  }
}

export default FilaCortina;