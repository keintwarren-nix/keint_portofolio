import React, { useEffect } from 'react';
import { X, Coffee, Rocket, MapPin, Layers, Sparkles } from 'lucide-react';

const iconMap = {
  Coffee,
  Rocket,
  MapPin,
  Layers,
};

export default function TelemetryFactModal({ fact, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (fact) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fact, onClose]);

  if (!fact) return null;

  const IconComp = iconMap[fact.icon] || Sparkles;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="pixel-panel p-6 bg-space-900 border-2 border-cosmic-pink max-w-md w-full shadow-pixel-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-cosmic-purple/40">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cosmic-purple/30 border border-cosmic-violet flex items-center justify-center">
              <IconComp size={16} className="text-cosmic-pink" />
            </div>
            <div>
              <span className="font-pixel text-[9px] text-cosmic-cyan block">
                CADET TELEMETRY DETAIL
              </span>
              <h3 className="font-pixel text-xs sm:text-sm text-retro-text">
                {fact.label.toUpperCase()}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 font-pixel text-xs text-retro-muted hover:text-cosmic-pink transition-colors"
          >
            [X]
          </button>
        </div>

        {/* Full Value display */}
        <div className="p-3.5 bg-space-950 border border-cosmic-purple/50 mb-3.5 shadow-pixel-sm">
          <span className="font-pixel text-[9px] text-cosmic-gold block mb-1">
            RECORDED VALUE:
          </span>
          <div className="font-sans text-sm sm:text-base font-semibold text-retro-text">
            {fact.value}
          </div>
        </div>

        {/* Detailed Explanation */}
        <p className="font-sans text-xs sm:text-sm text-retro-muted leading-relaxed mb-5">
          {fact.detail}
        </p>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="pixel-btn text-[10px] py-1.5 px-5"
          >
            ACKNOWLEDGE
          </button>
        </div>
      </div>
    </div>
  );
}
