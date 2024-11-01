const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@dominio': path.resolve(__dirname, 'src/dominio/ModelosDeDominio'),
      '@componentes': path.resolve(__dirname, 'src/components'),
      '@estilos': path.resolve(__dirname, 'src/styles'),
      // Agrega más alias según sea necesario
    },
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        "fs": require.resolve("browserify-fs"),
        "path": require.resolve("path-browserify"),
        "util": require.resolve("util/"),
        "buffer": require.resolve("buffer/"),
        "stream": require.resolve("stream-browserify")
      };
      return webpackConfig;
    }
  }
};