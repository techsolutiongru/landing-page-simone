import React from 'react';
import { Target, Users, GitMerge, Smile, TrendingUp, Bot } from 'lucide-react';
import { SITE_DATA } from '../data/content';
import './Values.css';

const principleIcons = [Target, Users, GitMerge, Smile, TrendingUp, Bot];

export const Values = () => {
  const { principles } = SITE_DATA;

  return (
    <section className="values-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="badge">O Que Eu Acredito</span>
          <h2>Princípios que Orientam Minha Atuação</h2>
          <p>
            Diretrizes profissionais construídas na prática: da concepção do sistema ao momento em que o usuário executa sua tarefa diária.
          </p>
        </div>

        <div className="values-grid">
          {principles.map((item, idx) => {
            const Icon = principleIcons[idx % principleIcons.length];
            return (
              <div key={idx} className="value-card">
                <div className="value-icon-box">
                  <Icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

