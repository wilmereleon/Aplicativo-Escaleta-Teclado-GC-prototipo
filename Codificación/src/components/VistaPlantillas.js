import React from 'react';
import { Link } from 'react-router-dom';
import './VistaPlantillas.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const VistaPlantillas = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Plantillas</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Plantilla base</h2>
            <p className="text-gray-600 mb-4">Esquema base de escaleta para DCSHA</p>
            <div className="flex space-x-4">
              <Link to="/plantilla-base" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                <i className="bi bi-arrow-right-circle mr-2 h-5 w-5"></i>
                Traer
              </Link>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Última plantilla usada</h2>
            <p className="text-gray-600 mb-4">Esquema de último programa realizado</p>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                <i className="bi bi-arrow-right-circle mr-2 h-5 w-5"></i>
                Traer
              </button>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Plantilla Histórico</h2>
            <p className="text-gray-600 mb-4">Esquemas de programas hechos anteriormente</p>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                <i className="bi bi-arrow-right-circle mr-2 h-5 w-5"></i>
                Traer
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Históricos</h1>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="grid grid-cols-4 gap-4">
                <div className="text-sm text-gray-500">2024-10-11</div>
                <div className="text-sm text-gray-500">Programa Gran Piemonte | Etapa única</div>
                <div className="text-sm text-gray-500">59 minutos</div>
                <div className="text-sm text-blue-600 hover:text-blue-900">
                  <a href="#">View</a>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="grid grid-cols-4 gap-4">
                <div className="text-sm text-gray-500">2024-03-07</div>
                <div className="text-sm text-gray-500">Programa Tour de Francia | Etapa 4</div>
                <div className="text-sm text-gray-500">58 minutos</div>
                <div className="text-sm text-blue-600 hover:text-blue-900">
                  <a href="#">View</a>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="grid grid-cols-4 gap-4">
                <div className="text-sm text-gray-500">2024-07-01</div>
                <div className="text-sm text-gray-500">Programa Tour de Francia | Etapa 3</div>
                <div className="text-sm text-gray-500">57 minutos</div>
                <div className="text-sm text-blue-600 hover:text-blue-900">
                  <a href="#">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VistaPlantillas;