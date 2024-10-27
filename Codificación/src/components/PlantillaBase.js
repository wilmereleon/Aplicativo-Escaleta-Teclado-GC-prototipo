import React from 'react';
import './PlantillaBase.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PlantillaBase = () => {
  const fechaActual = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Programa de Escaleta</h1>
          <p className="text-gray-600">{fechaActual}</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Al aire</label>
              <input type="text" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tiempo recorrido</label>
              <input type="text" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tiempo de más</label>
              <input type="text" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tiempo en curso</label>
              <input type="text" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tiempo total</label>
              <input type="text" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Elementos de la Escaleta</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Elemento 1</h3>
                  <p className="text-sm text-gray-600">Descripción del elemento 1</p>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center">
                  <i className="bi bi-trash mr-2 h-5 w-5"></i>
                  Eliminar
                </button>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Elemento 2</h3>
                  <p className="text-sm text-gray-600">Descripción del elemento 2</p>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center">
                  <i className="bi bi-trash mr-2 h-5 w-5"></i>
                  Eliminar
                </button>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Elemento 3</h3>
                  <p className="text-sm text-gray-600">Descripción del elemento 3</p>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center">
                  <i className="bi bi-trash mr-2 h-5 w-5"></i>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center">
            <i className="bi bi-plus mr-2 h-5 w-5"></i>
            Añadir Elemento
          </button>
        </div>
      </main>
    </div>
  );
};

export default PlantillaBase;