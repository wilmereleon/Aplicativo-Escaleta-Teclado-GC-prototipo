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
import { Fila, FilaEntrada, FilaVTRNota, FilaVTRFull, FilaPlaca } from '../../Dominio/ModelosDeDominio/Fila';

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
      default:
        newElement = new Fila(id, type, name, startTime, duration, elapsedTime);
        break;
    }
    this.elements.push(newElement);
    return this.elements;
  }

  insertarZocalo(id, zocalo) {
    const element = this.elements.find(el => el.id === id);
    if (element) {
      element.zocalos.push(zocalo);
    }
    return this.elements;
  }

  insertarPlaca(id, placa) {
    const element = this.elements.find(el => el.id === id);
    if (element) {
      element.placas.push(placa);
    }
    return this.elements;
  }

  // Métodos específicos para insertar diferentes tipos de zócalos
  insertarZocaloTitulo(id) {
    return this.insertarZocalo(id, new ZocaloTitulo());
  }

  insertarZocaloCatastrofe(id) {
    return this.insertarZocalo(id, new ZocaloCatastrofe());
  }

  insertarZocaloDosLineas(id) {
    return this.insertarZocalo(id, new ZocaloDosLineas());
  }

  insertarZocaloVentas(id) {
    return this.insertarZocalo(id, new ZocaloVentas());
  }

  insertarZocaloTextuales(id) {
    return this.insertarZocalo(id, new ZocaloTextuales());
  }

  // Métodos específicos para insertar diferentes tipos de placas
  insertarPlacaEquipos(id) {
    return this.insertarPlaca(id, new Equipo());
  }

  insertarPlacaDatosEquipos(id) {
    return this.insertarPlaca(id, new DatosEquipos());
  }

  insertarPlacaComparativa(id) {
    return this.insertarPlaca(id, new Comparativa());
  }

  insertarPlacaDatos(id) {
    return this.insertarPlaca(id, new Datos());
  }

  insertarPlacaPventaX3(id) {
    return this.insertarPlaca(id, new PventasX3());
  }

  insertarPlacaPventaX1(id) {
    return this.insertarPlaca(id, new PventasX1());
  }
}

export default AsistenteProduccion;