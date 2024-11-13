import React, { useState } from 'react';
import VistaZocaloTitulo from '../../Presentación/InterfazUsuario/VistaZocaloTitulo';

/**
 * Componente GestionFila
 * Este componente maneja la gestión de filas en la escaleta, incluyendo la adición de zócalos y placas.
 * @param {object} element - Elemento de la fila.
 * @param {function} agregarZocalo - Función para agregar un zócalo.
 * @param {function} agregarPlaca - Función para agregar una placa.
 * @param {function} onEditClick - Función para manejar el clic en el botón de editar.
 * @param {function} duplicarFila - Función para duplicar una fila.
 * @param {function} addElement - Función para agregar un nuevo elemento.
 * @param {function} onViewClick - Función para manejar el clic en el botón de vista previa.
 */
const GestionFila = ({ element, agregarZocalo, agregarPlaca, onEditClick, duplicarFila, addElement, onViewClick }) => {
  const [showVistaZocaloTitulo, setShowVistaZocaloTitulo] = useState(false);

  /**
   * handleZocaloClick
   * Función para manejar el clic en el botón de zócalo.
   * @param {number} id - ID del zócalo.
   * @param {string} tipo - Tipo de zócalo.
   */
  const handleZocaloClick = (id, tipo) => {
    console.log(`agregarZocalo llamado con id: ${id}, tipo: ${tipo}`);
    agregarZocalo(id, tipo);
    onEditClick(element);
    setShowVistaZocaloTitulo(true); // Mostrar el menú con VistaZocaloTitulo
  };

  /**
   * handleCloseVistaZocaloTitulo
   * Función para cerrar el componente VistaZocaloTitulo.
   */
  const handleCloseVistaZocaloTitulo = () => {
    setShowVistaZocaloTitulo(false);
  };

  return (
    <div className="zcpl-container">
      {element.type === 'Entrada' && (
        <>
          <div className="zcpl-section">
            <h3>Zócalos</h3>
            <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, 'TITULOS')}>TITULOS</button>
            <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, 'CATASTROFE')}>CATASTROFE</button>
            <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, '2 LINEAS')}>2 LINEAS</button>
            <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, 'VENTAS')}>VENTAS</button>
            <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, 'TEXTUALES')}>TEXTUALES</button>
          </div>
          {showVistaZocaloTitulo && (
            <div className="vista-zocalo-titulo-container">
              <VistaZocaloTitulo onClose={handleCloseVistaZocaloTitulo} datos={element} />
            </div>
          )}
          <div className="zcpl-section">
            <h3>Placas</h3>
            <button className="zcpl-btn placas-btn" onClick={() => handleZocaloClick(element.id, 'EQUIPOS')}>EQUIPOS</button>
            <button className="zcpl-btn placas-btn" onClick={() => handleZocaloClick(element.id, 'DATOS EQUIPOS')}>DATOS EQUIPOS</button>
            <button className="zcpl-btn placas-btn" onClick={() => handleZocaloClick(element.id, 'COMPARATIVA')}>COMPARATIVA</button>
            <button className="zcpl-btn placas-btn" onClick={() => handleZocaloClick(element.id, 'DATOS')}>DATOS</button>
            <button className="zcpl-btn placas-btn" onClick={() => handleZocaloClick(element.id, 'PVENTA X 3')}>PVENTA X 3</button>
            <button className="zcpl-btn placas-btn" onClick={() => handleZocaloClick(element.id, 'PVENTA X 1')}>PVENTA X 1</button>
          </div>
        </>
      )}
      {(element.type === 'VTR Nota' || element.type === 'VTR Full') && (
        <div className="zcpl-section">
          <h3>Zócalos</h3>
          <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, 'CATASTROFE')}>CATASTROFE</button>
          <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, '2 LINEAS')}>2 LINEAS</button>
        </div>
      )}
      {element.type === 'Titulo' && (
        <div className="zcpl-section">
          <h3>Zócalos</h3>
          <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, 'TITULOS')}>TITULOS</button>
          {showVistaZocaloTitulo && (
            <div className="vista-zocalo-titulo-container">
              <VistaZocaloTitulo onClose={handleCloseVistaZocaloTitulo} datos={element} />
            </div>
          )}
        </div>
      )}
      {element.type === 'Voz en Off' && (
        <div className="zcpl-section">
          <h3>Zócalos</h3>
          <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, 'CATASTROFE')}>CATASTROFE</button>
          <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, '2 LINEAS')}>2 LINEAS</button>
          <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, 'VENTAS')}>VENTAS</button>
          <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, 'TEXTUALES')}>TEXTUALES</button>
        </div>
      )}
      {element.type === 'Placa' && (
        <div className="zcpl-section">
          <h3>Placas</h3>
          <button className="zcpl-btn placas-btn" onClick={() => handleZocaloClick(element.id, 'EQUIPOS')}>EQUIPOS</button>
          <button className="zcpl-btn placas-btn" onClick={() => handleZocaloClick(element.id, 'DATOS EQUIPOS')}>DATOS EQUIPOS</button>
          <button className="zcpl-btn placas-btn" onClick={() => handleZocaloClick(element.id, 'COMPARATIVA')}>COMPARATIVA</button>
          <button className="zcpl-btn placas-btn" onClick={() => handleZocaloClick(element.id, 'DATOS')}>DATOS</button>
          <button className="zcpl-btn placas-btn" onClick={() => handleZocaloClick(element.id, 'PVENTA X 3')}>PVENTA X 3</button>
          <button className="zcpl-btn placas-btn" onClick={() => handleZocaloClick(element.id, 'PVENTA X 1')}>PVENTA X 1</button>
        </div>
      )}
      {element.type === 'Reel' && (
        <div className="zcpl-section">
          <h3>Zócalos</h3>
          <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, 'CATASTROFE')}>CATASTROFE</button>
          <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, '2 LINEAS')}>2 LINEAS</button>
          <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, 'VENTAS')}>VENTAS</button>
          <button className="zcpl-btn zocalos-btn" onClick={() => handleZocaloClick(element.id, 'TEXTUALES')}>TEXTUALES</button>
        </div>
      )}
      {element.type === 'Promocion-Venta' && (
        <div className="zcpl-section">
          <h3>No hay Zócalos ni Placas disponibles</h3>
        </div>
      )}
      {element.type === 'Cortina' && (
        <div className="zcpl-section">
          <h3>No hay Zócalos ni Placas disponibles</h3>
        </div>
      )}
      {element.type === 'Tiempo de Corte' && (
        <div className="zcpl-section">
          <h3>No hay Zócalos ni Placas disponibles</h3>
        </div>
      )}
      {element.type === 'Bloque' && (
        <div className="zcpl-section">
          <h3>Acciones</h3>
          <button className="zcpl-btn" onClick={() => duplicarFila(element.id)}>DUPLICAR</button>
          <button className="zcpl-btn" onClick={addElement}>+</button>
        </div>
      )}
      {element.type === 'Total' && (
        <div className="zcpl-section">
          <h3>Acciones</h3>
          <button className="zcpl-btn" onClick={() => duplicarFila(element.id)}>DUPLICAR</button>
        </div>
      )}
    </div>
  );
};

export default GestionFila;