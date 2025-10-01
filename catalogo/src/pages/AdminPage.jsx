import React, { useState } from 'react';
import ContactMessages from '../components/admin/ContactMessages';

// Componentes internos estilizados
const ProductManagement = ({ carros, adicionarCarro }) => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Cadastrar Novo Carro</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Nome (Ex: Ford Mustang GT)" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
          <input type="number" placeholder="Estoque" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
          <textarea placeholder="Descrição" className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
            Salvar Produto
          </button>
        </form>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Estoque Atual</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b text-left">Nome do Carro</th>
                <th className="py-2 px-4 border-b text-left">Estoque</th>
                <th className="py-2 px-4 border-b text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {carros.map(carro => (
                <tr key={carro.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{carro.name}</td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 text-sm rounded-full ${carro.estoque > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {carro.estoque}
                    </span>
                  </td>
                  <td className="py-2 px-4">
                    <button className="text-blue-600 hover:underline">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function AdminPage({ carros, adicionarCarro, messages }) {
  const [activeTab, setActiveTab] = useState('products');

  const getTabClass = (tabName) => 
    `py-2 px-4 font-semibold rounded-t-lg transition-colors ${activeTab === tabName ? 'bg-white text-blue-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Alteração: Cor do texto mudou para text-gray-100 */}
      <h1 className="text-3xl font-bold text-gray-100 mb-6">Painel Gerencial</h1>
      <div className="flex border-b border-gray-300">
        <button onClick={() => setActiveTab('products')} className={getTabClass('products')}>
          Produtos e Estoque
        </button>
        <button onClick={() => setActiveTab('messages')} className={getTabClass('messages')}>
          Mensagens de Contato ({messages.length})
        </button>
      </div>
      <div className="bg-white p-6 rounded-b-lg rounded-r-lg shadow-lg">
        {activeTab === 'products' ? (
          <ProductManagement carros={carros} adicionarCarro={adicionarCarro} />
        ) : (
          <ContactMessages messages={messages} />
        )}
      </div>
    </div>
  );
}

export default AdminPage;

