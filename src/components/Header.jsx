import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../data/content';
import './Header.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Minha História', href: '#minha-historia' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Visão', href: '#visao' },
    { label: 'Formação', href: '#formacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={site-header }>
      <div className="container header-container">
        <a href="#inicio" className="brand-logo" aria-label="Simone de Oliveira - Página Inicial">
          <span className="brand-name">SIMONE DE OLIVEIRA</span>
          <span className="brand-sub">Tecnologia • Saúde • Processos</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navegação Principal">
          <ul className="nav-list">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header-cta-wrapper">
          <a href="#contato" className="btn btn-primary header-btn">
            Vamos conversar
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={mobile-drawer } aria-hidden={!mobileMenuOpen}>
        <ul className="mobile-nav-list">
          {navLinks.map((item, idx) => (
            <li key={idx}>
              <a href={item.href} className="mobile-nav-link" onClick={handleLinkClick}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="mobile-cta-item">
            <a href="#contato" className="btn btn-primary mobile-btn" onClick={handleLinkClick}>
              Vamos conversar
              <ArrowUpRight size={16} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

