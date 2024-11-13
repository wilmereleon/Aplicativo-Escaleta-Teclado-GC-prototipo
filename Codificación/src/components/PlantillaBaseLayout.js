import React from 'react';
import PlantillaBase from './PlantillaBase';

/**
 * Componente PlantillaBaseLayout
 *
 * Este componente sirve como una plantilla base para la aplicación. Utiliza un diseño
 * de flexbox para crear una estructura columnar que ocupa la altura mínima de la pantalla.
 * El color de fondo se establece a un gris claro.
 *
 * @componente
 * @ejemplo
 * return (
 *   <PlantillaBaseLayout />
 * )
 */
const PlantillaBaseLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <PlantillaBase />
    </div>
  );
};

export default PlantillaBaseLayout;