const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['@dominio']: path.resolve(__dirname, 'src/dominio/ModelosDeDominio'),
    ['@componentes']: path.resolve(__dirname, 'src/components'),
    ['@estilos']: path.resolve(__dirname, 'src/styles'),
    // Agrega más alias según sea necesario
  })
);