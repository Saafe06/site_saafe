import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'PRODUTOS', path: '/produtos' },
  { name: 'TREINAMENTO', path: '/treinamento' },
  { name: 'CONSTRUÇÃO', path: '/construcao' },
  { name: 'CONTATO', path: '/contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500 !bg-white/40 backdrop-blur-[15px] border-b border-white/20 shadow-sm"
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center py-3">
        <Link to="/" className="flex items-center group">
          <motion.img 
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            src="https://lh3.googleusercontent.com/d/1Ubp0U_gBr0m0p0Ff8_NFSCYwRDukgxXW" 
            alt="SAAFE Logo" 
            className="h-14 w-auto transition-all"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-[11px] font-bold tracking-widest transition-all duration-300 border-b-2',
                'text-saafe-dark',
                location.pathname === link.path 
                  ? 'border-saafe-green text-saafe-green font-black' 
                  : 'border-transparent hover:text-saafe-green'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contato" 
            className="px-6 py-2 rounded-full text-[11px] font-bold tracking-widest transition-all bg-saafe-green text-white hover:bg-saafe-blue"
          >
            ORÇAMENTO
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-saafe-dark" size={28} />
          ) : (
            <Menu className="text-saafe-dark" size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-lg font-bold py-2 border-b border-gray-100 flex justify-between items-center',
                    location.pathname === link.path ? 'text-saafe-green' : 'text-saafe-dark'
                  )}
                >
                  {link.name}
                  <ChevronRight size={18} />
                </Link>
              ))}
              <Link 
                to="/contato" 
                className="mt-4 bg-saafe-green text-white text-center py-4 rounded-xl font-bold"
              >
                SOLICITAR ORÇAMENTO
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
