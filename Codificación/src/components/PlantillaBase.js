import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Settings, User, Home as HomeIcon, Plus } from 'lucide-react';
import AsistenteProduccion from '../Presentación/InterfazUsuario/AsistenteProduccion';
import GestionFila from '../Dominio/ModelosDeDominio/GestionFila';
import GestionAcciones from '../Dominio/ModelosDeDominio/GestionAcciones';
import InterfazZocalos from '../Presentación/InterfazUsuario/InterfazZocalos';
import VistaPrevioVentana from '../Presentación/InterfazUsuario/VistaPrevioVentana';
import RelojEscaleta from './RelojEscaleta';
import SalvarEscaleta from './GuardarCambios';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import './PlantillaBase.css';

/**
 * Componente PlantillaBase
 * Este componente maneja la interfaz principal de la escaleta, incluyendo la gestión de filas, zócalos y placas.
 */
const PlantillaBase = () => {
  const asistenteProduccion = new AsistenteProduccion();
  const [elements, setElements] = useState([]);
  const [showZcPl, setShowZcPl] = useState(null);
  const [editingElement, setEditingElement] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  // Cargar los elementos de la escaleta al montar el componente
  useEffect(() => {
    setElements(asistenteProduccion.elements || []);
  }, []);

  /**
   * addNewElement
   * Función para agregar un nuevo elemento a la escaleta.
   */
  const addNewElement = async () => {
    const newPagina = prompt('Ingrese un nuevo ID de página:');
    if (!elements || elements.some(el => el.id === newPagina)) {
      alert('El ID de página ya está en uso o no se pudo obtener la lista de elementos. Por favor, elija otro ID.');
      return;
    }

    const newElement = {
      id: newPagina,
      type: '',
      name: '',
      startTime: '00:00:00',
      duration: '00:00:00',
      elapsedTime: '00:00:00'
    };
    setElements([...elements, newElement]);
    await updateExcel(newElement, 'paginas_filas_programa_dcsha.xlsx');
  };

  /**
   * updateExcel
   * Función para actualizar el archivo Excel con los datos del elemento.
   * @param {object} element - Elemento a actualizar en el Excel.
   * @param {string} fileName - Nombre del archivo Excel.
   */
  const updateExcel = async (element, fileName) => {
    try {
      const response = await fetch('http://localhost:3001/updateExcel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: element.id, solapa: element.solapa, titulo: element.titulo, fileName }),
      });

      if (!response.ok) {
        throw new Error(`Error al actualizar el archivo Excel ${fileName}`);
      }

      console.log(`Excel ${fileName} actualizado correctamente`);
    } catch (error) {
      console.error(`Error al actualizar el archivo Excel ${fileName}:`, error.message);
    }
  };

  /**
   * removeElement
   * Función para eliminar un elemento de la escaleta.
   * @param {string} id - ID del elemento a eliminar.
   */
  const removeElement = (id) => {
    const newElements = elements.filter(el => el.id !== id);
    setElements(newElements);
  };

  /**
   * toggleZcPl
   * Función para mostrar u ocultar la sección de zócalos y placas.
   * @param {string} id - ID del elemento a mostrar u ocultar.
   */
  const toggleZcPl = (id) => {
    setShowZcPl(showZcPl === id ? null : id);
  };

  /**
   * handleInputChange
   * Función para manejar los cambios en los campos de entrada de los elementos.
   * @param {string} id - ID del elemento a actualizar.
   * @param {string} field - Campo a actualizar.
   * @param {string} value - Nuevo valor del campo.
   */
  const handleInputChange = (id, field, value) => {
    const newElements = elements.map(el => {
      if (el.id === id) {
        return { ...el, [field]: value };
      }
      return el;
    });
    setElements(newElements);
  };

  /**
   * agregarZocalo
   * Función para agregar un zócalo a un elemento.
   * @param {string} id - ID del elemento.
   * @param {string} tipo - Tipo de zócalo a agregar.
   */
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
    updateExcel({ id, solapa: tipo, titulo: '' }, 'DE_CICLISMO_2023.xlsx');
  };

  /**
   * agregarPlaca
   * Función para agregar una placa a un elemento.
   * @param {string} id - ID del elemento.
   * @param {string} tipo - Tipo de placa a agregar.
   */
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
    updateExcel({ id, solapa: tipo, titulo: '' }, 'DE_CICLISMO_2023.xlsx');
  };

  /**
   * duplicarFila
   * Función para duplicar una fila en la escaleta.
   * @param {string} id - ID del elemento a duplicar.
   */
  const duplicarFila = (id) => {
    const elementToDuplicate = elements.find(el => el.id === id);
    if (elementToDuplicate) {
      const newElement = { ...elementToDuplicate, id: `ID${elements.length + 1}` };
      setElements([...elements, newElement]);
    }
  };

  /**
   * handleEditClick
   * Función para manejar el clic en el botón de editar.
   * @param {object} element - Elemento a editar.
   */
  const handleEditClick = (element) => {
    setEditingElement(element);
  };

  /**
   * handleCloseEdit
   * Función para cerrar el modo de edición.
   */
  const handleCloseEdit = () => {
    setEditingElement(null);
  };

  /**
   * handleViewClick
   * Función para manejar el clic en el botón de vista previa.
   * @param {object} element - Elemento a visualizar.
   */
  const handleViewClick = (element) => {
    setEditingElement(element);
    setShowPreview(true);
  };

  /**
   * handleClosePreview
   * Función para cerrar la vista previa.
   */
  const handleClosePreview = () => {
    setShowPreview(false);
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
            <Button className="flex items-center p-2 rounded-full hover:bg-gray-200">
              <Bell className="h-5 w-5 mr-2" />
              <span className="hidden md:inline">Notifications</span>
            </Button>
            <Button className="flex items-center p-2 rounded-full hover:bg-gray-200">
              <Settings className="h-5 w-5 mr-2" />
              <span className="hidden md:inline">Settings</span>
            </Button>
            <Button className="flex items-center p-2 rounded-full hover:bg-gray-200">
              <User className="h-5 w-5 mr-2" />
              <span className="hidden md:inline">Profile</span>
            </Button>
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

        <RelojEscaleta />

        <div className="bg-white shadow rounded-xl p-6" style={{ marginTop: '100px' }}>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Elementos de la Escaleta</h2>
          <SalvarEscaleta elements={elements} />
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
                  <Button className="add-btn" onClick={addNewElement} style={{ marginLeft: '10px' }}>
                    <Plus /> Añadir
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {elements && elements.map(element => (
                <React.Fragment key={element.id}>
                  <tr className="program-row" style={{ backgroundColor: element.type === 'Bloque' || element.type === 'Total' ? '#69778A' : 'transparent' }}>
                    <td className="program-id">
                      <TextField
                        value={element.id}
                        onChange={(e) => handleInputChange(element.id, 'id', e.target.value)}
                        variant="outlined"
                        size="small"
                      />
                    </td>
                    <td className="program-type">
                      <FormControl variant="outlined" size="small" fullWidth>
                        <InputLabel>Tipo</InputLabel>
                        <Select
                          value={element.type}
                          onChange={(e) => handleInputChange(element.id, 'type', e.target.value)}
                          label="Tipo"
                        >
                          <MenuItem value="" disabled>Escoger tipo de fila</MenuItem>
                          {tiposDeFila.map(tipo => (
                            <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </td>
                    <td className="program-name">
                      <TextField
                        value={element.name}
                        onChange={(e) => handleInputChange(element.id, 'name', e.target.value)}
                        variant="outlined"
                        size="small"
                      />
                    </td>
                    <td className="start-time">
                      <TextField
                        value={element.startTime}
                        onChange={(e) => handleInputChange(element.id, 'startTime', e.target.value)}
                        variant="outlined"
                        size="small"
                      />
                    </td>
                    <td className="duration">
                      <TextField
                        value={element.duration}
                        onChange={(e) => handleInputChange(element.id, 'duration', e.target.value)}
                        variant="outlined"
                        size="small"
                      />
                    </td>
                    <td className="elapsed-time">
                      <TextField
                        value={element.elapsedTime}
                        onChange={(e) => handleInputChange(element.id, 'elapsedTime', e.target.value)}
                        variant="outlined"
                        size="small"
                      />
                    </td>
                    <td className="actions">
                      <GestionAcciones
                        element={element}
                        toggleZcPl={toggleZcPl}
                        addElement={addNewElement}
                        removeElement={removeElement}
                        duplicarFila={duplicarFila}
                        onViewClick={handleViewClick}
                      />
                    </td>
                  </tr>
                  {showZcPl === element.id && (
                    <tr className="zcpl-row">
                      <td colSpan="7">
                        <GestionFila element={element} agregarZocalo={agregarZocalo} agregarPlaca={agregarPlaca} onEditClick={handleEditClick} onViewClick={handleViewClick} />
                      </td>
                    </tr>
                  )}
                  {editingElement && editingElement.id === element.id && (
                    <tr className="edit-row">
                      <td colSpan="7">
                        <InterfazZocalos tipo={editingElement.type} />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      {showPreview && (
        <VistaPrevioVentana tipo={editingElement?.type} onClose={handleClosePreview} datos={editingElement} />
      )}
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