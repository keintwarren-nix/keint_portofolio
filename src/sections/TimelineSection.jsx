import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Cpu,
  Cloud,
  ShieldAlert,
  Brain,
  BarChart3,
  Code,
  Sparkles,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { TIMELINE, CERTIFICATIONS } from '../data/portfolioData';
import { audioManager } from '../utils/audio';

const badgeIcons = {
  Cpu,
  Cloud,
  ShieldAlert,
  Brain,
  BarChart3,
  Code,
  Sparkles,
};

export default function TimelineSection() {
  const [flippedBadge, setFlippedBadge] = useState(null);

  const toggleBadge = (id) => {
    audioManager.playClick();
    setFlippedBadge(flippedBadge === id ? null : id);
  };

  return (
    <section
      id="journey"
      className="relative py-12 sm:py-16 border-t border-cosmic-purple/30 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 pixel-badge text-cosmic-gold mb-2">
            <Award size={12} className="text-cosmic-gold" />
            <span>CHRONOLOGY // MISSION LOG</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-text mb-2">
            EXPEDITION LOG &amp; BADGES
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cosmic-gold via-cosmic-magenta to-cosmic-purple mx-auto" />
        </div>

        {/* 1. Academic Journey */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-pixel text-xs text-cosmic-pink mb-4">
            <span>&gt; ACADEMIC TIMELINE / FLIGHT RECORDER:</span>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-cosmic-purple/50 space-y-6">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 bg-space-950 border-2 border-cosmic-pink shadow-pixel-sm">
                  <div className="w-1.5 h-1.5 bg-cosmic-pink mx-auto mt-0.5" />
                </div>
                <div className="pixel-panel p-4 sm:p-5 bg-space-900/85 border-2 border-cosmic-purple/40 hover:border-cosmic-pink transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <span className="font-pixel text-[10px] text-cosmic-gold flex items-center gap-1.5">
                      <Calendar size={11} />
                      {item.period}
                    </span>
                    <span className="pixel-badge text-cosmic-cyan text-[9px]">{item.badge}</span>
                  </div>
                  <h3 className="font-pixel text-xs sm:text-sm text-retro-text mb-0.5">{item.title}</h3>
                  <div className="font-sans text-xs text-retro-muted mb-3 font-medium">
                    {item.institution} — {item.location}
                  </div>
                  <ul className="space-y-1.5">
                    {item.details.map((bullet, bIdx) => (
                      <li key={bIdx} className="font-sans text-xs text-retro-text/90 flex items-start gap-2">
                        <span className="font-pixel text-cosmic-pink text-[8px] mt-1 shrink-0">★</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Collectible Cert Badges */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="font-pixel text-xs text-cosmic-cyan flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>COLLECTIBLE BADGES EARNED ({CERTIFICATIONS.length})</span>
            </div>
            <span className="font-sans text-xs text-retro-muted">Tap to inspect credential</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {CERTIFICATIONS.map((cert) => {
              const IconComp = badgeIcons[cert.badgeIcon] || Award;
              const isActive = flippedBadge === cert.id;

              return (
                <div
                  key={cert.id}
                  onClick={() => toggleBadge(cert.id)}
                  className={`pixel-panel p-4 bg-space-900/85 border-2 transition-all cursor-pointer group ${
                    isActive
                      ? 'border-cosmic-pink shadow-pixel-glow bg-space-850'
                      : 'border-cosmic-purple/40 hover:border-cosmic-violet hover:-translate-y-0.5'
                  }`}
                >
                  {/* Badge header */}
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <div className="w-12 h-12 bg-white/95 border-2 border-cosmic-violet group-hover:border-cosmic-pink flex items-center justify-center shrink-0 shadow-pixel-sm p-1">
                      {cert.logoFile ? (
                        <img
                          src={`/assets/${cert.logoFile}`}
                          alt={cert.issuer}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <IconComp size={20} className="text-cosmic-pink" />
                      )}
                    </div>
                    <div className="text-right">
                      <span className="font-pixel text-[9px] text-cosmic-cyan block">{cert.date}</span>
                      <span className="font-sans text-[10px] text-retro-muted">{cert.issuer}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-pixel text-xs text-retro-text mb-1 leading-snug group-hover:text-cosmic-pink transition-colors">
                    {cert.title}
                  </h4>

                  {/* Description */}
                  <p className="font-sans text-xs text-retro-muted/80 mb-3 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-cosmic-purple/30">
                    {cert.skillsGained.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-1.5 py-0.5 font-pixel text-[7px] bg-space-950 text-cosmic-violet border border-cosmic-purple/30"
                      >
                        +{skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-2.5 flex items-center justify-between font-sans text-[10px] text-cosmic-cyan">
                    <span className="flex items-center gap-1 font-pixel text-[8px]">
                      <CheckCircle2 size={10} /> ACCREDITED
                    </span>
                    <span className="text-retro-muted text-[10px]">{isActive ? 'ACTIVE' : 'INSPECT'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
