import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Funcionalidade de cadastro a ser implementada com um backend!');
  }

  return (
    <div className="catalog-container" style={{ maxWidth: '450px', marginTop: '50px' }}>
        <h1 style={{ fontSize: '2em' }}>Criar Nova Conta</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Nome Completo" required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="email" placeholder="Seu melhor email" required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="password" placeholder="Crie uma senha forte" required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <button type="submit" style={{ padding: '12px', borderRadius: '5px', border: 'none', backgroundColor: '#28a745', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                Cadastrar
            </button>
            <Link to="/login" style={{ textAlign: 'center', marginTop: '10px', color: '#0056b3' }}>Já tenho uma conta</Link>
        </form>
    </div>
  );
}

export default RegisterPage;
