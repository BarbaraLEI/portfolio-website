import React, { useState } from 'react';
import { Menu, X, Globe, User, Briefcase, Code, GraduationCap, Mail, Layers } from 'lucide-react';
import { Language, Content, View } from '../types';

interface SidebarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  currentView: View;
  setView: (view: View) => void;
  content: Content['nav'];
}

const Sidebar: React.FC<SidebarProps> = ({ lang, setLang, currentView, setView, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: content.about, view: 'home', icon: <User size={20} /> },
    { label: content.whatIDo, view: 'home', anchor: 'expertise', icon: <Layers size={20} /> },
    { label: content.experience, view: 'experience', icon: <Briefcase size={20} /> },
    { label: content.projects, view: 'projects', icon: <Code size={20} /> },
    { label: content.education, view: 'education', icon: <GraduationCap size={20} /> },
    { label: content.contact, view: 'contact', icon: <Mail size={20} /> },
  ];

  const handleNavClick = (view: string, anchor?: string) => {
    setView(view as View);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-[#0E1A2B] text-white rounded-lg md:hidden shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Container */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#0E1A2B] text-white transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 flex flex-col justify-between`}
      >
        <div className="p-8">
          {/* Logo */}
          <div 
            className="mb-12 cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <h1 className="font-serif text-3xl font-bold tracking-tighter">
              YL<span className="text-[#3A76F0]">.</span>
            </h1>
            <p className="text-gray-400 text-xs mt-1 tracking-widest uppercase">Portfolio</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = currentView === item.view && !item.anchor;
              // Special handling for "Expertise" anchor active state could be added here if needed
              
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view, item.anchor)}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden ${
                    isActive 
                      ? 'bg-[#3A76F0] text-white shadow-lg shadow-[#3A76F0]/20' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`relative z-10 ${isActive ? 'text-white' : 'group-hover:text-[#F5D76E] transition-colors'}`}>
                    {item.icon}
                  </span>
                  <span className="relative z-10 font-medium tracking-wide">
                    {item.label}
                  </span>
                  
                  {/* Hover Effect Bar */}
                  {!isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5D76E] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200"></div>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer / Settings */}
        <div className="p-8 border-t border-white/10 bg-[#0b1421]">
          <button 
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-white/10 hover:border-[#3A76F0] transition-colors group"
          >
            <div className="flex items-center gap-3 text-sm font-medium text-gray-300 group-hover:text-white">
              <Globe size={16} />
              <span>Language</span>
            </div>
            <span className="text-xs font-bold bg-[#3A76F0] text-white px-2 py-0.5 rounded uppercase">
              {lang}
            </span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;