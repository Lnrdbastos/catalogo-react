import React from 'react';

// Lista simulada de carros reservados pelo cliente.
const reservedCarsData = [
  { id: 4, name: 'BMW 320i M Sport', imageUrl: 'https://autobusiness.com.br/_next/image?url=https%3A%2F%2Fd20f7dynuzdeeg.cloudfront.net%2Fpdkmotors%2F3492%2Falbum-Album-de-BMW-320i-A2904-613b515ea3a58.jpg&w=828&q=100' },
  { id: 6, name: 'Jeep Renegade Trailhawk', imageUrl: 'https://carroscomcamanzi.com.br/wp-content/uploads/2023/06/Renegade-2024.jpg' },
];

function ReservedCars() {
  return (
    <div>
      <h2 style={{ fontSize: '1.8em', color: '#2c3e50', marginBottom: '20px' }}>Meus Carros Reservados</h2>
      {reservedCarsData.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {reservedCarsData.map(car => (
            <li key={car.id} style={{ display: 'flex', alignItems: 'center', background: '#fdfdfd', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '15px' }}>
              <img src={car.imageUrl} alt={car.name} style={{ width: '120px', height: '80px', objectFit: 'cover', borderRadius: '5px', marginRight: '20px' }} />
              <span style={{ fontWeight: 'bold', fontSize: '1.1em' }}>{car.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Você ainda não possui carros reservados.</p>
      )}
    </div>
  );
}

export default ReservedCars;

