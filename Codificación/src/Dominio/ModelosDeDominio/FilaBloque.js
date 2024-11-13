import Fila from './Fila';

/**
 * Clase FilaBloque
 * Esta clase representa una fila de tipo 'Bloque' en la escaleta.
 * Extiende la clase Fila.
 */
class FilaBloque extends Fila {
  /**
   * Constructor de la clase FilaBloque
   * Inicializa las propiedades de la fila de bloque.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Bloque', name, startTime, duration, elapsedTime); // Llama al constructor de la clase base Fila
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila de bloque.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return ['DUPLICAR', '+'];
  }

  /**
   * Método getColor
   * Devuelve el color asociado a la fila de bloque.
   * @returns {string} - Color de la fila de bloque.
   */
  getColor() {
    return '#69778A';
  }
}

export default FilaBloque;