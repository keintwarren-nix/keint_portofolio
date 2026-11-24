import React, { useState } from 'react';
import { ExternalLink, Star, Eye } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { PROJECTS } from '../data/portfolioData';
import { audioManager } from '../utils/audio';
import ProjectModal from '../components/ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (proj) => {
    audioManager.playClick();
    setSelectedProject(proj);
  };

  const featured = PROJECTS.find((p) => p.id === 'cipherquest');
  const archived = PROJECTS.filter((p) => p.id !== 'cipherquest');

  return (
    <section
      id="projects"
      className="relative py-12 sm:py-16 border-t border-cosmic-purple/30 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 pixel-badge text-cosmic-pink mb-2">
            <Star size={12} className="text-cosmic-gold fill-cosmic-gold" />
            <span>MISSION PORTFOLIO // PROJECTS</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-text mb-2">
            FEATURED EXPEDITIONS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cosmic-magenta via-cosmic-purple to-cosmic-cyan mx-auto" />
        </div>

        {/* ── 1. ACTIVE FLAGSHIP PROJECT (CipherQuest) ── */}
        {featured && (
          <div className="mb-10">
            <div className="flex items-center gap-2 font-pixel text-xs text-cosmic-pink mb-3">
              <span className="w-2 h-2 bg-cosmic-cyan animate-ping rounded-none" />
              <span>&gt; ACTIVE DEPLOYMENT // FLAGSHIP MISSION</span>
            </div>

            <div
              className="pixel-panel overflow-hidden border-2 border-cosmic-pink bg-space-900/90 shadow-pixel-glow group cursor-pointer"
              onClick={() => openModal(featured)}
            >
              {/* Wide screenshot banner */}
              <div className="relative aspect-video sm:aspect-[21/8] overflow-hidden bg-space-950 border-b-2 border-cosmic-pink">
                <img
                  src={featured.thumbnail}
                  alt={featured.title}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Live indicator badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-space-950/90 border border-cosmic-cyan shadow-pixel-sm">
                  <span className="w-2 h-2 bg-cosmic-cyan rounded-none animate-ping" />
                  <span className="font-pixel text-[9px] text-cosmic-cyan tracking-wider">
                    LIVE ON CLOUDFLARE WORKERS
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-space-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="pixel-btn py-2 px-4 text-xs flex items-center gap-1.5">
                    <Eye size={13} /> OPEN MISSION BRIEF
                  </div>
                </div>
              </div>

              {/* Flagship Content Body */}
              <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div>
                  <span className="font-pixel text-[9px] text-cosmic-violet block mb-1">
                    {featured.category}
                  </span>
                  <h3 className="font-pixel text-base sm:text-xl text-retro-text group-hover:text-cosmic-pink transition-colors mb-1.5">
                    {featured.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-retro-muted max-w-xl mb-3 leading-relaxed">
                    {featured.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {featured.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 font-pixel text-[8px] bg-space-950 text-retro-muted border border-cosmic-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex sm:flex-col gap-2 shrink-0">
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => { e.stopPropagation(); audioManager.playClick(); }}
                    className="pixel-btn py-2 px-4 text-[10px] flex items-center justify-center gap-1.5"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink size={11} />
                  </a>
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => { e.stopPropagation(); audioManager.playClick(); }}
                    className="pixel-btn pixel-btn-outline py-2 px-4 text-[10px] flex items-center justify-center gap-1.5"
                  >
                    <GithubIcon size={12} />
                    <span>REPOSITORY</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 2. INACTIVE / ARCHIVED MISSIONS (Featuring GitHub Logo Placeholders) ── */}
        <div>
          <div className="flex items-center gap-2 font-pixel text-xs text-retro-muted/80 mb-4">
            <span>&gt; ARCHIVED MISSIONS // INACTIVE REPOSITORIES:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {archived.map((project) => (
              <div
                key={project.id}
                className="pixel-panel flex flex-col justify-between overflow-hidden border-2 border-cosmic-purple/40 bg-space-900/85 hover:border-cosmic-violet transition-all group"
              >
                {/* Card Thumbnail Window: Prominently displaying the GitHub Logo! */}
                <div
                  className="relative aspect-video overflow-hidden bg-space-950 border-b border-cosmic-purple/40 cursor-pointer flex items-center justify-center p-6 group-hover:bg-space-900/70 transition-colors"
                  onClick={() => openModal(project)}
                >
                  {/* GitHub Logo Image */}
                  <img
                    src="/assets/github-logo.png"
                    alt={`${project.title} GitHub Repository`}
                    className="h-16 w-16 object-contain filter drop-shadow-[0_0_10px_rgba(255,158,207,0.35)] group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Badge pill */}
                  <div className="absolute top-2 left-2">
                    <span className={`pixel-badge ${
                      project.isPlaceholder
                        ? 'text-cosmic-gold border-cosmic-gold'
                        : 'text-retro-muted border-retro-muted/40'
                    }`}>
                      {project.isPlaceholder ? '✎ TEMPLATE' : '◇ ARCHIVED'}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-space-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="pixel-btn py-1.5 px-3 text-[9px] flex items-center gap-1">
                      <Eye size={11} /> VIEW DETAILS
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <span className="font-pixel text-[9px] text-cosmic-violet block mb-1">
                    {project.category}
                  </span>
                  <h3
                    className="font-pixel text-xs text-retro-text hover:text-cosmic-pink transition-colors cursor-pointer mb-1"
                    onClick={() => openModal(project)}
                  >
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-retro-muted/80 line-clamp-2 leading-relaxed mb-3">
                    {project.shortDesc}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 font-pixel text-[7px] bg-space-950 text-retro-muted/80 border border-cosmic-purple/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="font-pixel text-[7px] text-retro-muted/50 self-center">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="px-4 pb-4 flex gap-2">
                  <button
                    onClick={() => openModal(project)}
                    className="flex-1 pixel-btn pixel-btn-outline py-1.5 text-[9px] flex items-center justify-center gap-1"
                  >
                    <Eye size={10} /> DETAILS
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => audioManager.playClick()}
                      className="p-1.5 border border-cosmic-purple/40 text-retro-muted hover:text-retro-text hover:border-cosmic-pink transition-colors bg-space-950 flex items-center justify-center"
                      title="Open GitHub"
                    >
                      <GithubIcon size={13} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
