const saveData = async (data, filename) => {
    try {
      const response = await fetch('http://localhost:3001/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data, filename }),
      });
  
      if (!response.ok) {
        throw new Error('Error al guardar los datos');
      }
  
      console.log('Datos guardados correctamente');
    } catch (error) {
      console.error('Error al guardar los datos:', error);
    }
  };
  
  export default saveData;