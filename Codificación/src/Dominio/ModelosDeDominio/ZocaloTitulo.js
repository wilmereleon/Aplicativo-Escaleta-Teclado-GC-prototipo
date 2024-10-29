const Zocalo = require('./Zocalo');

class ZocaloTitulo extends Zocalo {
  constructor() {
    super();
    this.solapa = '';
    this.titulo = '';
    this.tipo = 'TITULOS';
  }

  insertarTitulo() {}
}

module.exports = ZocaloTitulo;