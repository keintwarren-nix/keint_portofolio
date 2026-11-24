import React, { useState } from 'react';
import { Rocket, ExternalLink, Sparkles, Volume2 } from 'lucide-react';
import { AUDIO_CREDITS } from '../data/portfolioData';
import { audioManager } from '../utils/audio';

export default function FooterSection() {
  const [showCreditsModal, setShowCreditsModal] = useState(false);

  const scrollToTop = () => {
    audioManager.playWarpSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-space-950/90 border-t-2 border-cosmic-purple/50 py-8 text-retro-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-cosmic-purple/20">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              title="Launch to Orbit (Top)"
              aria-label="Scroll to top of the page"
              className="p-1.5 bg-space-900 border border-cosmic-violet hover:border-cosmic-pink text-cosmic-pink shadow-pixel-sm transition-transform hover:-translate-y-0.5"
            >
              <Rocket size={16} />
            </button>
            <div>
              <div className="font-pixel text-xs text-retro-text">
                KEINT WARREN J. POLIQUIT
              </div>
              <div className="font-sans text-xs text-retro-muted">
                Aspiring Full-Stack Software Engineer • CIT-U Cebu
              </div>
            </div>
          </div>

          {/* Nav links & Credits */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-pixel">
            <a 
              href="#about" 
              onClick={() => audioManager.playClick()}
              className="hover:text-cosmic-pink transition-colors text-[10px]"
            >
              ABOUT
            </a>
            <span>•</span>
            <a 
              href="#projects" 
              onClick={() => audioManager.playClick()}
              className="hover:text-cosmic-pink transition-colors text-[10px]"
            >
              PROJECTS
            </a>
            <span>•</span>
            <a 
              href="#journey" 
              onClick={() => audioManager.playClick()}
              className="hover:text-cosmic-pink transition-colors text-[10px]"
            >
              MISSION LOG
            </a>
            <span>•</span>
            <button
              onClick={() => {
                audioManager.playClick();
                setShowCreditsModal(true);
              }}
              className="text-cosmic-cyan hover:underline flex items-center gap-1 text-[10px]"
            >
              <Volume2 size={11} />
              <span>AUDIO CREDITS</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Konami Hint */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 font-sans text-xs text-retro-muted/80">
          <div>
            Built with curiosity in Cebu City, Philippines. © {new Date().getFullYear()} Keint Warren.
          </div>

          <div className="font-pixel text-[8px] text-retro-muted/60 flex items-center gap-1">
            <Sparkles size={10} className="text-cosmic-gold" />
            <span>KONAMI: ↑ ↑ ↓ ↓ ← → ← → B A</span>
          </div>
        </div>

      </div>

      {/* Audio Credits Modal */}
      {showCreditsModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/80 backdrop-blur-sm"
          onClick={() => setShowCreditsModal(false)}
        >
          <div 
            className="pixel-panel p-5 bg-space-900 border-2 border-cosmic-cyan max-w-md w-full shadow-pixel-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-cosmic-purple/40">
              <span className="font-pixel text-xs text-cosmic-cyan flex items-center gap-1.5">
                <Volume2 size={13} /> AUDIO CREDITS
              </span>
              <button
                onClick={() => setShowCreditsModal(false)}
                className="font-pixel text-xs text-retro-muted hover:text-cosmic-pink"
              >
                [X]
              </button>
            </div>

            <div className="space-y-3 font-sans text-xs text-retro-text">
              {AUDIO_CREDITS.map((item, idx) => (
                <div key={idx} className="p-2.5 bg-space-950 border border-cosmic-purple/30">
                  <div className="font-pixel text-[9px] text-cosmic-pink mb-0.5">
                    {item.title}
                  </div>
                  <div className="text-retro-muted text-[11px] mb-1">
                    {item.creator} ({item.source})
                  </div>
                  <p className="text-retro-muted/80 text-[10px] mb-1.5">
                    {item.description}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cosmic-cyan hover:underline inline-flex items-center gap-1 font-pixel text-[7px]"
                  >
                    <span>SOURCE</span>
                    <ExternalLink size={9} />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={() => setShowCreditsModal(false)}
                className="pixel-btn text-[9px] py-1 px-3"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
