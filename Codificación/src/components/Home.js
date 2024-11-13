import React, { useState, useEffect } from 'react';

/**
 * Componente InterfazZocalos
 * Este componente carga y muestra el contenido HTML de una interfaz de zócalo.
 * @param {string} tipo - Tipo de zócalo a mostrar.
 */
const InterfazZocalos = ({ tipo }) => {
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