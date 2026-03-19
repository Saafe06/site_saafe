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

export default function Training() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  return (
    <div className="overflow-hidden bg-black">
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
            className="text-[50px] md:text-[85px] font-black mb-8 leading-tight tracking-tighter"
          >
            Consultoria Executiva em <br />
            <span className="text-saafe-green">Sistema Monolítico EPS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium mb-12"
          >
            Capacitação técnica e implantação profissional do sistema construtivo monolítico para obras residenciais e comerciais.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://wa.me/5561999638967" target="_blank" rel="noopener noreferrer" className="btn-primary px-12 py-5 text-lg group flex items-center gap-3 mx-auto w-fit">
              Solicitar Informações
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* SOBRE A CONSULTORIA SAAFE */}
      <section className="py-32 section-gradient relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-saafe-green font-bold tracking-widest uppercase text-xs mb-6 block">Institucional</span>
              <h2 className="text-4xl md:text-5xl font-black mb-10 text-white leading-tight">Sobre a Consultoria SAAFE</h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed mb-12">
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
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
                  <Globe className="text-saafe-green" size={24} />
                  <div>
                    <span className="text-xs uppercase font-black text-white/40 block">Atuação</span>
                    <span className="font-black text-white">MG, SP e DF</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
                  <Building2 className="text-saafe-green" size={24} />
                  <div>
                    <span className="text-xs uppercase font-black text-white/40 block">Experiência</span>
                    <span className="font-black text-white">Obras Realizadas</span>
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
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100">
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
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Foco da Consultoria</h2>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-card p-10 rounded-[2.5rem] transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-saafe-green mb-8 group-hover:bg-saafe-green group-hover:text-white transition-colors duration-500">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{card.title}</h3>
                <p className="text-white/60 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* FORMAÇÃO DE MÃO DE OBRA */}
      <section className="py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-[3rem] overflow-hidden glass-card aspect-[4/3] lg:aspect-square p-4">
                <img 
                  src="https://lh3.googleusercontent.com/d/1f6kjHZyFFp6LwnEoA0ImI8fz9uJ9rCv4" 
                  alt="Treinamento Prático" 
                  className="w-full h-full object-cover rounded-[2rem]"
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
              <h2 className="text-4xl md:text-5xl font-black mb-10 text-white leading-tight">Formação de Mão de Obra</h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  Devido à escassez de profissionais especializados nesse sistema construtivo no Brasil, a SAAFE também atua na formação de mão de obra técnica.
                </p>
                <p>
                  A capacitação prepara equipes para executar obras utilizando o sistema monolítico com segurança, eficiência e qualidade.
                </p>
                <p>
                  O treinamento aborda desde fundamentos teóricos até a aplicação prática em obra.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MATERIAL DIDÁTICO */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-20 rounded-[4rem]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-20 h-20 bg-saafe-green rounded-3xl flex items-center justify-center text-white mb-10 shadow-lg shadow-saafe-green/20">
                  <BookOpen size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Material Didático</h2>
                <p className="text-white/70 text-xl leading-relaxed">
                  A SAAFE utiliza material didático próprio, desenvolvido a partir de experiências reais em obras executadas ao longo dos anos.
                </p>
              </div>
              <div className="bg-white/10 p-10 rounded-3xl border border-white/5">
                <p className="text-white/80 text-lg leading-relaxed italic">
                  "Esse conteúdo reúne orientações práticas, técnicas construtivas e soluções utilizadas em campo, garantindo que o conhecimento transmitido seja aplicável e eficiente."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PARTICIPANTES RECOMENDADOS */}
      <section className="py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-saafe-green font-bold tracking-widest uppercase text-xs mb-6 block">Público-Alvo</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Participantes Recomendados</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Para melhor aproveitamento da consultoria recomenda-se a participação de profissionais-chave da obra.
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 p-10 glass-card rounded-[3rem]"
            >
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-saafe-green shadow-lg shrink-0">
                <HardHat size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">1 Mestre de Obras</h3>
                <p className="text-white/60">Liderança técnica e gestão de equipe.</p>
              </div>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 p-10 glass-card rounded-[3rem]"
            >
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-saafe-green shadow-lg shrink-0">
                <Hammer size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-2">2 Pedreiros</h3>
                <p className="text-white/60">Execução prática e aplicação do sistema.</p>
              </div>
            </motion.div>
          </div>
 
          <p className="text-center mt-16 text-white/40 max-w-2xl mx-auto italic">
            Esses profissionais participam das etapas teóricas e práticas, aprendendo normas, padrões e técnicas do sistema construtivo monolítico.
          </p>
        </div>
      </section>

      {/* CONTEÚDO DO CURSO */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Conteúdo do Curso</h2>
            <p className="text-white/60 text-lg">Abordagem técnica completa para domínio total do sistema.</p>
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
                className="glass-card p-6 rounded-2xl flex items-center gap-4 transition-all"
              >
                <div className="w-10 h-10 bg-saafe-green/10 rounded-lg flex items-center justify-center text-saafe-green shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-black text-white">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESCOPO DA ASSESSORIA TÉCNICA */}
      <section className="py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-saafe-green font-bold tracking-widest uppercase text-xs mb-6 block">Premium Service</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Escopo da Assessoria Técnica</h2>
          </div>
 
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 md:p-16 rounded-[4rem] text-white"
            >
              <h3 className="text-3xl font-black mb-10">A consultoria técnica da SAAFE inclui:</h3>
              <ul className="space-y-6">
                {[
                  { icon: <Search size={20} />, text: "Análise técnica do projeto vigente" },
                  { icon: <Globe size={20} />, text: "Acompanhamento remoto das fundações" },
                  { icon: <FileText size={20} />, text: "Revisão da lista de materiais" },
                  { icon: <Settings size={20} />, text: "Indicação de ferramentas adequadas" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-saafe-green">{item.icon}</div>
                    <span className="text-lg text-white/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-12 md:p-16 rounded-[4rem] border border-white/10"
            >
              <ul className="space-y-6 mt-12">
                {[
                  { icon: <MapPin size={20} />, text: "Visita técnica presencial para orientação prática" },
                  { icon: <Zap size={20} />, text: "Revisão de projetos hidráulicos e elétricos" },
                  { icon: <ClipboardCheck size={20} />, text: "Entrega de checklist técnico para gestão da obra" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-saafe-green">{item.icon}</div>
                    <span className="text-lg text-white/80">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPORTANTE */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[3rem] flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-20 h-20 bg-saafe-green rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-saafe-green/20">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white mb-4">Importante</h3>
              <p className="text-white/60 leading-relaxed">
                Para o correto desenvolvimento da obra, é necessário o acompanhamento do engenheiro responsável técnico durante as etapas de execução. A SAAFE fornece orientação técnica especializada e boas práticas de implantação do sistema construtivo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2000&auto=format&fit=crop" 
            alt="Obra Finalizada" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-saafe-blue/70" />
 
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight"
          >
            Construa com quem entende do sistema monolítico
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 mb-12"
          >
            Entre em contato com a SAAFE e descubra como aplicar o sistema construtivo em EPS com segurança, eficiência e acompanhamento técnico especializado.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-8"
          >
            <a 
              href="https://wa.me/5561999638967" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary px-12 py-5 text-xl flex items-center gap-3 group"
            >
              Falar no WhatsApp
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            
            <div className="space-y-4">
              <span className="text-saafe-green font-black text-3xl md:text-5xl tracking-tighter block">
                SEJA SAAFE VOCÊ TAMBÉM
              </span>
              <div className="w-20 h-1 bg-saafe-green mx-auto rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
