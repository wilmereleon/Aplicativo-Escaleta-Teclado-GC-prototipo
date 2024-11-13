const Placa = require('./Placa');

/**
 * Clase DatosEquipos
 * Esta clase representa un tipo de zócalo de datos de equipos en la aplicación.
 * Extiende la clase Placa.
 */
class DatosEquipos extends Placa {
    /**
     * Constructor de la clase DatosEquipos
     * Inicializa las propiedades del zócalo de datos de equipos.
     */
    constructor() {
        super(); // Llama al constructor de la clase base Placa
        this.num = []; // Números asociados a los equipos
        this.nombres = []; // Nombres de los equipos
        this.pais = []; // Países de los equipos
        this.equipo = []; // Nombres de los equipos
        this.tiempo = []; // Tiempos asociados a los equipos
        this.colores = ''; // Colores asociados a los equipos
        this.tipo = 'DATOS EQUIPOS'; // Tipo de zócalo
    }

    /**
     * Método insertarDatos
     * Método para insertar datos en el zócalo de datos de equipos.
     * (Actualmente no implementado)
     */
    insertarDatos() {}
}

module.exports = DatosEquipos;