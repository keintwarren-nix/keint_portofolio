import React, { useEffect } from 'react';
import { Volume2, X, ExternalLink } from 'lucide-react';
import { AUDIO_CREDITS } from '../data/portfolioData';

export default function AudioCreditsModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="pixel-panel p-5 sm:p-6 bg-space-900 border-2 border-cosmic-cyan max-w-lg w-full shadow-pixel-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-cosmic-purple/40">
          <span className="font-pixel text-xs sm:text-sm text-cosmic-cyan flex items-center gap-2">
            <Volume2 size={16} /> AUDIO ATTRIBUTION &amp; CREDITS
          </span>
          <button
            onClick={onClose}
            className="p-1 font-pixel text-xs text-retro-muted hover:text-cosmic-pink transition-colors"
          >
            [X]
          </button>
        </div>

        {/* Audio items */}
        <div className="space-y-3.5 font-sans text-xs text-retro-text">
          {AUDIO_CREDITS.map((item, idx) => (
            <div key={idx} className="p-3 bg-space-950 border border-cosmic-purple/40 shadow-pixel-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="font-pixel text-[10px] text-cosmic-pink">
                  {item.title}
                </span>
                <span className="font-sans text-[10px] text-cosmic-cyan">
                  {item.source}
                </span>
              </div>
              <div className="text-retro-muted mb-1.5 text-xs">
                Creator: <strong className="text-retro-text">{item.creator}</strong>
              </div>
              <p className="text-retro-muted/80 text-[11px] mb-2 leading-relaxed">
                {item.description}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cosmic-cyan hover:underline inline-flex items-center gap-1 font-pixel text-[8px]"
              >
                <span>OPEN OFFICIAL SOURCE LINK</span>
                <ExternalLink size={10} />
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 text-center">
          <button
            onClick={onClose}
            className="pixel-btn text-[10px] py-1.5 px-5"
          >
            CLOSE CREDITS
          </button>
        </div>
      </div>
    </div>
  );
}
