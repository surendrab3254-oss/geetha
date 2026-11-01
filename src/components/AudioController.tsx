import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export const AudioController: React.FC = () => {
  const [audioState, setAudioState] = useState(soundEngine.getState());

  useEffect(() => {
    return soundEngine.subscribe(() => {
      setAudioState(soundEngine.getState());
    });
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 p-1.5 rounded-full bg-[#240309]/90 backdrop-blur-md border border-[#D4AF62]/60 shadow-[0_0_25px_rgba(212,175,98,0.35)]">
      {/* Play / Pause Classical Music Button */}
      <button
        type="button"
        onClick={() => soundEngine.togglePlay()}
        aria-label={audioState.isPlaying ? 'Pause classical wedding music' : 'Play classical wedding music'}
        className="flex items-center gap-2 pl-3 pr-3.5 py-2 rounded-full bg-gradient-to-r from-[#6B1020] to-[#8F192E] hover:from-[#8F192E] hover:to-[#6B1020] border border-[#D4AF62]/40 text-[#FFF8EA] transition-all"
      >
        {audioState.isPlaying ? (
          <Pause className="w-4 h-4 text-[#FCF6BA]" />
        ) : (
          <Play className="w-4 h-4 text-[#FCF6BA] fill-[#FCF6BA]" />
        )}
        <span className="text-xs font-sans font-medium tracking-wider uppercase text-[#FCF6BA] hidden sm:inline">
          {audioState.isPlaying ? 'Raag Yaman (Playing)' : 'Play Shehnai & Santoor'}
        </span>
        <Music className="w-3.5 h-3.5 text-[#D4AF62] sm:hidden" />

        {/* Animated Sound Bars when playing and not muted */}
        {audioState.isPlaying && !audioState.isMuted && (
          <div className="flex items-end gap-0.5 h-3 ml-1" aria-hidden="true">
            <span className="w-0.5 h-full bg-[#FCF6BA] animate-pulse" />
            <span className="w-0.5 h-2 bg-[#D4AF62] animate-bounce" />
            <span className="w-0.5 h-3 bg-[#FCF6BA] animate-pulse" />
          </div>
        )}
      </button>

      {/* Mute / Unmute Control */}
      <button
        type="button"
        onClick={() => soundEngine.toggleMute()}
        aria-label={audioState.isMuted ? 'Unmute audio' : 'Mute audio'}
        title={audioState.isMuted ? 'Unmute Audio' : 'Mute Audio'}
        className="p-2 rounded-full bg-[#3D0711] hover:bg-[#D4AF62] text-[#FCF6BA] hover:text-[#240309] border border-[#D4AF62]/40 transition-all"
      >
        {audioState.isMuted ? (
          <VolumeX className="w-4 h-4" />
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};

