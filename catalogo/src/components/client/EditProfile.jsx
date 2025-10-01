import React, { useState } from 'react';

// Dados simulados do cliente. Em um app real, viriam do backend.
const clientData = {
  name: 'Ana Silva',
  email: 'cliente@test.com',
};

function EditProfile() {
  const [name, setName] = useState(clientData.name);
  const [email, setEmail] = useState(clientData.email);
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Perfil atualizado com sucesso! (Simulação)');
  };

  return (
    <div>
      <h2 style={{ fontSize: '1.8em', color: '#2c3e50', marginBottom: '20px' }}>Editar Meu Perfil</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome Completo"
          style={{ padding: '12px', borderRadius: '5px', border: '1-x solid #ccc' }}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nova Senha (deixe em branco para não alterar)"
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '12px', borderRadius: '5px', border: 'none', backgroundColor: '#0056b3', color: 'white', fontWeight: 'bold' }}>
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}

export default EditProfile;

