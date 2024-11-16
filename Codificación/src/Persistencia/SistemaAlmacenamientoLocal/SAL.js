class SAL {
  static async almacenarPaginas(paginas) {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Entorno del navegador
      localStorage.setItem('paginas', JSON.stringify(paginas));
    } else {
      // Entorno del servidor
      const response = await fetch('http://localhost:3001/storePages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paginas }),
      });

      if (!response.ok) {
        throw new Error('Error al almacenar las páginas en el servidor');
      }
    }
  }

  static async obtenerPaginas() {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Entorno del navegador
      const paginas = localStorage.getItem('paginas');
      return paginas ? JSON.parse(paginas) : [];
    } else {
      // Entorno del servidor
      const response = await fetch('http://localhost:3001/getPages', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener las páginas del servidor');
      }

      const data = await response.json();
      return data.paginas;
    }
  }
}

module.exports = SAL;