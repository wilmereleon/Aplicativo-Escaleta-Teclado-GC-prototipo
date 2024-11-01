import Fila from './Fila';

class FilaTiempoDeCorte extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Tiempo de Corte', name, startTime, duration, elapsedTime);
  }

  mostrarOpciones() {
    return [];
  }
}

export default FilaTiempoDeCorte;