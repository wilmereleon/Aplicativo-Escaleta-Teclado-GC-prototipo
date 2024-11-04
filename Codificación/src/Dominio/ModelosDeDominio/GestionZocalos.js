const IZocalos = require('../Interfaces/IZocalos');
const ZocaloCatastrofe = require('./ZocaloCatastrofe');
const ZocaloDosLineas = require('./ZocaloDosLineas');
const ZocaloTextuales = require('./ZocaloTextuales');
const ZocaloTitulo = require('./ZocaloTitulo');
const ZocaloVentas = require('./ZocaloVentas');

class GestionZocalos {
    insertarZocalo(tipo, datos) {
        let nuevoZocalo;
        switch (tipo) {
            case 'CATASTROFE':
                nuevoZocalo = new ZocaloCatastrofe();
                nuevoZocalo.insertarCatastrofe(datos.solapa, datos.texto);
                break;
            case '2 LINEAS':
                nuevoZocalo = new ZocaloDosLineas();
                nuevoZocalo.insertarDosLineas(datos.solapa, datos.linea1, datos.linea2);
                break;
            case 'TEXTUALES':
                nuevoZocalo = new ZocaloTextuales();
                nuevoZocalo.insertarTextuales(datos.textual1, datos.textual2, datos.textual3, datos.textual4, datos.icono);
                break;
            case 'TITULOS':
                nuevoZocalo = new ZocaloTitulo();
                nuevoZocalo.insertarTitulo(datos.solapa, datos.titulo);
                break;
            case 'VENTAS':
                nuevoZocalo = new ZocaloVentas();
                nuevoZocalo.insertarVentas(datos.dia, datos.textoArriba, datos.textoAbajo, datos.horaCanal);
                break;
            default:
                throw new Error(`Tipo de zócalo no soportado: ${tipo}`);
        }
        return nuevoZocalo;
    }
}

module.exports = GestionZocalos;