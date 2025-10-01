import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPasswordPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Funcionalidade de recuperação de senha a ser implementada com um backend!');
    }

  return (
    <div className="catalog-container" style={{ maxWidth: '450px', marginTop: '50px' }}>
        <h1 style={{ fontSize: '2em' }}>Recuperar Senha</h1>
        <p style={{textAlign: 'center', color: '#666', marginBottom: '20px'}}>Insira seu email para receber o link de recuperação.</p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="email" placeholder="Email cadastrado" required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <button type="submit" style={{ padding: '12px', borderRadius: '5px', border: 'none', backgroundColor: '#ffc107', color: 'black', fontWeight: 'bold', cursor: 'pointer' }}>
                Enviar Link
            </button>
            <Link to="/login" style={{ textAlign: 'center', marginTop: '10px', color: '#0056b3' }}>Voltar para o Login</Link>
        </form>
    </div>
  );
}

export default ForgotPasswordPage;
