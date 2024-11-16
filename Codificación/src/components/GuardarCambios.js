import React from 'react';
import { Button } from '@mui/material';
import { Save } from 'lucide-react'; // Importar el ícono de salvar

/**
 * Componente GuardarCambios
 * Este componente maneja la funcionalidad de guardar los cambios de la escaleta.
 * @param {array} elements - Lista de elementos de la escaleta.
 */
const GuardarCambios = ({ elements }) => {
  /**
   * saveAllChanges
   * Función para salvar todos los cambios de la escaleta e insertar el contenido en el archivo Excel.
   */
  const saveAllChanges = async () => {
    try {
      const response = await fetch('http://localhost:3001/storePages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paginas: elements, fileName: 'paginas_filas_programa_dcsha.xlsx' }),
      });

      if (!response.ok) {
        throw new Error('Error al salvar los cambios en el archivo Excel paginas_filas_programa_dcsha.xlsx');
      }

      console.log('Cambios salvados correctamente en el archivo Excel paginas_filas_programa_dcsha.xlsx');
    } catch (error) {
      console.error('Error al salvar los cambios en el archivo Excel paginas_filas_programa_dcsha.xlsx:', error);
    }
  };

  return (
    <Button className="save-btn" onClick={saveAllChanges} style={{ marginBottom: '10px' }}>
      <Save /> Salvar
    </Button>
  );
};

export default GuardarCambios;