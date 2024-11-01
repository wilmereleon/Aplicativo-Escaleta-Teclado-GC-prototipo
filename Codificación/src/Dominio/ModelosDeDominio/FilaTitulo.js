import Fila from './Fila';

class FilaTitulo extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Titulo', name, startTime, duration, elapsedTime);
  }

  mostrarOpciones() {
    return ['TITULO'];
  }
}

export default FilaTitulo;