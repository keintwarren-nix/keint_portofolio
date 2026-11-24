import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Layers, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Palette, 
  Cpu, 
  Search,
  Sparkles,
  Info
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { audioManager } from '../utils/audio';

const categoryIcons = {
  Code2,
  Layers,
  Database,
  Cloud,
  ShieldCheck,
  Palette,
  Cpu,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTooltip, setActiveTooltip] = useState(null);

  const categories = useMemo(() => [
    { id: 'all', name: 'All', icon: Sparkles },
    ...SKILL_CATEGORIES.map(cat => ({
      id: cat.id,
      name: cat.name,
      icon: categoryIcons[cat.icon] || Sparkles
    }))
  ], []);

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map(category => {
      if (activeCategory !== 'all' && category.id !== activeCategory) {
        return null;
      }

      const filteredSkills = category.skills.filter(skill => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return true;
        return (
          skill.name.toLowerCase().includes(query) ||
          skill.note.toLowerCase().includes(query) ||
          skill.level.toLowerCase().includes(query)
        );
      });

      if (filteredSkills.length === 0) return null;

      return {
        ...category,
        skills: filteredSkills,
      };
    }).filter(Boolean);
  }, [activeCategory, searchQuery]);

  const getLevelBadgeColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'text-cosmic-pink border-cosmic-pink/50 bg-cosmic-pink/10';
      case 'Proficient':
        return 'text-cosmic-cyan border-cosmic-cyan/50 bg-cosmic-cyan/10';
      case 'Comfortable':
        return 'text-cosmic-gold border-cosmic-gold/50 bg-cosmic-gold/10';
      default:
        return 'text-cosmic-violet border-cosmic-violet/50 bg-cosmic-violet/10';
    }
  };

  return (
    <section 
      id="skills" 
      className="relative py-12 sm:py-16 border-t border-cosmic-purple/30 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 pixel-badge text-cosmic-cyan mb-2">
            <Sparkles size={12} />
            <span>NAVIGATION // STAR MAP</span>
          </div>
          <h2 className="font-pixel text-xl sm:text-2xl text-retro-text mb-2">
            TECHNICAL CONSTELLATIONS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cosmic-cyan via-cosmic-purple to-cosmic-magenta mx-auto" />
        </div>

        {/* Filter Controls */}
        <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    audioManager.playClick();
                    setActiveCategory(cat.id);
                  }}
                  className={`px-2.5 py-1 font-pixel text-[10px] transition-all border flex items-center gap-1 ${
                    isActive
                      ? 'bg-cosmic-magenta text-white border-white shadow-pixel-sm'
                      : 'bg-space-900/80 text-retro-muted border-cosmic-purple/40 hover:border-cosmic-violet hover:text-retro-text'
                  }`}
                >
                  <IconComp size={11} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-56">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-retro-muted" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-space-950/90 border border-cosmic-purple/60 pl-8 pr-3 py-1 font-sans text-xs text-retro-text focus:outline-none focus:border-cosmic-pink shadow-pixel-sm"
            />
          </div>
        </div>

        {/* Constellations Grid */}
        <div className="space-y-6">
          {filteredCategories.map((category) => {
            const CategoryIcon = categoryIcons[category.icon] || Sparkles;
            return (
              <div 
                key={category.id} 
                className="pixel-panel p-4 sm:p-5 bg-space-900/85 border-2 border-cosmic-purple/50 shadow-pixel"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-cosmic-purple/30">
                  <div className="flex items-center gap-2">
                    <CategoryIcon size={16} className="text-cosmic-pink" />
                    <h3 className="font-pixel text-xs sm:text-sm text-retro-text">
                      {category.name}
                    </h3>
                  </div>
                  <span className="font-pixel text-[9px] text-cosmic-cyan px-2 py-0.5 bg-space-950 border border-cosmic-cyan/30">
                    {category.skills.length} NODES
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {category.skills.map((skill, sIdx) => {
                    const isHovered = activeTooltip === `${category.id}-${sIdx}`;
                    return (
                      <div
                        key={sIdx}
                        onMouseEnter={() => setActiveTooltip(`${category.id}-${sIdx}`)}
                        onMouseLeave={() => setActiveTooltip(null)}
                        className="relative star-node bg-space-950/80 border border-cosmic-purple/40 hover:border-cosmic-pink p-2.5 transition-all cursor-default"
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-pixel text-[10px] text-retro-text group-hover:text-cosmic-pink">
                            ★ {skill.name}
                          </span>
                          <span className={`text-[8px] font-pixel px-1.5 py-0.5 border ${getLevelBadgeColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="font-sans text-[11px] text-retro-muted leading-tight line-clamp-2">
                          {skill.note}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
