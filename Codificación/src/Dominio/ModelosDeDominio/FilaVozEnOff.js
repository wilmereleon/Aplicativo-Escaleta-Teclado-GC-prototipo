import Fila from './Fila';

class FilaVozEnOff extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Voz en Off', name, startTime, duration, elapsedTime);
  }

  mostrarOpciones() {
    return ['CATASTROFE', '2 LINEAS', 'VENTAS', 'TEXTUALES'];
  }
}

export default FilaVozEnOff;