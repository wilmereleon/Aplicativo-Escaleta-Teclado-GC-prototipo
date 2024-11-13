const Placa = require('./Placa');

/**
 * Clase PventasX1
 * Esta clase representa un tipo de zócalo de promoción de ventas por 1 en la aplicación.
 * Extiende la clase Placa.
 */
class PventasX1 extends Placa {
    /**
     * Constructor de la clase PventasX1
     * Inicializa las propiedades del zócalo de promoción de ventas por 1.
     */
    constructor() {
        super(); // Llama al constructor de la clase base Placa
        this.logo = ''; // Logo asociado a la promoción de ventas
        this.texto = []; // Texto asociado a la promoción de ventas
        this.info = []; // Información adicional asociada a la promoción de ventas
        this.tipo = 'PVENTA X 1'; // Tipo de zócalo
    }

    /**
     * Método insertarDatos
     * Método para insertar datos en el zócalo de promoción de ventas por 1.
     * (Actualmente no implementado)
     */
    insertarDatos() {}
}

module.exports = PventasX1;