import React from 'react';

const GestionFila = ({ element, agregarZocalo, agregarPlaca, onEditClick, duplicarFila, addElement, onViewClick }) => {
  const handleZocaloClick = (id, tipo) => {
    console.log(`agregarZocalo llamado con id: ${id}, tipo: ${tipo}`);
    agregarZocalo(id, tipo);
    onEditClick(element);
    onViewClick(element); // Abrir la ventana de vista previa
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