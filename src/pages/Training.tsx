import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Calendar,
  BookOpen,
  Award,
  MessageCircle
} from 'lucide-react';

export default function Training() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

  const whatsappLink = "https://wa.me/5519999971625?text=Olá%2C%20gostaria%20de%20mais%20informações.";

  return (
    <div className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center py-24 md:py-32 overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1_4ZmGPSO7-TeZ_kgk9kmaRq9T3nROQdw" 
            alt="Treinamento SAAFE" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center justify-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[32px] sm:text-[40px] md:text-[60px] lg:text-[70px] font-bold mb-8 leading-tight tracking-tighter"
          >
            Domine a Tecnologia EPS: <br className="hidden md:block" />
            <span className="text-saafe-green">Construa até 70% Mais Rápido que a Alvenaria Comum.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto font-light mb-12"
          >
            Torne-se um Especialista Certificado SAAFE. Capacitação técnica completa com indicação de obras na sua região e suporte total para financiamentos Caixa.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-10 py-5 bg-saafe-green text-white rounded-lg font-bold text-lg group flex items-center gap-3 mx-auto w-fit hover:bg-saafe-petroleum transition-all shadow-lg uppercase tracking-wider"
            >
              QUERO SER UM PARCEIRO SAAFE
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* POR QUE SE CAPACITAR COM A SAAFE? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-saafe-green font-bold tracking-widest uppercase text-xs mb-4 block">Oportunidade de Mercado</span>
            <h2 className="text-4xl md:text-5xl font-bold text-saafe-petroleum mb-8">Por que se capacitar com a SAAFE?</h2>
            <p className="text-gray-500 text-xl max-w-3xl mx-auto font-light">
              A demanda por EPS cresce exponencialmente, mas faltam profissionais. Nós treinamos você para suprir essa demanda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={32} />,
                title: "Indicação de Obras",
                desc: "Recebemos solicitações de todo o Brasil. Onde não temos equipe, nossos alunos parceiros são a primeira opção."
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "Apoio Burocrático",
                desc: "Suporte técnico completo para aprovação de projetos e financiamentos junto à Caixa Econômica Federal."
              },
              {
                icon: <Zap size={32} />,
                title: "Ecossistema SAAFE",
                desc: "Acesso a fornecimento de materiais, logística e aluguel de ferramentas exclusivas."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-saafe-gray p-10 rounded-2xl border border-gray-100 hover:border-saafe-green transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-saafe-green mb-8 shadow-sm group-hover:bg-saafe-green group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-saafe-petroleum mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CRONOGRAMA DE 2 DIAS */}
      <section className="py-24 bg-saafe-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-saafe-green font-bold tracking-widest uppercase text-xs mb-4 block">Imersão Total</span>
            <h2 className="text-4xl md:text-5xl font-bold text-saafe-petroleum mb-6">Cronograma de 2 Dias</h2>
            <div className="w-24 h-1.5 bg-saafe-green mx-auto rounded-full" />
          </div>

          <div className="space-y-24">
            {/* Dia 01 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-saafe-petroleum text-white rounded-full flex items-center justify-center font-bold text-xl">01</div>
                  <h3 className="text-3xl font-bold text-saafe-petroleum">Inteligência Técnica</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                  Teoria avançada, normas SiNAT 11 e soluções de canteiro desenvolvidas em 8 anos de experiência.
                </p>
                <ul className="space-y-4">
                  {["Fundamentos do EPS", "Normatização SiNAT 11", "Leitura de Projetos Específicos"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-500">
                      <CheckCircle2 size={20} className="text-saafe-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video"
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/1p16mlHD7v4dPFvJSgC2n58XJ9FCMv31M" 
                  alt="Dia 01 - Inteligência Técnica" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Dia 02 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:order-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-saafe-petroleum text-white rounded-full flex items-center justify-center font-bold text-xl">02</div>
                  <h3 className="text-3xl font-bold text-saafe-petroleum">O Canteiro é seu</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                  Prática real montando o sistema do zero até o ponto de acabamento.
                </p>
                <ul className="space-y-4">
                  {["Montagem de Painéis", "Instalações Hidráulicas e Elétricas", "Aplicação de Microconcreto"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-500">
                      <CheckCircle2 size={20} className="text-saafe-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl aspect-video"
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/1zOrDFAWMFisqf_6_8Adrb6Eg-TCzpe2U" 
                  alt="Dia 02 - Prática em Canteiro" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS TÉCNICOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-saafe-petroleum rounded-3xl p-12 md:p-20 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-saafe-green/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Diferenciais Técnicos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  { title: "70% de agilidade", icon: <Zap /> },
                  { title: "Resíduo Zero", icon: <ShieldCheck /> },
                  { title: "Isolamento Térmico e Acústico", icon: <TrendingUp /> },
                  { title: "Alta Resistência", icon: <Award /> }
                ].map((item, i) => (
                  <div key={i} className="text-center group">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-saafe-green mx-auto mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOÇÃO DE EXPANSÃO */}
      <section className="py-24 bg-saafe-gray">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-20 rounded-3xl shadow-xl border-2 border-saafe-green/20"
          >
            <span className="inline-block px-4 py-1 bg-saafe-green/10 text-saafe-green rounded-full text-xs font-bold uppercase tracking-widest mb-6">Oportunidade Única</span>
            <h2 className="text-4xl md:text-5xl font-bold text-saafe-petroleum mb-8">Sua Capacitação pode sair de GRAÇA!</h2>
            <p className="text-gray-500 text-xl leading-relaxed font-light mb-10">
              Acreditamos na força da rede. Ao indicar 4 novos alunos para o nosso treinamento, sua inscrição é totalmente bonificada pela SAAFE.
            </p>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-10 py-4 bg-saafe-petroleum text-white rounded-lg font-bold hover:bg-saafe-green transition-all shadow-lg"
            >
              Indicar Alunos agora
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FINAL DA PÁGINA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1OymSyQ9K8FOq-CzruDlAV4BrEH9WXp2q" 
                alt="Turma SAAFE" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-saafe-petroleum mb-8 leading-tight">
                Não perca mais tempo com métodos lentos. Inicie seu treinamento agora.
              </h2>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 px-12 py-5 bg-saafe-green text-white rounded-lg font-bold text-xl hover:bg-saafe-petroleum transition-all shadow-xl uppercase tracking-wider"
              >
                <MessageCircle size={24} />
                QUERO SER UM PARCEIRO SAAFE
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
