import React from 'react';
import './RelojEscaleta.css';

const RelojEscaleta = () => {
  return (
    <div className="fixed-section">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <label className="block text-xs font-medium text-gray-700">Al aire</label>
          </div>
          <div className="col">
            <label className="block text-xs font-medium text-gray-700">Tiempo recorrido</label>
            <input type="text" className="mt-1 block w-full shadow-sm sm:text-xs border-gray-300 rounded-md tiempo-recorrido" placeholder="00:00:00" />
          </div>
          <div className="col">
            <label className="block text-xs font-medium text-gray-700">Tiempo de más</label>
            <input type="text" className="mt-1 block w-full shadow-sm sm:text-xs border-gray-300 rounded-md tiempo-mas" placeholder="00:00:00" />
          </div>
          <div className="col">
            <label className="block text-xs font-medium text-gray-700">Tiempo en curso</label>
            <input type="text" className="mt-1 block w-full shadow-sm sm:text-xs border-gray-300 rounded-md tiempo-curso" placeholder="00:00:00" />
          </div>
          <div className="col">
            <label className="block text-xs font-medium text-gray-700">Tiempo total</label>
            <input type="text" className="mt-1 block w-full shadow-sm sm:text-xs border-gray-300 rounded-md tiempo-total" placeholder="00:00:00" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelojEscaleta;