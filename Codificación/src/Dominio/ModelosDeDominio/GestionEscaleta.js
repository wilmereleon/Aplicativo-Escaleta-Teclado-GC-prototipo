// src/dominio/ModelosDeDominio/GestionEscaleta.js
const IEscaleta = require('../Interfaces/IEscaleta');

/**
 * Clase GestionEscaleta
 * Esta clase maneja la gestión de elementos en una escaleta.
 */
class GestionEscaleta {
    /**
     * Constructor de la clase GestionEscaleta
     * Inicializa la lista de elementos de la escaleta.
     */
    constructor() {
      this.elements = [
        { id: 1, title: 'Elemento 1', description: 'Descripción del elemento 1' },
        { id: 2, title: 'Elemento 2', description: 'Descripción del elemento 2' },
        { id: 3, title: 'Elemento 3', description: 'Descripción del elemento 3' },
      ];
    }
  
    /**
     * Método getElements
     * Devuelve la lista de elementos de la escaleta.
     * @returns {Array} - Lista de elementos.
     */
    getElements() {
      return this.elements;
    }
  
    /**
     * Método addElement
     * Agrega un nuevo elemento a la escaleta.
     * @returns {Array} - Lista actualizada de elementos.
     */
    addElement() {
      const newId = this.elements.length ? this.elements[this.elements.length - 1].id + 1 : 1;
      const newElement = { id: newId, title: `Elemento ${newId}`, description: `Descripción del elemento ${newId}` };
      this.elements.push(newElement);
      return this.elements;
    }
  
    /**
     * Método removeElement
     * Elimina un elemento de la escaleta por su ID.
     * @param {number} id - ID del elemento a eliminar.
     * @returns {Array} - Lista actualizada de elementos.
     */
    removeElement(id) {
      this.elements = this.elements.filter(element => element.id !== id);
      return this.elements;
    }
  
    /**
     * Método editarEscaleta
     * Método para editar la escaleta.
     * (Actualmente no implementado)
     */
    editarEscaleta() {
      // Implementación del método editarEscaleta
    }
  }
  
  export default GestionEscaleta;