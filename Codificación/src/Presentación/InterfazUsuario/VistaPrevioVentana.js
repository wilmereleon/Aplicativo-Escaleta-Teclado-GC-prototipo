import React, { useEffect, useState } from 'react';
import './VistaPrevioVentana.css';

const VistaPrevioVentana = ({ tipo, onClose, datos }) => {
  const [htmlContent, setHtmlContent] = useState('');

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

  const handleSave = (event) => {
    const { solapa, titulo } = event.data;
    // Enviar los datos al servidor para actualizar el Excel
    fetch('http://localhost:3001/updateExcel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: datos.id, solapa, titulo }),
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

  useEffect(() => {
    window.addEventListener('message', handleSave);
    return () => {
      window.removeEventListener('message', handleSave);
    };
  }, []);

  return (
    <div className="vista-previo-ventana">
      <div className="ventana-contenido">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default VistaPrevioVentana;