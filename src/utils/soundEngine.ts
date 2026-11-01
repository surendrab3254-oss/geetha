// Traditional Indian Classical Raag Yaman & Temple Chime Web Audio Synthesizer
// Starts strictly after user interaction and provides full Play/Pause and Mute/Unmute controls.

class IndianWeddingSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private melodyInterval: number | null = null;
  private droneOscillators: OscillatorNode[] = [];
  private masterGain: GainNode | null = null;
  private listeners: Set<() => void> = new Set();

  // Raag Yaman scale frequencies (in Hz, based on C#4 / D4 tonic Sa)
  // Sa, Re, Ga, Ma# (Tivra Ma), Pa, Dha, Ni, Sa'
  private readonly raagYamanNotes = [
    293.66, // D4 (Sa)
    329.63, // E4 (Re)
    369.99, // F#4 (Ga)
    415.30, // G#4 (Tivra Ma)
    440.00, // A4 (Pa)
    493.88, // B4 (Dha)
    554.37, // C#5 (Ni)
    587.33, // D5 (Sa')
    659.25, // E5 (Re')
    739.99, // F#5 (Ga')
  ];

  // Auspicious melodic phrases in Raag Yaman
  private readonly phrases = [
    [0, 1, 2, 4, 2, 1, 0],
    [2, 3, 4, 5, 6, 7],
    [7, 6, 5, 4, 3, 2, 1, 0],
    [0, 2, 4, 7, 6, 4, 2, 0],
    [4, 5, 6, 7, 8, 7, 5, 4],
  ];

  private phraseIndex = 0;
  private noteInPhraseIndex = 0;

  public subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn());
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.isMuted ? 0 : 0.28;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getState() {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
    };
  }

  // Play realistic paper envelope open + auspicious temple bell & santoor shimmer
  public playEnvelopeOpenSound() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain || this.isMuted) return;

      const now = this.ctx.currentTime;

      // 1. Subtle paper rustle (filtered noise burst)
      const bufferSize = this.ctx.sampleRate * 0.45;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(900, now);
      filter.Q.setValueAtTime(1.8, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.01, now);
      noiseGain.gain.linearRampToValueAtTime(0.08, now + 0.12);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.44);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.masterGain);
      whiteNoise.start(now);

      // 2. Auspicious Golden Temple Bell & Santoor Arpeggio
      const chimeFreqs = [293.66, 369.99, 440.0, 554.37, 587.33, 739.99, 880.0];
      chimeFreqs.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const startTime = now + 0.25 + idx * 0.11;
        this.playSantoorNote(freq, startTime, 2.4, 0.18);
      });
    } catch {
      // Ignore audio errors if blocked by browser policy
    }
  }

  // Play a gentle brass temple bell chime (e.g., when lighting a Diya)
  public playTempleBellChime() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain || this.isMuted) return;
      const now = this.ctx.currentTime;
      const bellFreq = 1174.66; // D6
      this.playSantoorNote(bellFreq, now, 2.2, 0.15);
      this.playSantoorNote(bellFreq * 1.5, now + 0.03, 1.6, 0.07);
    } catch {
      // Ignore
    }
  }

  private playSantoorNote(freq: number, startTime: number, duration: number, volume = 0.14) {
    if (!this.ctx || !this.masterGain) return;

    // Fundamental + warm harmonic overtone to emulate plucked Santoor/Sitar string
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'sine';

    osc1.frequency.setValueAtTime(freq, startTime);
    osc2.frequency.setValueAtTime(freq * 2, startTime); // Octave harmonic shimmer

    noteGain.gain.setValueAtTime(0.001, startTime);
    noteGain.gain.linearRampToValueAtTime(volume, startTime + 0.035);
    noteGain.gain.exponentialRampToValueAtTime(0.0008, startTime + duration);

    const osc2Gain = this.ctx.createGain();
    osc2Gain.gain.value = 0.25;

    osc1.connect(noteGain);
    osc2.connect(osc2Gain);
    osc2Gain.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration);
    osc2.stop(startTime + duration);
  }

  private startTanpuraDrone() {
    if (!this.ctx || !this.masterGain) return;
    this.stopTanpuraDrone();

    // Soft continuous Sa (146.83 Hz D3) and Pa (220 Hz A3) Tanpura ambient pad
    const droneFreqs = [146.83, 220.0, 293.66];
    droneFreqs.forEach((freq, i) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.value = i === 0 ? 0.05 : 0.03;

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      this.droneOscillators.push(osc);
    });
  }

  private stopTanpuraDrone() {
    this.droneOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Ignore already stopped
      }
    });
    this.droneOscillators = [];
  }

  public startMusic() {
    try {
      this.initContext();
      if (this.isPlaying) return;

      this.isPlaying = true;
      this.startTanpuraDrone();

      // Play initial welcoming chord
      if (this.ctx) {
        const now = this.ctx.currentTime;
        this.playSantoorNote(293.66, now, 2.5, 0.14);
        this.playSantoorNote(440.0, now + 0.2, 2.5, 0.12);
      }

      // Schedule gentle Raag Yaman Santoor notes
      this.melodyInterval = window.setInterval(() => {
        if (!this.ctx || !this.isPlaying || this.isMuted) return;

        const currentPhrase = this.phrases[this.phraseIndex % this.phrases.length];
        const noteIdx = currentPhrase[this.noteInPhraseIndex % currentPhrase.length];
        const freq = this.raagYamanNotes[noteIdx];

        const now = this.ctx.currentTime;
        this.playSantoorNote(freq, now, 2.1, 0.12);

        // Occasional delicate grace note (Meend/Kan swar)
        if (this.noteInPhraseIndex % 3 === 0 && noteIdx + 2 < this.raagYamanNotes.length) {
          this.playSantoorNote(this.raagYamanNotes[noteIdx + 2], now + 0.35, 1.6, 0.06);
        }

        this.noteInPhraseIndex++;
        if (this.noteInPhraseIndex >= currentPhrase.length) {
          this.noteInPhraseIndex = 0;
          this.phraseIndex++;
        }
      }, 950);

      this.notify();
    } catch {
      // Ignore if blocked
    }
  }

  public pauseMusic() {
    this.isPlaying = false;
    if (this.melodyInterval !== null) {
      clearInterval(this.melodyInterval);
      this.melodyInterval = null;
    }
    this.stopTanpuraDrone();
    this.notify();
  }

  public togglePlay() {
    if (this.isPlaying) {
      this.pauseMusic();
    } else {
      this.startMusic();
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.28, this.ctx.currentTime);
    }
    this.notify();
  }
}

export const soundEngine = new IndianWeddingSoundEngine();

