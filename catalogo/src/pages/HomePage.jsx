import React from 'react';
import CarCard from '../components/CarCard';

function HomePage({ carros }) {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Alteração: 
        - O título foi refeito para um estilo mais limpo e moderno.
        - Utiliza a fonte padrão do site ("Rajdhani").
        - A cor foi alterada para um cinza claro para ótimo contraste.
        - Removidos os efeitos de gradiente e sombra.
      */}
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-gray-100 tracking-tight">
        Catálogo de Carros
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {carros.map((carro) => (
          <CarCard key={carro.id} carro={carro} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;

