import React from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { SITE_DATA } from '../data/content';
import './FinalCTA.css';

export const FinalCTA = () => {
  const { finalCta, contacts } = SITE_DATA;

  const whatsappUrl = `https://wa.me/${contacts.phoneRaw}?text=${encodeURIComponent(contacts.whatsappMessage)}`;

  return (
    <section className="final-cta-section section-padding">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-glow-element"></div>
          <div className="cta-inner-content">
            <h2 className="cta-heading">
              {finalCta.title}
            </h2>
            <p className="cta-body">
              {finalCta.text}
            </p>
            <div className="cta-buttons-row">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
                aria-label="Conversar diretamente pelo WhatsApp"
              >
                <MessageCircle size={18} />
                {finalCta.ctaPrimary}
              </a>

              <a href="#minha-historia" className="btn btn-ghost-dark">
                <ArrowDown size={18} />
                {finalCta.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

