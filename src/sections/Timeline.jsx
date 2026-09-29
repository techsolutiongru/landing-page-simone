import React from 'react';
import { SITE_DATA } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './Timeline.css';

export const Timeline = () => {
  const { storyTimeline } = SITE_DATA;

  return (
    <section id="minha-historia" className="timeline-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="badge">Minha História</span>
          <h2>Uma trajetória construída entre tecnologia, pessoas e desafios</h2>
          <p>
            Da escuta atenta no suporte hospitalar à liderança de implantações críticas e à visão de Inteligência Artificial: cada etapa moldou uma visão integrada e humana da tecnologia.
          </p>
        </div>

        {/* Storytelling Timeline Grid */}
        <div className="timeline-container">
          <div className="timeline-spine"></div>

          {storyTimeline.map((item, idx) => (
            <div key={idx} className={	imeline-block }>
              
              {/* Timeline Marker Number */}
              <div className="timeline-marker">
                <span>{item.step}</span>
              </div>

              {/* Story Content Card */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <span className="timeline-tag">{item.tag}</span>
                  <span className="timeline-context">{item.context}</span>
                </div>

                <h3 className="timeline-item-title">{item.title}</h3>
                
                <p className="timeline-item-desc">{item.description}</p>

                <div className="timeline-highlights">
                  <strong className="highlights-title">Destaques & Aprendizados:</strong>
                  <ul>
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx}>
                        <CheckCircle2 size={16} className="highlight-icon" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

