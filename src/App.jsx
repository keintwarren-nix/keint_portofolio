import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StarfieldCanvas from './components/StarfieldCanvas';
import AboutSlide from './sections/AboutSlide';
import SkillsSlide from './sections/SkillsSlide';
import ProjectsSlide from './sections/ProjectsSlide';
import ContactSlide from './sections/ContactSlide';
import PixelMascot from './components/PixelMascot';
import KonamiEasterEgg from './components/KonamiEasterEgg';
import AudioCreditsModal from './components/AudioCreditsModal';
import TelemetryFactModal from './components/TelemetryFactModal';
import ResumePreviewModal from './components/ResumePreviewModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { audioManager } from './utils/audio';

const SLIDES = [
  { id: 0, label: "ABOUT ME" },
  { id: 1, label: "TECH SKILLS" },
  { id: 2, label: "PROJECTS" },
  { id: 3, label: "CONTACT" },
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [dawnMode, setDawnMode] = useState(false);

  // Root Modals State (rendered outside transformed carousel track!)
  const [selectedFact, setSelectedFact] = useState(null);
  const [showCreditsModal, setShowCreditsModal] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Sync dawn theme class
  useEffect(() => {
    if (dawnMode) {
      document.documentElement.classList.add('dawn');
    } else {
      document.documentElement.classList.remove('dawn');
    }
  }, [dawnMode]);

  // Keyboard navigation: Left / Right arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't navigate slides if a modal is open or if user is in an input
      if (selectedFact || showCreditsModal || showResumeModal) return;
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      if (e.key === 'ArrowRight') {
        goToSlide(Math.min(SLIDES.length - 1, activeSlide + 1));
      } else if (e.key === 'ArrowLeft') {
        goToSlide(Math.max(0, activeSlide - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide, selectedFact, showCreditsModal, showResumeModal]);

  const goToSlide = (index) => {
    if (index === activeSlide) return;
    // Play sound ONLY when changing sections!
    audioManager.playSectionChange();
    setActiveSlide(index);
  };

  const nextSlide = () => {
    if (activeSlide < SLIDES.length - 1) {
      goToSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      goToSlide(activeSlide - 1);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden text-retro-text selection:bg-cosmic-magenta selection:text-white transition-colors duration-500 bg-space-950">
      
      {/* 1. Fullscreen Fixed background.jpg */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat bg-fixed transition-all duration-500"
        style={{
          backgroundImage: "url('/assets/background.jpg')",
          backgroundPosition: 'center 15%',
        }}
      >
        <div 
          className={`absolute inset-0 transition-colors duration-500 ${
            dawnMode 
              ? 'bg-gradient-to-b from-amber-100/70 via-rose-100/55 to-purple-200/75' 
              : 'bg-gradient-to-b from-space-950/60 via-space-900/35 to-space-950/75'
          }`} 
        />
      </div>

      {/* 2. Starfield Canvas + Random Infrequent Drifting Clouds */}
      <StarfieldCanvas />

      {/* 3. Prominent, Wide Header Navbar */}
      <Navbar 
        activeSlide={activeSlide} 
        setActiveSlide={goToSlide} 
        dawnMode={dawnMode} 
        setDawnMode={setDawnMode} 
      />

      {/* 4. Horizontal Carousel Viewport: Fits 100% on screen WITHOUT vertical scrolling! */}
      <div 
        className="flex w-[400vw] h-[calc(100vh-5.5rem-3rem)] sm:h-[calc(100vh-6rem-3rem)] md:h-[calc(100vh-6.5rem-3rem)] mt-22 sm:mt-24 md:mt-26 transition-transform duration-500 ease-out z-10"
        style={{ transform: `translateX(-${activeSlide * 100}vw)` }}
      >
        {/* Slide 0: About Me */}
        <section className="w-screen h-full overflow-hidden flex flex-col justify-center items-center px-4 sm:px-8 select-text">
          <AboutSlide 
            onNavigate={goToSlide} 
            onSelectFact={(fact) => setSelectedFact(fact)} 
          />
        </section>

        {/* Slide 1: Technical Skills */}
        <section className="w-screen h-full overflow-hidden flex flex-col justify-center items-center px-4 sm:px-8 select-text">
          <SkillsSlide />
        </section>

        {/* Slide 2: Projects */}
        <section className="w-screen h-full overflow-hidden flex flex-col justify-center items-center px-4 sm:px-8 select-text">
          <ProjectsSlide />
        </section>

        {/* Slide 3: Contact & Badges */}
        <section className="w-screen h-full overflow-hidden flex flex-col justify-center items-center px-4 sm:px-8 select-text">
          <ContactSlide 
            onOpenCredits={() => setShowCreditsModal(true)}
            onOpenResume={() => setShowResumeModal(true)}
          />
        </section>
      </div>

      {/* 5. Carousel Floating Left / Right Arrow Controls */}
      {activeSlide > 0 && (
        <button
          onClick={prevSlide}
          aria-label="Previous section"
          className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-space-950/90 border-2 border-cosmic-purple hover:border-cosmic-pink text-retro-text hover:text-cosmic-pink shadow-pixel transition-all group items-center gap-1"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          <span className="font-pixel text-[10px] hidden xl:inline">
            PREV
          </span>
        </button>
      )}

      {activeSlide < SLIDES.length - 1 && (
        <button
          onClick={nextSlide}
          aria-label="Next section"
          className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-space-950/90 border-2 border-cosmic-purple hover:border-cosmic-pink text-retro-text hover:text-cosmic-pink shadow-pixel transition-all group items-center gap-1"
        >
          <span className="font-pixel text-[10px] hidden xl:inline">
            NEXT
          </span>
          <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* 6. Bottom Navigation Dock & Progress Indicators */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 h-12 bg-space-950/95 border-t-2 border-cosmic-purple/60 backdrop-blur-md px-6 sm:px-12 flex items-center justify-between shadow-pixel">
        
        {/* Left: Active Section Label */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-cosmic-pink rounded-none animate-ping" />
          <span className="font-pixel text-xs text-cosmic-pink">
            SECTION 0{activeSlide + 1} / 04: {SLIDES[activeSlide].label}
          </span>
        </div>

        {/* Center: Slide Indicators */}
        <div className="flex items-center gap-2.5">
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => goToSlide(idx)}
              title={s.label}
              className={`transition-all ${
                activeSlide === idx
                  ? 'w-8 sm:w-12 h-3.5 bg-cosmic-magenta border-2 border-white shadow-pixel-sm'
                  : 'w-3.5 h-3.5 bg-space-900 border border-cosmic-purple/60 hover:border-cosmic-pink'
              }`}
            />
          ))}
        </div>

        {/* Right: Keyboard Navigation Hint */}
        <div className="hidden sm:flex items-center gap-2 font-pixel text-[9px] text-retro-muted/80">
          <span className="px-1.5 py-0.5 border border-cosmic-purple/40 bg-space-900">◀</span>
          <span className="px-1.5 py-0.5 border border-cosmic-purple/40 bg-space-900">▶</span>
          <span>KEYBOARD ARROWS</span>
        </div>
      </footer>

      {/* 7. Interactive Telemetry Orbit Mascot Rocket */}
      <div className="fixed bottom-14 right-5 z-40">
        <PixelMascot />
      </div>

      {/* 8. Konami Cheat Code Listener */}
      <KonamiEasterEgg />

      {/* ── 9. ROOT LEVEL MODALS (Never clipped by carousel transform!) ── */}
      <AudioCreditsModal 
        isOpen={showCreditsModal} 
        onClose={() => setShowCreditsModal(false)} 
      />

      <ResumePreviewModal 
        isOpen={showResumeModal} 
        onClose={() => setShowResumeModal(false)} 
      />

      <TelemetryFactModal 
        fact={selectedFact} 
        onClose={() => setSelectedFact(null)} 
      />

    </div>
  );
}
