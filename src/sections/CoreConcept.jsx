import React from 'react';
import { Cpu, Users, GitFork, Sparkles, Award } from 'lucide-react';
import { SITE_DATA } from '../data/content';
import './CoreConcept.css';

export const CoreConcept = () => {
  const { coreConcept } = SITE_DATA;

  return (
    <section className="core-concept-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="badge">{coreConcept.title}</span>
          <h2>Tecnologia + Processos + Pessoas</h2>
          <p>{coreConcept.tagline}</p>
        </div>

        {/* Dynamic Architectural Diagram */}
        <div className="diagram-wrapper">
          <div className="diagram-grid">
            
            {/* Top Node: Tecnologia */}
            <div className="concept-card node-tech">
              <div className="card-icon tech-icon">
                <Cpu size={28} />
              </div>
              <h3>TECNOLOGIA</h3>
              <p>Ferramenta habilitadora, sistemas robustos e arquitetura orientada à estabilidade.</p>
            </div>

            {/* Left Node: Pessoas */}
            <div className="concept-card node-people">
              <div className="card-icon people-icon">
                <Users size={28} />
              </div>
              <h3>PESSOAS</h3>
              <p>Empatia, usabilidade intuitiva, escuta de necessidades e mitigação da resistência à mudança.</p>
            </div>

            {/* Center Core: RESULTADO */}
            <div className="center-core">
              <div className="core-pulse"></div>
              <div className="core-content">
                <Award size={32} className="core-icon" />
                <strong>RESULTADO</strong>
                <span>Eficiência & Valor Real</span>
              </div>
            </div>

            {/* Right Node: Processos */}
            <div className="concept-card node-processes">
              <div className="card-icon process-icon">
                <GitFork size={28} />
              </div>
              <h3>PROCESSOS</h3>
              <p>Mapeamento claro, eliminação de retrabalho, gestão de riscos e melhoria contínua.</p>
            </div>

            {/* Bottom Node: Inovação */}
            <div className="concept-card node-innovation">
              <div className="card-icon innovation-icon">
                <Sparkles size={28} />
              </div>
              <h3>INOVAÇÃO & IA</h3>
              <p>Automação inteligente e apoio qualificado à tomada de decisão na saúde e operações.</p>
            </div>

          </div>

          <div className="concept-footer-quote">
            <blockquote>
              "Resultados consistentes e duradouros surgem unicamente quando tecnologia, pessoas e processos trabalham em completa sintonia."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

