import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-saafe-petroleum text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 md:border-r border-white/12 pr-8">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <img 
              src="https://lh3.googleusercontent.com/d/1Ubp0U_gBr0m0p0Ff8_NFSCYwRDukgxXW" 
              alt="SAAFE Logo" 
              className="h-16 w-auto brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <span className="text-2xl font-bold tracking-tighter">SAAFE</span>
          </Link>
          <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
            SAAFE – Sistema Avançado de Construção em EPS. Tecnologia, eficiência e inovação na construção civil de alto padrão.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/saafe_concreto_armado_thermo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saafe-green transition-colors">
              <Instagram size={20} />
            </a>
            <a href="mailto:contato@saafe.com.br" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saafe-green transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Quick Menu */}
        <div className="md:border-r border-white/12 pr-8">
          <h3 className="text-sm font-bold mb-6 text-saafe-green uppercase tracking-[2px]">Menu Rápido</h3>
          <ul className="space-y-4">
            <li><Link to="/" className="text-white/70 hover:text-saafe-green transition-colors font-light">Home</Link></li>
            <li><Link to="/produtos" className="text-white/70 hover:text-saafe-green transition-colors font-light">Produtos</Link></li>
            <li><Link to="/assessoria" className="text-white/70 hover:text-saafe-green transition-colors font-light">Assessoria Empresarial</Link></li>
            <li><Link to="/construcao" className="text-white/70 hover:text-saafe-green transition-colors font-light">Construção</Link></li>
            <li><Link to="/contato" className="text-white/70 hover:text-saafe-green transition-colors font-light">Contato</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:border-r border-white/12 pr-8">
          <h3 className="text-sm font-bold mb-6 text-saafe-green uppercase tracking-[2px]">Contato</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-saafe-green shrink-0 mt-1" />
              <a href="https://wa.me/5519999971625?text=gostaria%20de%20saber%20mais.." target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-saafe-green transition-colors font-light">
                (19) 99997-1625
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-saafe-green shrink-0 mt-1" />
              <span className="text-white/70 font-light">contato@saafe.com.br</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-saafe-green shrink-0 mt-1" />
              <span className="text-white/70 font-light">Distrito Federal | São Paulo | Minas Gerais</span>
            </li>
          </ul>
        </div>

        {/* Newsletter/CTA */}
        <div>
          <h3 className="text-sm font-bold mb-6 text-saafe-green uppercase tracking-[2px]">Inovação</h3>
          <p className="text-white/70 text-sm mb-6 font-light">
            Construa com a tecnologia que está revolucionando o mercado brasileiro.
          </p>
          <Link to="/contato" className="inline-block bg-saafe-green text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-saafe-petroleum transition-all border border-transparent hover:border-saafe-green">
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
