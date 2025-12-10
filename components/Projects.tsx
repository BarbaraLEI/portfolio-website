import React, { useState, useRef } from 'react';
import { ExternalLink, Code2, Video, Palette, Images, X, Grid, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Content, Project } from '../types';

interface ProjectsProps {
  content: Content['projects'];
}

const Projects: React.FC<ProjectsProps> = ({ content }) => {
  const [filter, setFilter] = useState<'All' | 'Code' | 'Video' | 'Design'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Gallery State
  const [viewMode, setViewMode] = useState<'grid' | 'single'>('grid');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = filter === 'All' 
    ? content.items 
    : content.items.filter(item => item.category === filter);

  const categories = [
    { name: 'All', icon: null },
    { name: 'Code', icon: <Code2 size={16} /> },
    { name: 'Video', icon: <Video size={16} /> },
    { name: 'Design', icon: <Palette size={16} /> },
  ];

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setViewMode('grid');
    setCurrentImageIndex(0);
    setIsZoomed(false);
    document.body.style.overflow = 'hidden';
  };

  const handleOpenSingleImage = (index: number) => {
    setCurrentImageIndex(index);
    setViewMode('single');
    setIsZoomed(false);
  };

  const handleCloseGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery!.length);
      setIsZoomed(false);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.gallery) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery!.length) % selectedProject.gallery!.length);
      setIsZoomed(false);
    }
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newZoom = !isZoomed;
    setIsZoomed(newZoom);
    if (newZoom && imageContainerRef.current) {
      imageContainerRef.current.scrollTop = 0;
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 bg-white animate-fade-in relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0E1A2B] font-serif">{content.title}</h2>
            <p className="mt-4 text-[#5F6368]">A selection of my work across data, design, and storytelling.</p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setFilter(cat.name as any)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === cat.name 
                    ? 'bg-[#0E1A2B] text-white border-[#0E1A2B] shadow-lg scale-105' 
                    : 'bg-white text-[#5F6368] border-gray-200 hover:border-[#3A76F0] hover:text-[#3A76F0]'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative h-[450px] bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              onClick={() => project.gallery ? handleOpenProject(project) : (project.link && project.link !== '#' ? window.open(project.link, '_blank') : null)}
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A2B] via-[#0E1A2B]/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

              {/* Category Tag */}
              <div className="absolute top-6 right-6">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2 font-serif group-hover:text-[#F5D76E] transition-colors">{project.title}</h3>
                
                <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 delay-75">
                  <div className="w-12 h-0.5 bg-[#F5D76E] mb-4"></div>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="text-xs font-mono bg-[#3A76F0]/20 border border-[#3A76F0]/40 text-[#9BC7FF] px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.gallery ? (
                       <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenProject(project);
                        }}
                        className="inline-flex items-center gap-2 bg-[#F5D76E] text-[#0E1A2B] px-4 py-2 rounded-lg font-bold text-sm hover:bg-white transition-colors"
                      >
                        View Gallery <Images size={14} />
                      </button>
                    ) : (
                      project.link && project.link !== '#' && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 bg-white text-[#0E1A2B] px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#F5D76E] transition-colors"
                        >
                          View Project <ExternalLink size={14} />
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedProject && selectedProject.gallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in">
          
          {/* Close Button */}
          <button 
            onClick={handleCloseGallery}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[60] p-2 hover:bg-white/10 rounded-full"
          >
            <X size={32} />
          </button>

          {/* VIEW MODE: GRID */}
          {viewMode === 'grid' && (
            <div className="w-full max-w-6xl h-[90vh] overflow-y-auto p-4 md:p-8 animate-fade-in-up">
                <div className="text-center mb-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-serif mb-3">{selectedProject.title}</h3>
                    <p className="text-white/60 text-sm tracking-wide uppercase">Gallery Collection ({selectedProject.gallery.length} Images)</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {selectedProject.gallery.map((img, idx) => (
                        <button 
                            key={idx}
                            onClick={() => handleOpenSingleImage(idx)}
                            className="group relative aspect-[4/3] bg-black/50 rounded-xl overflow-hidden border border-white/10 hover:border-[#3A76F0] transition-all duration-300 hover:scale-[1.02] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3A76F0]"
                        >
                            <img 
                                src={img} 
                                alt={`Gallery Item ${idx + 1}`} 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="bg-[#3A76F0] text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                                        <Maximize2 size={14} /> View Full
                                    </span>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
          )}

          {/* VIEW MODE: SINGLE IMAGE */}
          {viewMode === 'single' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full animate-fade-in">
                
                {/* Top Navigation Bar */}
                <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-[60] bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
                    <div className="pointer-events-auto">
                        <button
                            onClick={() => setViewMode('grid')}
                            className="flex items-center gap-2 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 px-4 py-2 rounded-full backdrop-blur-md transition-all border border-white/10"
                        >
                            <Grid size={18} />
                            <span className="text-sm font-bold">Back to Grid</span>
                        </button>
                    </div>
                    
                    <span className="text-white/80 font-mono text-sm bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                        {currentImageIndex + 1} / {selectedProject.gallery.length}
                    </span>
                    {/* Placeholder for balance (Close button is fixed) */}
                    <div className="w-24"></div> 
                </div>

                {/* Main Image Container - Scrollable when zoomed */}
                <div 
                    ref={imageContainerRef}
                    className={`relative w-full h-full flex justify-center p-4 md:p-8 overflow-x-hidden ${isZoomed ? 'overflow-y-auto items-start' : 'overflow-hidden items-center'}`}
                    onClick={(e) => {
                      if (e.target === e.currentTarget) setIsZoomed(false);
                    }}
                >
                    <img 
                        src={selectedProject.gallery[currentImageIndex]} 
                        alt={`Gallery view ${currentImageIndex + 1}`}
                        onClick={toggleZoom}
                        className={`transition-all duration-300 ease-in-out shadow-2xl ${
                            isZoomed 
                                ? 'w-full md:w-[90%] lg:w-[80%] max-w-5xl h-auto cursor-zoom-out mt-20 mb-20' 
                                : 'max-h-[85vh] max-w-full object-contain cursor-zoom-in'
                        }`}
                    />
                </div>

                {/* Zoom Hint - Only show when NOT zoomed */}
                {!isZoomed && (
                    <div className="absolute bottom-8 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white/80 text-xs pointer-events-none flex items-center gap-2 animate-fade-in">
                            <ZoomIn size={14} /> Click image to zoom
                    </div>
                )}
                
                {/* Reset Hint - Only show when zoomed */}
                 {isZoomed && (
                    <div className="fixed bottom-8 bg-[#3A76F0] shadow-lg backdrop-blur-md px-4 py-2 rounded-full text-white text-xs pointer-events-none flex items-center gap-2 z-[70] animate-fade-in">
                            <ZoomOut size={14} /> Click to reset
                    </div>
                )}

                {/* Navigation Arrows - Only show when NOT zoomed to avoid overlaying text */}
                {!isZoomed && (
                  <>
                    <button 
                        onClick={handlePrevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all z-[60] group border border-white/5"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <button 
                        onClick={handleNextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all z-[60] group border border-white/5"
                        aria-label="Next image"
                    >
                        <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </>
                )}

            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Projects;