const Zocalo = require('./Zocalo');

class ZocaloCatastrofe extends Zocalo {
    constructor() {
        super();
        this.solapa = '';
        this.texto = '';
        this.tipo = 'CATASTROFE';
    }

    insertarCatastrofe() {}
}

module.exports = ZocaloCatastrofe;