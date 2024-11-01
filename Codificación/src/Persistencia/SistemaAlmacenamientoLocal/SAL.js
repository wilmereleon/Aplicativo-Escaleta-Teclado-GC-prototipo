const fs = require('browserify-fs');
const path = require('path-browserify');

class SAL {
  procesarSolicitudes() {}

  almacenarDatos(datos) {
    const filePath = path.join(__dirname, 'ultimaPlantilla.etgc');
    fs.writeFile(filePath, JSON.stringify(datos), 'utf8', (err) => {
      if (err) throw err;
      console.log('Datos almacenados correctamente.');
    });
  }

  recuperarDatos() {
    const filePath = path.join(__dirname, 'ultimaPlantilla.etgc');
    if (fs.existsSync(filePath)) {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        return JSON.parse(data);
      });
    }
    return null;
  }
}

module.exports = SAL;