import Fila from './Fila';

class FilaCortina extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Cortina', name, startTime, duration, elapsedTime);
  }

  mostrarOpciones() {
    return [];
  }
}

export default FilaCortina;