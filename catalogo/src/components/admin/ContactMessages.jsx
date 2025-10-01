import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// A página recebe a função 'handleSendMessage' do App.jsx
function ContactPage({ handleSendMessage }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toLocaleString('pt-BR'), // Adiciona data e hora do envio
    };
    handleSendMessage(newMessage); // Envia a nova mensagem para o App.jsx
    alert('Sua mensagem foi enviada com sucesso!');
    navigate('/'); // Redireciona para a página inicial após o envio
  };

  return (
    <div className="catalog-container" style={{ maxWidth: '600px', marginTop: '50px' }}>
      <h1 style={{ fontSize: '2.2em' }}>Fale Conosco</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Tem alguma dúvida ou sugestão? Preencha o formulário abaixo.
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          placeholder="Seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="email"
          placeholder="Seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <textarea
          placeholder="Sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="6"
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '12px', borderRadius: '5px', border: 'none', backgroundColor: '#0056b3', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}

export default ContactPage;

