const Fila = require('./Fila');
const SAL = require('../../Persistencia/SistemaAlmacenamientoLocal/SAL');

/**
 * Clase Escaleta
 * Esta clase representa una escaleta en la aplicación, que contiene múltiples filas y maneja el tiempo total y restante.
 */
class Escaleta {
    /**
     * Constructor de la clase Escaleta
     * Inicializa las propiedades de la escaleta.
     */
    constructor() {
        this.filas = []; // Arreglo para almacenar las filas de la escaleta
        this.tiempoTotal = 0; // Tiempo total de la escaleta
        this.tiempoRestante = 0; // Tiempo restante de la escaleta
    }

    /**
     * Método agregarFila
     * Método para agregar una nueva fila a la escaleta.
     * @param {object} fila - Objeto que representa la fila a agregar.
     */
    agregarFila(fila) {
        this.filas.push(fila);
        this.guardarFilasEnExcel();
    }

    /**
     * Método guardarFilasEnExcel
     * Método para guardar las filas en el archivo Excel.
     */
    async guardarFilasEnExcel() {
        try {
            await SAL.almacenarPaginas(this.filas);
            console.log('Filas almacenadas correctamente en el Excel');
        } catch (error) {
            console.error('Error al almacenar las filas en el Excel:', error);
        }
    }

    /**
     * Método calcularTiempoRestante
     * Método para calcular el tiempo restante de la escaleta.
     * (Actualmente no implementado)
     */
    calcularTiempoRestante() {}

    /**
     * Método asignarNombreFila
     * Método para asignar un nombre a una fila de la escaleta.
     * (Actualmente no implementado)
     */
    asignarNombreFila() {}

    /**
     * Método asignarTipoFila
     * Método para asignar un tipo a una fila de la escaleta.
     * (Actualmente no implementado)
     */
    asignarTipoFila() {}

    /**
     * Método asignarTiempoTotal
     * Método para asignar el tiempo total de la escaleta.
     * (Actualmente no implementado)
     */
    asignarTiempoTotal() {}

    /**
     * Método mostrarTiempoRestante
     * Método para mostrar el tiempo restante de la escaleta.
     * (Actualmente no implementado)
     */
    mostrarTiempoRestante() {}

    /**
     * Método asignarTiempoBloque
     * Método para asignar el tiempo de un bloque en la escaleta.
     * (Actualmente no implementado)
     */
    asignarTiempoBloque() {}

    /**
     * Método crearFila
     * Método para crear una nueva fila en la escaleta.
     * (Actualmente no implementado)
     */
    crearFila() {}
}

module.exports = Escaleta;