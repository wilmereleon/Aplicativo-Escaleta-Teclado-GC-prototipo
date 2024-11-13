import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, FileText, Archive, Plus, Clock } from 'lucide-react';
import './VistaPlantillas.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

/**
 * Componente VistaPlantillas
 * Este componente representa la vista de plantillas de la aplicación, donde los usuarios pueden navegar entre diferentes plantillas y acceder a históricos.
 */
const VistaPlantillas = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Encabezado */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="ETgc Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">ETgc</span>
          </div>
          <nav className="flex items-center space-x-4">
            <button className="flex items-center p-2 rounded-full hover:bg-gray-200">
              <i className="bi bi-bell h-5 w-5 mr-2"></i>
              <span className="hidden md:inline">Notifications</span>
            </button>
            <button className="flex items-center p-2 rounded-full hover:bg-gray-200">
              <i className="bi bi-gear h-5 w-5 mr-2"></i>
              <span className="hidden md:inline">Settings</span>
            </button>
            <button className="flex items-center p-2 rounded-full hover:bg-gray-200">
              <i className="bi bi-person h-5 w-5 mr-2"></i>
              <span className="hidden md:inline">Profile</span>
            </button>
          </nav>
        </div>
      </header>

      <div className="flex-grow flex">
        {/* Barra lateral */}
        <aside className="w-64 bg-white shadow-md">
          <nav className="mt-5 px-2">
            <Link to="/" className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <HomeIcon className="mr-4 h-6 w-6" />
              Inicio
            </Link>
            <Link to="/vista-plantillas" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <FileText className="mr-4 h-6 w-6" />
              Plantillas
            </Link>
            <button className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <Archive className="mr-4 h-6 w-6" />
              Históricos
            </button>
            <div className="mt-5">
              <h3 className="px-2 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">Accesos rápidos</h3>
              <Link to="/crear-nueva-escaleta" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                <Plus className="mr-4 h-6 w-6" />
                Crear nueva escaleta
              </Link>
              <Link to="/reciente" className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                <Clock className="mr-4 h-6 w-6" />
                Reciente
              </Link>
            </div>
          </nav>
        </aside>

        {/* Contenido principal */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Plantillas</h1>
          </div>

          <div className="container text-center">
            <div className="row">
              <div className="col bg-white shadow rounded-xl p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Plantilla base</h2>
                <p className="text-gray-600 mb-4">Esquema base de escaleta para DCSHA</p>
                <div className="flex space-x-4">
                  <Link to="/plantilla-base" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                    <i className="bi bi-arrow-right-circle mr-2 h-5 w-5"></i>
                    Traer
                  </Link>
                </div>
              </div>

              <div className="col bg-white shadow rounded-xl p-6 order-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Última plantilla usada</h2>
                <p className="text-gray-600 mb-4">Esquema de último programa realizado</p>
                <div className="flex space-x-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                    <i className="bi bi-arrow-right-circle mr-2 h-5 w-5"></i>
                    Traer
                  </button>
                </div>
              </div>

              <div className="col bg-white shadow rounded-xl p-6 order-1">
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
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Históricos</h1>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <div className="row g-0 text-center mb-2">
              <div className="col text-sm font-semibold text-gray-700">Fecha</div>
              <div className="col text-sm font-semibold text-gray-700">Contenido</div>
              <div className="col text-sm font-semibold text-gray-700">Duración</div>
              <div className="col text-sm font-semibold text-gray-700">Acciones</div>
            </div>
            <div className="row g-0 text-center">
              <div className="col-12 mb-2">
                <div className="row g-0 bg-gray-100 p-4 rounded-xl">
                  <div className="col text-sm text-gray-500">2024-10-11</div>
                  <div className="col text-sm text-gray-500">Programa Gran Piemonte | Etapa única</div>
                  <div className="col text-sm text-gray-500">59 minutos</div>
                  <div className="col text-sm text-blue-600 hover:text-blue-900">
                    <a href="#">View</a>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-2">
                <div className="row g-0 bg-gray-100 p-4 rounded-xl">
                  <div className="col text-sm text-gray-500">2024-03-07</div>
                  <div className="col text-sm text-gray-500">Programa Tour de Francia | Etapa 4</div>
                  <div className="col text-sm text-gray-500">58 minutos</div>
                  <div className="col text-sm text-blue-600 hover:text-blue-900">
                    <a href="#">View</a>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-2">
                <div className="row g-0 bg-gray-100 p-4 rounded-xl">
                  <div className="col text-sm text-gray-500">2024-07-01</div>
                  <div className="col text-sm text-gray-500">Programa Tour de Francia | Etapa 3</div>
                  <div className="col text-sm text-gray-500">57 minutos</div>
                  <div className="col text-sm text-blue-600 hover:text-blue-900">
                    <a href="#">View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VistaPlantillas;