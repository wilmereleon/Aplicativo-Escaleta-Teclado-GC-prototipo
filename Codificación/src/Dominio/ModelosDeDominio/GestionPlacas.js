const IPlacas = require('../Interfaces/IPlacas');
const PlacaEquipos = require('./PlacaEquipos');
const PlacaDatosEquipos = require('./PlacaDatosEquipos');
const PlacaComparativa = require('./PlacaComparativa');
const PlacaDatos = require('./PlacaDatos');
const PlacaPventaX3 = require('./PlacaPventaX3');
const PlacaPventaX1 = require('./PlacaPventaX1');

/**
 * Clase GestionPlacas
 * Esta clase maneja la gestión de diferentes tipos de placas en la aplicación.
 */
class GestionPlacas {
    /**
     * Método insertarPlaca
     * Inserta una nueva placa basada en el tipo especificado.
     * @param {string} tipo - Tipo de placa a insertar.
     * @returns {object} - Nueva placa creada.
     * @throws {Error} - Si el tipo de placa no es soportado.
     */
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