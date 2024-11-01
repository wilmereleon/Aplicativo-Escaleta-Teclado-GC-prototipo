import Fila from './Fila';

class FilaReel extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Reel', name, startTime, duration, elapsedTime);
  }

  mostrarOpciones() {
    return ['CATASTROFE', '2 LINEAS', 'VENTAS', 'TEXTUALES'];
  }
}

export default FilaReel;