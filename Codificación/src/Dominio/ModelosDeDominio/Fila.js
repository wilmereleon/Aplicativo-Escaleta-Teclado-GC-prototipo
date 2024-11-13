/**
 * Clase Fila
 * Esta clase representa una fila genérica en la escaleta.
 */
class Fila {
  /**
   * Constructor de la clase Fila
   * Inicializa las propiedades de la fila.
   * @param {string} id - ID de la fila.
   * @param {string} type - Tipo de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, type, name, startTime, duration, elapsedTime) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.startTime = startTime;
    this.duration = duration;
    this.elapsedTime = elapsedTime;
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return [];
  }
}

/**
 * Clase FilaEntrada
 * Representa una fila de tipo 'Entrada' en la escaleta.
 */
class FilaEntrada extends Fila {
  /**
   * Constructor de la clase FilaEntrada
   * Inicializa las propiedades de la fila de entrada.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Entrada', name, startTime, duration, elapsedTime);
  }
}

/**
 * Clase FilaVTRNota
 * Representa una fila de tipo 'VTR Nota' en la escaleta.
 */
class FilaVTRNota extends Fila {
  /**
   * Constructor de la clase FilaVTRNota
   * Inicializa las propiedades de la fila VTR Nota.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'VTR Nota', name, startTime, duration, elapsedTime);
  }
}

/**
 * Clase FilaVTRFull
 * Representa una fila de tipo 'VTR Full' en la escaleta.
 */
class FilaVTRFull extends Fila {
  /**
   * Constructor de la clase FilaVTRFull
   * Inicializa las propiedades de la fila VTR Full.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'VTR Full', name, startTime, duration, elapsedTime);
  }
}

/**
 * Clase FilaPlaca
 * Representa una fila de tipo 'Placa' en la escaleta.
 */
class FilaPlaca extends Fila {
  /**
   * Constructor de la clase FilaPlaca
   * Inicializa las propiedades de la fila Placa.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Placa', name, startTime, duration, elapsedTime);
  }
}

/**
 * Clase FilaTitulo
 * Representa una fila de tipo 'Titulo' en la escaleta.
 */
class FilaTitulo extends Fila {
  /**
   * Constructor de la clase FilaTitulo
   * Inicializa las propiedades de la fila Titulo.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Titulo', name, startTime, duration, elapsedTime);
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila Titulo.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return ['TITULO'];
  }
}

/**
 * Clase FilaVozEnOff
 * Representa una fila de tipo 'Voz en Off' en la escaleta.
 */
class FilaVozEnOff extends Fila {
  /**
   * Constructor de la clase FilaVozEnOff
   * Inicializa las propiedades de la fila Voz en Off.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Voz en Off', name, startTime, duration, elapsedTime);
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila Voz en Off.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return ['CATASTROFE', '2 LINEAS', 'VENTAS', 'TEXTUALES'];
  }
}

/**
 * Clase FilaCortina
 * Representa una fila de tipo 'Cortina' en la escaleta.
 */
class FilaCortina extends Fila {
  /**
   * Constructor de la clase FilaCortina
   * Inicializa las propiedades de la fila Cortina.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Cortina', name, startTime, duration, elapsedTime);
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila Cortina.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return [];
  }
}

/**
 * Clase FilaReel
 * Representa una fila de tipo 'Reel' en la escaleta.
 */
class FilaReel extends Fila {
  /**
   * Constructor de la clase FilaReel
   * Inicializa las propiedades de la fila Reel.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Reel', name, startTime, duration, elapsedTime);
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila Reel.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return ['CATASTROFE', '2 LINEAS', 'VENTAS', 'TEXTUALES'];
  }
}

/**
 * Clase FilaPromocionVenta
 * Representa una fila de tipo 'Promocion-Venta' en la escaleta.
 */
class FilaPromocionVenta extends Fila {
  /**
   * Constructor de la clase FilaPromocionVenta
   * Inicializa las propiedades de la fila Promocion-Venta.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Promocion-Venta', name, startTime, duration, elapsedTime);
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila Promocion-Venta.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return [];
  }
}

/**
 * Clase FilaTiempoDeCorte
 * Representa una fila de tipo 'Tiempo de Corte' en la escaleta.
 */
class FilaTiempoDeCorte extends Fila {
  /**
   * Constructor de la clase FilaTiempoDeCorte
   * Inicializa las propiedades de la fila Tiempo de Corte.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Tiempo de Corte', name, startTime, duration, elapsedTime);
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila Tiempo de Corte.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return [];
  }
}

/**
 * Clase FilaBloque
 * Representa una fila de tipo 'Bloque' en la escaleta.
 */
class FilaBloque extends Fila {
  /**
   * Constructor de la clase FilaBloque
   * Inicializa las propiedades de la fila Bloque.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Bloque', name, startTime, duration, elapsedTime);
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila Bloque.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return ['DUPLICAR', '+'];
  }

  /**
   * Método getColor
   * Devuelve el color asociado a la fila Bloque.
   * @returns {string} - Color de la fila Bloque.
   */
  getColor() {
    return '#69778A';
  }
}

/**
 * Clase FilaTotal
 * Representa una fila de tipo 'Total' en la escaleta.
 */
class FilaTotal extends Fila {
  /**
   * Constructor de la clase FilaTotal
   * Inicializa las propiedades de la fila Total.
   * @param {string} id - ID de la fila.
   * @param {string} name - Nombre de la fila.
   * @param {string} startTime - Tiempo de inicio de la fila.
   * @param {string} duration - Duración de la fila.
   * @param {string} elapsedTime - Tiempo transcurrido de la fila.
   */
  constructor(id, name, startTime, duration, elapsedTime) {
    super(id, 'Total', name, startTime, duration, elapsedTime);
  }

  /**
   * Método mostrarOpciones
   * Devuelve un arreglo de opciones disponibles para la fila Total.
   * @returns {Array} - Arreglo de opciones.
   */
  mostrarOpciones() {
    return ['DUPLICAR'];
  }

  /**
   * Método getColor
   * Devuelve el color asociado a la fila Total.
   * @returns {string} - Color de la fila Total.
   */
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