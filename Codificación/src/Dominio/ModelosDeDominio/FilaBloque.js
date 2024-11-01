import Fila from './Fila';

class FilaBloque extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Bloque', name, startTime, duration, elapsedTime);
  }

  mostrarOpciones() {
    return ['DUPLICAR', '+'];
  }

  getColor() {
    return '#69778A';
  }
}

export default FilaBloque;