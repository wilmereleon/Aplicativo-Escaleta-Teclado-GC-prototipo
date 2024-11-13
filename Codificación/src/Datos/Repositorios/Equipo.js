const Placa = require('./Placa');

/**
 * Clase Equipo
 * Esta clase representa un tipo de zócalo de equipo en la aplicación.
 * Extiende la clase Placa.
 */
class Equipo extends Placa {
    /**
     * Constructor de la clase Equipo
     * Inicializa las propiedades del zócalo de equipo.
     */
    constructor() {
        super(); // Llama al constructor de la clase base Placa
        this.posi = []; // Posiciones de los equipos
        this.nombres = []; // Nombres de los equipos
        this.cabecera = []; // Cabeceras de los equipos
        this.textura = ''; // Textura asociada al equipo
        this.tipoTextura = ''; // Tipo de textura asociada al equipo
        this.colores = ''; // Colores asociados al equipo
        this.tipo = 'EQUIPOS'; // Tipo de zócalo
    }

    /**
     * Método insertarDatos
     * Método para insertar datos en el zócalo de equipo.
     * (Actualmente no implementado)
     */
    insertarDatos() {}
}

module.exports = Equipo;