import React, { useState } from 'react';
import { 
  Coffee, 
  Rocket, 
  MapPin, 
  Gamepad2, 
  Layers, 
  Headphones, 
  GraduationCap, 
  Award,
  Terminal,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Camera
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { audioManager } from '../utils/audio';

const iconMap = {
  Coffee,
  Rocket,
  MapPin,
  Gamepad2,
  Layers,
  Headphones,
};

export default function AboutSection() {
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = PERSONAL_INFO.photos || [
    { src: PERSONAL_INFO.avatarUrl, caption: "Keint Warren" }
  ];

  const currentPhoto = photos[photoIndex];

  const nextPhoto = () => {
    audioManager.playClick();
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    audioManager.playClick();
    setPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section 
      id="about" 
      className="relative py-12 sm:py-16 border-t border-cosmic-purple/30 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 pixel-badge text-cosmic-pink mb-2">
            <Terminal size={12} />
            <span>TRANSMISSION // ABOUT ME</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-text mb-2">
            PILOT PROFILE &amp; CADET ARCHIVE
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cosmic-magenta to-cosmic-violet mx-auto" />
        </div>

        {/* Main Grid: 7-Photo Slideshow + Narrative & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive 7-Photo Holo-Deck */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="pixel-panel p-3 bg-space-900/90 border-2 border-cosmic-violet shadow-pixel w-full max-w-sm">
              
              {/* Header bar */}
              <div className="flex items-center justify-between px-2 py-1 mb-2 bg-space-950 border-b border-cosmic-purple/40">
                <span className="font-pixel text-[10px] text-cosmic-pink flex items-center gap-1.5">
                  <Camera size={12} />
                  PHOTO LOG: {photoIndex + 1} / {photos.length}
                </span>
                <span className="font-pixel text-[8px] text-cosmic-cyan">7 ARCHIVES</span>
              </div>

              {/* Photo Display Window */}
              <div className="relative aspect-[4/5] overflow-hidden bg-space-950 border border-cosmic-purple/50">
                <img 
                  src={currentPhoto.src} 
                  alt={currentPhoto.caption || "Keint Warren"} 
                  className="w-full h-full object-cover object-center filter contrast-105 transition-all duration-300"
                />

                {/* Left/Right Arrows */}
                <button
                  onClick={prevPhoto}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-space-950/80 border border-cosmic-violet text-retro-text hover:border-cosmic-pink hover:text-cosmic-pink transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextPhoto}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-space-950/80 border border-cosmic-violet text-retro-text hover:border-cosmic-pink hover:text-cosmic-pink transition-all"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Caption Banner */}
                <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 bg-space-950/90 border border-cosmic-purple/40 backdrop-blur-sm text-center">
                  <span className="font-pixel text-[9px] text-cosmic-cyan">
                    {currentPhoto.caption}
                  </span>
                </div>
              </div>

              {/* 7-Photo Thumbnail Switcher Strip */}
              <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-1">
                {photos.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      audioManager.playClick();
                      setPhotoIndex(idx);
                    }}
                    title={`View Photo ${idx + 1}`}
                    className={`relative w-10 h-10 shrink-0 border overflow-hidden transition-all ${
                      photoIndex === idx
                        ? 'border-2 border-cosmic-pink scale-105 shadow-pixel-sm'
                        : 'border-cosmic-purple/40 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={p.src} 
                      alt={`Photo ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Status footer */}
              <div className="mt-2 pt-2 border-t border-cosmic-purple/30 text-center">
                <span className="font-pixel text-[9px] text-cosmic-gold">
                  CIT-U BSIT // CEBU CITY, PH
                </span>
              </div>
            </div>

            {/* Quick Stat Tiles */}
            <div className="grid grid-cols-2 gap-2.5 w-full max-w-sm mt-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="pixel-panel p-2.5 bg-space-900/80 text-center border border-cosmic-purple/40"
                >
                  <div className="font-pixel text-base sm:text-lg text-cosmic-pink mb-0.5">
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs font-semibold text-retro-text">
                    {stat.label}
                  </div>
                  <div className="font-sans text-[10px] text-retro-muted">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Narrative, Mission Objective & Fun Facts */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Main Terminal Window */}
            <div className="pixel-panel p-5 sm:p-6 bg-space-900/90 border-2 border-cosmic-purple/60">
              <div className="flex items-center gap-2 font-pixel text-xs text-cosmic-violet mb-3 pb-2 border-b border-cosmic-purple/30">
                <Sparkles size={14} className="text-cosmic-pink" />
                <span>LOG_ENTRY // CIT-U MISSION CADET</span>
              </div>

              <div className="space-y-3 font-sans text-xs sm:text-sm text-retro-text leading-relaxed">
                {PERSONAL_INFO.bio.map((para, i) => (
                  <p key={i} className="text-retro-text/90">
                    {para}
                  </p>
                ))}
              </div>

              {/* Academic Highlights */}
              <div className="mt-4 pt-3 border-t border-cosmic-purple/30 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2 px-2.5 py-1 bg-space-950 border border-cosmic-violet/40">
                  <GraduationCap size={14} className="text-cosmic-cyan" />
                  <span className="font-sans text-xs text-retro-text">
                    CIT-U (2023–Present) — BSIT
                  </span>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1 bg-space-950 border border-cosmic-violet/40">
                  <Award size={14} className="text-cosmic-gold" />
                  <span className="font-sans text-xs text-retro-text">
                    Tisa NHS (TVL Honors Graduate)
                  </span>
                </div>
              </div>
            </div>

            {/* Fun Fact Chips / Telemetry Gauges */}
            <div>
              <div className="font-pixel text-[11px] text-retro-muted mb-2 flex items-center gap-1.5">
                <span>&gt; CADET TELEMETRY &amp; FUN FACTS:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PERSONAL_INFO.funFacts.map((fact, index) => {
                  const IconComponent = iconMap[fact.icon] || Sparkles;
                  return (
                    <div 
                      key={index}
                      onClick={() => audioManager.playClick()}
                      className="pixel-panel p-2.5 bg-space-900/80 border border-cosmic-purple/40 hover:border-cosmic-pink flex items-center gap-2.5 transition-transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <div className="w-7 h-7 bg-cosmic-purple/30 border border-cosmic-violet flex items-center justify-center shrink-0">
                        <IconComponent size={14} className="text-cosmic-pink" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="font-pixel text-[9px] text-cosmic-violet">
                          {fact.label}
                        </div>
                        <div className="font-sans text-xs text-retro-text font-medium truncate">
                          {fact.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
