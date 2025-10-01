import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactPage({ handleSendMessage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = { id: Date.now(), name, email, message, date: new Date().toLocaleString('pt-BR') };
    handleSendMessage(newMessage);
    alert('Sua mensagem foi enviada com sucesso!');
    navigate('/');
  };

  return (
    // Alteração: Adicionado flexbox para centralizar o container
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Alteração: Adicionado max-w-2xl e w-full para controlar o tamanho */}
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Fale Conosco</h2>
              <p className="mt-4 text-lg text-gray-600">
                  Tem alguma dúvida ou sugestão? Preencha o formulário abaixo.
              </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <input type="text" placeholder="Seu Nome" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              <input type="email" placeholder="Seu Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              {/* Alteração: Adicionada a classe "resize-none" para impedir o redimensionamento */}
              <textarea placeholder="Sua mensagem" value={message} onChange={(e) => setMessage(e.target.value)} required rows="5" className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none" />
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Enviar Mensagem
              </button>
          </form>
      </div>
    </div>
  );
}

export default ContactPage;

