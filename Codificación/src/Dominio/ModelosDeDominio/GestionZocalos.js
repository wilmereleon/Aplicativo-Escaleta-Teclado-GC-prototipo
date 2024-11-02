const IZocalos = require('../Interfaces/IZocalos');
const ZocaloCatastrofe = require('./ZocaloCatastrofe');
const ZocaloDosLineas = require('./ZocaloDosLineas');
const ZocaloTextuales = require('./ZocaloTextuales');
const ZocaloTitulo = require('./ZocaloTitulo');
const ZocaloVentas = require('./ZocaloVentas');

class GestionZocalos {
    insertarZocalo(tipo) {
        let nuevoZocalo;
        switch (tipo) {
            case 'CATASTROFE':
                nuevoZocalo = new ZocaloCatastrofe();
                break;
            case '2 LINEAS':
                nuevoZocalo = new ZocaloDosLineas();
                break;
            case 'TEXTUALES':
                nuevoZocalo = new ZocaloTextuales();
                break;
            case 'TITULOS':
                nuevoZocalo = new ZocaloTitulo();
                break;
            case 'VENTAS':
                nuevoZocalo = new ZocaloVentas();
                break;
            default:
                throw new Error(`Tipo de zócalo no soportado: ${tipo}`);
        }
        return nuevoZocalo;
    }
}

module.exports = GestionZocalos;