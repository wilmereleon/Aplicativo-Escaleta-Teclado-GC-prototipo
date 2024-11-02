const Zocalo = require('./Zocalo');

class ZocaloCatastrofe extends Zocalo {
    constructor() {
        super();
        this.solapa = '';
        this.texto = '';
        this.tipo = 'CATASTROFE';
    }

    insertarCatastrofe() {
        // Lógica para insertar un zócalo de tipo catástrofe
    }
}

module.exports = ZocaloCatastrofe;