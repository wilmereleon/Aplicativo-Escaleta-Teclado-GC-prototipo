import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p className="text-sm text-gray-500">© 2024 Torneos SAS | Colombia</p>
        <div className="flex space-x-4">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Políticas</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Términos de servicio</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;