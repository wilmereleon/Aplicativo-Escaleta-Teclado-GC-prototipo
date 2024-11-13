import Fila from './Fila';

/**
 * Clase FilaTitulo
 * Esta clase representa una fila de tipo 'Titulo' en la escaleta.
 * Extiende la clase Fila.
 */
class FilaTitulo extends Fila {
  /**
   * Constructor de la clase FilaTitulo
   * Inicializa las propiedades de la fila de título.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Titulo', name, startTime, duration, elapsedTime); // Llama al constructor de la clase base Fila
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila de título.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return ['TITULO'];
  }
}

export default FilaTitulo;