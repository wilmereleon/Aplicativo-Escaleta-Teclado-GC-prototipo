import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, ArrowRight, Download } from 'lucide-react';

const Home = ({ handleImportClick, fileInputRef, handleFileChange }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Programas</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
          <Plus className="mr-2 h-5 w-5" />
          Crear nuevo
        </button>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">DCSHA</h2>
        <p className="text-gray-600 mb-4">De ciclismo de habla así</p>
        <div className="flex space-x-4">
          <Link to="/vista-plantillas" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <ArrowRight className="mr-2 h-5 w-5" />
            Ingresar
          </Link>
          <button onClick={handleImportClick} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
            <Download className="mr-2 h-5 w-5" />
            Importar proyecto
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;