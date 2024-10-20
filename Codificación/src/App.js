import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import VistaPlantillas from './components/VistaPlantillas';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/vista-plantillas" element={<VistaPlantillas />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="container" data-testid="app">
    <header className="header d-flex justify-content-between align-items-center">
      <div className="logo d-flex align-items-center">
        <img src="/images/logo.png" alt="Logo" />
        <h1 className="h4 mb-0">ETgc</h1>
      </div>
      <nav className="menu d-flex align-items-center gap-4">
        <div className="menu-item d-flex align-items-center gap-2">
          <div className="position-relative">
            <div className="position-absolute" style={{ width: 18, height: 18, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 4.5, height: 2.25, left: 6.75, top: 13.5, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 12.37, height: 11.25, left: 2.82, top: 2.25, border: '1.12px #1F2937 solid' }}></div>
          </div>
          <span>Notifications</span>
        </div>
        <div className="menu-item d-flex align-items-center gap-2">
          <div className="position-relative">
            <div className="position-absolute" style={{ width: 18, height: 18, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 5.62, height: 5.62, left: 6.19, top: 6.19, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 14.62, height: 13.5, left: 1.69, top: 2.25, border: '1.12px #1F2937 solid' }}></div>
          </div>
          <span>Settings</span>
        </div>
        <div className="menu-item d-flex align-items-center gap-2">
          <div className="position-relative">
            <div className="position-absolute" style={{ width: 18, height: 18, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 9, height: 9, left: 4.5, top: 2.25, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 13.5, height: 3.94, left: 2.25, top: 11.25, border: '1.12px #1F2937 solid' }}></div>
          </div>
          <span>Profile</span>
        </div>
      </nav>
    </header>
    <div className="d-flex">
      <aside className="sidebar">
        <div className="menu-item">
          <div className="position-relative me-2">
            <div className="position-absolute" style={{ width: 18, height: 18, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 12.38, height: 12.94, left: 2.81, top: 2.25, border: '1.12px #1F2937 solid' }}></div>
          </div>
          <span>Inicio</span>
        </div>
        <div className="menu-item">
          <div className="position-relative me-2">
            <div className="position-absolute" style={{ width: 18, height: 18, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 11.25, height: 13.5, left: 3.38, top: 2.25, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 3.94, height: 3.94, left: 10.69, top: 2.25, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 4.5, height: 0, left: 6.75, top: 11.81, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 4.5, height: 0, left: 6.75, top: 9.56, border: '1.12px #1F2937 solid' }}></div>
          </div>
          <span>Plantillas</span>
        </div>
        <div className="menu-item">
          <div className="position-relative me-2">
            <div className="position-absolute" style={{ width: 18, height: 18, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 1.69, height: 1.69, left: 5.62, top: 9, background: '#1F2937' }}></div>
            <div className="position-absolute" style={{ width: 1.69, height: 1.69, left: 10.69, top: 9, background: '#1F2937' }}></div>
            <div className="position-absolute" style={{ width: 6.54, height: 11.82, left: 10.34, top: 3.37, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 6.54, height: 11.82, left: 1.13, top: 3.37, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 6.75, height: 0.44, left: 5.62, top: 5.06, border: '1.12px #1F2937 solid' }}></div>
            <div className="position-absolute" style={{ width: 6.75, height: 0.44, left: 5.62, top: 12.49, border: '1.12px #1F2937 solid' }}></div>
          </div>
          <span>Históricos</span>
        </div>
      </aside>
      <main className="content">
        <div className="mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="h4">Programas</h2>
            <button className="btn btn-primary">Crear nuevo</button>
          </div>
        </div>
        <div className="programs">
          <h3 className="h5">DCSHA</h3>
          <p>De ciclismo de habla así</p>
          <div className="d-flex align-items-center gap-2">
            <Link to="/vista-plantillas" className="btn btn-link">Ingresar</Link>
            <button className="btn btn-link">Importar proyecto</button>
          </div>
        </div>
      </main>
    </div>
    <footer className="footer">
      <span>© 2024 Torneos SAS | Colombia</span>
      <div className="d-flex gap-4">
        <a href="#">Políticas</a>
        <a href="#">Términos de servicio</a>
        <a href="#">Contacto</a>
      </div>
    </footer>
  </div>
);

export default App;