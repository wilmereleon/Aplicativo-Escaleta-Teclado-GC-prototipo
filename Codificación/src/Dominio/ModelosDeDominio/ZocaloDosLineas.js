const Zocalo = require('./Zocalo');

class ZocaloDosLineas extends Zocalo {
    constructor() {
        super();
        this.solapa = '';
        this.linea1 = '';
        this.linea2 = '';
        this.tipo = '2 LINEAS';
    }

    insertarDosLineas() {}
}

module.exports = ZocaloDosLineas;