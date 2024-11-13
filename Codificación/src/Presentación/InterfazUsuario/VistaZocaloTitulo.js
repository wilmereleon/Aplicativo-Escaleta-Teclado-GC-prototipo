import React, { useState } from 'react';

/**
 * Componente VistaZocaloTitulo
 * Este componente permite al usuario editar y guardar los datos de un zócalo de título.
 * @param {function} onClose - Función para cerrar el componente.
 * @param {object} datos - Datos iniciales del zócalo.
 */
const VistaZocaloTitulo = ({ onClose, datos }) => {
  const [solapa, setSolapa] = useState(datos.solapa || '');
  const [titulo, setTitulo] = useState(datos.titulo || '');
  const [id, setId] = useState(''); // Estado para el ID

  /**
   * handleSave
   * Función para enviar los datos al servidor y actualizar el archivo Excel.
   */
  const handleSave = () => {
    fetch('http://localhost:3001/updateExcel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, solapa, titulo }), // Enviar el ID junto con los datos
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al actualizar el archivo Excel');
        }
        return response.text();
      })
      .then(() => {
        console.log('Excel actualizado correctamente');
        onClose();
      })
      .catch(error => {
        console.error('Error al actualizar el archivo Excel:', error);
      });
  };

  return (
    <div className="vista-zocalo-titulo">
      <div>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label htmlFor="solapa">Solapa:</label>
        <input
          type="text"
          id="solapa"
          name="solapa"
          value={solapa}
          onChange={(e) => setSolapa(e.target.value)}
        />
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <button onClick={handleSave}>Guardar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default VistaZocaloTitulo;