import React, { useState, useEffect } from 'react';

const InterfazZocalos = ({ tipo }) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const loadHtmlContent = async () => {
      let url = '';
      switch (tipo) {
        case 'TITULOS':
          url = '/src/Presentación/VistaZócaloTítulo.html';
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

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default InterfazZocalos;