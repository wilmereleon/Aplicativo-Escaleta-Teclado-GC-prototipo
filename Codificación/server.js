const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const XLSX = require('xlsx');
const cors = require('cors'); // Importar el middleware cors

const app = express();
const PORT = 3001;

app.use(cors()); // Usar el middleware cors
app.use(bodyParser.json());

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

/**
 * Ruta para actualizar el archivo Excel
 * Esta ruta recibe una solicitud POST con los datos del zócalo y actualiza el archivo Excel correspondiente.
 */
app.post('/updateExcel', (req, res) => {
  const { id, solapa, titulo } = req.body;
  const filePath = path.join(__dirname, 'Excel', 'DE_CICLISMO_2023.xlsx');
  
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`El archivo no existe en la ruta: ${filePath}`);
    }

    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets['TITULOS'];

    if (!worksheet) {
      throw new Error(`La hoja 'TITULOS' no existe en el archivo Excel`);
    }

    // Buscar la fila correspondiente al ID
    let row = 2; // Asumiendo que los IDs empiezan en la fila 2
    const idStr = String(id); // Convertir el ID a cadena
    console.log(`Buscando ID: ${idStr}`);
    while (worksheet[`A${row}`] && String(worksheet[`A${row}`].v) !== idStr) {
      row++;
    }

    if (!worksheet[`A${row}`]) {
      console.error(`Contenido de la columna A:`);
      for (let i = 2; worksheet[`A${i}`]; i++) {
        console.error(`Fila ${i}: ${worksheet[`A${i}`].v}`);
      }
      throw new Error(`ID ${id} no encontrado en la columna A`);
    }

    // Insertar los datos en las columnas B y C
    worksheet[`B${row}`] = { v: solapa || '' };
    worksheet[`C${row}`] = { v: titulo || '' };

    XLSX.writeFile(workbook, filePath);
    res.send('Excel actualizado correctamente');
  } catch (error) {
    if (error.code === 'EBUSY') {
      console.error('El archivo está siendo utilizado por otro proceso. Asegúrate de que el archivo no esté abierto en otra aplicación.');
    } else {
      console.error('Error al actualizar el archivo Excel:', error.message);
    }
    res.status(500).send(`Error al actualizar el archivo Excel: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});