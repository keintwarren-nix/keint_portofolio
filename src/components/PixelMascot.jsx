import React, { useState, useEffect } from 'react';
import { Rocket, ArrowUp } from 'lucide-react';
import { audioManager } from '../utils/audio';

export default function PixelMascot() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isWarping, setIsWarping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, Math.round(currentProgress))));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLaunch = () => {
    audioManager.playWarpSound();
    setIsWarping(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsWarping(false);
    }, 1200);
  };

  const altitudeKm = Math.round(scrollProgress * 4.2);

  return (
    <aside 
      aria-label="Cosmic Orbit Navigation Telemetry"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-1.5 pointer-events-auto"
    >
      {/* Telemetry Tooltip */}
      {(showTooltip || scrollProgress > 15) && (
        <div className="bg-space-950/95 border border-cosmic-violet/60 px-2.5 py-1 text-right shadow-pixel-sm backdrop-blur-sm pointer-events-none transition-all">
          <div className="font-pixel text-[8px] text-cosmic-pink">
            ALT: {altitudeKm} KM
          </div>
          <div className="font-sans text-[10px] text-retro-muted">
            ORBIT: {scrollProgress}%
          </div>
        </div>
      )}

      {/* Interactive Mascot Rocket Button */}
      <button
        onClick={handleLaunch}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        title="Warp to Launchpad (Scroll to Top)"
        aria-label="Warp back to top of the page"
        className={`group relative p-2.5 bg-space-900 border-2 border-cosmic-purple hover:border-cosmic-pink shadow-pixel transition-transform duration-200 ${
          isWarping ? '-translate-y-8 scale-110 opacity-70' : 'hover:-translate-y-1'
        }`}
      >
        <div className="relative">
          {/* Rocket Icon / Pixel Mascot */}
          <Rocket 
            size={22} 
            className={`text-cosmic-pink transition-transform duration-300 ${
              isWarping ? 'rotate-45 scale-125' : 'group-hover:rotate-12'
            }`} 
          />

          {/* Engine Exhaust Flame (Pixel animation) */}
          <span 
            className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-2 h-2.5 bg-gradient-to-b from-cosmic-gold via-cosmic-magenta to-transparent transition-opacity ${
              isWarping || scrollProgress > 10 ? 'opacity-100 animate-pulse' : 'opacity-0'
            }`}
          />
        </div>

        {/* Quick Top Icon overlay on hover */}
        <span className="sr-only">Back to Top</span>
      </button>
    </aside>
  );
}
