const Placa = require('./Placa');

class DatosEquipos extends Placa {
    constructor() {
        super();
        this.num = [];
        this.nombres = [];
        this.pais = [];
        this.equipo = [];
        this.tiempo = [];
        this.colores = '';
        this.tipo = 'DATOS EQUIPOS';
    }

    insertarDatos() {}
}

module.exports = DatosEquipos;