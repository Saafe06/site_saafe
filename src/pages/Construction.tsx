import { motion } from 'motion/react';
import { Home, Zap, Thermometer, ShieldCheck, MapPin } from 'lucide-react';

const gallery = [
  "https://lh3.googleusercontent.com/d/1ZABWf-gO0Nuxc_QbxsY4y9oB2H0Vm77P",
  "https://lh3.googleusercontent.com/d/1Q-IDGMU6xT4xgr6lcCWrKi9HnvmiSAC4",
  "https://lh3.googleusercontent.com/d/1qGNhUhOfAjSZ0UwciRh4gYcwLU7XkNYH",
  "https://lh3.googleusercontent.com/d/1niSDxKkWjbFdk7xu-kUpCky4yU3UFrM5",
  "https://lh3.googleusercontent.com/d/1UYxpmSbJwnPj4ztMh9IaODXkFwBFSMPU",
  "https://lh3.googleusercontent.com/d/1RS665w75P9hctp-0XmIr-j_Hnve8HM9A"
];

export default function Construction() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1N5yOLaHToimv2TxQ12gA2osbTHAvmUHm" 
            alt="Construção de Alto Padrão" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-saafe-blue/42 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-saafe-green font-bold tracking-[0.3em] uppercase text-xs mb-6 block"
          >
            Execução de Obras
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Construção de <span className="text-saafe-green">Alto Padrão</span>
          </motion.h1>
        </div>
      </section>

      <div className="py-24 max-w-7xl mx-auto px-6">
        {/* Main Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-40 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-gray-600 leading-relaxed mb-12 font-light">
              Além de fornecer o sistema construtivo, a SAAFE também atua como construtora especializada em obras executadas com painéis monolíticos em EPS. Nossa equipe possui experiência prática no desenvolvimento de projetos residenciais modernos, eficientes e sustentáveis.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: <Zap size={24} />, title: "Execução mais rápida", desc: "Redução de até 40% no tempo total de obra." },
                { icon: <ShieldCheck size={24} />, title: "Estrutura resistente", desc: "Sistema monolítico de alta segurança." },
                { icon: <Thermometer size={24} />, title: "Conforto térmico", desc: "Ambientes com temperatura ideal o ano todo." },
                { icon: <Home size={24} />, title: "Arquitetura Moderna", desc: "Liberdade criativa para projetos sofisticados." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-saafe-gray rounded-2xl hover:bg-white shadow-[0_4px_20px_rgba(0,81,103,0.05)] hover:shadow-xl transition-all duration-500 group border-2 border-transparent hover:border-saafe-green"
                >
                  <div className="text-saafe-petroleum mb-6 bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-saafe-green group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-saafe-petroleum mb-3 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.img whileHover={{ scale: 1.05 }} src={gallery[0]} alt="Casa Moderna" className="rounded-2xl shadow-lg h-72 w-full object-cover" referrerPolicy="no-referrer" />
            <motion.img whileHover={{ scale: 1.05 }} src={gallery[1]} alt="Interior Moderno" className="rounded-2xl shadow-lg h-72 w-full object-cover mt-12" referrerPolicy="no-referrer" />
            <motion.img whileHover={{ scale: 1.05 }} src={gallery[2]} alt="Detalhe Obra" className="rounded-2xl shadow-lg h-72 w-full object-cover -mt-12" referrerPolicy="no-referrer" />
            <motion.img whileHover={{ scale: 1.05 }} src={gallery[3]} alt="Finalização" className="rounded-2xl shadow-lg h-72 w-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>

        {/* Gallery */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-saafe-petroleum mb-12 text-center">Galeria de Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-2xl aspect-square"
              >
                <img src={img} alt={`Projeto ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-saafe-petroleum/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold tracking-widest uppercase text-xs">Ver Detalhes</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Area of Operation */}
        <section className="bg-saafe-petroleum rounded-2xl p-12 md:p-20 text-white text-center overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg viewBox="0 0 1000 1000" className="w-full h-full fill-current">
              <path d="M300,200 Q500,100 700,200 T900,400 T700,600 T300,500 T100,300 Z" />
            </svg>
          </div>
          
          <h2 className="text-4xl font-bold mb-12 relative z-10">Área de Atuação</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 relative z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-saafe-green rounded-full flex items-center justify-center shadow-lg">
                <MapPin size={32} />
              </div>
              <span className="text-2xl font-bold">Distrito Federal</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-saafe-green rounded-full flex items-center justify-center shadow-lg">
                <MapPin size={32} />
              </div>
              <span className="text-2xl font-bold">São Paulo</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-saafe-green rounded-full flex items-center justify-center shadow-lg">
                <MapPin size={32} />
              </div>
              <span className="text-2xl font-bold">Minas Gerais</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
