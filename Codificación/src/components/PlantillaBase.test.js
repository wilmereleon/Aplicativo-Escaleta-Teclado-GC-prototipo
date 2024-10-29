import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PlantillaBase from './PlantillaBase';

test('renders PlantillaBase component', () => {
  render(
    <Router>
      <PlantillaBase />
    </Router>
  );
  const linkElement = screen.getByText(/Elementos de la Escaleta/i);
  expect(linkElement).toBeInTheDocument();
});

test('adds a new row when "(+) Añadir" is clicked', () => {
  render(
    <Router>
      <PlantillaBase />
    </Router>
  );
  
  // Initial number of rows
  const initialRows = screen.getAllByRole('row').length;

  // Click the "(+) Añadir" button
  const addButton = screen.getByText(/Añadir/i);
  fireEvent.click(addButton);

  // Number of rows after adding a new one
  const newRows = screen.getAllByRole('row').length;

  // Check if a new row is added
  expect(newRows).toBe(initialRows + 1);
});