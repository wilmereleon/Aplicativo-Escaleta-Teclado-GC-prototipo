const Escaleta = require('./Escaleta');
const SAL = require('../../Persistencia/SistemaAlmacenamientoLocal/SAL');

class Plantilla {
    constructor() {
        this.tipo = '';
        this.escaleta = null;
        this.sal = new SAL();
    }

    cargarDatos() {
        const datos = this.sal.recuperarDatos();
        if (datos) {
            this.tipo = datos.tipo;
            this.escaleta = datos.escaleta;
        }
    }

    guardarDatos() {
        const datos = {
            tipo: this.tipo,
            escaleta: this.escaleta,
        };
        this.sal.almacenarDatos(datos);
    }
}

module.exports = Plantilla;