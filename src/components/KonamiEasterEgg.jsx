import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Trophy } from 'lucide-react';
import { audioManager } from '../utils/audio';

/**
 * Konami Code Easter Egg
 * Sequence: Up Up Down Down Left Right Left Right B A
 */
const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 
  'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 
  'ArrowLeft', 'ArrowRight', 
  'b', 'a'
];

export default function KonamiEasterEgg() {
  const [inputIndex, setInputIndex] = useState(0);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      const expectedKey = KONAMI_CODE[inputIndex];

      if (key.toLowerCase() === expectedKey.toLowerCase()) {
        const nextIndex = inputIndex + 1;
        if (nextIndex === KONAMI_CODE.length) {
          // Trigger Easter Egg!
          triggerHyperspace();
          setInputIndex(0);
        } else {
          setInputIndex(nextIndex);
        }
      } else {
        // Reset if key doesn't match
        setInputIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputIndex]);

  const triggerHyperspace = () => {
    setActivated(true);
    audioManager.playWarpSound();
    
    // Cosmic Confetti Blast
    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#C2269E', '#6B3FD4', '#FF9ECF', '#FFD166', '#38EF7D']
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setActivated(false);
    }, 5000);
  };

  if (!activated) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-bounce">
      <div className="pixel-panel bg-space-950/95 border-2 border-cosmic-pink px-6 py-4 shadow-pixel-glow flex items-center gap-3">
        <Trophy className="text-cosmic-gold animate-spin" size={24} />
        <div>
          <div className="font-pixel text-xs text-cosmic-pink flex items-center gap-1.5">
            <Sparkles size={14} /> HYPERSPACE CHEAT CODE UNLOCKED!
          </div>
          <div className="font-sans text-xs text-retro-text mt-0.5">
            +10,000 Cosmic XP. You discovered Keint's retro Konami sequence!
          </div>
        </div>
      </div>
    </div>
  );
}
