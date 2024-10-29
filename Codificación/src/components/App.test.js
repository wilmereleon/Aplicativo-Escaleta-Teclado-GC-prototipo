import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import { render, screen, fireEvent } from '@testing-library/react';
import MainLayout from '../components/MainLayout';

test('renders app component', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
  });

test('renders app component', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});
test('renders MainLayout component', () => {
  render(
    <Router>
      <MainLayout 
        handleImportClick={() => {}} 
        fileInputRef={{ current: null }} 
        handleFileChange={() => {}} 
      />
    </Router>
  );

  // Verificar que el logo se renderiza
  const logoElement = screen.getByAltText('ETgc Logo');
  expect(logoElement).toBeInTheDocument();

  // Verificar que los enlaces de navegación se renderizan
  const homeLink = screen.getByText('Inicio');
  expect(homeLink).toBeInTheDocument();

  const plantillasLink = screen.getByText('Plantillas');
  expect(plantillasLink).toBeInTheDocument();

  const historicosButton = screen.getByText('Históricos');
  expect(historicosButton).toBeInTheDocument();

  const crearNuevaEscaletaLink = screen.getByText('Crear nueva escaleta');
  expect(crearNuevaEscaletaLink).toBeInTheDocument();

  const recienteLink = screen.getByText('Reciente');
  expect(recienteLink).toBeInTheDocument();

  // Verificar que los botones de notificaciones, settings y profile se renderizan
  const notificationsButton = screen.getByText('Notifications');
  expect(notificationsButton).toBeInTheDocument();

  const settingsButton = screen.getByText('Settings');
  expect(settingsButton).toBeInTheDocument();

  const profileButton = screen.getByText('Profile');
  expect(profileButton).toBeInTheDocument();
});
test('renders app component', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});

test('renders MainLayout component', () => {
  render(
    <Router>
      <MainLayout 
        handleImportClick={() => {}} 
        fileInputRef={{ current: null }} 
        handleFileChange={() => {}} 
      />
    </Router>
  );

  // Verificar que el logo se renderiza
  const logoElement = screen.getByAltText('ETgc Logo');
  expect(logoElement).toBeInTheDocument();

  // Verificar que los enlaces de navegación se renderizan
  const homeLink = screen.getByText('Inicio');
  expect(homeLink).toBeInTheDocument();

  const plantillasLink = screen.getByText('Plantillas');
  expect(plantillasLink).toBeInTheDocument();

  const historicosButton = screen.getByText('Históricos');
  expect(historicosButton).toBeInTheDocument();

  const crearNuevaEscaletaLink = screen.getByText('Crear nueva escaleta');
  expect(crearNuevaEscaletaLink).toBeInTheDocument();

  const recienteLink = screen.getByText('Reciente');
  expect(recienteLink).toBeInTheDocument();

  // Verificar que los botones de notificaciones, settings y profile se renderizan
  const notificationsButton = screen.getByText('Notifications');
  expect(notificationsButton).toBeInTheDocument();

  const settingsButton = screen.getByText('Settings');
  expect(settingsButton).toBeInTheDocument();

  const profileButton = screen.getByText('Profile');
  expect(profileButton).toBeInTheDocument();
});

test('adds a new row when (+) Añadir is clicked', () => {
  render(
    <Router>
      <MainLayout 
        handleImportClick={() => {}} 
        fileInputRef={{ current: null }} 
        handleFileChange={() => {}} 
      />
    </Router>
  );

  // Verificar que el botón (+) Añadir se renderiza
  const addButton = screen.getByText('Añadir');
  expect(addButton).toBeInTheDocument();

  // Simular un clic en el botón (+) Añadir
  fireEvent.click(addButton);

  // Verificar que se ha añadido una nueva fila
  const newRow = screen.getByText('Nuevo Nombre');
  expect(newRow).toBeInTheDocument();
});