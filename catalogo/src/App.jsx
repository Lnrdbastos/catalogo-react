import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

// Importando páginas
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import ClientDashboardPage from './pages/ClientDashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ContactPage from './pages/ContactPage';

// Componentes
import ProtectedRoute from './components/ProtectedRoute';

// Lista inicial de carros
const initialCarData = [ { id: 1, name: 'Ford Mustang GT', model: 'Mustang GT Premium', year: 2022, km: '15.000 km', color: 'Vermelho', description: 'Um ícone de performance e design. Motor V8 potente, interior luxuoso e tecnologia de ponta para a sua melhor experiência ao dirigir.', price: 'R$ 380.000,00', imageUrl: 'https://live.dealer-asset.co/images/br1001/news/ford-brasil-noticia-mustang-gt-lancamento-lote-esgotado-260324.jpg?s=1024', colorClass: 'text-red-600', estoque: 5 }, { id: 2, name: 'Toyota Corolla Altis Premium', model: 'Altis Premium Hybrid', year: 2023, km: '5.000 km', color: 'Branco Perolizado', description: 'Conforto, economia e a confiabilidade Toyota. Versão híbrida, ideal para a cidade e estrada.', price: 'R$ 185.990,00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlzO7R0rEf5SayDHfzgVpJcdH_w_mpxy6GDg&s', colorClass: 'text-gray-500', estoque: 8 }, { id: 3, name: 'Volkswagen T-Cross Highline', model: '250 TSI Automático', year: 2021, km: '45.000 km', color: 'Azul Acqua', description: 'SUV compacto com excelente espaço interno, motor turbo e muitos recursos de segurança e tecnologia.', price: 'R$ 135.000,00', imageUrl: 'https://cdn.motor1.com/images/mgl/Ee7Xo/s1/volkswagen-t-cross-highline-250-tsi.jpg', colorClass: 'text-blue-500', estoque: 10 }, { id: 4, name: 'BMW 320i M Sport', model: 'G20 320i M Sport', year: 2020, km: '60.000 km', color: 'Preto Safira', description: 'Sedan esportivo com a performance e o luxo característicos da BMW. Pacote M Sport completo.', price: 'R$ 220.000,00', imageUrl: 'https://autobusiness.com.br/_next/image?url=https%3A%2F%2Fd20f7dynuzdeeg.cloudfront.net%2Fpdkmotors%2F3492%2Falbum-Album-de-BMW-320i-A2904-613b515ea3a58.jpg&w=828&q=100', colorClass: 'text-gray-900', estoque: 4 }, { id: 5, name: 'Honda Civic Touring', model: 'G10 Touring 1.5 Turbo', year: 2019, km: '75.000 km', color: 'Prata Lunar', description: 'Um clássico da Honda, com motor turbo eficiente e interior espaçoso e tecnológico. Ótimo custo-benefício.', price: 'R$ 115.000,00', imageUrl: 'https://www.honda.com.br/automoveis/sites/hab/files/2020-05/civic2020_tour_3_4_frontal_a_alta_lunas_silver_metallic.jpg', colorClass: 'text-purple-700', estoque: 7 }, { id: 6, name: 'Jeep Renegade Trailhawk', model: '2.0 Diesel 4x4 Automático', year: 2022, km: '20.000 km', color: 'Cinza Granite', description: 'Ideal para aventura, com capacidade off-road, motor diesel potente e um interior robusto e confortável.', price: 'R$ 170.000,00', imageUrl: 'https://carroscomcamanzi.com.br/wp-content/uploads/2023/06/Renegade-2024.jpg', colorClass: 'text-gray-600', estoque: 6 } ];


function Navigation({ user, onLogout }) {
  const navigate = useNavigate();
  const handleLogoutClick = () => { onLogout(); navigate('/'); };
  const linkStyle = "text-white text-lg hover:text-blue-300 transition-colors duration-200";
  const buttonStyle = "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200";

  return (
    <header className="bg-gray-800 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center">
            <div className="flex items-center gap-6">
              <Link to="/" className={linkStyle}>Catálogo</Link>
              <Link to="/contato" className={linkStyle}>Contato</Link>
              
              {user?.type === 'admin' && <Link to="/admin" className={linkStyle}>Painel Gerencial</Link>}
              {user?.type === 'client' && <Link to="/meu-painel" className={linkStyle}>Meu Painel</Link>}
              
              {user ? (
                <button onClick={handleLogoutClick} className={buttonStyle}>Sair</button>
              ) : (
                <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">Login</Link>
              )}
            </div>
        </nav>
    </header>
  );
}

// Componente de Rodapé
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-end">
        <div className="flex items-center gap-5">
          {/* Ícone do Instagram (mantido) */}
          <div className="cursor-pointer hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </div>
          {/* Ícone do YouTube */}
          <div className="cursor-pointer hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </div>
          {/* Alteração: Ícone da rede social X */}
          <div className="cursor-pointer hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>
          </div>
        </div>
        <p className="ml-6 text-sm">
          &copy; {new Date().getFullYear()} Catálogo de Carros. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};


function App() {
  const [carros, setCarros] = useState(initialCarData);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [messages, setMessages] = useState([]);

  const adicionarCarro = (novoCarro) => { setCarros(prevCarros => [...prevCarros, novoCarro]); };
  const handleSendMessage = (newMessage) => { setMessages(prevMessages => [...prevMessages, newMessage]); };
  const handleLogin = (userData) => { localStorage.setItem('user', JSON.stringify(userData)); setUser(userData); };
  const handleLogout = () => { localStorage.removeItem('user'); setUser(null); };

  return (
    <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 font-sans flex flex-col">
            <Navigation user={user} onLogout={handleLogout} />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage carros={carros} />} />
                    <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="/contato" element={<ContactPage handleSendMessage={handleSendMessage} />} />
                    <Route path="/admin" element={<ProtectedRoute isLoggedIn={user?.type === 'admin'}><AdminPage carros={carros} adicionarCarro={adicionarCarro} messages={messages} /></ProtectedRoute>} />
                    <Route path="/meu-painel" element={<ProtectedRoute isLoggedIn={!!user}><ClientDashboardPage /></ProtectedRoute>} />
                </Routes>
            </main>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;











