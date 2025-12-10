import React from 'react';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { Content } from '../types';

interface ContactProps {
  content: Content['contact'];
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 bg-[#0E1A2B] text-white relative overflow-hidden animate-fade-in">
      {/* Background Map Decoration (Abstract) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 L100 0" stroke="white" strokeWidth="0.5" />
           <path d="M20 100 L100 20" stroke="white" strokeWidth="0.5" />
           <path d="M0 80 L80 0" stroke="white" strokeWidth="0.5" />
         </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex-grow flex flex-col justify-center">
        <h2 className="text-5xl md:text-7xl font-bold font-serif mb-8">{content.title}</h2>
        <div className="w-24 h-1 bg-[#3A76F0] mx-auto mb-10 rounded-full"></div>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          {content.subtitle}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <a 
            href={`mailto:${content.emailText}`}
            className="group flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-[#3A76F0]/50 px-10 py-6 rounded-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="p-3 bg-[#3A76F0] rounded-full group-hover:scale-110 transition-transform shadow-lg shadow-[#3A76F0]/20">
              <Mail size={24} />
            </div>
            <span className="text-xl font-medium">{content.emailText}</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/yunyue-lei-523941325"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-[#0077B5]/50 px-10 py-6 rounded-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="p-3 bg-[#0077B5] rounded-full group-hover:scale-110 transition-transform shadow-lg shadow-[#0077B5]/20">
              <Linkedin size={24} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-medium">{content.linkedinText}</span>
              <ArrowUpRight size={20} className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>
        </div>
      </div>

      <div className="w-full border-t border-white/10 py-8 relative z-10 bg-[#0E1A2B]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Yunyue LEI.</p>
          <p className="font-serif italic text-lg text-[#F5D76E] mt-4 md:mt-0">“{content.footerQuote}”</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;