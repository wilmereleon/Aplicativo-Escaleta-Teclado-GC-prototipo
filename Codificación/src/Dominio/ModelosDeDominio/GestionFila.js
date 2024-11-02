import React from 'react';

const GestionFila = ({ element, agregarZocalo, agregarPlaca, onEditClick }) => {
  return (
    <div className="zcpl-container">
      {element.type === 'Entrada' && (
        <>
          <div className="zcpl-section">
            <h3>Zócalos</h3>
            <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, 'TITULOS')}>TITULOS</button>
            <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, 'CATASTROFE')}>CATASTROFE</button>
            <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, '2 LINEAS')}>2 LINEAS</button>
            <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, 'VENTAS')}>VENTAS</button>
            <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, 'TEXTUALES')}>TEXTUALES</button>
          </div>
          <div className="zcpl-section">
            <h3>Placas</h3>
            <button className="zcpl-btn placas-btn" onClick={() => { agregarPlaca(element.id, 'EQUIPOS'); onEditClick(element); }}>EQUIPOS</button>
            <button className="zcpl-btn placas-btn" onClick={() => { agregarPlaca(element.id, 'DATOS EQUIPOS'); onEditClick(element); }}>DATOS EQUIPOS</button>
            <button className="zcpl-btn placas-btn" onClick={() => { agregarPlaca(element.id, 'COMPARATIVA'); onEditClick(element); }}>COMPARATIVA</button>
            <button className="zcpl-btn placas-btn" onClick={() => { agregarPlaca(element.id, 'DATOS'); onEditClick(element); }}>DATOS</button>
            <button className="zcpl-btn placas-btn" onClick={() => { agregarPlaca(element.id, 'PVENTA X 3'); onEditClick(element); }}>PVENTA X 3</button>
            <button className="zcpl-btn placas-btn" onClick={() => { agregarPlaca(element.id, 'PVENTA X 1'); onEditClick(element); }}>PVENTA X 1</button>
          </div>
        </>
      )}
      {(element.type === 'VTR Nota' || element.type === 'VTR Full') && (
        <div className="zcpl-section">
          <h3>Zócalos</h3>
          <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, 'CATASTROFE')}>CATASTROFE</button>
          <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, '2 LINEAS')}>2 LINEAS</button>
        </div>
      )}
      {element.type === 'Titulo' && (
        <div className="zcpl-section">
          <h3>Zócalos</h3>
          <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, 'TITULOS')}>TITULOS</button>
        </div>
      )}
      {element.type === 'Voz en Off' && (
        <div className="zcpl-section">
          <h3>Zócalos</h3>
          <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, 'CATASTROFE')}>CATASTROFE</button>
          <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, '2 LINEAS')}>2 LINEAS</button>
          <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, 'VENTAS')}>VENTAS</button>
          <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, 'TEXTUALES')}>TEXTUALES</button>
        </div>
      )}
      {element.type === 'Placa' && (
        <div className="zcpl-section">
          <h3>Placas</h3>
          <button className="zcpl-btn placas-btn" onClick={() => { agregarPlaca(element.id, 'EQUIPOS'); onEditClick(element); }}>EQUIPOS</button>
          <button className="zcpl-btn placas-btn" onClick={() => { agregarPlaca(element.id, 'DATOS EQUIPOS'); onEditClick(element); }}>DATOS EQUIPOS</button>
          <button className="zcpl-btn placas-btn" onClick={() => { agregarPlaca(element.id, 'COMPARATIVA'); onEditClick(element); }}>COMPARATIVA</button>
          <button className="zcpl-btn placas-btn" onClick={() => { agregarPlaca(element.id, 'DATOS'); onEditClick(element); }}>DATOS</button>
          <button className="zcpl-btn placas-btn" onClick={() => { agregarPlaca(element.id, 'PVENTA X 3'); onEditClick(element); }}>PVENTA X 3</button>
          <button className="zcpl-btn placas-btn" onClick={() => { agregarPlaca(element.id, 'PVENTA X 1'); onEditClick(element); }}>PVENTA X 1</button>
        </div>
      )}
      {element.type === 'Reel' && (
        <div className="zcpl-section">
          <h3>Zócalos</h3>
          <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, 'CATASTROFE')}>CATASTROFE</button>
          <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, '2 LINEAS')}>2 LINEAS</button>
          <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, 'VENTAS')}>VENTAS</button>
          <button className="zcpl-btn zocalos-btn" onClick={() => agregarZocalo(element.id, 'TEXTUALES')}>TEXTUALES</button>
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