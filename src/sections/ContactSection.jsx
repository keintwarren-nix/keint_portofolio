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
  X
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { audioManager } from '../utils/audio';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [showResumePreview, setShowResumePreview] = useState(false);

  const handleCopyEmail = () => {
    audioManager.playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 border-t border-cosmic-purple/30 bg-transparent"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 pixel-badge text-cosmic-cyan mb-2">
            <Radio size={12} className="animate-pulse" />
            <span>COMMUNICATION // SUBSPACE ARRAY</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-text mb-2">
            OPEN CHANNEL
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cosmic-cyan via-cosmic-magenta to-cosmic-pink mx-auto" />
        </div>

        {/* Direct Links + Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* LEFT: Comms Console */}
          <div className="pixel-panel p-5 sm:p-6 bg-space-900/90 border-2 border-cosmic-purple/60 shadow-pixel">
            <div className="flex items-center gap-2 font-pixel text-xs text-cosmic-pink mb-4 pb-2 border-b border-cosmic-purple/30">
              <Terminal size={14} />
              <span>COMMS_CHANNEL // DIRECT CONTACT</span>
            </div>

            <div className="space-y-4 font-sans text-xs sm:text-sm text-retro-muted leading-relaxed">
              <p>
                Actively seeking internship opportunities, junior developer roles, and engineering collaborations.
              </p>

              {/* Email */}
              <div>
                <div className="font-pixel text-[10px] text-cosmic-violet uppercase mb-1">
                  PRIMARY EMAIL:
                </div>
                <div className="flex items-center justify-between p-2.5 bg-space-950 border border-cosmic-purple/50">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-xs text-retro-text hover:text-cosmic-pink transition-colors truncate mr-2"
                    onClick={() => audioManager.playClick()}
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email"
                    aria-label="Copy email address"
                    className="p-1 text-retro-muted hover:text-cosmic-pink transition-colors shrink-0"
                  >
                    {copied ? <Check size={14} className="text-cosmic-cyan" /> : <Copy size={14} />}
                  </button>
                </div>
                {copied && (
                  <span className="font-pixel text-[8px] text-cosmic-cyan mt-1 block">✓ COPIED TO CLIPBOARD</span>
                )}
              </div>

              {/* Location */}
              <div>
                <div className="font-pixel text-[10px] text-cosmic-violet uppercase mb-1">
                  LOCATION:
                </div>
                <div className="flex items-center gap-2 text-xs text-retro-text">
                  <MapPin size={14} className="text-cosmic-magenta shrink-0" />
                  <span>{PERSONAL_INFO.location} ({PERSONAL_INFO.timezone})</span>
                </div>
              </div>

              {/* GitHub */}
              <div>
                <div className="font-pixel text-[10px] text-cosmic-violet uppercase mb-1">
                  GITHUB PROFILE:
                </div>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audioManager.playClick()}
                  className="flex items-center gap-2 text-xs text-retro-text hover:text-cosmic-pink transition-colors"
                >
                  <GithubIcon size={14} className="text-cosmic-pink" />
                  <span className="font-mono">github.com/keintwarren-nix</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Status & Resume */}
          <div className="flex flex-col gap-4">

            {/* Status card */}
            <div className="pixel-panel p-5 bg-space-900/85 border-2 border-cosmic-cyan/50 shadow-pixel">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-cosmic-cyan rounded-none animate-ping" />
                <span className="font-pixel text-xs text-cosmic-cyan">MISSION STATUS</span>
              </div>
              <ul className="space-y-2 font-sans text-xs text-retro-text/90">
                {[
                  { label: "Available for", value: "Internships & Junior Dev Roles" },
                  { label: "Work setup", value: "Remote / Hybrid / Cebu Onsite" },
                  { label: "Institution", value: "CIT-U (BS Information Technology)" },
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-cosmic-purple/20 pb-1.5 last:border-0 last:pb-0">
                    <span className="font-pixel text-[9px] text-retro-muted">{item.label}</span>
                    <span className="text-xs font-medium text-retro-text">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resume button */}
            <div className="pixel-panel p-4 bg-space-900/85 border-2 border-cosmic-purple/50 shadow-pixel">
              <div className="font-pixel text-xs text-cosmic-pink mb-2">
                RÉSUMÉ DOSSIER
              </div>
              <p className="font-sans text-xs text-retro-muted mb-3">
                Full academic credentials, skills inventory, and project archive.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => { audioManager.playClick(); setShowResumePreview(true); }}
                  className="flex-1 pixel-btn pixel-btn-secondary py-2 text-[10px] flex items-center justify-center gap-1.5"
                >
                  <Eye size={12} /> PREVIEW
                </button>
                <a
                  href="/assets/KeintWarren_Resume (1).docx"
                  download="KeintWarren_Resume.docx"
                  onClick={() => audioManager.playClick()}
                  className="flex-1 pixel-btn py-2 text-[10px] flex items-center justify-center gap-1.5"
                >
                  <Download size={12} /> DOWNLOAD
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Resume Preview Modal */}
      {showResumePreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-space-950/88 backdrop-blur-md"
          onClick={(e) => { if (e.target === e.currentTarget) { audioManager.playClick(); setShowResumePreview(false); } }}
        >
          <div className="relative w-full max-w-3xl h-[85vh] bg-space-900 border-2 border-cosmic-pink shadow-pixel-glow flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 bg-space-950 border-b-2 border-cosmic-purple/50 shrink-0">
              <span className="font-pixel text-xs text-cosmic-pink">RÉSUMÉ PREVIEW</span>
              <div className="flex items-center gap-2">
                <a
                  href="/assets/KeintWarren_Resume (1).docx"
                  download="KeintWarren_Resume.docx"
                  onClick={() => audioManager.playClick()}
                  className="pixel-btn py-1 px-2.5 text-[9px] flex items-center gap-1"
                >
                  <Download size={10} /> DOWNLOAD
                </a>
                <button
                  onClick={() => { audioManager.playClick(); setShowResumePreview(false); }}
                  className="p-1 text-retro-muted hover:text-cosmic-pink"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-hidden relative">
              <iframe
                src="https://docs.google.com/gview?url=https://raw.githubusercontent.com/keintwarren-nix/My-portfolio/main/public/assets/KeintWarren_Resume%20(1).docx&embedded=true"
                className="w-full h-full border-0 bg-white"
                title="Keint Warren Résumé"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
