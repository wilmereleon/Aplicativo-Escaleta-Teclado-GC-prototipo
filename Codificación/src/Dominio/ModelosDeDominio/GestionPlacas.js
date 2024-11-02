const IPlacas = require('../Interfaces/IPlacas');
const PlacaEquipos = require('./PlacaEquipos');
const PlacaDatosEquipos = require('./PlacaDatosEquipos');
const PlacaComparativa = require('./PlacaComparativa');
const PlacaDatos = require('./PlacaDatos');
const PlacaPventaX3 = require('./PlacaPventaX3');
const PlacaPventaX1 = require('./PlacaPventaX1');

class GestionPlacas {
    insertarPlaca(tipo) {
        let nuevaPlaca;
        switch (tipo) {
            case 'EQUIPOS':
                nuevaPlaca = new PlacaEquipos();
                break;
            case 'DATOS EQUIPOS':
                nuevaPlaca = new PlacaDatosEquipos();
                break;
            case 'COMPARATIVA':
                nuevaPlaca = new PlacaComparativa();
                break;
            case 'DATOS':
                nuevaPlaca = new PlacaDatos();
                break;
            case 'PVENTA X 3':
                nuevaPlaca = new PlacaPventaX3();
                break;
            case 'PVENTA X 1':
                nuevaPlaca = new PlacaPventaX1();
                break;
            default:
                throw new Error(`Tipo de placa no soportado: ${tipo}`);
        }
        return nuevaPlaca;
    }
}

module.exports = GestionPlacas;