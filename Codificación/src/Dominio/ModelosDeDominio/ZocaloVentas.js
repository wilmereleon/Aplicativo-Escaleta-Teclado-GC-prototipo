const Zocalo = require('./Zocalo');

/**
 * Clase ZocaloVentas
 * Esta clase representa un zócalo de tipo 'VENTAS' en la aplicación.
 * Extiende la clase Zocalo.
 */
class ZocaloVentas extends Zocalo {
    /**
     * Constructor de la clase ZocaloVentas
     * Inicializa las propiedades del zócalo de ventas.
     */
    constructor() {
        super(); // Llama al constructor de la clase base Zocalo
        this.dia = ''; // Día del zócalo de ventas
        this.textoArriba = ''; // Texto superior del zócalo de ventas
        this.textoAbajo = ''; // Texto inferior del zócalo de ventas
        this.horaCanal = ''; // Hora y canal del zócalo de ventas
        this.tipo = 'VENTAS'; // Tipo de zócalo
    }

    /**
     * Método insertarVentas
     * Lógica para insertar un zócalo de ventas.
     * (Actualmente no implementado)
     */
    insertarVentas() {
        // Implementación del método insertarVentas
    }
}

module.exports = ZocaloVentas;