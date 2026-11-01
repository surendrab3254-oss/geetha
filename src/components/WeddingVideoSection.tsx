import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Pause,
  Film,
  Upload,
  Link2,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { WeddingVideoConfig } from '../data/weddingData';
import { GoldCornerOrnament, MandalaDivider } from './OrnamentalSVGs';
import { WeddingArtScene } from './WeddingArtScene';
import { soundEngine } from '../utils/soundEngine';

interface WeddingVideoSectionProps {
  video: WeddingVideoConfig;
  coupleNames: string;
}

export const WeddingVideoSection: React.FC<WeddingVideoSectionProps> = ({
  video,
  coupleNames,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [customVideoUrl, setCustomVideoUrl] = useState(video.videoUrl);
  const [urlInput, setUrlInput] = useState('');
  const [showUrlConfig, setShowUrlConfig] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const [useCinematicCanvasFallback, setUseCinematicCanvasFallback] = useState(false);
  const [fallbackProgress, setFallbackProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Built-in Cinematic Motion Film chapters (used if external MP4 stream is offline or blocked)
  const chapters = [
    {
      scene: 'prewedding' as const,
      caption: 'Chapter I • Under the Golden Arches of Udaipur & Hampi',
      sub: 'Two souls united by ancient traditions and timeless love',
    },
    {
      scene: 'haldi' as const,
      caption: 'Chapter II • Sunlit Blessings of Haldi & Marigold Showers',
      sub: 'Sacred turmeric, folk dhols, and joyous laughter of both families',
    },
    {
      scene: 'mehendi' as const,
      caption: 'Chapter III • Henna Tales & Starlit Sangeet Symphony',
      sub: 'Intricate bridal mehendi and classical melodies in the royal courtyard',
    },
    {
      scene: 'traditional' as const,
      caption: 'Chapter IV • Subh Muhurtham — Seven Sacred Vows Around Agni',
      sub: 'Join us on Saturday, 12th December 2026 to bless our new beginning',
    },
  ];

  // Progress timer when running the interactive cinematic motion film fallback
  useEffect(() => {
    if (!useCinematicCanvasFallback || !isPlaying) return;
    const interval = window.setInterval(() => {
      setFallbackProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false);
          return 100;
        }
        return prev + 0.5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [useCinematicCanvasFallback, isPlaying]);

  const handleStartVideo = () => {
    setHasStarted(true);
    setIsPlaying(true);

    // Ensure background music plays softly if not already playing
    if (!soundEngine.getState().isPlaying) {
      soundEngine.startMusic();
    }

    setTimeout(() => {
      if (videoRef.current && !useCinematicCanvasFallback) {
        videoRef.current.play().catch(() => {
          // If external stream is unreachable offline, switch seamlessly to Cinematic Motion Film
          setUseCinematicCanvasFallback(true);
        });
      }
    }, 80);
  };

  const handleVideoFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const localUrl = URL.createObjectURL(file);
    setCustomVideoUrl(localUrl);
    setUseCinematicCanvasFallback(false);
    setHasStarted(true);
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.load();
      videoRef.current?.play().catch(() => {});
    }, 100);
  };

  const handleApplyCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    setCustomVideoUrl(urlInput.trim());
    setUseCinematicCanvasFallback(false);
    setShowUrlConfig(false);
    setHasStarted(true);
    setIsPlaying(true);
  };

  const activeChapterIndex = Math.min(
    chapters.length - 1,
    Math.floor((fallbackProgress / 100) * chapters.length)
  );

  return (
    <section
      id="video-section"
      className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20"
    >
      {/* Hidden MP4 File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/mp4,video/webm,video/*"
        onChange={handleVideoFileUpload}
        className="hidden"
      />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D4AF62]/15 border border-[#D4AF62]/40 text-xs font-sans uppercase tracking-[0.25em] text-[#FCF6BA]">
          <Film className="w-3.5 h-3.5 text-[#D4AF62]" />
          <span>Royal Wedding Cinema • 1 Exclusive Feature Film</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-foil mt-3">
          Wedding Invitation &amp; Pre-Wedding Film
        </h2>
        <p className="mt-2 text-sm sm:text-base font-serif text-[#FFF8EA]/80">
          {video.description}
        </p>
        <MandalaDivider />
      </div>

      {/* Main Ornate Gold-Framed Video Container (Strictly 1 Video) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative rounded-3xl p-1.5 sm:p-2.5 bg-gradient-to-b from-[#FCF6BA] via-[#D4AF62] to-[#9C7A32] gold-glow-strong overflow-hidden"
      >
        <div className="relative rounded-[22px] overflow-hidden bg-[#140105] aspect-video w-full">
          {/* Four Gold Filigree Corners */}
          <GoldCornerOrnament
            position="top-left"
            className="absolute top-3 left-3 z-30 pointer-events-none"
          />
          <GoldCornerOrnament
            position="top-right"
            className="absolute top-3 right-3 z-30 pointer-events-none"
          />
          <GoldCornerOrnament
            position="bottom-left"
            className="absolute bottom-3 left-3 z-30 pointer-events-none"
          />
          <GoldCornerOrnament
            position="bottom-right"
            className="absolute bottom-3 right-3 z-30 pointer-events-none"
          />

          {/* STATE 1: THUMBNAIL VIEW WITH PREMIUM PLAY BUTTON (No Autoplay With Sound) */}
          {!hasStarted && (
            <div
              onClick={handleStartVideo}
              role="button"
              tabIndex={0}
              aria-label="Play Wedding Invitation Video"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleStartVideo();
                }
              }}
              className="group relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center"
            >
              {/* Thumbnail Image or Royal Illustrated Fallback */}
              {posterFailed ? (
                <WeddingArtScene
                  scene="portrait"
                  className="w-full h-full transition-transform duration-1000 group-hover:scale-105"
                />
              ) : (
                <img
                  src={video.posterUrl}
                  alt={video.title}
                  onError={() => setPosterFailed(true)}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              )}

              {/* Dark Royal Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0206] via-[#240309]/55 to-[#1A0206]/40" />

              {/* Center Glowing 3D Golden Play Button */}
              <div className="relative z-20 flex flex-col items-center text-center px-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#FCF6BA] via-[#D4AF62] to-[#9C7A32] p-1 shadow-[0_0_50px_rgba(212,175,98,0.85)] flex items-center justify-center border-2 border-[#FFF8EA]"
                >
                  <div className="w-full h-full rounded-full bg-[#6B1020] group-hover:bg-[#8F192E] flex items-center justify-center transition-colors">
                    <Play className="w-9 h-9 sm:w-10 sm:h-10 text-[#FCF6BA] fill-[#FCF6BA] ml-1" />
                  </div>
                </motion.div>

                <span className="mt-4 px-4 py-1 rounded-full bg-[#240309]/85 border border-[#D4AF62]/60 text-xs font-sans uppercase tracking-[0.25em] text-[#FCF6BA]">
                  Click to Play Royal Film • {video.duration}
                </span>
                <h3 className="font-display text-xl sm:text-3xl font-bold text-gold-foil mt-2">
                  {video.title}
                </h3>
                <p className="text-xs sm:text-sm font-serif text-[#FFF8EA]/85 mt-1">
                  {video.location}
                </p>
              </div>
            </div>
          )}

          {/* STATE 2: ACTIVE HTML5 MP4 VIDEO PLAYER (Or Interactive Cinematic Film if Offline) */}
          {hasStarted && !useCinematicCanvasFallback && (
            <div className="relative w-full h-full bg-black">
              <video
                ref={videoRef}
                src={customVideoUrl}
                controls
                playsInline
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => setUseCinematicCanvasFallback(true)}
                className="w-full h-full object-contain"
              >
                Your browser supports HTML5 MP4 wedding video playback.
              </video>
            </div>
          )}

          {/* STATE 3: BUILT-IN CINEMATIC ROYAL MOTION FILM (Seamless Offline / Sandbox Mode) */}
          {hasStarted && useCinematicCanvasFallback && (
            <div className="relative w-full h-full overflow-hidden bg-[#1A0206] flex flex-col justify-between">
              {/* Animated Pan-and-Zoom Chapter Artwork */}
              <motion.div
                key={activeChapterIndex}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 5.5, ease: 'linear' }}
                className="absolute inset-0"
              >
                <WeddingArtScene
                  scene={chapters[activeChapterIndex].scene}
                  className="w-full h-full"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#140105] via-transparent to-[#140105]/60 pointer-events-none" />

              {/* Top Film Status Banner */}
              <div className="relative z-20 flex items-center justify-between px-6 py-4">
                <span className="px-3.5 py-1 rounded-full bg-[#240309]/85 border border-[#D4AF62]/50 text-xs font-sans uppercase tracking-widest text-[#FCF6BA] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF62]" />
                  <span>{coupleNames} • Official Wedding Film</span>
                </span>
              </div>

              {/* Bottom Cinematic Subtitle & Custom Player Controls */}
              <div className="relative z-20 p-5 sm:p-8 space-y-4">
                <div className="text-center max-w-2xl mx-auto">
                  <h4 className="font-display text-lg sm:text-2xl font-bold text-[#FCF6BA] drop-shadow">
                    {chapters[activeChapterIndex].caption}
                  </h4>
                  <p className="text-xs sm:text-base font-serif italic text-[#FFF8EA]/90 mt-1">
                    “{chapters[activeChapterIndex].sub}”
                  </p>
                </div>

                {/* Progress Bar & Play/Pause/Mute Controls */}
                <div className="flex items-center gap-3 bg-[#240309]/90 border border-[#D4AF62]/50 rounded-full px-4 py-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (fallbackProgress >= 100) setFallbackProgress(0);
                      setIsPlaying((prev) => !prev);
                    }}
                    className="p-1.5 rounded-full bg-[#D4AF62] text-[#240309]"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4 fill-[#240309]" />
                    )}
                  </button>

                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={fallbackProgress}
                    onChange={(e) => setFallbackProgress(Number(e.target.value))}
                    aria-label="Wedding film timeline"
                    className="w-full accent-[#D4AF62] cursor-pointer h-1.5 bg-[#4A0815] rounded-lg"
                  />

                  <button
                    type="button"
                    onClick={() => {
                      setIsMuted((prev) => !prev);
                      soundEngine.toggleMute();
                    }}
                    className="p-1.5 text-[#FCF6BA] hover:text-[#D4AF62]"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Video Bar: Upload Local MP4 or Configure Custom Video URL */}
        <div className="px-4 py-3 bg-[#240309] rounded-b-[18px] mt-1 flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
          <div className="flex items-center gap-2 text-[#FFF8EA]/85">
            <Film className="w-4 h-4 text-[#D4AF62]" />
            <span className="font-semibold text-[#FCF6BA]">{video.subtitle}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#6B1020] hover:bg-[#D4AF62] text-[#FCF6BA] hover:text-[#240309] border border-[#D4AF62]/50 font-medium transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload MP4 Video</span>
            </button>

            <button
              type="button"
              onClick={() => setShowUrlConfig((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3D0711] hover:bg-[#6B1020] text-[#FFF8EA] border border-[#D4AF62]/40 transition-colors"
            >
              <Link2 className="w-3.5 h-3.5 text-[#D4AF62]" />
              <span>Set Video URL</span>
            </button>

            {hasStarted && (
              <button
                type="button"
                onClick={() => {
                  setHasStarted(false);
                  setIsPlaying(false);
                  setFallbackProgress(0);
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#1A0206] text-[#D4AF62] border border-[#D4AF62]/30 hover:border-[#FCF6BA]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Thumbnail</span>
              </button>
            )}
          </div>
        </div>

        {/* Collapsible Custom Video URL Input */}
        {showUrlConfig && (
          <form
            onSubmit={handleApplyCustomUrl}
            className="p-3 bg-[#1A0206] border-t border-[#D4AF62]/30 flex flex-col sm:flex-row items-center gap-2"
          >
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="Paste any direct .mp4 video URL (e.g., https://example.com/wedding.mp4)"
              className="w-full px-3.5 py-2 rounded-xl bg-[#240309] border border-[#D4AF62]/50 text-xs font-sans text-[#FFF8EA] placeholder-[#FFF8EA]/40 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-[#D4AF62] text-[#240309] font-sans font-bold text-xs uppercase tracking-wider flex-shrink-0"
            >
              Load MP4 URL
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

