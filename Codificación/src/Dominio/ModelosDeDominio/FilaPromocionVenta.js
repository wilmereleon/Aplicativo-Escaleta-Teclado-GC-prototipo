import Fila from './Fila';

/**
 * Clase FilaPromocionVenta
 * Esta clase representa una fila de tipo 'Promocion-Venta' en la escaleta.
 * Extiende la clase Fila.
 */
class FilaPromocionVenta extends Fila {
  /**
   * Constructor de la clase FilaPromocionVenta
   * Inicializa las propiedades de la fila de promoción de venta.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Promocion-Venta', name, startTime, duration, elapsedTime); // Llama al constructor de la clase base Fila
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila de promoción de venta.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return [];
  }
}

export default FilaPromocionVenta;