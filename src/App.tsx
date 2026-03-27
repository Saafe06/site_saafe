import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Products from './pages/Products';
import Training from './pages/Training';
import Assessoria from './pages/Assessoria';
import Construction from './pages/Construction';
import Contact from './pages/Contact';

function PageSetup() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Dynamic Title Logic
    const titles: { [key: string]: string } = {
      '/': 'SAAFE - Engenharia e Construção em EPS',
      '/produtos': 'SAAFE - Produtos',
      '/treinamento': 'SAAFE - Treinamento Especializado',
      '/assessoria': 'SAAFE - Assessoria Empresarial',
      '/construcao': 'SAAFE - Construção',
      '/contato': 'SAAFE - Contato',
    };

    document.title = titles[pathname] || 'SAAFE - Engenharia e Construção em EPS';
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <PageSetup />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/treinamento" element={<Training />} />
            <Route path="/assessoria" element={<Assessoria />} />
            <Route path="/construcao" element={<Construction />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
