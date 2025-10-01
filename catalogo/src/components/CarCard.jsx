import React from 'react';

function CarCard({ carro }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="w-full h-56 overflow-hidden">
        <img src={carro.imageUrl} alt={`Foto do ${carro.name}`} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-blue-800 mb-3 pb-3 border-b-2 border-gray-100">{carro.name}</h2>
        <p className="my-1 text-gray-700">
          <strong className="font-semibold text-gray-900 mr-2">Modelo:</strong> {carro.model}
        </p>
        <p className="my-1 text-gray-700">
          <strong className="font-semibold text-gray-900 mr-2">Ano:</strong> {carro.year}
        </p>
        <p className="my-1 text-gray-700">
          <strong className="font-semibold text-gray-900 mr-2">KM:</strong> {carro.km}
        </p>
        <p className="my-1 text-gray-700">
          <strong className="font-semibold text-gray-900 mr-2">Cor:</strong>
          <span className={carro.colorClass}>{carro.color}</span>
        </p>
        <p className="italic text-gray-600 my-4 flex-grow">{carro.description}</p>
        <p className="text-right text-3xl font-bold text-green-600 mt-auto pt-4 border-t border-dashed border-gray-200">
          {carro.price}
        </p>
      </div>
    </div>
  );
}

export default CarCard;
