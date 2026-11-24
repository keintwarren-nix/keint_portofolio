// Audio manager: click sound ONLY plays when changing sections
class AudioManager {
  constructor() {
    this.sfxEnabled = true;
    this.bgmEnabled = false;
    this.bgmVolume = 0.08; // Quiet background ambience (8% volume)
    this.bgmAudio = null;
    this.clickAudio = null;
    this.listeners = new Set();
    this._bgmUserInteracted = false;

    try {
      const savedSfx = localStorage.getItem('keint_portfolio_sfx');
      if (savedSfx !== null) this.sfxEnabled = savedSfx === 'true';
    } catch { /* ignore */ }
  }

  init() {
    if (typeof window === 'undefined') return;

    if (!this.clickAudio) {
      this.clickAudio = new Audio('/assets/sounds/click.mp3');
      this.clickAudio.volume = 0.5;
      this.clickAudio.preload = 'auto';
    }

    if (!this.bgmAudio) {
      this.bgmAudio = new Audio('/assets/sounds/bgm.mp3');
      this.bgmAudio.loop = true;
      this.bgmAudio.volume = this.bgmVolume;
      this.bgmAudio.preload = 'none';
    }
  }

  tryAutoStartBgm() {
    if (this._bgmUserInteracted) return;
    this._bgmUserInteracted = true;
    this.init();
    if (!this.bgmAudio) return;
    this.bgmAudio.play()
      .then(() => {
        this.bgmEnabled = true;
        this.notify();
      })
      .catch(() => {
        // blocked until further interaction
      });
  }

  // Play click ONLY when navigating between sections
  playSectionChange() {
    if (!this.sfxEnabled) return;
    this.tryAutoStartBgm();
    this.init();
    try {
      if (this.clickAudio) {
        this.clickAudio.currentTime = 0;
        this.clickAudio.play().catch(() => this.playSyntheticBeep(520, 0.05));
      } else {
        this.playSyntheticBeep(520, 0.05);
      }
    } catch {
      this.playSyntheticBeep(520, 0.05);
    }
  }

  // Generic playClick now delegates to playSectionChange
  playClick() {
    this.playSectionChange();
  }

  playSyntheticBeep(freq = 440, duration = 0.08) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch { /* ignore */ }
  }

  playWarpSound() {
    if (!this.sfxEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch { /* ignore */ }
  }

  toggleBgm() {
    this.init();
    if (!this.bgmAudio) return;
    if (this.bgmEnabled) {
      this.bgmAudio.pause();
      this.bgmEnabled = false;
      this.notify();
    } else {
      this.bgmAudio.play()
        .then(() => {
          this.bgmEnabled = true;
          this._bgmUserInteracted = true;
          this.notify();
        })
        .catch((e) => {
          console.warn('BGM blocked:', e);
          this.bgmEnabled = false;
          this.notify();
        });
    }
  }

  toggleSfx() {
    this.sfxEnabled = !this.sfxEnabled;
    try {
      localStorage.setItem('keint_portfolio_sfx', String(this.sfxEnabled));
    } catch { /* ignore */ }
    this.notify();
  }

  setBgmVolume(val) {
    this.bgmVolume = Math.max(0, Math.min(1, val));
    if (this.bgmAudio) this.bgmAudio.volume = this.bgmVolume;
    this.notify();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    for (const listener of this.listeners) {
      listener({ sfxEnabled: this.sfxEnabled, bgmEnabled: this.bgmEnabled, bgmVolume: this.bgmVolume });
    }
  }
}

export const audioManager = new AudioManager();
