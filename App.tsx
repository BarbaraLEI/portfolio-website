import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import MouseFollower from './components/MouseFollower';
import ChatWidget from './components/ChatWidget';
import { getContent } from './constants';
import { Language, View } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [currentView, setView] = useState<View>('home');
  const content = getContent(lang);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero content={content.hero} setView={setView} />
            <About content={content.about} />
          </>
        );
      case 'experience':
        return <Experience content={content.experience} />;
      case 'projects':
        return <Projects content={content.projects} />;
      case 'education':
        return <Education content={content.education} />;
      case 'contact':
        return <Contact content={content.contact} />;
      default:
        return <Hero content={content.hero} setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#0E1A2B] font-sans-primary selection:bg-[#3A76F0] selection:text-white">
      <MouseFollower />
      
      {/* Sidebar Navigation */}
      <Sidebar 
        lang={lang} 
        setLang={setLang} 
        content={content.nav} 
        currentView={currentView}
        setView={setView}
      />

      {/* Main Content Area */}
      <main className="md:ml-72 min-h-screen transition-all duration-300 relative z-10">
        {renderView()}
      </main>

      {/* AI Chat Widget */}
      <ChatWidget lang={lang} />
    </div>
  );
};

export default App;