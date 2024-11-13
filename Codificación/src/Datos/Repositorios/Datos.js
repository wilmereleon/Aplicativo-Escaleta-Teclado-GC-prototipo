/**
 * Clase Datos
 * Esta clase representa un tipo de zócalo de datos en la aplicación.
 */
class Datos {
  /**
   * Constructor de la clase Datos
   * Inicializa las propiedades del zócalo de datos.
   */
  constructor() {
    this.tipo = 'DATOS'; // Tipo de zócalo
    this.id = ''; // ID del zócalo
    this.foto1 = ''; // URL de la primera foto
    this.local = []; // Información local asociada al zócalo
    this.titulo = []; // Títulos asociados al zócalo
    this.colores = []; // Colores asociados al zócalo
    this.tituloGeneral = ''; // Título general del zócalo
  }
}

export default Datos;