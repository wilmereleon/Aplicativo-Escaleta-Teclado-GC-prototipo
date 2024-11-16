import React, { useState, useEffect } from 'react';
import { DCSHAComponent } from '../Negocio/Servicios/DCSHA'; // Importar el componente DCSHAComponent

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

/**
 * Componente Home
 * Este componente representa la página de inicio de la aplicación.
 * @param {function} handleImportClick - Función para manejar el clic en el botón de importar.
 * @param {object} fileInputRef - Referencia al input de archivo.
 * @param {function} handleFileChange - Función para manejar el cambio de archivo.
 */
export default function Home({ handleImportClick, fileInputRef, handleFileChange }) {
  return (
    <div>
      <h1>Bienvenido a ETgc</h1>
      <button onClick={handleImportClick}>Importar Archivo</button>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
      <DCSHAComponent /> {/* Renderizar el componente DCSHAComponent */}
      <InterfazZocalos tipo="TITULOS" /> {/* Renderizar el componente InterfazZocalos */}
    </div>
  );
}