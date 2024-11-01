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

class AsistenteProduccion {
  constructor() {
    this.elements = [];
  }

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

  insertarZocaloTitulo(id) {
    // Implementación para insertar Zócalo Titulo
  }

  insertarZocaloCatastrofe(id) {
    // Implementación para insertar Zócalo Catastrofe
  }

  insertarZocaloDosLineas(id) {
    // Implementación para insertar Zócalo Dos Lineas
  }

  insertarZocaloVentas(id) {
    // Implementación para insertar Zócalo Ventas
  }

  insertarZocaloTextuales(id) {
    // Implementación para insertar Zócalo Textuales
  }

  insertarPlacaEquipos(id) {
    // Implementación para insertar Placa Equipos
  }

  insertarPlacaDatosEquipos(id) {
    // Implementación para insertar Placa Datos Equipos
  }

  insertarPlacaComparativa(id) {
    // Implementación para insertar Placa Comparativa
  }

  insertarPlacaDatos(id) {
    // Implementación para insertar Placa Datos
  }

  insertarPlacaPventaX3(id) {
    // Implementación para insertar Placa Pventa X3
  }

  insertarPlacaPventaX1(id) {
    // Implementación para insertar Placa Pventa X1
  }
}

export default AsistenteProduccion;