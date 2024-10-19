import React from 'react';

function App() {
  return (
    <div className="container" style={{ width: 1366, height: 1024, background: 'white' }}>
      <div className="d-flex justify-content-between align-items-center p-3" style={{ background: '#F3F4F6' }}>
        <div className="d-flex align-items-center">
          <img src="https://via.placeholder.com/34x35" alt="Logo" className="me-3" />
          <h1 className="h4 mb-0">ETgc</h1>
        </div>
        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-2">
            <div className="position-relative">
              <div className="position-absolute" style={{ width: 18, height: 18, border: '1.12px #1F2937 solid' }}></div>
              <div className="position-absolute" style={{ width: 4.5, height: 2.25, left: 6.75, top: 13.5, border: '1.12px #1F2937 solid' }}></div>
              <div className="position-absolute" style={{ width: 12.37, height: 11.25, left: 2.82, top: 2.25, border: '1.12px #1F2937 solid' }}></div>
            </div>
            <span>Notifications</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="position-relative">
              <div className="position-absolute" style={{ width: 18, height: 18, border: '1.12px #1F2937 solid' }}></div>
              <div className="position-absolute" style={{ width: 5.62, height: 5.62, left: 6.19, top: 6.19, border: '1.12px #1F2937 solid' }}></div>
              <div className="position-absolute" style={{ width: 14.62, height: 13.5, left: 1.69, top: 2.25, border: '1.12px #1F2937 solid' }}></div>
            </div>
            <span>Settings</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="position-relative">
              <div className="position-absolute" style={{ width: 18, height: 18, border: '1.12px #1F2937 solid' }}></div>
              <div className="position-absolute" style={{ width: 9, height: 9, left: 4.5, top: 2.25, border: '1.12px #1F2937 solid' }}></div>
              <div className="position-absolute" style={{ width: 13.5, height: 3.94, left: 2.25, top: 11.25, border: '1.12px #1F2937 solid' }}></div>
            </div>
            <span>Profile</span>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="p-3" style={{ background: '#F9FAFB', width: '25%' }}>
          <div className="mb-3">
            <div className="d-flex align-items-center p-2 rounded" style={{ background: '#E5E7EB' }}>
              <div className="position-relative me-2">
                <div className="position-absolute" style={{ width: 18, height: 18, border: '1.12px #1F2937 solid' }}></div>
                <div className="position-absolute" style={{ width: 12.38, height: 12.94, left: 2.81, top: 2.25, border: '1.12px #1F2937 solid' }}></div>
              </div>
              <span>Inicio</span>
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex align-items-center p-2 rounded" style={{ background: '#E5E7EB' }}>
              <div className="position-relative me-2">
                <div className="position-absolute" style={{ width: 18, height: 18, border: '1.12px #1F2937 solid' }}></div>
                <div className="position-absolute" style={{ width: 11.25, height: 13.5, left: 3.38, top: 2.25, border: '1.12px #1F2937 solid' }}></div>
                <div className="position-absolute" style={{ width: 3.94, height: 3.94, left: 10.69, top: 2.25, border: '1.12px #1F2937 solid' }}></div>
                <div className="position-absolute" style={{ width: 4.5, height: 0, left: 6.75, top: 11.81, border: '1.12px #1F2937 solid' }}></div>
                <div className="position-absolute" style={{ width: 4.5, height: 0, left: 6.75, top: 9.56, border: '1.12px #1F2937 solid' }}></div>
              </div>
              <span>Plantillas</span>
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex align-items-center p-2 rounded" style={{ background: '#E5E7EB' }}>
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
          </div>
        </div>
        <div className="p-3" style={{ background: 'white', width: '75%' }}>
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="h4">Programas</h2>
              <button className="btn btn-primary">Crear nuevo</button>
            </div>
          </div>
          <div className="mb-3">
            <div className="p-3 rounded" style={{ background: '#F9FAFB' }}>
              <h3 className="h5">DCSHA</h3>
              <p>De ciclismo de habla así</p>
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-link">Ingresar</button>
                <button className="btn btn-link">Importar proyecto</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="d-flex justify-content-between align-items-center p-3" style={{ background: '#F3F4F6' }}>
        <span>© 2024 Torneos SAS | Colombia</span>
        <div className="d-flex gap-4">
          <a href="#">Políticas</a>
          <a href="#">Términos de servicio</a>
          <a href="#">Contacto</a>
        </div>
      </footer>
    </div>
  );
}

export default App;