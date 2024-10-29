const Placa = require('./Placa');

class PventasX1 extends Placa {
    constructor() {
        super();
        this.logo = '';
        this.texto = [];
        this.info = [];
        this.tipo = 'PVENTA X 1';
    }

    insertarDatos() {}
}

module.exports = PventasX1;