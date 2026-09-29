import React from 'react';
import { 
  FolderKanban, 
  Layers, 
  HeartPulse, 
  Workflow, 
  ClipboardCheck, 
  ShieldCheck, 
  Cpu, 
  Sparkles 
} from 'lucide-react';
import { SITE_DATA } from '../data/content';
import './Experience.css';

// Map icon strings to Lucide components
const iconMap = {
  FolderKanban,
  Layers,
  HeartPulse,
  Workflow,
  ClipboardCheck,
  ShieldCheck,
  Cpu,
  Sparkles
};

export const Experience = () => {
  const { experienceCards, qualitativeImpact } = SITE_DATA;

  return (
    <section id="experiencia" className="experience-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="badge">Áreas de Atuação</span>
          <h2>Competências & Experiência Prática</h2>
          <p>
            Uma visão multidisciplinar capaz de articular estratégia, gestão de processos e execução técnica em ambientes operacionais e hospitalares.
          </p>
        </div>

        {/* Bento Grid of Skills & Expertise */}
        <div className="bento-grid">
          {experienceCards.map((card, idx) => {
            const IconComponent = iconMap[card.iconName] || Layers;
            return (
              <div key={idx} className="bento-card">
                <div className="bento-icon-wrapper">
                  <IconComponent size={24} />
                </div>
                <h3 className="bento-title">{card.title}</h3>
                <p className="bento-desc">{card.description}</p>
              </div>
            );
          })}
        </div>

        {/* Qualitative Impact Row */}
        <div className="impact-container">
          <div className="impact-header">
            <h3>Posicionamento & Diferenciais de Atuação</h3>
            <p>Construção consistente baseada em experiência real de campo e propósito evidente.</p>
          </div>
          <div className="impact-grid">
            {qualitativeImpact.map((item, idx) => (
              <div key={idx} className="impact-item">
                <div className="impact-dot"></div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

