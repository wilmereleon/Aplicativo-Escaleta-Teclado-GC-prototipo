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

app.post('/updateExcel', (req, res) => {
  const { id, solapa, titulo } = req.body;
  const filePath = path.join(__dirname, 'Excel', 'DE_CICLISMO_2023.xlsx');
  
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`El archivo no existe en la ruta: ${filePath}`);
    }

    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets['TITULOS'];

    // Buscar la fila correspondiente al ID
    let row = 2; // Asumiendo que los IDs empiezan en la fila 2
    while (worksheet[`A${row}`] && worksheet[`A${row}`].v !== id) {
      row++;
    }

    if (!worksheet[`A${row}`]) {
      throw new Error(`ID ${id} no encontrado en la columna A`);
    }

    // Insertar los datos en las columnas B y C
    worksheet[`B${row}`] = { v: solapa || '' };
    worksheet[`C${row}`] = { v: titulo || '' };

    XLSX.writeFile(workbook, filePath);
    res.send('Excel actualizado correctamente');
  } catch (error) {
    console.error('Error al actualizar el archivo Excel:', error.message);
    res.status(500).send(`Error al actualizar el archivo Excel: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});