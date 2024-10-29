const Zocalo = require('./Zocalo');

class ZocaloTextuales extends Zocalo {
    constructor() {
        super();
        this.textual1 = '';
        this.textual2 = '';
        this.textual3 = '';
        this.textual4 = '';
        this.icono = '';
        this.tipo = 'TEXTUALES';
    }

    insertarTextuales() {}
}

module.exports = ZocaloTextuales;