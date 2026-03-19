import { motion } from 'motion/react';
import { Phone, Mail, Instagram, Globe, Send, MessageCircle, Youtube, Music } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const mailtoLink = "mailto:contato@saafe.com.br?subject=Solicitação de Orçamento / Informações - SAAFE&body=Olá equipe SAAFE, gostaria de solicitar um orçamento para meu projeto.";

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
          {/* Social Hub */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-saafe-blue uppercase tracking-tighter">Nossas Redes</h2>
              <p className="text-gray-500 text-lg">Acompanhe nossas obras, tecnologias e novidades em tempo real através das nossas redes sociais.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/5561999638967" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-6 bg-[#25D366] text-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest opacity-80">WhatsApp</span>
                  <span className="text-lg font-black">(61) 99963-8967</span>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/saafe_concreto_armado_thermo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-6 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Instagram size={28} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest opacity-80">Instagram</span>
                  <span className="text-lg font-black">@saafe_concreto</span>
                </div>
              </a>

              {/* YouTube */}
              <a 
                href="https://youtube.com/@SaafeBrasilia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-6 bg-[#FF0000] text-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Youtube size={28} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest opacity-80">YouTube</span>
                  <span className="text-lg font-black">@SaafeBrasilia</span>
                </div>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com/@saafeoficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center gap-4 p-6 bg-[#000000] text-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Music size={28} />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest opacity-80">TikTok</span>
                  <span className="text-lg font-black">@saafeoficial</span>
                </div>
              </a>
            </div>

            <div className="p-8 bg-saafe-gray rounded-[2rem] border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-saafe-green/10 text-saafe-green rounded-xl flex items-center justify-center">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-saafe-blue">Website Oficial</h4>
                  <p className="text-sm text-gray-500">www.saafe.com.br</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Tecnologia, eficiência e inovação na construção civil. Conheça mais sobre o sistema construtivo em EPS.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100 flex flex-col justify-center"
          >
            <div className="text-center space-y-8">
              <div className="w-20 h-20 bg-saafe-gray text-saafe-green rounded-full flex items-center justify-center mx-auto">
                <Mail size={40} />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-saafe-blue">Solicite seu Orçamento</h3>
                <p className="text-gray-500 text-lg">
                  Clique no botão abaixo para nos enviar um e-mail com os detalhes do seu projeto. 
                  Nossa equipe técnica entrará em contato o mais breve possível.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href={mailtoLink}
                  className="btn-primary w-full flex items-center justify-center gap-3 py-6 text-xl shadow-lg shadow-saafe-green/20"
                >
                  SOLICITAR ORÇAMENTO VIA E-MAIL <Send size={24} />
                </a>
                
                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="flex-shrink mx-4 text-gray-400 text-sm font-bold uppercase tracking-widest">Ou se preferir</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>
                
                <a href="https://wa.me/5561999638967" className="btn-secondary w-full flex items-center justify-center gap-3 py-6 text-xl">
                  FALAR NO WHATSAPP <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

