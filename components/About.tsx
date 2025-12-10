import React from 'react';
import { BarChart3, PenTool, Globe, Lightbulb } from 'lucide-react';
import { Content } from '../types';

interface AboutProps {
  content: Content['about'];
}

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  PenTool,
  Globe,
  Lightbulb,
};

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="expertise" className="py-20 bg-white animate-fade-in relative">
       {/* Section Divider */}
       <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F8F5F0] to-white pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <span className="text-[#3A76F0] font-bold tracking-widest uppercase text-sm mb-2 block">My Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0E1A2B] font-serif">{content.title}</h2>
          </div>
          <p className="text-lg text-[#5F6368] max-w-md mt-4 md:mt-0 text-right md:text-left border-l-4 border-[#F5D76E] pl-4">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.skills.map((skill, index) => {
            const Icon = iconMap[skill.iconName];
            return (
              <div 
                key={index}
                className="group p-8 border border-gray-100 rounded-2xl bg-[#F8F5F0] hover:bg-[#0E1A2B] hover:text-white transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-2xl"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-10 text-[#3A76F0] transition-opacity transform group-hover:scale-150 duration-500 rotate-12">
                  {Icon && <Icon size={120} />}
                </div>
                
                <div className="flex items-start gap-5 relative z-10">
                  <div className="p-4 bg-white rounded-xl shadow-sm text-[#3A76F0] group-hover:bg-[#3A76F0] group-hover:text-white transition-colors duration-300">
                    {Icon && <Icon size={24} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-white text-[#0E1A2B]">{skill.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.split(', ').map((s, i) => (
                        <span key={i} className="text-sm font-medium opacity-80 bg-white/50 group-hover:bg-white/10 px-3 py-1 rounded-md border border-gray-200 group-hover:border-white/10">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;