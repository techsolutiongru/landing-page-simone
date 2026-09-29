import React from 'react';
import { ArrowDown, MessageCircle, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { InstagramIcon } from '../components/InstagramIcon';
import { SITE_DATA } from '../data/content';
import './Hero.css';

export const Hero = () => {
  const { hero, profile, contacts } = SITE_DATA;

  const whatsappUrl = `https://wa.me/${contacts.phoneRaw}?text=${encodeURIComponent(contacts.whatsappMessage)}`;

  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Copy & CTAs */}
        <div className="hero-content">
          <div className="badge hero-badge">
            <Sparkles size={14} />
            <span>{hero.badge}</span>
          </div>

          <h1 className="hero-title">
            {hero.headline}
          </h1>

          <p className="hero-subtitle">
            {hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#minha-historia" className="btn btn-primary">
              {hero.ctaPrimary}
              <ArrowDown size={18} />
            </a>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp"
              aria-label="Conversar com Simone pelo WhatsApp"
            >
              <MessageCircle size={18} />
              {hero.ctaSecondary}
            </a>
          </div>

          {/* Discreet Social & Trust Markers */}
          <div className="hero-footer-meta">
            <a 
              href={contacts.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-instagram-link"
              aria-label="Perfil oficial no Instagram de Simone de Oliveira"
            >
              <InstagramIcon size={18} />
              <span>{contacts.instagramHandle}</span>
            </a>

            <div className="hero-separator"></div>

            <div className="hero-pill">
              <HeartHandshake size={16} />
              <span>Tecnologia Humanizada na Saúde</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Profile Presentation */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="image-glow-bg"></div>
            <div className="image-frame">
              <img 
                src={profile.photo} 
                alt="Simone de Oliveira - Especialista em Tecnologia, Saúde e Processos" 
                className="hero-portrait"
                loading="eager"
                width="480"
                height="600"
              />
            </div>

            {/* Floating Experience Card */}
            <div className="floating-badge experience-badge">
              <div className="floating-icon">
                <ShieldCheck size={22} />
              </div>
              <div className="floating-text">
                <strong>Experiência em TI & Saúde</strong>
                <span>Processos, Projetos e IA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

