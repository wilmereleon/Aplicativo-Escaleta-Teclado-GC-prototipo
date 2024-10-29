const Aplicacion = require('../../Negocio/Servicios/Aplicacion');

class InterfazUsuario {
    constructor(aplicacion) {
        this.aplicacion = aplicacion;
    }

    mostrarInterfaz() {
        this.aplicacion.abrir();
    }
}

module.exports = InterfazUsuario;