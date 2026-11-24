import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, ExternalLink, Sparkles, ChevronDown } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { audioManager } from '../utils/audio';

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const currentRole = PERSONAL_INFO.typewriterRoles[roleIndex];

  // Parallax mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let timeout;
    const typingSpeed = isDeleting ? 40 : 85;

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

  const scrollTo = (id) => {
    audioManager.playClick();
    const elem = document.querySelector(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-10 bg-transparent"
    >
      {/* Parallax Planet & Nebula Accents (Transparent) */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`
        }}
      >
        {/* Soft Nebula Glow */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[300px] rounded-full blur-[100px] opacity-30 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #C2269E 0%, #6B3FD4 50%, #8E8CFF 100%)'
          }}
        />

        {/* Large Dark Planet with Rim Light */}
        <div 
          className="absolute -right-20 md:right-8 lg:right-16 top-14 md:top-20 w-52 h-52 md:w-72 md:h-72 rounded-full transition-transform duration-500 opacity-80"
          style={{
            transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`,
            background: 'radial-gradient(circle at 35% 35%, #1F154A 0%, #110B30 65%, #08051A 100%)',
            boxShadow: 'inset -8px -8px 24px rgba(0,0,0,0.95), 0 0 32px rgba(194, 38, 158, 0.35), inset 4px 4px 14px rgba(255, 158, 207, 0.4)'
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Mission Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-cosmic-violet/40 bg-space-950/80 shadow-pixel-sm backdrop-blur-sm">
          <span className="w-2 h-2 bg-cosmic-cyan animate-ping rounded-none" />
          <span className="font-pixel text-[10px] sm:text-xs text-cosmic-cyan tracking-wider">
            MISSION STATUS: CIT-U WILDCAT EXPLORER
          </span>
        </div>

        {/* Name */}
        <h1 className="font-pixel text-2xl sm:text-4xl md:text-5xl text-retro-text tracking-wide leading-tight mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          KEINT WARREN <br />
          <span className="bg-gradient-to-r from-cosmic-pink via-cosmic-magenta to-cosmic-violet bg-clip-text text-transparent">
            J. POLIQUIT
          </span>
        </h1>

        {/* Typewriter Role */}
        <div className="h-8 sm:h-10 flex items-center justify-center mb-4">
          <div className="font-pixel text-xs sm:text-base md:text-lg text-cosmic-violet flex items-center">
            <span className="text-cosmic-pink mr-2">&gt;</span>
            <span className="text-retro-text">{displayedText}</span>
            <span className="blinking-cursor" />
          </div>
        </div>

        {/* Tagline */}
        <p className="font-display text-base sm:text-xl text-retro-muted max-w-xl mb-4 font-normal">
          &ldquo;{PERSONAL_INFO.tagline}&rdquo;
        </p>

        {/* Intro */}
        <p className="font-sans text-xs sm:text-sm text-retro-muted/90 max-w-lg mb-6 leading-relaxed">
          Aspiring Full-Stack Software Engineer &amp; IT student at Cebu Institute of Technology – University. 
          Building scalable backends and retro gamified web experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
          <button
            onClick={() => scrollTo('#projects')}
            className="pixel-btn text-xs py-2.5 px-5 group"
          >
            <span>VIEW MY WORK</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollTo('#contact')}
            className="pixel-btn pixel-btn-secondary text-xs py-2.5 px-5"
          >
            <span>CONTACT</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioManager.playClick()}
            className="pixel-btn pixel-btn-outline text-xs py-2.5 px-4 flex items-center gap-2"
          >
            <GithubIcon size={14} />
            <span>GITHUB</span>
          </a>
        </div>

        {/* Active Flagship pill */}
        <a 
          href="https://citu.cipherquest.workers.dev/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => audioManager.playClick()}
          className="inline-flex items-center gap-2 px-3 py-1 bg-space-950/85 border border-cosmic-magenta/60 hover:border-cosmic-pink shadow-pixel-sm transition-all group"
        >
          <span className="font-pixel text-[9px] text-cosmic-pink">★ ACTIVE:</span>
          <span className="font-sans text-xs text-retro-text font-medium group-hover:text-cosmic-pink flex items-center gap-1">
            CipherQuest on Cloudflare Workers <ExternalLink size={11} />
          </span>
        </a>

      </div>
    </section>
  );
}
