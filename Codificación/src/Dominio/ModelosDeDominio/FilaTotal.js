import Fila from './Fila';

/**
 * Clase FilaTotal
 * Esta clase representa una fila de tipo 'Total' en la escaleta.
 * Extiende la clase Fila.
 */
class FilaTotal extends Fila {
  /**
   * Constructor de la clase FilaTotal
   * Inicializa las propiedades de la fila de total.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Total', name, startTime, duration, elapsedTime); // Llama al constructor de la clase base Fila
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila de total.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return ['DUPLICAR'];
  }

  /**
   * Método getColor
   * Devuelve el color asociado a la fila de total.
   * @returns {string} - Color de la fila de total.
   */
  getColor() {
    return '#69778A';
  }
}

export default FilaTotal;