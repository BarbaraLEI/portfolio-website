import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Content, View } from '../types';

interface HeroProps {
  content: Content['hero'];
  setView: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ content, setView }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden animate-fade-in">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#EBF3FF] to-transparent -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-8 animate-fade-in-up">
            <div>
              <p className="text-[#3A76F0] font-medium tracking-wide mb-3 flex items-center gap-3">
                <span className="w-12 h-[2px] bg-[#3A76F0] inline-block"></span>
                <span className="uppercase text-sm tracking-widest">{content.greeting}</span>
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-[#0E1A2B] mb-6 font-serif leading-tight">
                {content.name}
              </h1>
              <div className="flex flex-wrap gap-3 text-xl md:text-2xl text-[#5F6368] font-light">
                {content.titles.map((title, index) => (
                  <span key={index} className="flex items-center">
                    {index > 0 && <span className="mr-3 text-[#F5D76E]">•</span>}
                    {title}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-lg text-[#0E1A2B]/80 max-w-2xl leading-relaxed border-l-4 border-[#F5D76E] pl-6 py-2">
              {content.bio}
            </p>

            <div className="pt-6 flex flex-wrap gap-4">
              <button 
                onClick={() => setView('projects')}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0E1A2B] text-white rounded-lg font-medium hover:bg-[#3A76F0] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {content.cta}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] group">
              {/* Techy Rotating Rings */}
              <div className="absolute -inset-4 border border-[#3A76F0]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute -inset-8 border border-dashed border-[#0E1A2B]/10 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-[6px] border-white z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src="https://raw.githubusercontent.com/BarbaraLEI/pictures-storage/main/linkedin%20profile.jpg" 
                  alt="Yunyue LEI Profile" 
                  className="w-full h-full object-cover"
                />
                
                {/* Tech Scan Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3A76F0]/20 to-transparent translate-y-[-100%] group-hover:animate-scan z-20 pointer-events-none"></div>
                
                {/* Overlay Tint */}
                <div className="absolute inset-0 bg-[#0E1A2B]/0 group-hover:bg-[#0E1A2B]/10 transition-colors duration-300"></div>
              </div>

              {/* Decorative Tech Elements */}
              <div className="absolute top-10 right-0 w-4 h-4 bg-[#F5D76E] rounded-full animate-pulse shadow-[0_0_15px_rgba(245,215,110,0.6)] z-20"></div>
              <div className="absolute bottom-10 left-4 w-3 h-3 bg-[#3A76F0] rounded-full animate-ping z-20"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;