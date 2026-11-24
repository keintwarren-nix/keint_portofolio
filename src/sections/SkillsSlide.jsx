import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Layers, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Palette, 
  Search, 
  Sparkles 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const categoryIcons = {
  Code2,
  Layers,
  Database,
  Cloud,
  ShieldCheck,
  Palette,
};

export default function SkillsSlide() {
  const [activeCategoryId, setActiveCategoryId] = useState('languages');
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = useMemo(() => {
    return SKILL_CATEGORIES.find((c) => c.id === activeCategoryId) || SKILL_CATEGORIES[0];
  }, [activeCategoryId]);

  // If user typed a search query, show all matching skills across all categories
  const searchedSkills = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase().trim();
    const matches = [];
    for (const cat of SKILL_CATEGORIES) {
      for (const skill of cat.skills) {
        if (
          skill.name.toLowerCase().includes(q) ||
          skill.note.toLowerCase().includes(q) ||
          skill.level.toLowerCase().includes(q)
        ) {
          matches.push({ ...skill, categoryName: cat.name });
        }
      }
    }
    return matches;
  }, [searchQuery]);

  const getLevelBadgeColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'text-cosmic-pink border-cosmic-pink/50 bg-cosmic-pink/15';
      case 'Proficient':
        return 'text-cosmic-cyan border-cosmic-cyan/50 bg-cosmic-cyan/15';
      case 'Comfortable':
        return 'text-cosmic-gold border-cosmic-gold/50 bg-cosmic-gold/15';
      default:
        return 'text-cosmic-violet border-cosmic-violet/50 bg-cosmic-violet/15';
    }
  };

  const displayedSkills = searchedSkills || currentCategory.skills;

  return (
    <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center py-2 px-2 sm:px-6 space-y-3 sm:space-y-4">
      
      {/* Top Controls Bar: Title + Category Tabs + Search */}
      <div className="pixel-panel p-3.5 sm:p-4 bg-space-900/90 border-2 border-cosmic-purple/60 shadow-pixel flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 pixel-badge text-cosmic-cyan">
            <Sparkles size={12} />
            <span>02 // STAR MAP</span>
          </div>
          <h2 className="font-pixel text-base sm:text-xl text-retro-text">
            TECHNICAL CONSTELLATIONS
          </h2>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-60">
          <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-retro-muted" />
          <input
            type="text"
            placeholder="Search all skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-space-950 border border-cosmic-purple/60 pl-8 pr-3 py-1 font-sans text-xs text-retro-text focus:outline-none focus:border-cosmic-pink shadow-pixel-sm"
          />
        </div>
      </div>

      {/* Category Tabs: Switch constellations instantly */}
      {!searchQuery && (
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {SKILL_CATEGORIES.map((cat) => {
            const IconComp = categoryIcons[cat.icon] || Sparkles;
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-3 py-1.5 font-pixel text-[10px] sm:text-xs transition-all border-2 flex items-center gap-1.5 select-none ${
                  isActive
                    ? 'bg-cosmic-magenta text-white border-white shadow-pixel-sm translate-x-[-1px] translate-y-[-1px]'
                    : 'bg-space-900/90 text-retro-muted border-cosmic-purple/40 hover:border-cosmic-violet hover:text-retro-text hover:bg-space-850'
                }`}
              >
                <IconComp size={12} />
                <span>{cat.name}</span>
                <span className={`text-[8px] px-1 py-0.2 ml-1 ${isActive ? 'bg-space-950 text-white' : 'bg-space-950 text-cosmic-cyan'}`}>
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main Active Constellation Display: Fits completely in viewport without scrolling! */}
      <div className="pixel-panel p-4 sm:p-5 bg-space-900/90 border-2 border-cosmic-purple/50 shadow-pixel flex-1 flex flex-col justify-center">
        
        {/* Category Description Bar */}
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-cosmic-purple/30">
          <span className="font-pixel text-xs text-cosmic-pink flex items-center gap-2">
            ★ {searchQuery ? `SEARCH RESULTS (${displayedSkills.length})` : currentCategory.name.toUpperCase()}
          </span>
          <span className="font-sans text-xs text-retro-muted hidden sm:inline">
            {searchQuery ? `Matching query: "${searchQuery}"` : currentCategory.description}
          </span>
        </div>

        {/* Constellation Nodes Grid: 2x4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {displayedSkills.map((skill, idx) => (
            <div
              key={idx}
              className="star-node p-2.5 sm:p-3 bg-space-950/85 border-2 border-cosmic-purple/40 hover:border-cosmic-pink transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="font-pixel text-[11px] text-retro-text group-hover:text-cosmic-pink">
                  ★ {skill.name}
                </span>
                <span className={`text-[8px] font-pixel px-1.5 py-0.5 border ${getLevelBadgeColor(skill.level)}`}>
                  {skill.level}
                </span>
              </div>
              <p className="font-sans text-xs text-retro-muted leading-tight line-clamp-2">
                {skill.note}
              </p>
              {skill.categoryName && (
                <span className="font-pixel text-[7px] text-cosmic-violet mt-1 block">
                  [{skill.categoryName}]
                </span>
              )}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
