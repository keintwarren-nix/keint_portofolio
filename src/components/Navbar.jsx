import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Moon, Sun, Menu, X } from 'lucide-react';
import { audioManager } from '../utils/audio';

export default function Navbar({ activeSlide, setActiveSlide, dawnMode, setDawnMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioState, setAudioState] = useState({
    sfxEnabled: audioManager.sfxEnabled,
    bgmEnabled: audioManager.bgmEnabled,
  });

  useEffect(() => {
    const unsubscribe = audioManager.subscribe((state) => {
      setAudioState({
        sfxEnabled: state.sfxEnabled,
        bgmEnabled: state.bgmEnabled,
      });
    });
    return () => unsubscribe();
  }, []);

  const sections = [
    { id: 0, label: "ABOUT ME", code: "01" },
    { id: 1, label: "TECH SKILLS", code: "02" },
    { id: 2, label: "PROJECTS", code: "03" },
    { id: 3, label: "CONTACT", code: "04" },
  ];

  const handleNavClick = (index) => {
    // Play click sound ONLY when changing sections
    if (activeSlide !== index) {
      audioManager.playSectionChange();
    }
    setActiveSlide(index);
    setMobileMenuOpen(false);
  };

  const toggleSound = () => {
    audioManager.toggleSfx();
  };

  const toggleMusic = () => {
    audioManager.toggleBgm();
  };

  const toggleTheme = () => {
    setDawnMode(!dawnMode);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-22 sm:h-24 md:h-26 bg-space-950/95 border-b-4 border-cosmic-purple/80 backdrop-blur-md shadow-pixel flex items-center">
      {/* Full-width container across the whole screen with responsive padding */}
      <div className="w-full px-4 sm:px-8 lg:px-10 xl:px-14 flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Left: Prominent Logo + Callsign */}
        <div 
          onClick={() => handleNavClick(0)}
          className="flex items-center gap-3 sm:gap-4 cursor-pointer group shrink-0"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-space-900 border-2 sm:border-3 border-cosmic-violet group-hover:border-cosmic-pink shadow-pixel-sm flex items-center justify-center p-1 sm:p-1.5 transition-all group-hover:scale-105">
            <img
              src="/logo.png"
              alt="Keint Warren Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-pixel text-sm sm:text-base md:text-xl text-retro-text tracking-wider group-hover:text-cosmic-pink transition-colors whitespace-nowrap">
              KEINT.DEV<span className="text-cosmic-magenta">.PORTFOLIO</span>
            </span>
            <span className="font-sans text-[10px] sm:text-xs text-cosmic-cyan tracking-widest uppercase font-bold">
              CIT-U WILDCAT // COMMAND DECK
            </span>
          </div>
        </div>

        {/* Center: Large, Bold Carousel Section Tabs across header */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3 flex-1 justify-center max-w-4xl">
          {sections.map((sec) => {
            const isActive = activeSlide === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => handleNavClick(sec.id)}
                className={`relative flex-1 min-w-[130px] xl:min-w-[160px] h-12 xl:h-13 px-3 xl:px-4 font-pixel text-xs sm:text-sm transition-all border-2 flex items-center justify-center gap-2 select-none whitespace-nowrap ${
                  isActive
                    ? 'bg-cosmic-magenta text-white border-white shadow-pixel-glow translate-x-[-1px] translate-y-[-1px]'
                    : 'bg-space-900/90 text-retro-muted border-cosmic-purple/50 hover:border-cosmic-violet hover:text-retro-text hover:bg-space-850 shadow-pixel-sm'
                }`}
              >
                <span className={`text-[11px] sm:text-xs shrink-0 ${isActive ? 'text-cosmic-gold' : 'text-cosmic-pink'}`}>
                  {sec.code}
                </span>
                <span className="tracking-wider whitespace-nowrap">
                  {sec.label}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-white rounded-none animate-ping shrink-0" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Sound, Music, Theme, and Résumé CTA */}
        <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
          
          {/* SFX Button */}
          <button
            onClick={toggleSound}
            title={audioState.sfxEnabled ? "Mute SFX" : "Enable SFX"}
            aria-label="Toggle SFX"
            className={`p-2.5 sm:p-3 border-2 transition-all ${
              audioState.sfxEnabled
                ? 'border-cosmic-cyan text-cosmic-cyan bg-cosmic-cyan/15 shadow-pixel-sm'
                : 'border-retro-muted/40 text-retro-muted hover:border-retro-muted'
            }`}
          >
            {audioState.sfxEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>

          {/* BGM Button */}
          <button
            onClick={toggleMusic}
            title={audioState.bgmEnabled ? "Pause Cosmic BGM" : "Play Monster Galaxy BGM"}
            aria-label="Toggle Background Music"
            className={`px-3 sm:px-4 py-2.5 sm:py-3 border-2 flex items-center gap-2 transition-all ${
              audioState.bgmEnabled
                ? 'border-cosmic-pink text-cosmic-pink bg-cosmic-pink/20 shadow-pixel-sm shadow-[0_0_12px_rgba(255,158,207,0.4)]'
                : 'border-retro-muted/40 text-retro-muted hover:border-retro-muted'
            }`}
          >
            <Music size={20} className={audioState.bgmEnabled ? "animate-pulse" : ""} />
            <span className="font-pixel text-xs hidden sm:inline">
              {audioState.bgmEnabled ? "BGM ON" : "BGM"}
            </span>
          </button>

          {/* Dawn Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={dawnMode ? "Switch to Cosmic Night" : "Switch to Dawn Explorer Mode"}
            aria-label="Toggle Theme"
            className="p-2.5 sm:p-3 border-2 border-cosmic-violet/50 text-retro-text hover:border-cosmic-pink transition-all bg-space-900 shadow-pixel-sm"
          >
            {dawnMode ? <Moon size={20} className="text-cosmic-violet" /> : <Sun size={20} className="text-cosmic-gold" />}
          </button>

          {/* Prominent Résumé Button */}
          <a
            href="/assets/KeintWarren_Resume.pdf"
            download="KeintWarren_Resume.pdf"
            className="hidden md:inline-flex pixel-btn py-2.5 sm:py-3 px-5 sm:px-6 text-xs sm:text-sm tracking-wider"
          >
            RÉSUMÉ
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2.5 border-2 border-cosmic-violet text-retro-text hover:bg-cosmic-purple/30 shadow-pixel-sm"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-22 sm:top-24 left-0 right-0 bg-space-950/98 border-b-2 border-cosmic-magenta p-4 shadow-pixel z-50">
          <div className="grid grid-cols-2 gap-2.5 mb-3">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleNavClick(sec.id)}
                className={`p-3 font-pixel text-xs border-2 text-left flex items-center justify-between ${
                  activeSlide === sec.id
                    ? 'bg-cosmic-magenta text-white border-white shadow-pixel-sm'
                    : 'bg-space-900 text-retro-muted border-cosmic-purple/40 hover:text-retro-text'
                }`}
              >
                <span>{sec.code}. {sec.label}</span>
                {activeSlide === sec.id && <span>★</span>}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-cosmic-purple/30 flex justify-between items-center">
            <span className="font-pixel text-[10px] text-cosmic-cyan">
              CAROUSEL VIEWPORT
            </span>
            <a
              href="/assets/KeintWarren_Resume.pdf"
              download="KeintWarren_Resume.pdf"
              className="pixel-btn py-2 px-3 text-[10px]"
            >
              DOWNLOAD RÉSUMÉ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
