import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app component', () => {
  render(<App />);
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});

test('renders welcome message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText('Welcome to the App!');
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});