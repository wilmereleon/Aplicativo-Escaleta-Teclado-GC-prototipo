class Fila {
  constructor(id, type, name, startTime, duration, elapsedTime) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.startTime = startTime;
    this.duration = duration;
    this.elapsedTime = elapsedTime;
  }

  mostrarOpciones() {
    return [];
  }
}

class FilaEntrada extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Entrada', name, startTime, duration, elapsedTime);
  }
}

class FilaVTRNota extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'VTR Nota', name, startTime, duration, elapsedTime);
  }
}

class FilaVTRFull extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'VTR Full', name, startTime, duration, elapsedTime);
  }
}

class FilaPlaca extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Placa', name, startTime, duration, elapsedTime);
  }
}

class FilaTitulo extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Titulo', name, startTime, duration, elapsedTime);
  }

  mostrarOpciones() {
    return ['TITULO'];
  }
}

class FilaVozEnOff extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Voz en Off', name, startTime, duration, elapsedTime);
  }

  mostrarOpciones() {
    return ['CATASTROFE', '2 LINEAS', 'VENTAS', 'TEXTUALES'];
  }
}

class FilaCortina extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Cortina', name, startTime, duration, elapsedTime);
  }

  mostrarOpciones() {
    return [];
  }
}

class FilaReel extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Reel', name, startTime, duration, elapsedTime);
  }

  mostrarOpciones() {
    return ['CATASTROFE', '2 LINEAS', 'VENTAS', 'TEXTUALES'];
  }
}

class FilaPromocionVenta extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Promocion-Venta', name, startTime, duration, elapsedTime);
  }

  mostrarOpciones() {
    return [];
  }
}

class FilaTiempoDeCorte extends Fila {
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Tiempo de Corte', name, startTime, duration, elapsedTime);
  }

  mostrarOpciones() {
    return [];
  }
}

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

export {
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
};