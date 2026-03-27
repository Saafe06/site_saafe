import { motion } from 'motion/react';
import { 
  Thermometer, 
  Volume2, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Leaf, 
  Clock, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div className="overflow-hidden">
      {/* SECTION 1 — HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/16Ix9pN9IP9M_jzqMmgTK1KA8Pt1zrg-A" 
            alt="Sistema Construtivo SAAFE" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-saafe-blue/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Sistema Construtivo <span className="text-saafe-green">SAAFE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light"
          >
            Tecnologia monolítica em EPS para construções mais rápidas, eficientes e com alto desempenho térmico e acústico.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — COMO É A PLACA SAAFE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE: Technical Diagram */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-saafe-gray rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100">
                <img 
                  src="https://lh3.googleusercontent.com/d/1I7ragaHsFyfziv4U5awhz9_sUh_MANOo" 
                  alt="Diagrama Técnico Placa SAAFE" 
                  className="w-full h-auto rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-saafe-green text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <span className="text-sm font-bold uppercase tracking-widest">Tecnologia Monolítica</span>
              </div>
            </motion.div>

            {/* RIGHT SIDE: Composition & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-saafe-green font-bold tracking-widest uppercase text-sm mb-4 block">Detalhes Técnicos</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-saafe-petroleum">Composição da Placa Estrutural</h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg mb-10 font-light">
                <p>A placa estrutural do sistema SAAFE é composta por:</p>
                <ul className="space-y-3">
                  {[
                    "Núcleo de EPS de alta densidade",
                    "Malhas metálicas estruturais",
                    "Conectores de ancoragem",
                    "Camada estrutural de microconcreto"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-saafe-green" size={20} />
                      <span className="font-bold text-saafe-petroleum">{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Após a montagem das placas, é aplicado concreto projetado, formando uma estrutura monolítica extremamente resistente.
                </p>
              </div>

              <div className="bg-saafe-petroleum/5 p-8 rounded-2xl border-l-4 border-saafe-green">
                <h3 className="text-xl font-bold text-saafe-petroleum mb-4">Esta tecnologia proporciona:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <ShieldCheck size={18} />, text: "Alta resistência estrutural" },
                    { icon: <Thermometer size={18} />, text: "Excelente isolamento térmico" },
                    { icon: <Volume2 size={18} />, text: "Isolamento acústico superior" },
                    { icon: <Clock size={18} />, text: "Redução de tempo de obra" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-saafe-petroleum/80 text-sm font-bold">
                      <div className="text-saafe-green">{item.icon}</div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — VÍDEO EXPLICANDO O SISTEMA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-saafe-petroleum p-12 md:p-20 rounded-2xl shadow-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-saafe-green font-bold tracking-widest uppercase text-sm mb-4 block">Demonstração</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Veja o sistema construtivo em funcionamento</h2>
              
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl mb-10 border-4 border-white/10">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/pw_zNGRV2Oc" 
                  title="Sistema Construtivo SAAFE" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              
              <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed font-light">
                Este vídeo mostra na prática como funciona o sistema construtivo com painéis EPS e como a estrutura monolítica é formada durante a obra.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — BENEFÍCIOS DO SISTEMA */}
      <section className="py-20 bg-saafe-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-saafe-green font-bold tracking-widest uppercase text-sm mb-4 block">Vantagens</span>
            <h2 className="text-4xl md:text-5xl font-bold text-saafe-petroleum">Benefícios do Sistema</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Thermometer className="text-saafe-green" size={32} />,
                title: "Isolamento térmico superior",
                description: "Redução de custos com climatização e ambientes mais confortáveis."
              },
              {
                icon: <Volume2 className="text-saafe-green" size={32} />,
                title: "Isolamento acústico",
                description: "Maior conforto e privacidade para os moradores."
              },
              {
                icon: <Clock className="text-saafe-green" size={32} />,
                title: "Velocidade de construção",
                description: "Execução muito mais rápida que alvenaria convencional."
              },
              {
                icon: <Layers className="text-saafe-green" size={32} />,
                title: "Eficiência estrutural",
                description: "Estrutura monolítica de concreto armado extremamente resistente."
              },
              {
                icon: <Leaf className="text-saafe-green" size={32} />,
                title: "Sustentabilidade",
                description: "Redução drástica de desperdícios e entulho na obra."
              },
              {
                icon: <ShieldCheck className="text-saafe-green" size={32} />,
                title: "Alta Durabilidade",
                description: "Sistema resistente a intempéries e com longa vida útil."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,81,103,0.10)] transition-all border-2 border-transparent hover:border-saafe-green group"
              >
                <div className="mb-6 bg-saafe-gray w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-saafe-green group-hover:text-white transition-colors duration-300">
                  <div className="text-saafe-petroleum group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-saafe-petroleum">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <section className="py-20 section-gradient relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-8"
          >
            Quer construir com o sistema SAAFE?
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/contato" className="px-10 py-4 bg-saafe-green text-white rounded-lg font-bold text-lg hover:bg-saafe-petroleum transition-all flex items-center justify-center gap-2 shadow-lg">
              Solicitar orçamento <ArrowRight size={20} />
            </Link>
            <a 
              href="https://wa.me/5519999971625?text=gostaria%20de%20saber%20mais.." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-saafe-yellow-green text-saafe-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-saafe-green hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
