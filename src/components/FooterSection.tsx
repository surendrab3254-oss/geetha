import React, { useState } from 'react';
import { RotateCcw, ArrowUp, Settings, X, Heart } from 'lucide-react';
import { WeddingData } from '../data/weddingData';
import { AnimatedDiya, MandalaDivider, PalaceSilhouetteParallax } from './OrnamentalSVGs';

interface FooterSectionProps {
  data: WeddingData;
  onUpdateData: (updated: WeddingData) => void;
  onReplayEnvelope: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  data,
  onUpdateData,
  onReplayEnvelope,
}) => {
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [groomFirst, setGroomFirst] = useState(data.groom.firstName);
  const [brideFirst, setBrideFirst] = useState(data.bride.firstName);
  const [displayDate, setDisplayDate] = useState(data.weddingDate.displayDate);
  const [muhurthamTime, setMuhurthamTime] = useState(data.muhurtham.timeWindow);
  const [venueName, setVenueName] = useState(data.venue.name);
  const [whatsappNum, setWhatsappNum] = useState(data.rsvp.whatsappNumber);

  const handleSaveCustomDetails = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateData({
      ...data,
      groom: {
        ...data.groom,
        firstName: groomFirst.trim() || data.groom.firstName,
        fullName: `Chi. ${groomFirst.trim() || data.groom.firstName} Suryavanshi`,
      },
      bride: {
        ...data.bride,
        firstName: brideFirst.trim() || data.bride.firstName,
        fullName: `Chi. Sow. ${brideFirst.trim() || data.bride.firstName} Sharma`,
      },
      weddingDate: {
        ...data.weddingDate,
        displayDate: displayDate.trim() || data.weddingDate.displayDate,
      },
      muhurtham: {
        ...data.muhurtham,
        timeWindow: muhurthamTime.trim() || data.muhurtham.timeWindow,
      },
      venue: {
        ...data.venue,
        name: venueName.trim() || data.venue.name,
      },
      rsvp: {
        ...data.rsvp,
        whatsappNumber: whatsappNum.trim() || data.rsvp.whatsappNumber,
      },
    });
    setShowCustomizeModal(false);
  };

  return (
    <footer className="relative z-20 mt-16 border-t-2 border-[#D4AF62]/50 bg-gradient-to-b from-[#240309] via-[#1A0206] to-[#0E0103] text-center overflow-hidden">
      <PalaceSilhouetteParallax className="opacity-45" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 pt-4 space-y-6">
        <div className="flex items-center justify-center gap-6">
          <AnimatedDiya size={48} isLit={true} />
          <div className="w-20 h-20 rounded-full border-2 border-[#D4AF62] bg-gradient-to-br from-[#6B1020] to-[#240309] flex flex-col items-center justify-center shadow-[0_0_30px_rgba(212,175,98,0.4)]">
            <span className="text-[10px] font-serif text-[#FCF6BA]"> శుభ వివాహం </span>
            <span className="font-display text-lg font-bold text-gold-foil">
              {data.groom.firstName[0]} &amp; {data.bride.firstName[0]}
            </span>
          </div>
          <AnimatedDiya size={48} isLit={true} />
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-foil">
          {data.groom.firstName} &amp; {data.bride.firstName}
        </h2>

        <p className="text-sm sm:text-base font-serif italic text-[#FFF8EA]/85 max-w-xl mx-auto">
          “Two souls with a single thought, two hearts that beat as one — blessed by the divine grace
          of Lord Ganesha and our beloved families.”
        </p>

        <MandalaDivider />

        <div className="space-y-1 text-xs sm:text-sm font-serif text-[#F3E5AB]/90">
          <p className="uppercase tracking-[0.25em] text-[#D4AF62] font-sans text-xs">
            With Best Compliments &amp; Warm Regards From
          </p>
          <p className="font-semibold text-base text-[#FFF8EA]">
            The Suryavanshi &amp; Sharma Families
          </p>
          <p className="text-xs text-[#FFF8EA]/70">
            {data.weddingDate.displayDate} • {data.venue.name}
          </p>
        </div>

        <div className="pt-6 flex justify-center">
          <p className="inline-flex flex-wrap items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#3D0711] via-[#590B1A] to-[#3D0711] border border-[#D4AF62]/70 shadow-[0_0_25px_rgba(212,175,98,0.3)] text-sm sm:text-base font-sans text-[#FFF8EA] tracking-wide">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline animate-pulse" />
            <span>
              for <strong className="text-[#FCF6BA] font-semibold">{data.groom.firstName}</strong> and{' '}
              <strong className="text-[#FCF6BA] font-semibold">{data.bride.firstName}</strong> from{' '}
              <a
                href="https://www.dyuforge.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gold-foil underline decoration-[#D4AF62] underline-offset-4 hover:opacity-90 transition-opacity"
              >
                DYUFORGE Technologies
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

