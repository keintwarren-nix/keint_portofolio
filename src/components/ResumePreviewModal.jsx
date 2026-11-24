import React, { useEffect } from 'react';
import { Download, FileText, ExternalLink } from 'lucide-react';

export default function ResumePreviewModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-space-950/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-[88vh] bg-space-900 border-2 border-cosmic-pink shadow-pixel-glow flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-space-950 border-b-2 border-cosmic-purple/50 shrink-0">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-cosmic-pink" />
            <span className="font-pixel text-xs text-cosmic-pink">
              FLIGHT DOSSIER // KeintWarren_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="/assets/KeintWarren_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn pixel-btn-secondary py-1 px-3 text-[9px] flex items-center gap-1"
            >
              <ExternalLink size={11} /> OPEN TAB
            </a>
            <a
              href="/assets/KeintWarren_Resume.pdf"
              download="KeintWarren_Resume.pdf"
              className="pixel-btn py-1 px-3 text-[9px] flex items-center gap-1"
            >
              <Download size={11} /> DOWNLOAD
            </a>
            <button
              onClick={onClose}
              className="p-1 text-retro-muted hover:text-cosmic-pink transition-colors font-pixel text-xs"
            >
              [X]
            </button>
          </div>
        </div>

        {/* PDF Embedded Native Viewer (No gview dependency!) */}
        <div className="flex-1 overflow-hidden relative bg-slate-900">
          <iframe
            src="/assets/KeintWarren_Resume.pdf#view=FitH&toolbar=1"
            className="w-full h-full border-0"
            title="Keint Warren Résumé PDF"
          />
        </div>
      </div>
    </div>
  );
}
