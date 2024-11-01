import Fila from './Fila';

class FilaPromocionVenta extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Promocion-Venta', name, startTime, duration, elapsedTime);
  }

  mostrarOpciones() {
    return [];
  }
}

export default FilaPromocionVenta;