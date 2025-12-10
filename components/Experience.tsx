import React from 'react';
import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { Content } from '../types';

interface ExperienceProps {
  content: Content['experience'];
}

const Experience: React.FC<ExperienceProps> = ({ content }) => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-[#F8F5F0] animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0E1A2B] font-serif">{content.title}</h2>
          <div className="w-20 h-1.5 bg-[#3A76F0] mt-6 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-4 bottom-4 w-0.5 bg-[#DADCE0]"></div>

          <div className="space-y-16">
            {content.items.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-24 group">
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-[27px] top-2 w-3 h-3 bg-[#3A76F0] rounded-full ring-4 ring-[#F8F5F0] group-hover:scale-125 transition-transform duration-300"></div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#0E1A2B] mb-1">{item.role}</h3>
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#5F6368] mt-2">
                        <span className="flex items-center gap-2 font-bold text-[#3A76F0] bg-[#EBF3FF] px-3 py-1 rounded-full">
                          <Briefcase size={14} />
                          {item.company}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={16} />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar size={16} />
                          {item.period}
                        </span>
                      </div>
                    </div>
                    
                    {/* KPI Badge */}
                    {item.kpi && (
                      <div className="flex items-center gap-3 bg-gradient-to-r from-[#0E1A2B] to-[#3A76F0] text-white px-5 py-3 rounded-xl shadow-lg self-start">
                        <TrendingUp size={20} />
                        <div className="flex flex-col leading-none">
                          <span className="text-[10px] uppercase opacity-80 tracking-wider">Key Impact</span>
                          <span className="font-bold text-base">{item.kpi}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#0E1A2B]/80 leading-relaxed text-lg">
                        <span className="block w-2 h-2 bg-[#F5D76E] rounded-full mt-2.5 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;