import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  GraduationCap,
  Award,
  Coffee,
  Rocket,
  MapPin,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const iconMap = {
  Coffee,
  Rocket,
  MapPin,
  Layers,
};

export default function AboutSlide({ onNavigate, onSelectFact }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const currentRole = PERSONAL_INFO.typewriterRoles[roleIndex];
  const photos = PERSONAL_INFO.photos;
  const currentPhoto = photos[photoIndex];

  // Typewriter effect
  useEffect(() => {
    let timeout;
    const typingSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && displayedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.typewriterRoles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentRole.substring(0, displayedText.length - 1)
            : currentRole.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole]);

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center py-2 px-2 sm:px-6">
      
      {/* 2-Column Dashboard that fits completely on screen without vertical scrolling */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
        
        {/* LEFT COLUMN: Cadet Photo Archive (7 photos, NO labels on photos) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="pixel-panel p-2.5 sm:p-3 bg-space-900/90 border-2 border-cosmic-violet shadow-pixel w-full max-w-sm">
            
            {/* Header bar */}
            <div className="flex items-center justify-between px-2 py-1 mb-2 bg-space-950 border-b border-cosmic-purple/40">
              <span className="font-pixel text-[10px] text-cosmic-pink flex items-center gap-1.5">
                <Camera size={12} />
                CADET ARCHIVE ({photoIndex + 1} / {photos.length})
              </span>
              <span className="font-pixel text-[8px] text-cosmic-cyan">
                7 PHOTOS
              </span>
            </div>

            {/* Photo Viewer: clean, NO labels/captions on photo */}
            <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden bg-space-950 border border-cosmic-purple/50">
              <img 
                src={currentPhoto.src} 
                alt="" 
                className="w-full h-full object-cover object-center filter contrast-105"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={prevPhoto}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-space-950/85 border border-cosmic-violet text-retro-text hover:border-cosmic-pink hover:text-cosmic-pink transition-all shadow-pixel-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextPhoto}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-space-950/85 border border-cosmic-violet text-retro-text hover:border-cosmic-pink hover:text-cosmic-pink transition-all shadow-pixel-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* 7 Clean Numbered Thumbnail Buttons */}
            <div className="flex items-center justify-center gap-1.5 mt-2.5">
              {photos.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setPhotoIndex(idx)}
                  title={`Photo ${idx + 1}`}
                  className={`w-9 h-9 sm:w-10 sm:h-10 border overflow-hidden transition-all relative ${
                    photoIndex === idx
                      ? 'border-2 border-cosmic-pink scale-105 shadow-pixel-sm'
                      : 'border-cosmic-purple/40 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={p.src} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 bg-space-950/90 font-pixel text-[7px] px-1 text-white">
                    {idx + 1}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Identity, Bio, Credentials & Clickable Telemetry */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-3 sm:space-y-4">
          
          {/* Identity Box */}
          <div className="pixel-panel p-4 sm:p-5 bg-space-900/90 border-2 border-cosmic-purple/60 shadow-pixel">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-cosmic-violet/40 bg-space-950">
                <span className="w-1.5 h-1.5 bg-cosmic-cyan animate-ping rounded-none" />
                <span className="font-pixel text-[9px] text-cosmic-cyan">
                  PILOT DOSSIER // CIT-U WILDCAT
                </span>
              </div>
              <span className="font-pixel text-[9px] text-cosmic-gold">
                CEBU CITY, PHILIPPINES
              </span>
            </div>

            <h1 className="font-pixel text-lg sm:text-2xl text-retro-text tracking-wide mb-1">
              KEINT WARREN <span className="text-cosmic-pink">J. POLIQUIT</span>
            </h1>

            {/* Typewriter */}
            <div className="h-6 flex items-center font-pixel text-xs sm:text-sm text-cosmic-violet mb-2">
              <span className="text-cosmic-pink mr-1.5">&gt;</span>
              <span className="text-retro-text">{displayedText}</span>
              <span className="blinking-cursor" />
            </div>

            {/* Short Bio */}
            <p className="font-sans text-xs sm:text-sm text-retro-text/90 leading-relaxed mb-3">
              Aspiring Full-Stack Software Engineer &amp; IT student at Cebu Institute of Technology – University. 
              Passionate about turning complex backend architectures and retro-inspired designs into scalable, high-impact web platforms like <strong>CipherQuest</strong> on Cloudflare Workers.
            </p>

            {/* Academic Credentials */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-cosmic-purple/30">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-space-950 border border-cosmic-violet/40 text-xs">
                <GraduationCap size={14} className="text-cosmic-cyan" />
                <span className="font-sans font-medium">CIT-U (2023–Present) — BSIT</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-space-950 border border-cosmic-violet/40 text-xs">
                <Award size={14} className="text-cosmic-gold" />
                <span className="font-sans font-medium">Tisa NHS (TVL Honors Graduate)</span>
              </div>
            </div>
          </div>

          {/* 4 Clickable Telemetry Fun Fact Chips: Solves Request 3! */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-pixel text-[9px] text-retro-muted">
                &gt; CADET TELEMETRY (CLICK ANY CHIP TO VIEW FULL DETAILS):
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {PERSONAL_INFO.funFacts.map((fact, index) => {
                const IconComponent = iconMap[fact.icon] || Sparkles;
                return (
                  <button
                    key={index}
                    onClick={() => onSelectFact(fact)}
                    className="pixel-panel p-2.5 bg-space-900/90 border-2 border-cosmic-purple/40 hover:border-cosmic-pink hover:shadow-pixel-sm transition-all text-left flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-1 w-full">
                      <span className="font-pixel text-[8px] text-cosmic-violet uppercase group-hover:text-cosmic-pink">
                        {fact.label}
                      </span>
                      <IconComponent size={12} className="text-cosmic-pink" />
                    </div>

                    {/* Clean multi-line readable text with no awkward clipping */}
                    <div className="font-sans text-xs text-retro-text font-medium leading-snug mb-1">
                      {fact.short || fact.value}
                    </div>

                    <span className="font-pixel text-[7px] text-cosmic-cyan mt-1 block">
                      [VIEW DETAIL ↗]
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Action Buttons */}
          <div className="flex gap-2.5">
            <button
              onClick={() => onNavigate(1)}
              className="flex-1 pixel-btn text-xs py-2 px-3"
            >
              TECH SKILLS &gt;
            </button>
            <button
              onClick={() => onNavigate(2)}
              className="flex-1 pixel-btn pixel-btn-secondary text-xs py-2 px-3"
            >
              PROJECTS &gt;
            </button>
            <button
              onClick={() => onNavigate(3)}
              className="flex-1 pixel-btn pixel-btn-outline text-xs py-2 px-3"
            >
              CONTACT &gt;
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
