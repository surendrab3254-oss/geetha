import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MapPin, Flame, RotateCcw } from 'lucide-react';
import { WeddingData, WeddingThemeId } from '../data/weddingData';
import {
  LordGaneshaArtwork,
  AnimatedDiya,
  FloralToranGarland,
  GoldCornerOrnament,
  MandalaDivider,
  PalaceSilhouetteParallax,
} from './OrnamentalSVGs';
import { soundEngine } from '../utils/soundEngine';

interface MainInvitationHeroProps {
  data: WeddingData;
  activeTheme: WeddingThemeId;
  onSelectTheme: (theme: WeddingThemeId) => void;
  onReplayEnvelope: () => void;
}

export const MainInvitationHero: React.FC<MainInvitationHeroProps> = ({
  data,
  activeTheme,
  onSelectTheme,
  onReplayEnvelope,
}) => {
  const theme = data.themes[activeTheme];
  const [litDiyas, setLitDiyas] = useState<boolean[]>([true, true, true, true, true]);
  const [blessingsCount, setBlessingsCount] = useState<number>(108);

  const handleOfferDiyaBlessing = (index: number) => {
    soundEngine.playTempleBellChime();
    setLitDiyas((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
    setBlessingsCount((prev) => prev + 1);
  };

  return (
    <section
      id="invitation-top"
      className="relative min-h-screen w-full pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Top Hanging Floral Toran Garland */}
      <div className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
        <FloralToranGarland />
      </div>

      {/* THE ROYAL TRADITIONAL INDIAN WEDDING INVITATION PARCHMENT / SCROLL */}
      <motion.div
        initial={{ opacity: 0, y: 45, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 max-w-4xl mx-auto rounded-3xl p-1 sm:p-2 bg-gradient-to-b from-[#FCF6BA] via-[#D4AF62] to-[#9C7A32] shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_60px_rgba(212,175,98,0.3)]"
      >
        <div
          className="relative rounded-[22px] px-5 py-10 sm:px-14 sm:py-16 text-center overflow-hidden bg-brocade-pattern"
          style={{
            backgroundColor: theme.primaryBg,
            backgroundImage: `radial-gradient(circle at 50% 20%, ${theme.secondaryBg} 0%, ${theme.primaryBg} 78%)`,
          }}
        >
          {/* Inner Double Gold Filigree Frame */}
          <div className="absolute inset-3 sm:inset-5 border border-[#D4AF62]/45 rounded-2xl pointer-events-none" />
          <div className="absolute inset-4 sm:inset-6 border border-[#FCF6BA]/20 rounded-xl pointer-events-none" />

          {/* Four Ornate Gold Corners */}
          <GoldCornerOrnament position="top-left" className="absolute top-3 left-3 sm:top-5 sm:left-5" />
          <GoldCornerOrnament position="top-right" className="absolute top-3 right-3 sm:top-5 sm:right-5" />
          <GoldCornerOrnament position="bottom-left" className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5" />
          <GoldCornerOrnament position="bottom-right" className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5" />

          {/* 1. DEVOTIONAL LORD GANESHA PRESENTATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#D4AF62]/15 border border-[#D4AF62]/40 text-xs sm:text-sm font-serif tracking-[0.25em] text-[#FCF6BA] mb-3">
              <span>{theme.invocation}</span>
            </div>

            <LordGaneshaArtwork size={165} />

            <p className="mt-2 text-xs sm:text-sm font-serif italic text-[#F3E5AB]/90 max-w-md">
              “Vakratunda Mahakaya Suryakoti Samaprabha, Nirvighnam Kuru Me Deva Sarva-Kaaryeshu Sarvada”
            </p>
            <span className="mt-1 text-[11px] font-sans uppercase tracking-[0.2em] text-[#D4AF62]">
              {theme.invocationMeaning}
            </span>
          </motion.div>

          <MandalaDivider />

          {/* 2. PARENTS' BLESSINGS & ROYAL INVITATION PROCLAMATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="relative z-10 max-w-2xl mx-auto space-y-4"
          >
            <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] text-[#D4AF62]">
              With the Divine Blessings of Lord Ganesha &amp; Our Revered Ancestors
            </p>

            {/* Parents' Names Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 pb-3 px-4 rounded-2xl bg-[#240309]/55 border border-[#D4AF62]/30">
              <div className="text-center sm:border-r border-[#D4AF62]/25 sm:pr-3">
                <p className="text-[11px] uppercase tracking-widest text-[#D4AF62] font-sans">
                  Groom’s Parents
                </p>
                <p className="font-serif text-base sm:text-lg font-semibold text-[#FFF8EA] mt-0.5">
                  {data.groom.parents.father}
                </p>
                <p className="font-serif text-base sm:text-lg font-semibold text-[#FFF8EA]">
                  {data.groom.parents.mother}
                </p>
              </div>
              <div className="text-center sm:pl-3">
                <p className="text-[11px] uppercase tracking-widest text-[#D4AF62] font-sans">
                  Bride’s Parents
                </p>
                <p className="font-serif text-base sm:text-lg font-semibold text-[#FFF8EA] mt-0.5">
                  {data.bride.parents.father}
                </p>
                <p className="font-serif text-base sm:text-lg font-semibold text-[#FFF8EA]">
                  {data.bride.parents.mother}
                </p>
              </div>
            </div>

            <p className="text-base sm:text-xl font-serif italic text-[#FFF8EA]/90 pt-2">
              Cordially request the honour of your auspicious presence and blessings on the joyous
              occasion of the sacred wedding ceremony of their beloved children
            </p>
          </motion.div>

          {/* 3. BRIDE & GROOM ROYAL NAMES IN GOLD FOIL TYPOGRAPHY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 my-8 py-6 px-4 rounded-3xl bg-gradient-to-r from-transparent via-[#D4AF62]/10 to-transparent border-y border-[#D4AF62]/40"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
              <div className="text-center">
                <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#D4AF62]">
                  The Groom
                </span>
                <h1 className="font-display text-4xl sm:text-6xl font-bold text-gold-foil tracking-wide mt-1">
                  {data.groom.firstName}
                </h1>
                <p className="text-xs sm:text-sm font-serif text-[#FFF8EA]/80 mt-1">
                  {data.groom.fullName}
                </p>
              </div>

              <div className="my-2 md:my-0 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-[#D4AF62] bg-[#6B1020]/80 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,98,0.4)]">
                  <span className="font-script text-2xl sm:text-3xl text-[#FCF6BA]">weds</span>
                </div>
              </div>

              <div className="text-center">
                <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#D4AF62]">
                  The Bride
                </span>
                <h1 className="font-display text-4xl sm:text-6xl font-bold text-gold-foil tracking-wide mt-1">
                  {data.bride.firstName}
                </h1>
                <p className="text-xs sm:text-sm font-serif text-[#FFF8EA]/80 mt-1">
                  {data.bride.fullName}
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. KEY AUSPICIOUS DATE, MUHURTHAM & VENUE SUMMARY BADGES */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto my-6">
            <div className="p-4 rounded-2xl bg-[#240309]/70 border border-[#D4AF62]/40 flex flex-col items-center">
              <Calendar className="w-5 h-5 text-[#D4AF62] mb-1.5" />
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#D4AF62]">
                Shubh Vivah Date
              </span>
              <p className="font-serif text-base sm:text-lg font-bold text-[#FFF8EA] mt-0.5">
                {data.weddingDate.displayDate}
              </p>
              <span className="text-xs text-[#FFF8EA]/70 mt-0.5">
                {data.weddingDate.hinduCalendarDate}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#240309]/70 border border-[#D4AF62]/40 flex flex-col items-center">
              <Sparkles className="w-5 h-5 text-[#FCF6BA] mb-1.5" />
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#D4AF62]">
                Abhijit Muhurtham
              </span>
              <p className="font-serif text-base sm:text-lg font-bold text-[#FCF6BA] mt-0.5">
                {data.muhurtham.timeWindow}
              </p>
              <span className="text-xs text-[#FFF8EA]/70 mt-0.5">{data.muhurtham.lagna}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#240309]/70 border border-[#D4AF62]/40 flex flex-col items-center">
              <MapPin className="w-5 h-5 text-[#D4AF62] mb-1.5" />
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#D4AF62]">
                Royal Venue
              </span>
              <p className="font-serif text-base sm:text-lg font-bold text-[#FFF8EA] mt-0.5">
                {data.venue.name}
              </p>
              <span className="text-xs text-[#FFF8EA]/70 mt-0.5">{data.venue.cityStatePin}</span>
            </div>
          </div>

          <MandalaDivider />

          {/* 5. INTERACTIVE CEREMONIAL DIYAS — OFFER A BLESSING */}
          <div className="relative z-10 mt-6 pt-4 px-4 pb-2 rounded-2xl bg-[#240309]/50 border border-[#D4AF62]/25 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs font-sans uppercase tracking-widest text-[#FCF6BA]">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Tap Any Sacred Diya to Offer Your Ashirwad (Blessings)</span>
            </div>

            <div className="flex items-center justify-center gap-4 sm:gap-8 my-3">
              {litDiyas.map((isLit, idx) => (
                <AnimatedDiya
                  key={idx}
                  size={52}
                  isLit={isLit}
                  onClick={() => handleOfferDiyaBlessing(idx)}
                />
              ))}
            </div>

            <p className="text-xs font-serif text-[#D4AF62]">
              ✨ <strong className="text-[#FFF8EA]">{blessingsCount}</strong> Auspicious Diya
              Blessings Offered for {data.groom.firstName} &amp; {data.bride.firstName}
            </p>
          </div>

          {/* Subtle Temple & Palace Silhouette at Bottom of Card */}
          <div className="mt-8 -mx-5 sm:-mx-14 -mb-10 sm:-mb-16">
            <PalaceSilhouetteParallax />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

