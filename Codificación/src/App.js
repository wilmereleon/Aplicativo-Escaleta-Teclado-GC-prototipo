import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Bell, Settings, User, Home as HomeIcon, FileText, Archive, Plus, ArrowRight, Download, Clock } from 'lucide-react';
import VistaPlantillas from './components/VistaPlantillas';
import PlantillaBase from './components/PlantillaBase';
import './App.css'; // Asegúrate de importar el archivo CSS aquí

export default function App() {
  const fileInputRef = useRef(null);

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Aquí puedes manejar la importación del archivo
      console.log('Archivo seleccionado:', file);
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <img src="/images/logo.png" alt="ETgc Logo" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">ETgc</span>
            </div>
            <nav className="flex items-center space-x-4">
              <button className="flex items-center p-2 rounded-full hover:bg-gray-200">
                <Bell className="h-5 w-5 mr-2" />
                <span className="hidden md:inline">Notifications</span>
              </button>
              <button className="flex items-center p-2 rounded-full hover:bg-gray-200">
                <Settings className="h-5 w-5 mr-2" />
                <span className="hidden md:inline">Settings</span>
              </button>
              <button className="flex items-center p-2 rounded-full hover:bg-gray-200">
                <User className="h-5 w-5 mr-2" />
                <span className="hidden md:inline">Profile</span>
              </button>
            </nav>
          </div>
        </header>

        <div className="flex-grow flex">
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

          <main className="flex-1 overflow-y-auto p-8">
            <Routes>
              <Route path="/" element={<Home handleImportClick={handleImportClick} fileInputRef={fileInputRef} handleFileChange={handleFileChange} />} />
              <Route path="/vista-plantillas" element={<VistaPlantillas />} />
              <Route path="/plantilla-base" element={<PlantillaBase />} />
            </Routes>
          </main>
        </div>

        <footer className="bg-white border-t border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <p className="text-sm text-gray-500">© 2024 Torneos SAS | Colombia</p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Políticas</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Términos de servicio</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Contacto</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home({ handleImportClick, fileInputRef, handleFileChange }) {
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
}