import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { 
  GraduationCap, 
  ClipboardCheck, 
  Users, 
  MapPin, 
  Info, 
  ArrowRight, 
  Zap, 
  Settings, 
  Calendar, 
  BookOpen, 
  HardHat, 
  Hammer,
  CheckCircle2,
  FileText,
  Search,
  ShieldCheck,
  Building2,
  Globe
} from 'lucide-react';

export default function Assessoria() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  return (
    <div className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1aflanwJpDdOGtW1WxckTJq4pMC0svEJw" 
            alt="Consultoria Engenharia" 
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-saafe-blue/60 backdrop-blur-[2px]" />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-20"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[50px] md:text-[85px] font-bold mb-8 leading-tight tracking-tighter"
          >
            Consultoria Executiva em <br />
            <span className="text-saafe-green">Sistema Monolítico EPS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light mb-12"
          >
            Capacitação técnica e implantação profissional do sistema construtivo monolítico para obras residenciais e comerciais.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://wa.me/5519999971625?text=gostaria%20de%20saber%20mais.." target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-saafe-green text-white rounded-lg font-bold text-lg group flex items-center gap-3 mx-auto w-fit hover:bg-saafe-petroleum transition-all shadow-lg">
              Solicitar Informações
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* SOBRE A CONSULTORIA SAAFE */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-saafe-green font-bold tracking-widest uppercase text-xs mb-6 block">Institucional</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-saafe-petroleum leading-tight">Sobre a Consultoria SAAFE</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12 font-light">
                <p>
                  A SAAFE atua exclusivamente com sistema construtivo monolítico em EPS, tendo iniciado suas atividades ainda na fase das placas manufaturadas e evoluído junto com a tecnologia no Brasil.
                </p>
                <p>
                  Ao longo dos anos, a empresa acumulou experiência prática em diversas obras e participou da formação de profissionais que hoje executam projetos com alto padrão de qualidade.
                </p>
                <p>
                  Nossa atuação combina conhecimento técnico, experiência de campo e metodologia estruturada para implantação eficiente do sistema construtivo.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 bg-saafe-gray px-6 py-4 rounded-xl border border-gray-100">
                  <Globe className="text-saafe-green" size={24} />
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400 block">Atuação</span>
                    <span className="font-bold text-saafe-petroleum">MG, SP e DF</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-saafe-gray px-6 py-4 rounded-xl border border-gray-100">
                  <Building2 className="text-saafe-green" size={24} />
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400 block">Experiência</span>
                    <span className="font-bold text-saafe-petroleum">Obras Realizadas</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                <img 
                  src="https://lh3.googleusercontent.com/d/1DZum5dt_ozOsU-pYKvJWXC-dy6klqcWo" 
                  alt="Consultoria SAAFE" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative engineering element */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-saafe-green/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOCO DA CONSULTORIA */}
      <section className="py-20 bg-saafe-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-saafe-petroleum mb-6">Foco da Consultoria</h2>
            <div className="w-24 h-1.5 bg-saafe-green mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={32} />,
                title: "Obras mais rápidas",
                desc: "Aplicação de processos construtivos otimizados que reduzem tempo de execução."
              },
              {
                icon: <Settings size={32} />,
                title: "Processos bem estruturados",
                desc: "Implantação do sistema seguindo metodologia técnica e padrões de qualidade."
              },
              {
                icon: <Calendar size={32} />,
                title: "Planejamento eficiente",
                desc: "Cronograma físico-financeiro alinhado para maior controle e produtividade."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,81,103,0.10)] transition-all duration-500 border-2 border-transparent hover:border-saafe-green group"
              >
                <div className="w-16 h-16 bg-saafe-gray rounded-xl flex items-center justify-center text-saafe-petroleum mb-8 group-hover:bg-saafe-green group-hover:text-white transition-all duration-500">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-saafe-petroleum mb-4">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAÇÃO DE MÃO DE OBRA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 aspect-[4/3] lg:aspect-square">
                <img 
                  src="https://lh3.googleusercontent.com/d/1f6kjHZyFFp6LwnEoA0ImI8fz9uJ9rCv4" 
                  alt="Capacitação Prática" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-saafe-green font-bold tracking-widest uppercase text-xs mb-6 block">Capacitação Técnica</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 text-saafe-petroleum leading-tight">Formação de Mão de Obra</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
                <p>
                  Devido à escassez de profissionais especializados nesse sistema construtivo no Brasil, a SAAFE também atua na formação de mão de obra técnica.
                </p>
                <p>
                  A capacitação prepara equipes para executar obras utilizando o sistema monolítico com segurança, eficiência e qualidade.
                </p>
                <p>
                  A assessoria aborda desde fundamentos teóricos até a aplicação prática em obra.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MATERIAL DIDÁTICO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-saafe-petroleum p-12 md:p-20 rounded-2xl shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-20 h-20 bg-saafe-green rounded-2xl flex items-center justify-center text-white mb-10 shadow-lg">
                  <BookOpen size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Material Didático</h2>
                <p className="text-white/70 text-xl leading-relaxed font-light">
                  A SAAFE utiliza material didático próprio, desenvolvido a partir de experiências reais em obras executadas ao longo dos anos.
                </p>
              </div>
              <div className="bg-white/10 p-10 rounded-xl border border-white/5">
                <p className="text-white/80 text-lg leading-relaxed italic font-light">
                  "Esse conteúdo reúne orientações práticas, técnicas construtivas e soluções utilizadas em campo, garantindo que o conhecimento transmitido seja aplicável e eficiente."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTICIPANTES RECOMENDADOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-saafe-green font-bold tracking-widest uppercase text-xs mb-6 block">Público-Alvo</span>
            <h2 className="text-4xl md:text-5xl font-bold text-saafe-petroleum mb-8">Participantes Recomendados</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
              Para melhor aproveitamento da consultoria recomenda-se a participação de profissionais-chave da obra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 p-10 bg-saafe-gray rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-saafe-petroleum shadow-lg shrink-0">
                <HardHat size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-saafe-petroleum mb-2">1 Mestre de Obras</h3>
                <p className="text-gray-500 font-light">Liderança técnica e gestão de equipe.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 p-10 bg-saafe-gray rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-saafe-petroleum shadow-lg shrink-0">
                <Hammer size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-saafe-petroleum mb-2">2 Pedreiros</h3>
                <p className="text-gray-500 font-light">Execução prática e aplicação do sistema.</p>
              </div>
            </motion.div>
          </div>

          <p className="text-center mt-16 text-gray-400 max-w-2xl mx-auto italic font-light">
            Esses profissionais participam das etapas teóricas e práticas, aprendendo normas, padrões e técnicas do sistema construtivo monolítico.
          </p>
        </div>
      </section>

      {/* CONTEÚDO DO CURSO */}
      <section className="py-20 bg-saafe-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-saafe-petroleum mb-6">Conteúdo do Curso</h2>
            <p className="text-gray-500 text-lg font-light">Abordagem técnica completa para domínio total do sistema.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Propriedades dos materiais",
              "Principais fundações aplicadas",
              "Alta resistência do painel monolítico",
              "Elementos estruturantes",
              "Elementos de fachadas",
              "Ecologia e sustentabilidade",
              "Principais atributos técnicos",
              "Ferramentas e equipamentos",
              "Processo executivo passo a passo",
              "Erros comuns em obra",
              "Critérios da SiNAT 11",
              "Dicas e técnicas de execução"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 rounded-xl flex items-center gap-4 shadow-[0_4px_20px_rgba(0,81,103,0.05)] hover:shadow-md transition-all border border-gray-100"
              >
                <div className="w-10 h-10 bg-saafe-green/10 rounded-lg flex items-center justify-center text-saafe-green shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold text-saafe-petroleum">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESCOPO DA ASSESSORIA TÉCNICA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-saafe-green font-bold tracking-widest uppercase text-xs mb-6 block">Premium Service</span>
            <h2 className="text-4xl md:text-5xl font-bold text-saafe-petroleum mb-6">Escopo da Assessoria Técnica</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-saafe-petroleum p-12 md:p-16 rounded-2xl text-white shadow-xl"
            >
              <h3 className="text-3xl font-bold mb-10">A consultoria técnica da SAAFE inclui:</h3>
              <ul className="space-y-6">
                {[
                  { icon: <Search size={20} />, text: "Análise técnica do projeto vigente" },
                  { icon: <Globe size={20} />, text: "Acompanhamento remoto das fundações" },
                  { icon: <FileText size={20} />, text: "Revisão da lista de materiais" },
                  { icon: <Settings size={20} />, text: "Indicação de ferramentas adequadas" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-saafe-green">{item.icon}</div>
                    <span className="text-lg text-white/80 font-light">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-saafe-gray p-12 md:p-16 rounded-2xl border border-gray-100 shadow-sm"
            >
              <ul className="space-y-6 mt-12">
                {[
                  { icon: <MapPin size={20} />, text: "Visita técnica presencial para orientação prática" },
                  { icon: <Zap size={20} />, text: "Revisão de projetos hidráulicos e elétricos" },
                  { icon: <ClipboardCheck size={20} />, text: "Entrega de checklist técnico para gestão da obra" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-saafe-green">{item.icon}</div>
                    <span className="text-lg text-saafe-petroleum/80 font-light">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPORTANTE */}
      <section className="py-20 bg-saafe-gray">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl flex flex-col md:flex-row items-center gap-8 shadow-sm border border-gray-100"
          >
            <div className="w-20 h-20 bg-saafe-green rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-saafe-petroleum mb-4">Importante</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Para o correto desenvolvimento da obra, é necessário o acompanhamento do engenheiro responsável técnico durante as etapas de execução. A SAAFE fornece orientação técnica especializada e boas práticas de implantação do sistema construtivo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 section-gradient relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
          >
            Construa com quem entende do sistema monolítico
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 mb-12 font-light"
          >
            Entre em contato com a SAAFE e descubra como aplicar o sistema construtivo em EPS com segurança, eficiência e acompanhamento técnico especializado.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-8"
          >
            <a 
              href="https://wa.me/5519999971625?text=gostaria%20de%20saber%20mais.." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-12 py-5 bg-saafe-green text-white rounded-lg font-bold text-xl flex items-center gap-3 group hover:bg-saafe-petroleum transition-all shadow-lg"
            >
              Falar no WhatsApp
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            
            <div className="space-y-4">
              <span className="text-saafe-yellow-green font-bold text-3xl md:text-5xl tracking-tighter block">
                SEJA SAAFE VOCÊ TAMBÉM
              </span>
              <div className="w-20 h-1 bg-saafe-yellow-green mx-auto rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
