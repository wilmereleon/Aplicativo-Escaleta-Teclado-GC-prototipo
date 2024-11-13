import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PlantillaBase from './PlantillaBase';

/**
 * Prueba para verificar que el componente PlantillaBase se renderiza correctamente.
 */
test('renders PlantillaBase component', () => {
  // Renderizar el componente PlantillaBase dentro de un Router
  render(
    <Router>
      <PlantillaBase />
    </Router>
  );

  // Buscar el elemento que contiene el texto "Elementos de la Escaleta"
  const linkElement = screen.getByText(/Elementos de la Escaleta/i);

  // Verificar que el elemento está en el documento
  expect(linkElement).toBeInTheDocument();
});

/**
 * Prueba para verificar que se agrega una nueva fila cuando se hace clic en el botón "(+) Añadir".
 */
test('adds a new row when "(+) Añadir" is clicked', () => {
  // Renderizar el componente PlantillaBase dentro de un Router
  render(
    <Router>
      <PlantillaBase />
    </Router>
  );

  // Obtener el número inicial de filas
  const initialRows = screen.getAllByRole('row').length;

  // Hacer clic en el botón "(+) Añadir"
  const addButton = screen.getByText(/Añadir/i);
  fireEvent.click(addButton);

  // Obtener el número de filas después de agregar una nueva
  const newRows = screen.getAllByRole('row').length;

  // Verificar que se ha agregado una nueva fila
  expect(newRows).toBe(initialRows + 1);
});