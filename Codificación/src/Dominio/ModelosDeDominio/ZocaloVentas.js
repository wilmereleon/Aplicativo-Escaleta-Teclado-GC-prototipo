const Zocalo = require('./Zocalo');

class ZocaloVentas extends Zocalo {
    constructor() {
        super();
        this.dia = '';
        this.textoArriba = '';
        this.textoAbajo = '';
        this.horaCanal = '';
        this.tipo = 'VENTAS';
    }

    insertarVentas() {}
}

module.exports = ZocaloVentas;