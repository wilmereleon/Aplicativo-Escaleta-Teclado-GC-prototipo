import React from 'react';
import { Eye, Plus, Trash2, Download, Copy } from 'lucide-react';

/**
 * Componente GestionAcciones
 * Este componente representa las acciones de gestión disponibles para un elemento en la escaleta.
 * @param {object} element - El elemento de la escaleta.
 * @param {function} toggleZcPl - Función para mostrar u ocultar el componente de zócalos y placas.
 * @param {function} addElement - Función para agregar un nuevo elemento.
 * @param {function} removeElement - Función para eliminar un elemento.
 * @param {function} duplicarFila - Función para duplicar una fila.
 */
const GestionAcciones = ({ element, toggleZcPl, addElement, removeElement, duplicarFila }) => {
  return (
    <div className="actions-container">
      {element.type !== 'Tiempo de Corte' && element.type !== 'Bloque' && element.type !== 'Total' && (
        <>
          <a href="#" className="add-link" onClick={addElement}><Plus /> </a>
          <a href="#" className="zcpl-link" onClick={() => toggleZcPl(element.id)}><Download /> ZcPl</a>
          <a href="#" className="view-link"><Eye /> View</a>
          <a href="#" className="delete-link" onClick={() => removeElement(element.id)}><Trash2 /> </a>
        </>
      )}
      {(element.type === 'Bloque' || element.type === 'Total') && (
        <a href="#" className="duplicate-link" onClick={() => duplicarFila(element.id)}><Copy /> Duplicar</a>
      )}
    </div>
  );
};

export default GestionAcciones;