import Fila from './Fila';

class FilaTotal extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Total', name, startTime, duration, elapsedTime);
  }

  mostrarOpciones() {
    return ['DUPLICAR'];
  }

  getColor() {
    return '#69778A';
  }
}

export default FilaTotal;