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
  const { id, solapa, titulo, fileName } = req.body;
  const filePath = path.join(__dirname, 'Excel', fileName);
  
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`El archivo ${fileName} no existe en la ruta: ${filePath}`);
    }

    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets['Hoja1'];

    if (!worksheet) {
      throw new Error(`La hoja 'Hoja1' no existe en el archivo Excel ${fileName}`);
    }

    // Buscar la fila correspondiente al ID
    let row = 2; // Asumiendo que los IDs empiezan en la fila 2
    const idStr = String(id); // Convertir el ID a cadena
    console.log(`Buscando ID: ${idStr} en ${fileName}`);
    while (worksheet[`A${row}`] && String(worksheet[`A${row}`].v) !== idStr) {
      row++;
    }

    if (!worksheet[`A${row}`]) {
      console.error(`Contenido de la columna A en ${fileName}:`);
      for (let i = 2; worksheet[`A${i}`]; i++) {
        console.error(`Fila ${i}: ${worksheet[`A${i}`].v}`);
      }
      throw new Error(`ID ${id} no encontrado en la columna A de ${fileName}`);
    }

    // Insertar los datos en las columnas B y C
    worksheet[`B${row}`] = { v: solapa || '' };
    worksheet[`C${row}`] = { v: titulo || '' };

    XLSX.writeFile(workbook, filePath);
    res.send(`Excel ${fileName} actualizado correctamente`);
  } catch (error) {
    if (error.code === 'EBUSY') {
      console.error(`El archivo ${fileName} está siendo utilizado por otro proceso. Asegúrate de que el archivo no esté abierto en otra aplicación.`);
    } else {
      console.error(`Error al actualizar el archivo Excel ${fileName}:`, error.message);
    }
    res.status(500).send(`Error al actualizar el archivo Excel ${fileName}: ${error.message}`);
  }
});

/**
 * Ruta para almacenar las páginas de las filas
 * Esta ruta recibe una solicitud POST con las páginas de las filas y las almacena en un archivo Excel.
 */
app.post('/storePages', (req, res) => {
  const { paginas, fileName } = req.body;
  const filePath = path.join(__dirname, 'Excel', fileName);

  try {
    let workbook;
    let worksheet;

    if (fs.existsSync(filePath)) {
      workbook = XLSX.readFile(filePath);
      worksheet = workbook.Sheets['Hoja1'];
    } else {
      workbook = XLSX.utils.book_new();
      worksheet = XLSX.utils.aoa_to_sheet([['Página', 'Tipo', 'Tiempo de inicio', 'Duración', 'Tiempo ejecutado']]);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Hoja1');
    }

    // Agregar las páginas al archivo Excel
    const startRow = XLSX.utils.decode_range(worksheet['!ref']).e.r + 2;
    paginas.forEach((pagina, index) => {
      const row = startRow + index;
      worksheet[`A${row}`] = { v: pagina.pagina };
      worksheet[`B${row}`] = { v: pagina.tipo };
      worksheet[`C${row}`] = { v: pagina.tiempoInicio };
      worksheet[`D${row}`] = { v: pagina.duracion };
      worksheet[`E${row}`] = { v: pagina.tiempoEjecutado };
    });

    XLSX.writeFile(workbook, filePath);
    res.send(`Páginas almacenadas correctamente en ${fileName}`);
  } catch (error) {
    console.error(`Error al almacenar las páginas en ${fileName}:`, error.message);
    res.status(500).send(`Error al almacenar las páginas en ${fileName}: ${error.message}`);
  }
});

/**
 * Ruta para obtener las páginas de las filas
 * Esta ruta recibe una solicitud GET y devuelve las páginas almacenadas en el archivo Excel.
 */
app.get('/getPages', (req, res) => {
  const { fileName } = req.query;
  const filePath = path.join(__dirname, 'Excel', fileName);

  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`El archivo ${fileName} no existe en la ruta: ${filePath}`);
    }

    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets['Hoja1'];
    const range = XLSX.utils.decode_range(worksheet['!ref']);
    const paginas = [];

    for (let row = 2; row <= range.e.r; row++) {
      const pagina = {
        pagina: worksheet[`A${row}`] ? worksheet[`A${row}`].v : '',
        tipo: worksheet[`B${row}`] ? worksheet[`B${row}`].v : '',
        tiempoInicio: worksheet[`C${row}`] ? worksheet[`C${row}`].v : '',
        duracion: worksheet[`D${row}`] ? worksheet[`D${row}`].v : '',
        tiempoEjecutado: worksheet[`E${row}`] ? worksheet[`E${row}`].v : '',
      };
      paginas.push(pagina);
    }

    res.json({ paginas });
  } catch (error) {
    console.error(`Error al obtener las páginas de ${fileName}:`, error.message);
    res.status(500).send(`Error al obtener las páginas de ${fileName}: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});