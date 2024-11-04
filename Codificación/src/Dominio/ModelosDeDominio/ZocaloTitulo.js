const Zocalo = require('./Zocalo');

class ZocaloTitulo extends Zocalo {
  constructor() {
    super();
    this.solapa = '';
    this.titulo = '';
    this.tipo = 'TITULOS';
  }

  insertarTitulo(solapa, titulo) {
    this.solapa = solapa;
    this.titulo = titulo;
  }
}

module.exports = ZocaloTitulo;