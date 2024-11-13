const Zocalo = require('./Zocalo');

/**
 * Clase ZocaloDosLineas
 * Esta clase representa un zócalo de tipo '2 LINEAS' en la aplicación.
 * Extiende la clase Zocalo.
 */
class ZocaloDosLineas extends Zocalo {
    /**
     * Constructor de la clase ZocaloDosLineas
     * Inicializa las propiedades del zócalo de dos líneas.
     */
    constructor() {
        super(); // Llama al constructor de la clase base Zocalo
        this.solapa = ''; // Solapa del zócalo de dos líneas
        this.linea1 = ''; // Primera línea del zócalo de dos líneas
        this.linea2 = ''; // Segunda línea del zócalo de dos líneas
        this.tipo = '2 LINEAS'; // Tipo de zócalo
    }

    /**
     * Método insertarDosLineas
     * Lógica para insertar un zócalo de dos líneas.
     * (Actualmente no implementado)
     */
    insertarDosLineas() {
        // Implementación del método insertarDosLineas
    }
}

module.exports = ZocaloDosLineas;