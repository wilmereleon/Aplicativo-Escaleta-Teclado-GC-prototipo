import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Bell, Settings, User, Home as HomeIcon, FileText, Archive, Plus, ArrowRight, Download, Clock } from 'lucide-react';
import VistaPlantillas from './components/VistaPlantillas';
import PlantillaBaseLayout from './components/PlantillaBaseLayout';
import Home from './components/Home'; // Importar el componente Home
import Footer from './components/Footer'; // Importar el componente Footer
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
      <Switch>
        <Route path="/plantilla-base" component={PlantillaBaseLayout} />
        <Route path="/vista-plantillas" component={VistaPlantillas} />
        <Route path="/" component={() => <MainLayout handleImportClick={handleImportClick} fileInputRef={fileInputRef} handleFileChange={handleFileChange} />} />
      </Switch>
    </Router>
  );
}

function MainLayout({ handleImportClick, fileInputRef, handleFileChange }) {
  return (
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
          <Switch>
            <Route path="/" exact component={() => <Home handleImportClick={handleImportClick} fileInputRef={fileInputRef} handleFileChange={handleFileChange} />} />
            <Route path="/vista-plantillas" component={VistaPlantillas} />
          </Switch>
        </main>
      </div>

      <Footer />
    </div>
  );
}