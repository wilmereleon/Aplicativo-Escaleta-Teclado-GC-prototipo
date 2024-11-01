import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Settings, User, Home as HomeIcon, Plus } from 'lucide-react';
import AsistenteProduccion from '../Presentación/InterfazUsuario/AsistenteProduccion';
import GestionFila from '../Dominio/ModelosDeDominio/GestionFila';
import GestionAcciones from '../Dominio/ModelosDeDominio/GestionAcciones';
import './PlantillaBase.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PlantillaBase = () => {
  const asistenteProduccion = new AsistenteProduccion();
  const [elements, setElements] = useState([
    { id: 'ID1', type: 'Entrada', name: 'Entrada 1', startTime: '00:00:00', duration: '00:00:00', elapsedTime: '00:00:00' },
    { id: 'ID2', type: 'VTR Nota', name: 'VTR Nota 1', startTime: '00:00:00', duration: '00:00:00', elapsedTime: '00:00:00' },
    { id: 'ID3', type: 'VTR Full', name: 'VTR Full 1', startTime: '00:00:00', duration: '00:00:00', elapsedTime: '00:00:00' },
    { id: 'ID4', type: 'Placa', name: 'Placa 1', startTime: '00:00:00', duration: '00:00:00', elapsedTime: '00:00:00' },
  ]);
  const [showZcPl, setShowZcPl] = useState(null);

  useEffect(() => {
    setElements(asistenteProduccion.elements);
  }, []);

  const addElement = () => {
    const newElement = {
      id: `ID${elements.length + 1}`,
      type: '',
      name: '',
      startTime: '00:00:00',
      duration: '00:00:00',
      elapsedTime: '00:00:00'
    };
    setElements([...elements, newElement]);
  };

  const removeElement = (id) => {
    const newElements = elements.filter(el => el.id !== id);
    setElements(newElements);
  };

  const toggleZcPl = (id) => {
    setShowZcPl(showZcPl === id ? null : id);
  };

  const handleInputChange = (id, field, value) => {
    const newElements = elements.map(el => {
      if (el.id === id) {
        return { ...el, [field]: value };
      }
      return el;
    });
    setElements(newElements);
  };

  const agregarZocalo = (id, tipo) => {
    let newElements;
    switch (tipo) {
      case 'TITULOS':
        newElements = asistenteProduccion.insertarZocaloTitulo(id);
        break;
      case 'CATASTROFE':
        newElements = asistenteProduccion.insertarZocaloCatastrofe(id);
        break;
      case '2 LINEAS':
        newElements = asistenteProduccion.insertarZocaloDosLineas(id);
        break;
      case 'VENTAS':
        newElements = asistenteProduccion.insertarZocaloVentas(id);
        break;
      case 'TEXTUALES':
        newElements = asistenteProduccion.insertarZocaloTextuales(id);
        break;
      default:
        break;
    }
    setElements(newElements);
  };

  const agregarPlaca = (id, tipo) => {
    let newElements;
    switch (tipo) {
      case 'EQUIPOS':
        newElements = asistenteProduccion.insertarPlacaEquipos(id);
        break;
      case 'DATOS EQUIPOS':
        newElements = asistenteProduccion.insertarPlacaDatosEquipos(id);
        break;
      case 'COMPARATIVA':
        newElements = asistenteProduccion.insertarPlacaComparativa(id);
        break;
      case 'DATOS':
        newElements = asistenteProduccion.insertarPlacaDatos(id);
        break;
      case 'PVENTA X 3':
        newElements = asistenteProduccion.insertarPlacaPventaX3(id);
        break;
      case 'PVENTA X 1':
        newElements = asistenteProduccion.insertarPlacaPventaX1(id);
        break;
      default:
        break;
    }
    setElements(newElements);
  };

  const duplicarFila = (id) => {
    const elementToDuplicate = elements.find(el => el.id === id);
    if (elementToDuplicate) {
      const newElement = { ...elementToDuplicate, id: `ID${elements.length + 1}` };
      setElements([...elements, newElement]);
    }
  };

  const fechaActual = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const tiposDeFila = [
    'Entrada', 'VTR Nota', 'VTR Full', 'Placa', 'Titulo', 'Voz en Off', 'Cortina', 'Reel', 'Promocion-Venta', 'Tiempo de Corte', 'Bloque', 'Total'
  ];

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
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              <HomeIcon className="h-6 w-6" />
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mb-6">
          <p className="text-gray-600">{fechaActual}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-2 mb-2"> {/* Reducir padding */}
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <label className="block text-xs font-medium text-gray-700">Al aire</label> {/* Reducir tamaño del texto */}
              </div>
              <div className="col">
                <label className="block text-xs font-medium text-gray-700">Tiempo recorrido</label> {/* Reducir tamaño del texto */}
                <input type="text" className="mt-1 block w-full shadow-sm sm:text-xs border-gray-300 rounded-md tiempo-recorrido" placeholder="00:00:00" /> {/* Mantener tamaño del input */}
              </div>
              <div className="col">
                <label className="block text-xs font-medium text-gray-700">Tiempo de más</label> {/* Reducir tamaño del texto */}
                <input type="text" className="mt-1 block w-full shadow-sm sm:text-xs border-gray-300 rounded-md tiempo-mas" placeholder="00:00:00" /> {/* Mantener tamaño del input */}
              </div>
              <div className="col">
                <label className="block text-xs font-medium text-gray-700">Tiempo en curso</label> {/* Reducir tamaño del texto */}
                <input type="text" className="mt-1 block w-full shadow-sm sm:text-xs border-gray-300 rounded-md tiempo-curso" placeholder="00:00:00" /> {/* Mantener tamaño del input */}
              </div>
              <div className="col">
                <label className="block text-xs font-medium text-gray-700">Tiempo total</label> {/* Reducir tamaño del texto */}
                <input type="text" className="mt-1 block w-full shadow-sm sm:text-xs border-gray-300 rounded-md tiempo-total" placeholder="00:00:00" /> {/* Mantener tamaño del input */}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Elementos de la Escaleta</h2>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tipo</th>
                <th>Nombre</th>
                <th>Tiempo de inicio</th>
                <th>Duración</th>
                <th>Tiempo ejecutado</th>
                <th className="actions-header">
                  Acciones
                  <button className="add-btn" onClick={addElement} style={{ marginLeft: '10px' }}>
                    <Plus /> Añadir
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {elements.map(element => (
                <React.Fragment key={element.id}>
                  <tr className="program-row" style={{ backgroundColor: element.type === 'Bloque' || element.type === 'Total' ? '#69778A' : 'transparent' }}>
                    <td className="program-id">
                      <input
                        type="text"
                        value={element.id}
                        onChange={(e) => handleInputChange(element.id, 'id', e.target.value)}
                      />
                    </td>
                    <td className="program-type">
                      <select
                        value={element.type}
                        onChange={(e) => handleInputChange(element.id, 'type', e.target.value)}
                      >
                        <option value="" disabled>Escoger tipo de fila</option>
                        {tiposDeFila.map(tipo => (
                          <option key={tipo} value={tipo}>{tipo}</option>
                        ))}
                      </select>
                    </td>
                    <td className="program-name">
                      <input
                        type="text"
                        value={element.name}
                        onChange={(e) => handleInputChange(element.id, 'name', e.target.value)}
                      />
                    </td>
                    <td className="start-time">
                      <input
                        type="text"
                        value={element.startTime}
                        onChange={(e) => handleInputChange(element.id, 'startTime', e.target.value)}
                      />
                    </td>
                    <td className="duration">
                      <input
                        type="text"
                        value={element.duration}
                        onChange={(e) => handleInputChange(element.id, 'duration', e.target.value)}
                      />
                    </td>
                    <td className="elapsed-time">
                      <input
                        type="text"
                        value={element.elapsedTime}
                        onChange={(e) => handleInputChange(element.id, 'elapsedTime', e.target.value)}
                      />
                    </td>
                    <td className="actions">
                      <GestionAcciones
                        element={element}
                        toggleZcPl={toggleZcPl}
                        addElement={addElement}
                        removeElement={removeElement}
                        duplicarFila={duplicarFila}
                      />
                    </td>
                  </tr>
                  {showZcPl === element.id && (
                    <tr className="zcpl-row">
                      <td colSpan="7">
                        <GestionFila element={element} agregarZocalo={agregarZocalo} agregarPlaca={agregarPlaca} />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </main>
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
  );
};

export default PlantillaBase;