const Placa = require('./Placa');

class Equipo extends Placa {
    constructor() {
        super();
        this.posi = [];
        this.nombres = [];
        this.cabecera = [];
        this.textura = '';
        this.tipoTextura = '';
        this.colores = '';
    }

    insertarDatos() {}
}

module.exports = Equipo;