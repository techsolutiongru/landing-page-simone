import React from 'react';
import { MessageCircle, Mail, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '../components/InstagramIcon';
import { SITE_DATA } from '../data/content';
import './Contact.css';

export const Contact = () => {
  const { contacts } = SITE_DATA;

  const whatsappUrl = `https://wa.me/${contacts.phoneRaw}?text=${encodeURIComponent(contacts.whatsappMessage)}`;
  const mailtoUrl = `mailto:${contacts.email}`;

  return (
    <section id="contato" className="contact-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="badge">Contato Direto</span>
          <h2>Vamos conversar?</h2>
          <p>
            Se você acredita que tecnologia deve transformar processos, facilitar o trabalho das pessoas e gerar novas possibilidades, será um prazer dialogar.
          </p>
        </div>

        {/* 3 Clear Contact Channels */}
        <div className="contact-cards-grid">
          
          {/* WhatsApp Card */}
          <div className="contact-channel-card featured-channel">
            <div className="channel-icon-box whatsapp-box">
              <MessageCircle size={32} />
            </div>
            <h3>WhatsApp</h3>
            <p className="channel-detail">Atendimento ágil para parcerias, projetos e conversas profissionais.</p>
            <span className="channel-highlight">{contacts.phoneDisplay}</span>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp channel-btn"
              aria-label="Falar pelo WhatsApp com Simone de Oliveira"
            >
              Falar pelo WhatsApp
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* E-mail Card */}
          <div className="contact-channel-card">
            <div className="channel-icon-box email-box">
              <Mail size={32} />
            </div>
            <h3>E-mail</h3>
            <p className="channel-detail">Para propostas formais, documentações e alinhamentos detalhados.</p>
            <span className="channel-highlight">{contacts.email}</span>
            <a 
              href={mailtoUrl} 
              className="btn btn-primary channel-btn"
              aria-label="Enviar e-mail para Simone de Oliveira"
            >
              Enviar e-mail
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Instagram Card */}
          <div className="contact-channel-card">
            <div className="channel-icon-box insta-box">
              <InstagramIcon size={32} />
            </div>
            <h3>Instagram</h3>
            <p className="channel-detail">Acompanhe postagens, bastidores e temas sobre tecnologia e inovação.</p>
            <span className="channel-highlight">{contacts.instagramHandle}</span>
            <a 
              href={contacts.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary channel-btn"
              aria-label="Acessar Instagram oficial de Simone de Oliveira"
            >
              Ver Perfil Oficial
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

