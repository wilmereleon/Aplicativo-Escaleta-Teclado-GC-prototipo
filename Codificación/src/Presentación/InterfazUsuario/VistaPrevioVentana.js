import React, { useEffect, useState } from 'react';
import './VistaPrevioVentana.css';

/**
 * Componente VistaPrevioVentana
 * Este componente carga y muestra el contenido HTML de una vista previa de zócalo.
 * @param {string} tipo - Tipo de zócalo a mostrar.
 * @param {function} onClose - Función para cerrar el componente.
 * @param {object} datos - Datos iniciales del zócalo.
 */
const VistaPrevioVentana = ({ tipo, onClose, datos }) => {
  const [htmlContent, setHtmlContent] = useState('');

  /**
   * useEffect para cargar el contenido HTML basado en el tipo de zócalo
   * Se ejecuta cuando el componente se monta y cuando el tipo de zócalo cambia.
   */
  useEffect(() => {
    const loadHtmlContent = async () => {
      let url = '';
      switch (tipo) {
        case 'TITULOS':
          url = '/VistaZócaloTítulo.html';
          break;
        // Agregar más casos para otros tipos de zócalos
        default:
          console.error(`Tipo de zócalo no soportado: ${tipo}`);
          return;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al cargar el contenido HTML');
        }
        const text = await response.text();
        setHtmlContent(text);
      } catch (error) {
        console.error('Error al cargar el contenido HTML:', error);
      }
    };

    loadHtmlContent();
  }, [tipo]);

  /**
   * handleSave
   * Función para manejar el evento de guardar los datos del zócalo.
   * @param {object} event - Evento de mensaje que contiene los datos del zócalo.
   */
  const handleSave = (event) => {
    const { solapa, titulo } = event.data;
    // Enviar los datos al servidor para actualizar el Excel DE_CICLISMO_2023.xlsx
    fetch('http://localhost:3001/updateExcel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: datos.id, solapa, titulo, fileName: 'DE_CICLISMO_2023.xlsx' }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al actualizar el archivo Excel DE_CICLISMO_2023.xlsx');
        }
        return response.text();
      })
      .then(() => {
        console.log('Excel DE_CICLISMO_2023.xlsx actualizado correctamente');
        onClose();
      })
      .catch(error => {
        console.error('Error al actualizar el archivo Excel DE_CICLISMO_2023.xlsx:', error);
      });
  };

  /**
   * useEffect para agregar y remover el event listener para el evento de mensaje
   * Se ejecuta cuando el componente se monta y se desmonta.
   */
  useEffect(() => {
    window.addEventListener('message', handleSave);
    return () => {
      window.removeEventListener('message', handleSave);
    };
  }, []);

  return (
    <div className="vista-previo-ventana">
      <div className="ventana-contenido">
        {/* Renderizar el contenido HTML cargado */}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default VistaPrevioVentana;