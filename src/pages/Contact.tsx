import { motion } from 'motion/react';
import { Phone, Mail, Instagram, Globe, Send, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-name': 'contato-saafe',
          ...formData
        }).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage('Ocorreu um erro ao enviar sua mensagem.');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus('error');
      setErrorMessage('Erro de conexão. Verifique sua internet e tente novamente.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1rFXecMdOdSAq3nRxrNjsqS7xNVyQN5l4" 
            alt="Contato SAAFE" 
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
            className="text-saafe-green font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Fale Conosco
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            Entre em contato com a <span className="text-saafe-green">SAAFE</span>
          </motion.h1>
        </div>
      </section>

      <div className="py-24 max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-saafe-gray rounded-2xl flex items-center justify-center text-saafe-green shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-saafe-blue mb-1">WhatsApp</h3>
                  <p className="text-gray-500 mb-2">(61) 99963-8967</p>
                  <a href="https://wa.me/5561999638967" className="text-saafe-green font-bold hover:underline flex items-center gap-1">
                    Iniciar conversa <MessageCircle size={16} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-saafe-gray rounded-2xl flex items-center justify-center text-saafe-green shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-saafe-blue mb-1">E-mail</h3>
                  <p className="text-gray-500">contato@saafe.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-saafe-gray rounded-2xl flex items-center justify-center text-saafe-green shrink-0">
                  <Instagram size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-saafe-blue mb-1">Instagram</h3>
                  <p className="text-gray-500 mb-2">@saafe_concreto_armado_thermo</p>
                  <a href="https://instagram.com/saafe_concreto_armado_thermo" target="_blank" rel="noopener noreferrer" className="text-saafe-green font-bold hover:underline">
                    Seguir perfil
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-saafe-gray rounded-2xl flex items-center justify-center text-saafe-green shrink-0">
                  <Globe size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-saafe-blue mb-1">Website</h3>
                  <p className="text-gray-500">saafe.com.br</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-10 bg-saafe-blue rounded-3xl text-white">
              <h3 className="text-2xl font-black mb-4">SEJA SAAFE VOCÊ TAMBÉM</h3>
              <p className="text-white/60">Tecnologia, eficiência e inovação na construção civil.</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100"
          >
            {status === 'success' ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-black text-saafe-blue">Mensagem Enviada!</h3>
                <p className="text-gray-500">Obrigado pelo contato. Nossa equipe retornará em breve para o e-mail informado.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="btn-primary"
                >
                  ENVIAR OUTRA MENSAGEM
                </button>
              </div>
            ) : (
              <form 
                className="space-y-6" 
                onSubmit={handleSubmit}
                name="contato-saafe"
                method="POST"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contato-saafe" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-saafe-blue uppercase tracking-widest">Nome</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-saafe-gray rounded-xl border-none focus:ring-2 focus:ring-saafe-green transition-all" 
                      placeholder="Seu nome completo" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-saafe-blue uppercase tracking-widest">E-mail</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-saafe-gray rounded-xl border-none focus:ring-2 focus:ring-saafe-green transition-all" 
                      placeholder="seu@email.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-saafe-blue uppercase tracking-widest">Telefone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-saafe-gray rounded-xl border-none focus:ring-2 focus:ring-saafe-green transition-all" 
                    placeholder="(00) 00000-0000" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-saafe-blue uppercase tracking-widest">Mensagem</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full px-6 py-4 bg-saafe-gray rounded-xl border-none focus:ring-2 focus:ring-saafe-green transition-all resize-none" 
                    placeholder="Como podemos ajudar no seu projeto?"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl">
                    <AlertCircle size={20} />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-5 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'} <Send size={20} />
                </button>
                
                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="flex-shrink mx-4 text-gray-400 text-sm font-bold uppercase tracking-widest">Ou</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>
                
                <a href="https://wa.me/5561999638967" className="btn-secondary w-full flex items-center justify-center gap-2 py-5 text-lg">
                  FALAR NO WHATSAPP <MessageCircle size={20} />
                </a>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

