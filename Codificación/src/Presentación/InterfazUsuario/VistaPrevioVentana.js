import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import './VistaPrevioVentana.css';
import saveData from '../../utils/saveData'; // Importar la función saveData

const VistaPrevioVentana = ({ tipo, onClose, datos }) => {
  const [formData, setFormData] = useState({
    solapa: '',
    texto: '',
    foto: ''
  });

  useEffect(() => {
    if (datos) {
      setFormData({
        solapa: datos.solapa || '',
        texto: datos.texto || '',
        foto: datos.foto || ''
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
    // Lógica para guardar los datos
    const filename = `datos_${tipo}_${Date.now()}.json`;
    await saveData(formData, filename);
    console.log('Datos guardados:', formData);
    onClose();
  };

  const renderFormFields = () => {
    switch (tipo) {
      case 'CATASTROFE':
      case '2 LINEAS':
      case 'TEXTUALES':
      case 'TITULOS':
      case 'VENTAS':
        return (
          <>
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
              Texto:
              <textarea
                name="texto"
                value={formData.texto}
                onChange={handleInputChange}
              />
            </label>
          </>
        );
      case 'DATOS':
        return (
          <>
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
              Texto:
              <textarea
                name="texto"
                value={formData.texto}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Foto:
              <input
                type="text"
                name="foto"
                value={formData.foto}
                onChange={handleInputChange}
              />
            </label>
          </>
        );
      default:
        return null;
    }
  };

  const renderBackgroundImage = () => {
    switch (tipo) {
      case 'CATASTROFE':
        return <img src="/images/Z CATASTROFE.png" alt="Fondo Catástrofe" className="ventana-edicion-fondo-medio" />;
      case '2 LINEAS':
        return <img src="/images/Z 2 LINEAS.png" alt="Fondo Dos Lineas" className="ventana-edicion-fondo-medio" />;
      case 'TEXTUALES':
        return <img src="/images/Z TEXTUALES.png" alt="Fondo Textuales" className="ventana-edicion-fondo-medio" />;
      case 'TITULOS':
        return <img src="/images/Z TITULOS.png" alt="Fondo Titulos" className="ventana-edicion-fondo-medio" />;
      case 'VENTAS':
        return <img src="/images/Z VENTAS.png" alt="Fondo Ventas" className="ventana-edicion-fondo-medio" />;
      case 'DATOS':
        return (
          <>
            <img src="/video/FONDO.png" alt="Fondo" className="ventana-edicion-fondo-medio" />
            <img src="/images/P DATOS + FOTO.png" alt="Fondo Datos" className="ventana-edicion-fondo-delantero" />
          </>
        );
      default:
        return <img src="/video/FONDO.png" alt="Fondo" className="ventana-edicion-fondo-medio" />;
    }
  };

  return (
    <Draggable handle=".ventana-edicion-header">
      <div className="ventana-edicion">
        <div className="ventana-edicion-contenido">
          <div className="ventana-edicion-header">
            <div className="ventana-edicion-titulo">
              <h2>{`Edición de ${tipo}`}</h2>
            </div>
            <div className="ventana-edicion-controles">
              <button className="ventana-edicion-minimizar">_</button>
              <button className="ventana-edicion-maximizar">[]</button>
              <button className="ventana-edicion-cerrar" onClick={onClose}>X</button>
            </div>
          </div>
          <div className="ventana-edicion-fondo-container">
            {renderBackgroundImage()}
            <div className="ventana-edicion-form">
              {renderFormFields()}
              <button onClick={handleSave}>Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default VistaPrevioVentana;