const Zocalo = require('./Zocalo');

/**
 * Clase ZocaloCatastrofe
 * Esta clase representa un zócalo de tipo catástrofe en la aplicación.
 * Extiende la clase Zocalo.
 */
class ZocaloCatastrofe extends Zocalo {
    /**
     * Constructor de la clase ZocaloCatastrofe
     * Inicializa las propiedades del zócalo de catástrofe.
     */
    constructor() {
        super(); // Llama al constructor de la clase base Zocalo
        this.solapa = ''; // Solapa del zócalo de catástrofe
        this.texto = ''; // Texto del zócalo de catástrofe
        this.tipo = 'CATASTROFE'; // Tipo de zócalo
    }

    /**
     * Método insertarCatastrofe
     * Lógica para insertar un zócalo de tipo catástrofe.
     * (Actualmente no implementado)
     */
    insertarCatastrofe() {
        // Implementación del método insertarCatastrofe
    }
}

module.exports = ZocaloCatastrofe;