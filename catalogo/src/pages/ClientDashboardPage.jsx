import React, { useState } from 'react';
import EditProfile from '../components/client/EditProfile';
import ReservedCars from '../components/client/ReservedCars';

const ProductRating = () => (
    <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Avaliar Produtos</h2>
        <p className="text-gray-600">Aqui você poderá avaliar os carros que já utilizou. (Funcionalidade em construção)</p>
    </div>
);

function ClientDashboardPage() {
  const [activeTab, setActiveTab] = useState('reservations');

  const getTabClass = (tabName) =>
    `py-2 px-4 font-semibold transition-colors focus:outline-none ${activeTab === tabName ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`;

  const renderContent = () => {
    switch (activeTab) {
      case 'reservations': return <ReservedCars />;
      case 'rating': return <ProductRating />;
      case 'profile': return <EditProfile />;
      default: return <ReservedCars />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Alteração: Cor do texto mudou para text-gray-100 */}
      <h1 className="text-3xl font-bold text-gray-100 mb-8">Meu Painel</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            <button onClick={() => setActiveTab('reservations')} className={getTabClass('reservations')}>Reservas</button>
            <button onClick={() => setActiveTab('rating')} className={getTabClass('rating')}>Avaliações</button>
            <button onClick={() => setActiveTab('profile')} className={getTabClass('profile')}>Meu Perfil</button>
          </nav>
        </div>
        <div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default ClientDashboardPage;

