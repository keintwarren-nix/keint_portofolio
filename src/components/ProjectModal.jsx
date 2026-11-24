import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight, Sparkles, AlertCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { audioManager } from '../utils/audio';

export default function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        audioManager.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const screenshots = project.screenshots && project.screenshots.length > 0
    ? project.screenshots
    : [{ src: project.thumbnail, caption: project.title }];

  const currentScreenshot = screenshots[activeImageIndex] || screenshots[0];

  const nextImage = () => {
    audioManager.playClick();
    setActiveImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    audioManager.playClick();
    setActiveImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-space-950/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          audioManager.playClick();
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl bg-space-900 border-2 border-cosmic-pink shadow-pixel-glow my-auto overflow-hidden animate-fadeIn">
        
        {/* Modal Terminal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-space-950 border-b-2 border-cosmic-purple/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-cosmic-pink inline-block" />
            <span className="font-pixel text-xs text-cosmic-pink tracking-wider">
              MISSION_LOG // {project.id.toUpperCase()}
            </span>
          </div>

          <button
            onClick={() => {
              audioManager.playClick();
              onClose();
            }}
            aria-label="Close project modal"
            className="p-1 text-retro-muted hover:text-cosmic-pink border border-transparent hover:border-cosmic-pink transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Title & Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-cosmic-purple/30 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="pixel-badge text-cosmic-cyan">
                  {project.category}
                </span>
                <span className="font-pixel text-[9px] text-cosmic-gold">
                  STATUS: {project.status}
                </span>
              </div>
              <h3 id="modal-title" className="font-pixel text-lg sm:text-2xl text-retro-text">
                {project.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-retro-muted mt-0.5">
                {project.subtitle}
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audioManager.playClick()}
                  className="pixel-btn py-2 px-3 text-[10px] flex items-center gap-1.5"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink size={12} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audioManager.playClick()}
                  className="pixel-btn pixel-btn-outline py-2 px-3 text-[10px] flex items-center gap-1.5"
                >
                  <GithubIcon size={12} />
                  <span>REPOSITORY</span>
                </a>
              )}
            </div>
          </div>

          {/* Screenshot Carousel */}
          <div className="pixel-panel p-2 bg-space-950 border border-cosmic-purple/40">
            <div className="relative aspect-video overflow-hidden bg-space-950 flex items-center justify-center">
              <img
                src={currentScreenshot.src}
                alt={currentScreenshot.caption || project.title}
                className="w-full h-full object-contain filter contrast-105"
              />

              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Previous screenshot"
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-space-950/80 border border-cosmic-violet text-retro-text hover:border-cosmic-pink transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Next screenshot"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-space-950/80 border border-cosmic-violet text-retro-text hover:border-cosmic-pink transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}

              {/* Caption pill */}
              <div className="absolute bottom-2 left-2 right-2 px-3 py-1 bg-space-950/90 border border-cosmic-purple/40 backdrop-blur-sm flex items-center justify-between">
                <span className="font-pixel text-[9px] text-cosmic-pink truncate">
                  {currentScreenshot.caption}
                </span>
                <span className="font-pixel text-[8px] text-retro-muted shrink-0 ml-2">
                  {activeImageIndex + 1} / {screenshots.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            {screenshots.length > 1 && (
              <div className="flex items-center gap-2 mt-2 px-1 py-1 overflow-x-auto">
                {screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      audioManager.playClick();
                      setActiveImageIndex(idx);
                    }}
                    className={`relative w-16 h-10 shrink-0 border overflow-hidden ${
                      activeImageIndex === idx 
                        ? 'border-cosmic-pink shadow-pixel-sm' 
                        : 'border-cosmic-purple/30 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={s.src} 
                      alt={`Thumbnail ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Detailed Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* The Problem */}
            <div className="pixel-panel p-4 bg-space-850/60 border border-cosmic-purple/40">
              <div className="font-pixel text-xs text-cosmic-pink mb-2 flex items-center gap-1.5">
                <AlertCircle size={14} />
                THE CHALLENGE
              </div>
              <p className="font-sans text-xs sm:text-sm text-retro-text/90 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="pixel-panel p-4 bg-space-850/60 border border-cosmic-purple/40">
              <div className="font-pixel text-xs text-cosmic-cyan mb-2 flex items-center gap-1.5">
                <Sparkles size={14} />
                THE SOLUTION
              </div>
              <p className="font-sans text-xs sm:text-sm text-retro-text/90 leading-relaxed">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Role & Learnings */}
          <div className="space-y-4">
            
            <div className="p-4 bg-space-950/80 border border-cosmic-purple/40">
              <div className="font-pixel text-xs text-cosmic-violet mb-1">
                ENGINEERING ROLE:
              </div>
              <p className="font-sans text-xs sm:text-sm text-retro-text">
                {project.role}
              </p>
            </div>

            <div className="p-4 bg-space-950/80 border border-cosmic-purple/40">
              <div className="font-pixel text-xs text-cosmic-gold mb-1">
                KEY LEARNINGS &amp; TAKEAWAYS:
              </div>
              <p className="font-sans text-xs sm:text-sm text-retro-text">
                {project.learnings}
              </p>
            </div>

          </div>

          {/* Tech Stack Chips */}
          <div>
            <div className="font-pixel text-xs text-retro-muted mb-2">
              ORBITAL TECH STACK:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 font-pixel text-[9px] bg-space-950 text-cosmic-violet border border-cosmic-violet/40"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
