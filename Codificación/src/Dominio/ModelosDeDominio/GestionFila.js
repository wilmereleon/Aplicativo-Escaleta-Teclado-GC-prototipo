import React, { useState, useEffect } from 'react';
import VistaZocaloTitulo from '../../Presentación/InterfazUsuario/VistaZocaloTitulo';
import SAL from '../../Persistencia/SistemaAlmacenamientoLocal/SAL'; // Asegúrate de que la ruta sea correcta

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
  const [selectedZocalo, setSelectedZocalo] = useState(null);
  const [pagina, setPagina] = useState('');
  const [error, setError] = useState('');
  const [paginas, setPaginas] = useState([]);
  const [indice, setIndice] = useState([]);

  // Fetch páginas from SAL on component mount
  useEffect(() => {
    const fetchPaginas = async () => {
      const paginas = await SAL.obtenerPaginas();
      setPaginas(Array.isArray(paginas) ? paginas : []);
    };

    fetchPaginas();
  }, []);

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
    setSelectedZocalo(tipo);
    setShowVistaZocaloTitulo(true); // Mostrar el menú con VistaZocaloTitulo
    setIndice(paginas.filter(pagina => pagina.tipo === tipo));
  };

  /**
   * handleCloseVistaZocaloTitulo
   * Función para cerrar el componente VistaZocaloTitulo.
   */
  const handleCloseVistaZocaloTitulo = () => {
    setShowVistaZocaloTitulo(false);
    setSelectedZocalo(null);
  };

  /**
   * handlePaginaChange
   * Función para manejar el cambio en el campo de Página.
   * @param {Event} e - Evento de cambio.
   */
  const handlePaginaChange = (e) => {
    const value = e.target.value;
    // Verificar si el valor es alfanumérico
    const alphanumericRegex = /^[a-z0-9]+$/i;
    if (!alphanumericRegex.test(value)) {
      setError('El valor de la página debe ser alfanumérico.');
      return;
    }
    // Verificar si el valor ya existe en la lista de páginas
    if (paginas.some(p => p.pagina === value)) {
      setError('El valor de la página ya existe.');
      return;
    }
    setError('');
    setPagina(value);
  };

  /**
   * handleAddPagina
   * Función para agregar una nueva página.
   */
  const handleAddPagina = () => {
    if (pagina && !paginas.some(p => p.pagina === pagina)) {
      const nuevasPaginas = [...paginas, { pagina, tipo: selectedZocalo, tiempoInicio: '', duracion: '', tiempoEjecutado: '' }];
      setPaginas(nuevasPaginas);
      SAL.almacenarPaginas(nuevasPaginas); // Almacenar páginas en SAL
      setPagina('');
      // Enviar las páginas al servidor
      fetch('http://localhost:3001/storePages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paginas: nuevasPaginas }),
      })
        .then(response => response.text())
        .then(message => console.log(message))
        .catch(error => console.error('Error al almacenar las páginas:', error));
    }
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
          {showVistaZocaloTitulo && selectedZocalo === 'TITULOS' && (
            <div className="vista-zocalo-titulo-container">
              <VistaZocaloTitulo onClose={handleCloseVistaZocaloTitulo} datos={element} />
              <div className="pagina-section">
                <h3>Página</h3>
                <input
                  type="text"
                  value={pagina}
                  onChange={handlePaginaChange}
                  className="pagina-input"
                  placeholder="Ingrese el valor de la página"
                />
                <button className="pagina-btn" onClick={handleAddPagina}>Agregar Página</button>
                {error && <p className="error-message">{error}</p>}
                <ul className="pagina-list">
                  {indice.map((pagina, index) => (
                    <li key={index}>{pagina.pagina}</li>
                  ))}
                </ul>
              </div>
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
          {showVistaZocaloTitulo && selectedZocalo === 'TITULOS' && (
            <div className="vista-zocalo-titulo-container">
              <VistaZocaloTitulo onClose={handleCloseVistaZocaloTitulo} datos={element} />
              <div className="pagina-section">
                <h3>Página</h3>
                <input
                  type="text"
                  value={pagina}
                  onChange={handlePaginaChange}
                  className="pagina-input"
                  placeholder="Ingrese el valor de la página"
                />
                <button className="pagina-btn" onClick={handleAddPagina}>Agregar Página</button>
                {error && <p className="error-message">{error}</p>}
                <ul className="pagina-list">
                  {indice.map((pagina, index) => (
                    <li key={index}>{pagina.pagina}</li>
                  ))}
                </ul>
              </div>
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