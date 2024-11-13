import Fila from './Fila';

/**
 * Clase FilaReel
 * Esta clase representa una fila de tipo 'Reel' en la escaleta.
 * Extiende la clase Fila.
 */
class FilaReel extends Fila {
  /**
   * Constructor de la clase FilaReel
   * Inicializa las propiedades de la fila de reel.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Reel', name, startTime, duration, elapsedTime); // Llama al constructor de la clase base Fila
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila de reel.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return ['CATASTROFE', '2 LINEAS', 'VENTAS', 'TEXTUALES'];
  }
}

export default FilaReel;