class Fila {
  constructor(id, type, name, startTime, duration, elapsedTime) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.startTime = startTime;
    this.duration = duration;
    this.elapsedTime = elapsedTime;
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

export { Fila, FilaEntrada, FilaVTRNota, FilaVTRFull, FilaPlaca };