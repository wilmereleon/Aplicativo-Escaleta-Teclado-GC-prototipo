const Zocalo = require('./Zocalo');

/**
 * Clase ZocaloTextuales
 * Esta clase representa un zócalo de tipo 'TEXTUALES' en la aplicación.
 * Extiende la clase Zocalo.
 */
class ZocaloTextuales extends Zocalo {
    /**
     * Constructor de la clase ZocaloTextuales
     * Inicializa las propiedades del zócalo de textuales.
     */
    constructor() {
        super(); // Llama al constructor de la clase base Zocalo
        this.textual1 = ''; // Primer texto del zócalo de textuales
        this.textual2 = ''; // Segundo texto del zócalo de textuales
        this.textual3 = ''; // Tercer texto del zócalo de textuales
        this.textual4 = ''; // Cuarto texto del zócalo de textuales
        this.icono = ''; // Icono del zócalo de textuales
        this.tipo = 'TEXTUALES'; // Tipo de zócalo
    }

    /**
     * Método insertarTextuales
     * Lógica para insertar un zócalo de textuales.
     * (Actualmente no implementado)
     */
    insertarTextuales() {
        // Implementación del método insertarTextuales
    }
}

module.exports = ZocaloTextuales;