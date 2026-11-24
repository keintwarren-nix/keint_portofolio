import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { PROJECTS } from '../data/portfolioData';

export default function ProjectsSlide() {
  const featured = PROJECTS.find((p) => p.id === 'cipherquest');
  const archived = PROJECTS.filter((p) => p.id !== 'cipherquest');

  return (
    <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center py-2 px-2 sm:px-6 space-y-3">
      
      {/* Top Banner */}
      <div className="pixel-panel p-3 sm:p-4 bg-space-900/90 border-2 border-cosmic-purple/60 shadow-pixel flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 pixel-badge text-cosmic-pink">
            <Star size={12} className="text-cosmic-gold fill-cosmic-gold" />
            <span>03 // EXPEDITIONS</span>
          </div>
          <h2 className="font-pixel text-base sm:text-xl text-retro-text">
            PROJECT EXPEDITIONS
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-cosmic-cyan animate-ping rounded-none" />
          <span className="font-pixel text-[9px] sm:text-[10px] text-cosmic-cyan">
            CIPHERQUEST ACTIVE ON CLOUDFLARE
          </span>
        </div>
      </div>

      {/* Main Grid: Left = CipherQuest Flagship, Right = Archived with direct GitHub Links */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-stretch flex-1">
        
        {/* LEFT (col-span-6): CipherQuest Flagship */}
        {featured && (
          <div className="lg:col-span-6 flex flex-col justify-between pixel-panel overflow-hidden border-2 border-cosmic-pink bg-space-900/90 shadow-pixel-glow group">
            
            {/* Screenshot Header */}
            <div className="relative h-44 sm:h-52 overflow-hidden bg-space-950 border-b-2 border-cosmic-pink">
              <img
                src={featured.thumbnail}
                alt={featured.title}
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 bg-space-950/90 border border-cosmic-cyan">
                <span className="w-1.5 h-1.5 bg-cosmic-cyan rounded-none animate-ping" />
                <span className="font-pixel text-[8px] text-cosmic-cyan tracking-wider">
                  ACTIVE FLAGSHIP // CLOUDFLARE WORKERS
                </span>
              </div>
            </div>

            {/* Description & Direct Links */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="font-pixel text-[9px] text-cosmic-violet block mb-0.5">
                  {featured.category}
                </span>
                <h3 className="font-pixel text-base sm:text-lg text-retro-text group-hover:text-cosmic-pink transition-colors mb-1.5">
                  {featured.title}
                </h3>
                <p className="font-sans text-xs text-retro-muted/95 mb-3 leading-relaxed">
                  {featured.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {featured.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 font-pixel text-[7px] bg-space-950 text-retro-muted border border-cosmic-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Live and GitHub Links */}
              <div className="flex gap-2.5 pt-2 border-t border-cosmic-purple/30">
                <a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 pixel-btn py-2 text-xs flex items-center justify-center gap-1.5"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink size={12} />
                </a>
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 pixel-btn pixel-btn-outline py-2 text-xs flex items-center justify-center gap-1.5"
                >
                  <GithubIcon size={14} />
                  <span>GITHUB REPO</span>
                </a>
              </div>
            </div>

          </div>
        )}

        {/* RIGHT (col-span-6): Archived Projects (PhotoFlex, Travel, AquaHaven, CapStone) with Direct GitHub Links */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-2.5 sm:gap-3">
          {archived.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="pixel-panel flex flex-col justify-between overflow-hidden border-2 border-cosmic-purple/40 bg-space-900/85 hover:border-cosmic-pink transition-all group"
            >
              {/* Card Thumbnail: Centered GitHub Logo directly linked to repo */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-20 sm:h-24 bg-space-950 border-b border-cosmic-purple/40 flex items-center justify-center p-3 group-hover:bg-space-900/80 transition-colors"
                title={`Open ${project.title} on GitHub`}
              >
                <img
                  src="/assets/github-logo.png"
                  alt={`${project.title} GitHub`}
                  className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(255,158,207,0.35)] group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />

                <span className="absolute top-1.5 left-1.5 pixel-badge text-[7px] text-retro-muted border-retro-muted/40">
                  {project.isPlaceholder ? 'TEMPLATE' : 'ARCHIVED'}
                </span>

                <div className="absolute inset-0 bg-space-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="pixel-btn py-1 px-2.5 text-[8px] flex items-center gap-1">
                    <ExternalLink size={10} /> OPEN GITHUB
                  </span>
                </div>
              </a>

              {/* Info & Direct GitHub Button */}
              <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-pixel text-[10px] sm:text-xs text-retro-text group-hover:text-cosmic-pink transition-colors mb-0.5 truncate">
                    {project.title}
                  </h4>
                  <p className="font-sans text-[11px] text-retro-muted/80 line-clamp-2 leading-tight mb-2">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="pt-1.5 border-t border-cosmic-purple/20">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full pixel-btn pixel-btn-outline py-1.5 text-[9px] flex items-center justify-center gap-1.5"
                  >
                    <GithubIcon size={12} />
                    <span>GITHUB REPO ↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
