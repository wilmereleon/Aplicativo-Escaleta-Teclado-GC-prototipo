const Zocalo = require('./Zocalo');

/**
 * Clase ZocaloTitulo
 * Esta clase representa un zócalo de tipo 'TITULOS' en la aplicación.
 * Extiende la clase Zocalo.
 */
class ZocaloTitulo extends Zocalo {
  /**
   * Constructor de la clase ZocaloTitulo
   * Inicializa las propiedades del zócalo de títulos.
   */
  constructor() {
    super(); // Llama al constructor de la clase base Zocalo
    this.solapa = ''; // Solapa del zócalo de títulos
    this.titulo = ''; // Título del zócalo de títulos
    this.tipo = 'TITULOS'; // Tipo de zócalo
  }

  /**
   * Método insertarTitulo
   * Lógica para insertar un zócalo de títulos.
   * @param {string} solapa - Solapa del zócalo.
   * @param {string} titulo - Título del zócalo.
   */
  insertarTitulo(solapa, titulo) {
    this.solapa = solapa;
    this.titulo = titulo;
  }
}

module.exports = ZocaloTitulo;