import ZocaloTitulo from '../../Dominio/ModelosDeDominio/ZocaloTitulo';
import ZocaloCatastrofe from '../../Dominio/ModelosDeDominio/ZocaloCatastrofe';
import ZocaloDosLineas from '../../Dominio/ModelosDeDominio/ZocaloDosLineas';
import ZocaloVentas from '../../Dominio/ModelosDeDominio/ZocaloVentas';
import ZocaloTextuales from '../../Dominio/ModelosDeDominio/ZocaloTextuales';
import Equipo from '../../Datos/Repositorios/Equipo';
import DatosEquipos from '../../Datos/Repositorios/DatosEquipos';
import Comparativa from '../../Datos/Repositorios/Comparativa';
import Datos from '../../Datos/Repositorios/Datos';
import PventasX3 from '../../Datos/Repositorios/PventasX3';
import PventasX1 from '../../Datos/Repositorios/PventasX1';
import {
  Fila,
  FilaEntrada,
  FilaVTRNota,
  FilaVTRFull,
  FilaPlaca,
  FilaTitulo,
  FilaVozEnOff,
  FilaCortina,
  FilaReel,
  FilaPromocionVenta,
  FilaTiempoDeCorte,
  FilaBloque,
  FilaTotal
} from '../../Dominio/ModelosDeDominio/Fila';

/**
 * Clase AsistenteProduccion
 * Esta clase maneja la creación y gestión de celdas, zócalos y placas en la aplicación.
 */
class AsistenteProduccion {
  /**
   * Constructor de la clase AsistenteProduccion
   * Inicializa la lista de elementos.
   */
  constructor() {
    this.elements = []; // Arreglo para almacenar los elementos
  }

  /**
   * Método crearCelda
   * Crea una nueva celda basada en el tipo especificado.
   * @param {string} id - ID de la celda.
   * @param {string} type - Tipo de la celda.
   * @param {string} name - Nombre de la celda.
   * @param {string} startTime - Tiempo de inicio de la celda.
   * @param {string} duration - Duración de la celda.
   * @param {string} elapsedTime - Tiempo transcurrido de la celda.
   * @returns {Array} - Lista actualizada de elementos.
   */
  crearCelda(id, type, name, startTime, duration, elapsedTime) {
    let newElement;
    switch (type) {
      case 'Entrada':
        newElement = new FilaEntrada(id, name, startTime, duration, elapsedTime);
        break;
      case 'VTR Nota':
        newElement = new FilaVTRNota(id, name, startTime, duration, elapsedTime);
        break;
      case 'VTR Full':
        newElement = new FilaVTRFull(id, name, startTime, duration, elapsedTime);
        break;
      case 'Placa':
        newElement = new FilaPlaca(id, name, startTime, duration, elapsedTime);
        break;
      case 'Titulo':
        newElement = new FilaTitulo(id, name, startTime, duration, elapsedTime);
        break;
      case 'Voz en Off':
        newElement = new FilaVozEnOff(id, name, startTime, duration, elapsedTime);
        break;
      case 'Cortina':
        newElement = new FilaCortina(id, name, startTime, duration, elapsedTime);
        break;
      case 'Reel':
        newElement = new FilaReel(id, name, startTime, duration, elapsedTime);
        break;
      case 'Promocion-Venta':
        newElement = new FilaPromocionVenta(id, name, startTime, duration, elapsedTime);
        break;
      case 'Tiempo de Corte':
        newElement = new FilaTiempoDeCorte(id, name, startTime, duration, elapsedTime);
        break;
      case 'Bloque':
        newElement = new FilaBloque(id, name, startTime, duration, elapsedTime);
        break;
      case 'Total':
        newElement = new FilaTotal(id, name, startTime, duration, elapsedTime);
        break;
      default:
        newElement = new Fila(id, type, name, startTime, duration, elapsedTime);
        break;
    }
    this.elements.push(newElement);
    return this.elements;
  }

  /**
   * Método insertarZocaloTitulo
   * Implementación para insertar un zócalo de tipo Titulo.
   * (Actualmente no implementado)
   */
  insertarZocaloTitulo(id) {
    // Implementación para insertar Zócalo Titulo
  }

  /**
   * Método insertarZocaloCatastrofe
   * Implementación para insertar un zócalo de tipo Catastrofe.
   * (Actualmente no implementado)
   */
  insertarZocaloCatastrofe(id) {
    // Implementación para insertar Zócalo Catastrofe
  }

  /**
   * Método insertarZocaloDosLineas
   * Implementación para insertar un zócalo de tipo Dos Lineas.
   * (Actualmente no implementado)
   */
  insertarZocaloDosLineas(id) {
    // Implementación para insertar Zócalo Dos Lineas
  }

  /**
   * Método insertarZocaloVentas
   * Implementación para insertar un zócalo de tipo Ventas.
   * (Actualmente no implementado)
   */
  insertarZocaloVentas(id) {
    // Implementación para insertar Zócalo Ventas
  }

  /**
   * Método insertarZocaloTextuales
   * Implementación para insertar un zócalo de tipo Textuales.
   * (Actualmente no implementado)
   */
  insertarZocaloTextuales(id) {
    // Implementación para insertar Zócalo Textuales
  }

  /**
   * Método insertarPlacaEquipos
   * Implementación para insertar una placa de tipo Equipos.
   * (Actualmente no implementado)
   */
  insertarPlacaEquipos(id) {
    // Implementación para insertar Placa Equipos
  }

  /**
   * Método insertarPlacaDatosEquipos
   * Implementación para insertar una placa de tipo Datos Equipos.
   * (Actualmente no implementado)
   */
  insertarPlacaDatosEquipos(id) {
    // Implementación para insertar Placa Datos Equipos
  }

  /**
   * Método insertarPlacaComparativa
   * Implementación para insertar una placa de tipo Comparativa.
   * (Actualmente no implementado)
   */
  insertarPlacaComparativa(id) {
    // Implementación para insertar Placa Comparativa
  }

  /**
   * Método insertarPlacaDatos
   * Implementación para insertar una placa de tipo Datos.
   * (Actualmente no implementado)
   */
  insertarPlacaDatos(id) {
    // Implementación para insertar Placa Datos
  }

  /**
   * Método insertarPlacaPventaX3
   * Implementación para insertar una placa de tipo Pventa X3.
   * (Actualmente no implementado)
   */
  insertarPlacaPventaX3(id) {
    // Implementación para insertar Placa Pventa X3
  }

  /**
   * Método insertarPlacaPventaX1
   * Implementación para insertar una placa de tipo Pventa X1.
   * (Actualmente no implementado)
   */
  insertarPlacaPventaX1(id) {
    // Implementación para insertar Placa Pventa X1
  }
}

export default AsistenteProduccion;