import React from 'react';
import { Mail, MessageCircle, Heart } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { SITE_DATA } from '../data/content';
import './Footer.css';

export const Footer = () => {
  const { profile, contacts } = SITE_DATA;

  const whatsappUrl = `https://wa.me/${contacts.phoneRaw}?text=${encodeURIComponent(contacts.whatsappMessage)}`;
  const mailtoUrl = `mailto:${contacts.email}`;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          
          <div className="footer-brand-col">
            <span className="footer-brand-title">{profile.name}</span>
            <p className="footer-tagline">Tecnologia • Processos • Saúde • Inovação</p>
            <p className="footer-bio">
              Conectando o potencial de sistemas inteligentes e processos estruturados às necessidades reais dos profissionais de saúde e operações.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Navegação</h4>
            <ul className="footer-nav">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#minha-historia">Minha História</a></li>
              <li><a href="#experiencia">Experiência</a></li>
              <li><a href="#visao">Visão & IA</a></li>
              <li><a href="#formacao">Formação</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-col-title">Canais Oficiais</h4>
            <ul className="footer-contact-list">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                  <MessageCircle size={18} />
                  <span>{contacts.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={mailtoUrl} className="footer-contact-link">
                  <Mail size={18} />
                  <span>{contacts.email}</span>
                </a>
              </li>
              <li>
                <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                  <InstagramIcon size={18} />
                  <span>{contacts.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Simone de Oliveira. Todos os direitos reservados.</p>
          <p className="footer-tech-tag">
            Construído com tecnologia, propósito e foco em pessoas.
          </p>
        </div>
      </div>
    </footer>
  );
};

