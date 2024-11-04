import React, { useEffect, useState } from 'react';
import './VistaPrevioVentana.css';
import saveData from '../../utils/saveData';

const VistaPrevioVentana = ({ tipo, onClose, datos }) => {
  const [htmlContent, setHtmlContent] = useState('');
  const [formData, setFormData] = useState({ solapa: '', titulo: '' });

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

  useEffect(() => {
    if (datos) {
      setFormData({
        solapa: datos.solapa || '',
        titulo: datos.titulo || ''
      });
    }
  }, [datos]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async () => {
    const filename = `datos_${tipo}_${Date.now()}.json`;
    await saveData(formData, filename);
    console.log('Datos guardados:', formData);
  };

  useEffect(() => {
    if (htmlContent) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      const tituloElement = doc.getElementById('titulo');
      const solapaElement = doc.getElementById('solapa');
      if (tituloElement) tituloElement.textContent = formData.titulo;
      if (solapaElement) solapaElement.textContent = formData.solapa;
      setHtmlContent(doc.documentElement.outerHTML);
    }
  }, [formData, htmlContent]);

  return (
    <div className="ventana-edicion">
      <div className="ventana-edicion-contenido">
        <div className="ventana-edicion-header">
          <div className="ventana-edicion-titulo">
            <h2>{`Edición de ${tipo}`}</h2>
          </div>
          <div className="ventana-edicion-controles">
            <button className="ventana-edicion-cerrar" onClick={onClose}>X</button>
          </div>
        </div>
        <div className="ventana-edicion-fondo-container">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          <div className="form-container">
            <label>
              Solapa:
              <input
                type="text"
                name="solapa"
                value={formData.solapa}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Título:
              <input
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleInputChange}
              />
            </label>
            <button onClick={handleSave}>Guardar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaPrevioVentana;