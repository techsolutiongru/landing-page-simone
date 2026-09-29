import React from 'react';
import { GraduationCap, Award, BookOpen, Check } from 'lucide-react';
import { SITE_DATA } from '../data/content';
import './Education.css';

export const Education = () => {
  const { education } = SITE_DATA.profile;

  return (
    <section id="formacao" className="education-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="badge">Formação Acadêmica</span>
          <h2>Base Conceitual & Aprimoramento</h2>
          <p>
            Alinhamento entre sólida formação acadêmica em Análise de Sistemas e atualização constante em metodologias ágeis e novas tecnologias.
          </p>
        </div>

        <div className="education-card-wrapper">
          <div className="degree-main-card">
            <div className="degree-icon-box">
              <GraduationCap size={36} />
            </div>

            <div className="degree-details">
              <div className="degree-meta">
                <span className="degree-badge">Graduação</span>
                {education.institution && <span className="degree-institution">{education.institution}</span>}
                {education.year && <span className="degree-year">{education.year}</span>}
              </div>

              <h3 className="degree-title">{education.degree}</h3>
              <p className="degree-desc">
                Formação fundamental que fundamentou a visão de arquitetura de dados, modelagem de processos corporativos, engenharia de requisitos e implantação de softwares de missão crítica.
              </p>
            </div>
          </div>

          <div className="certifications-wrapper">
            <div className="cert-header">
              <BookOpen size={20} className="cert-icon" />
              <h4>Áreas de Aprofundamento & Especialização Contínua</h4>
            </div>

            <div className="cert-grid">
              {education.certifications.map((item, idx) => (
                <div key={idx} className="cert-item">
                  <div className="cert-check">
                    <Check size={16} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

