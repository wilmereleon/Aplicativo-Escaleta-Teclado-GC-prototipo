/**
 * Clase Campo
 * Esta clase representa un campo de texto en la aplicación.
 */
class Campo {
    /**
     * Constructor de la clase Campo
     * Inicializa las propiedades del campo de texto.
     */
    constructor() {
        this.nombre = ''; // Nombre del campo
        this.maxCaracteres = 0; // Número máximo de caracteres permitidos en el campo
        this.texto = ''; // Texto contenido en el campo
    }

    /**
     * Método apiñarTexto
     * Método para manejar el texto en el campo.
     * (Actualmente no implementado)
     */
    apiñarTexto() {}
}

module.exports = Campo;