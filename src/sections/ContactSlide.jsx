import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Radio,
  MapPin,
  Terminal,
  Eye,
  Download,
  Sparkles,
  CheckCircle2,
  Volume2
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { PERSONAL_INFO, CERTIFICATIONS } from '../data/portfolioData';

export default function ContactSlide({ onOpenCredits, onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [activeBadge, setActiveBadge] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center py-2 px-2 sm:px-6 space-y-3">
      
      {/* Top Banner */}
      <div className="pixel-panel p-3 sm:p-4 bg-space-900/90 border-2 border-cosmic-purple/60 shadow-pixel flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 pixel-badge text-cosmic-cyan">
            <Radio size={12} className="animate-pulse" />
            <span>04 // SUBSPACE ARRAY</span>
          </div>
          <h2 className="font-pixel text-base sm:text-xl text-retro-text">
            OPEN TRANSMISSION CHANNEL
          </h2>
        </div>

        {/* Audio Credits Button: Triggers Root Modal! */}
        <button
          onClick={onOpenCredits}
          className="pixel-btn pixel-btn-outline text-[9px] sm:text-[10px] py-1.5 px-3 flex items-center gap-1.5"
        >
          <Volume2 size={13} className="text-cosmic-cyan" />
          <span>AUDIO CREDITS</span>
        </button>
      </div>

      {/* Main Grid: Left = Direct Comms & Status & Resume, Right = Collectible Badges with AWS logo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch flex-1">
        
        {/* LEFT (col-span-5): Comms & Resume */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
          
          {/* Comms Panel */}
          <div className="pixel-panel p-4 bg-space-900/90 border-2 border-cosmic-purple/60 shadow-pixel flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-pixel text-xs text-cosmic-pink mb-3 pb-1.5 border-b border-cosmic-purple/30">
                <Terminal size={13} />
                <span>DIRECT FREQUENCY</span>
              </div>

              <div className="space-y-3 font-sans text-xs text-retro-muted">
                {/* Email */}
                <div>
                  <div className="font-pixel text-[9px] text-cosmic-violet uppercase mb-1">
                    PRIMARY EMAIL:
                  </div>
                  <div className="flex items-center justify-between p-2 bg-space-950 border border-cosmic-purple/50">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-mono text-xs text-retro-text hover:text-cosmic-pink transition-colors truncate mr-2"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      title="Copy email"
                      className="p-1 text-retro-muted hover:text-cosmic-pink transition-colors shrink-0"
                    >
                      {copied ? <Check size={13} className="text-cosmic-cyan" /> : <Copy size={13} />}
                    </button>
                  </div>
                  {copied && (
                    <span className="font-pixel text-[8px] text-cosmic-cyan mt-1 block">✓ COPIED TO CLIPBOARD</span>
                  )}
                </div>

                {/* Location */}
                <div>
                  <div className="font-pixel text-[9px] text-cosmic-violet uppercase mb-0.5">
                    BASE STATION:
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-retro-text">
                    <MapPin size={13} className="text-cosmic-magenta shrink-0" />
                    <span>{PERSONAL_INFO.location} ({PERSONAL_INFO.timezone})</span>
                  </div>
                </div>

                {/* GitHub */}
                <div>
                  <div className="font-pixel text-[9px] text-cosmic-violet uppercase mb-0.5">
                    CODE REPOSITORY:
                  </div>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-retro-text hover:text-cosmic-pink transition-colors"
                  >
                    <GithubIcon size={13} className="text-cosmic-pink" />
                    <span className="font-mono">github.com/keintwarren-nix</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mission Status */}
            <div className="mt-3 pt-2 border-t border-cosmic-purple/30">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 bg-cosmic-cyan rounded-none animate-ping" />
                <span className="font-pixel text-[9px] text-cosmic-cyan">OPEN FOR INTERNSHIPS // JUNIOR ROLES</span>
              </div>
            </div>
          </div>

          {/* Résumé Dossier Action Card */}
          <div className="pixel-panel p-3.5 bg-space-900/90 border-2 border-cosmic-purple/50 shadow-pixel flex items-center justify-between gap-3">
            <div>
              <div className="font-pixel text-[11px] text-cosmic-pink mb-0.5">
                FLIGHT DOSSIER // RÉSUMÉ
              </div>
              <p className="font-sans text-[11px] text-retro-muted">
                Complete academic credentials and skill catalog.
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={onOpenResume}
                className="pixel-btn pixel-btn-secondary py-1.5 px-3 text-[9px] flex items-center gap-1"
              >
                <Eye size={11} /> PREVIEW
              </button>
              <a
                href="/assets/KeintWarren_Resume.pdf"
                download="KeintWarren_Resume.pdf"
                className="pixel-btn py-1.5 px-3 text-[9px] flex items-center gap-1"
              >
                <Download size={11} /> DOWNLOAD
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT (col-span-7): Collectible Badges Earned (AWS, IBM, Kaggle, Sololearn, Canva) */}
        <div className="lg:col-span-7 flex flex-col justify-between pixel-panel p-4 bg-space-900/90 border-2 border-cosmic-purple/60 shadow-pixel">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-cosmic-purple/30">
            <span className="font-pixel text-xs text-cosmic-cyan flex items-center gap-1.5">
              <Sparkles size={13} />
              COLLECTIBLE BADGES EARNED ({CERTIFICATIONS.length})
            </span>
            <span className="font-sans text-[11px] text-retro-muted hidden sm:inline">
              Verified certifications with official logos
            </span>
          </div>

          {/* 7 Badge Cards Grid: 2x4 with AWS Logo */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 flex-1">
            {CERTIFICATIONS.map((cert) => {
              const isActive = activeBadge === cert.id;
              return (
                <div
                  key={cert.id}
                  onClick={() => setActiveBadge(isActive ? null : cert.id)}
                  className={`p-2.5 bg-space-950/85 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'border-cosmic-pink shadow-pixel-glow bg-space-900'
                      : 'border-cosmic-purple/40 hover:border-cosmic-violet'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    {/* Official Issuer Logo: including aws-logo.png! */}
                    <div className="w-9 h-9 bg-white border border-cosmic-violet flex items-center justify-center p-1 shrink-0">
                      <img
                        src={`/assets/${cert.logoFile}`}
                        alt={cert.issuer}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="font-pixel text-[8px] text-cosmic-cyan">
                      {cert.date}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-pixel text-[9px] sm:text-[10px] text-retro-text mb-0.5 leading-tight truncate">
                      {cert.title}
                    </h4>
                    <span className="font-sans text-[10px] text-retro-muted block truncate">
                      {cert.issuer}
                    </span>
                  </div>

                  <div className="mt-1.5 pt-1 border-t border-cosmic-purple/20 flex items-center justify-between text-[8px] font-pixel text-cosmic-cyan">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={8} /> ACCREDITED
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
