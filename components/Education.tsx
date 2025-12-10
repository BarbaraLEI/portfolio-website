import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { Content } from '../types';

interface EducationProps {
  content: Content['education'];
}

const Education: React.FC<EducationProps> = ({ content }) => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-[#F8F5F0] animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0E1A2B] font-serif">{content.title}</h2>
          <div className="w-16 h-1 bg-[#3A76F0] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-10">
          {content.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
            >
              {/* Decorative Background Icon */}
              <GraduationCap 
                size={180} 
                className="absolute -right-10 -bottom-10 text-gray-50 opacity-50 rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700" 
              />
              
              <div className="absolute top-0 left-0 w-2 h-full bg-[#3A76F0]"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between md:items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-3xl font-bold text-[#0E1A2B] font-serif">{item.school}</h3>
                    <p className="text-[#3A76F0] font-medium text-xl mt-2">{item.degree}</p>
                  </div>
                  <span className="bg-[#0E1A2B] text-white px-5 py-2 rounded-full text-sm font-mono whitespace-nowrap self-start shadow-md">
                    {item.period}
                  </span>
                </div>

                <div className="mt-8 space-y-4">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="p-1 bg-[#F5D76E]/20 rounded-full mt-0.5">
                        <Award size={18} className="text-[#F5A623]" />
                      </div>
                      <p className="text-[#5F6368] text-lg">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;