const Usuario = require('./Usuario');
const Placa = require('../../Datos/Repositorios/Placa');

class AsistenteProduccion extends Usuario {
    crearCelda() {}
    insertarZocalo() {}
    insertarPlaca() {}
    accederCelda() {}
    crearCeldaEspecifica() {}
    insertarZocaloTitulo() {}
    insertarZocaloCatastrofe() {}
    insertarZocaloDosLineas() {}
    insertarZocaloVentas() {}
    insertarZocaloTextuales() {}
    crearFilaEntrada() {}
    crearFilaVTRNota() {}
    crearFilaVTRFull() {}
    crearFilaPlaca() {}
}

module.exports = AsistenteProduccion;