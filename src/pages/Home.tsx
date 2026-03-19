import { motion, useInView, animate, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingDown, Thermometer, Volume2, Layers, ShieldCheck, Building2, Users, MapPin, Award } from 'lucide-react';

function Counter({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

const differentials = [
  {
    icon: <Zap className="text-saafe-green" size={32} />,
    title: "Agilidade na construção",
    description: "Sistema que reduz significativamente o tempo de execução da obra."
  },
  {
    icon: <TrendingDown className="text-saafe-green" size={32} />,
    title: "Economia na obra",
    description: "Processos construtivos otimizados que reduzem desperdícios."
  },
  {
    icon: <Thermometer className="text-saafe-green" size={32} />,
    title: "Isolamento térmico superior",
    description: "Ambientes muito mais confortáveis e economia com climatização."
  },
  {
    icon: <Volume2 className="text-saafe-green" size={32} />,
    title: "Isolamento acústico",
    description: "Maior conforto contra ruídos externos."
  },
  {
    icon: <Layers className="text-saafe-green" size={32} />,
    title: "Estrutura monolítica",
    description: "Distribuição uniforme de cargas estruturais."
  },
  {
    icon: <ShieldCheck className="text-saafe-green" size={32} />,
    title: "Durabilidade",
    description: "Sistema resistente à umidade e que não sofre com mofo ou deterioração."
  }
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const aboutImageY = useTransform(aboutScroll, [0, 1], ["-10%", "10%"]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1qGNhUhOfAjSZ0UwciRh4gYcwLU7XkNYH" 
            alt="Construção Moderna" 
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tighter"
          >
            Construção Inteligente com <span className="text-saafe-green">Tecnologia EPS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl mb-10 text-white/80 max-w-3xl mx-auto font-medium"
          >
            Soluções completas em construção com sistema monolítico em EPS: execução de obras, fornecimento de placas estruturais e capacitação profissional.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link to="/produtos" className="btn-primary group flex items-center justify-center gap-2 px-10 py-4 text-lg">
              Conheça o Sistema 
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </Link>
            <a href="https://wa.me/5561999638967" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2 px-10 py-4 text-lg hover:bg-white hover:text-saafe-blue transition-all duration-300">
              Fale conosco no WhatsApp
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full" 
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-32 section-gradient relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-saafe-green font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Sobre a Empresa</span>
            <h2 className="text-4xl md:text-6xl font-black mb-10 text-white leading-none">O que é a SAAFE</h2>
            <div className="space-y-8 text-white/80 leading-relaxed text-xl">
              <p>
                A SAAFE atua há mais de 8 anos na construção civil, especializada no sistema construtivo monolítico com painéis de EPS.
              </p>
              <p>
                Acompanhamos a evolução dessa tecnologia no Brasil desde o período das placas manufaturadas, adquirindo experiência prática e aperfeiçoando métodos construtivos ao longo de diversas obras realizadas.
              </p>
              <p>
                Hoje nossa empresa reúne conhecimento técnico, experiência prática e um modelo de trabalho focado em eficiência construtiva. Profissionais capacitados pela SAAFE hoje executam obras utilizando o sistema com alto nível de qualidade e produtividade.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8">
              {["MG", "SP", "DF"].map((state, i) => (
                <motion.div 
                  key={state}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-saafe-green font-black text-lg group-hover:bg-saafe-green group-hover:text-white transition-all duration-300">
                    {state}
                  </div>
                  <span className="font-bold text-white text-lg">
                    {state === "MG" ? "Minas Gerais" : state === "SP" ? "São Paulo" : "Distrito Federal"}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)]">
              <motion.img 
                style={{ y: aboutImageY }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src="https://lh3.googleusercontent.com/d/1zPpKThAcuJqyNn5RZkUdy6T2v3bC_uyg" 
                alt="Arquitetura Moderna" 
                className="w-full h-full object-cover scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-saafe-green rounded-full flex items-center justify-center text-white shadow-2xl z-20"
            >
              <div className="text-center">
                <span className="text-4xl font-black block">8+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Anos de Exp.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-saafe-green font-bold tracking-[0.4em] uppercase text-xs mb-6 block"
            >
              Métricas Institucionais
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white"
            >
              Experiência que gera resultados
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { icon: <Award size={36} />, value: 8, suffix: "+", label: "anos de experiência" },
              { icon: <Building2 size={36} />, value: 100, suffix: "+", label: "obras realizadas" },
              { icon: <Users size={36} />, value: 70, suffix: "+", label: "profissionais formados" },
              { icon: <MapPin size={36} />, value: 3, suffix: "", label: "estados atendidos (MG, SP e DF)" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="glass-card p-10 rounded-[2.5rem] flex flex-col items-center text-center group transition-all duration-500"
              >
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-saafe-green mb-8 group-hover:bg-saafe-green group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500">
                  {stat.icon}
                </div>
                <div className="text-6xl font-black text-white mb-4 tracking-tighter">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-saafe-blue mb-12"
          >
            Conheça o Sistema Monolítico em EPS
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[800px] mx-auto aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/2XzaOuTYYJc?si=2QYbqNOCmdM3tyI8" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-32 section-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-saafe-green font-bold tracking-[0.4em] uppercase text-xs mb-6 block"
            >
              Vantagens
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white"
            >
              Diferenciais do Sistema
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 30px 60px -12px rgba(0,0,0,0.3)" }}
                className="glass-card p-12 rounded-[3rem] transition-all duration-500 group"
              >
                <div className="mb-8 bg-white/10 w-20 h-20 rounded-3xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-5 text-white leading-tight">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-32 bg-saafe-blue relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-saafe-green rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-saafe-green rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1 }}
                  src="https://lh3.googleusercontent.com/d/1sRZgHYH_avuPum0MJ_0weLYkNF3DfS7_" 
                  alt="Painel EPS Técnico" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-4 border-saafe-green/30 rounded-[3rem] -z-10" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-saafe-green/30 rounded-full -z-10" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-white"
            >
              <span className="text-saafe-green font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Tecnologia</span>
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-none">Como funciona o sistema</h2>
              <p className="text-white/70 text-xl leading-relaxed mb-10">
                O sistema construtivo monolítico em EPS utiliza painéis estruturais compostos por núcleo de poliestireno expandido envolvido por malhas metálicas estruturais.
              </p>
              <p className="text-white/70 text-xl leading-relaxed mb-12">
                Após a montagem das paredes, é aplicado microconcreto estrutural sobre os painéis, formando uma estrutura monolítica de concreto armado extremamente resistente.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  "Velocidade Construtiva",
                  "Desempenho Térmico",
                  "Isolamento Acústico",
                  "Resíduo Zero"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-3 h-3 rounded-full bg-saafe-green group-hover:scale-150 transition-transform duration-300" />
                    <span className="font-black text-lg tracking-tight group-hover:text-saafe-green transition-colors duration-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
           <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
            alt="Background Pattern" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-8xl font-black text-saafe-blue mb-10 leading-none tracking-tighter">
              Construa com <span className="text-saafe-green underline decoration-4 underline-offset-8">tecnologia</span> e eficiência.
            </h2>
            <p className="text-gray-500 text-xl md:text-2xl mb-14 max-w-3xl mx-auto leading-relaxed">
              Entre em contato com a SAAFE e descubra como o sistema construtivo em EPS pode transformar sua obra.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contato" className="btn-primary px-12 py-5 text-xl shadow-[0_20px_40px_rgba(34,197,94,0.3)] hover:shadow-[0_25px_50px_rgba(34,197,94,0.4)] transition-all duration-500">
                Solicitar orçamento
              </Link>
              <a href="https://wa.me/5561999638967" className="px-12 py-5 bg-saafe-blue text-white rounded-full font-black text-xl hover:bg-saafe-dark transition-all duration-500 shadow-[0_20px_40px_rgba(15,23,42,0.2)]">
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
