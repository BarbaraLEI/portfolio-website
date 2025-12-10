import React, { useEffect, useState } from 'react';

const MouseFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div 
        className="absolute w-[600px] h-[600px] rounded-full transition-transform duration-100 ease-out will-change-transform opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(58, 118, 240, 0.15) 0%, rgba(14, 26, 43, 0) 70%)',
          left: -300,
          top: -300,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div 
        className="absolute w-8 h-8 rounded-full border border-[#3A76F0]/30 transition-transform duration-75 ease-out will-change-transform"
        style={{
          left: -16,
          top: -16,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  );
};

export default MouseFollower;