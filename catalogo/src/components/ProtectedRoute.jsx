import React from 'react';
import { Navigate } from 'react-router-dom';

// Este componente funciona como um guardião
function ProtectedRoute({ isLoggedIn, children }) {
  // Se o usuário NÃO estiver logado, ele redireciona para a página de login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Se estiver logado, ele mostra o conteúdo que deveria (no nosso caso, o AdminPage)
  return children;
}

export default ProtectedRoute;
