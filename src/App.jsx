import React from 'react';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { CoreConcept } from './sections/CoreConcept';
import { Timeline } from './sections/Timeline';
import { Experience } from './sections/Experience';
import { Values } from './sections/Values';
import { AISection } from './sections/AISection';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="app-root">
      <Header />
      <main id="main-content">
        <Hero />
        <CoreConcept />
        <Timeline />
        <Experience />
        <Values />
        <AISection />
        <Education />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

