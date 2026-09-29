import React from 'react';
import { Sparkles, BrainCircuit, Zap, Users, ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../data/content';
import './AISection.css';

export const AISection = () => {
  const { aiSection, contacts } = SITE_DATA;

  const whatsappUrl = `https://wa.me/${contacts.phoneRaw}?text=${encodeURIComponent(contacts.whatsappMessage)}`;

  return (
    <section id="visao" className="ai-section section-padding">
      <div className="container">
        <div className="ai-wrapper">
          <div className="ai-header">
            <span className="badge badge-dark">{aiSection.tag}</span>
            <h2 className="ai-title">{aiSection.title}</h2>
            <p className="ai-lead">{aiSection.lead}</p>
          </div>

          <div className="ai-content-grid">
            <div className="ai-narrative">
              <p className="ai-text">{aiSection.paragraph1}</p>
              <p className="ai-text">{aiSection.paragraph2}</p>
              
              <div className="ai-quote-box">
                <BrainCircuit size={28} className="ai-quote-icon" />
                <p>
                  "A Inteligência Artificial deve ser um motor de facilitação, gerando autonomia e segurança para os profissionais sem nunca perder o calor humano."
                </p>
              </div>

              <div className="ai-actions">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ backgroundColor: 'var(--color-teal)' }}
                >
                  Trocar ideias sobre IA & Saúde
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            <div className="ai-pillars">
              {aiSection.pillars.map((pillar, idx) => (
                <div key={idx} className="ai-pillar-card">
                  <div className="pillar-number">0{idx + 1}</div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

