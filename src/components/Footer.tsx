import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-saafe-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="inline-block mb-6">
            <img 
              src="https://lh3.googleusercontent.com/d/1Ubp0U_gBr0m0p0Ff8_NFSCYwRDukgxXW" 
              alt="SAAFE Logo" 
              className="h-16 w-auto brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            SAAFE – Sistema Avançado de Construção em EPS. Tecnologia, eficiência e inovação na construção civil de alto padrão.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/saafe_concreto_armado_thermo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saafe-green transition-colors">
              <Instagram size={20} />
            </a>
            <a href="mailto:saafe.bsb@gmail.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saafe-green transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Quick Menu */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-saafe-green pl-4 uppercase tracking-widest">Menu Rápido</h3>
          <ul className="space-y-4">
            <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/produtos" className="text-white/70 hover:text-white transition-colors">Produtos</Link></li>
            <li><Link to="/treinamento" className="text-white/70 hover:text-white transition-colors">Treinamento</Link></li>
            <li><Link to="/construcao" className="text-white/70 hover:text-white transition-colors">Construção</Link></li>
            <li><Link to="/contato" className="text-white/70 hover:text-white transition-colors">Contato</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-saafe-green pl-4 uppercase tracking-widest">Contato</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-saafe-green shrink-0 mt-1" />
              <span className="text-white/70">(61) 99963-8967</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-saafe-green shrink-0 mt-1" />
              <span className="text-white/70">saafe.bsb@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-saafe-green shrink-0 mt-1" />
              <span className="text-white/70">Distrito Federal | São Paulo | Minas Gerais</span>
            </li>
          </ul>
        </div>

        {/* Newsletter/CTA */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-saafe-green pl-4 uppercase tracking-widest">Inovação</h3>
          <p className="text-white/70 text-sm mb-6">
            Construa com a tecnologia que está revolucionando o mercado brasileiro.
          </p>
          <Link to="/contato" className="inline-block bg-saafe-green text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-opacity-90 transition-all">
            SOLICITAR CONSULTORIA
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
        <p>© {new Date().getFullYear()} SAAFE ENGENHARIA. Todos os direitos reservados.</p>
        <p className="font-bold tracking-widest uppercase">SEJA SAAFE VOCÊ TAMBÉM</p>
      </div>
    </footer>
  );
}
