import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  Sparkles,
  Sun,
  Flower2,
  Music,
  Flame,
  Crown,
  MessageCircle,
  CheckCircle2,
  Send,
  Users,
  Heart,
} from 'lucide-react';
import { WeddingData, CeremonyEvent } from '../data/weddingData';
import { GoldCornerOrnament, MandalaDivider } from './OrnamentalSVGs';
import { Mandap3DScene } from './Mandap3DScene';

interface WeddingDetailsSectionProps {
  data: WeddingData;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const WeddingDetailsSection: React.FC<WeddingDetailsSectionProps> = ({ data }) => {
  // Live Countdown Timer State
  const calculateTimeLeft = (): TimeLeft => {
    const target = new Date(data.weddingDate.isoDateTime).getTime();
    const now = Date.now();
    const diff = Math.max(0, target - now);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  // Interactive RSVP Form State for WhatsApp Integration
  const [guestName, setGuestName] = useState('');
  const [guestsCount, setGuestsCount] = useState('2');
  const [selectedEvents, setSelectedEvents] = useState<string[]>([
    'Haldi',
    'Mehendi',
    'Sangeet',
    'Muhurtham',
    'Reception',
  ]);
  const [blessingNote, setBlessingNote] = useState('');
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [data.weddingDate.isoDateTime]);

  const toggleEventSelection = (eventName: string) => {
    setSelectedEvents((prev) =>
      prev.includes(eventName)
        ? prev.filter((item) => item !== eventName)
        : [...prev, eventName]
    );
  };

  const buildWhatsAppUrl = (useCustomFields: boolean) => {
    let text = data.rsvp.defaultMessage;
    if (useCustomFields && guestName.trim()) {
      text = `Namaste! 🙏\n*Royal Wedding RSVP — ${data.groom.firstName} & ${data.bride.firstName}*\n\n• *Guest Name:* ${guestName.trim()}\n• *Number of Guests:* ${guestsCount}\n• *Ceremonies Attending:* ${selectedEvents.join(', ')}\n${
        blessingNote.trim() ? `• *Blessings / Note:* ${blessingNote.trim()}\n` : ''
      }\nWe look forward to celebrating on ${data.weddingDate.displayDate}!`;
    }
    return `https://wa.me/${data.rsvp.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleRsvpWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSubmitted(true);
    const url = buildWhatsAppUrl(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderCeremonyIcon = (iconType: CeremonyEvent['iconType']) => {
    switch (iconType) {
      case 'haldi':
        return <Sun className="w-6 h-6 text-amber-400" />;
      case 'mehendi':
        return <Flower2 className="w-6 h-6 text-emerald-400" />;
      case 'sangeet':
        return <Music className="w-6 h-6 text-purple-400" />;
      case 'muhurtham':
        return <Flame className="w-6 h-6 text-[#FCF6BA]" />;
      case 'reception':
        return <Crown className="w-6 h-6 text-rose-400" />;
    }
  };

  return (
    <section
      id="wedding-details"
      className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20"
    >
      {/* 1. BRIDE & GROOM ROYAL LINEAGE & PARENTS CARDS */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-[#D4AF62]">
            Sacred Union of Two Families
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-foil mt-2">
            The Bride &amp; The Groom
          </h2>
          <MandalaDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-[#4A0815]/90 via-[#2E040C]/95 to-[#1F0207]/95 border border-[#D4AF62]/50 gold-glow overflow-hidden"
          >
            <GoldCornerOrnament position="top-left" className="absolute top-2 left-2 opacity-75" />
            <GoldCornerOrnament position="top-right" className="absolute top-2 right-2 opacity-75" />

            <div className="relative z-10 text-center space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-sans uppercase tracking-widest bg-[#D4AF62]/20 border border-[#D4AF62]/40 text-[#FCF6BA]">
                Var • The Groom
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-gold-foil">
                {data.groom.fullName}
              </h3>
              <p className="text-sm sm:text-base font-serif italic text-[#FFF8EA]/85 max-w-md mx-auto">
                “{data.groom.bio}”
              </p>

              <div className="pt-4 mt-4 border-t border-[#D4AF62]/30">
                <p className="text-xs font-sans uppercase tracking-widest text-[#D4AF62]">
                  Beloved Son Of
                </p>
                <p className="font-serif text-lg sm:text-xl font-bold text-[#FFF8EA] mt-1">
                  {data.groom.parents.father} {data.groom.parents.mother}
                </p>
                <p className="text-xs font-serif text-[#F3E5AB]/75 mt-1">
                  {data.groom.parents.familyOrigin}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-[#4A0815]/90 via-[#2E040C]/95 to-[#1F0207]/95 border border-[#D4AF62]/50 gold-glow overflow-hidden"
          >
            <GoldCornerOrnament position="top-left" className="absolute top-2 left-2 opacity-75" />
            <GoldCornerOrnament position="top-right" className="absolute top-2 right-2 opacity-75" />

            <div className="relative z-10 text-center space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-sans uppercase tracking-widest bg-[#D4AF62]/20 border border-[#D4AF62]/40 text-[#FCF6BA]">
                Vadhu • The Bride
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-gold-foil">
                {data.bride.fullName}
              </h3>
              <p className="text-sm sm:text-base font-serif italic text-[#FFF8EA]/85 max-w-md mx-auto">
                “{data.bride.bio}”
              </p>

              <div className="pt-4 mt-4 border-t border-[#D4AF62]/30">
                <p className="text-xs font-sans uppercase tracking-widest text-[#D4AF62]">
                  Beloved Daughter Of
                </p>
                <p className="font-serif text-lg sm:text-xl font-bold text-[#FFF8EA] mt-1">
                  {data.bride.parents.father} {data.bride.parents.mother}
                </p>
                <p className="text-xs font-serif text-[#F3E5AB]/75 mt-1">
                  {data.bride.parents.familyOrigin}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. LIVE COUNTDOWN TIMER & SUBH MUHURTHAM HIGHLIGHT BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#3D0711] via-[#6B1020] to-[#3D0711] border-2 border-[#D4AF62] gold-glow-strong text-center overflow-hidden"
      >
        <GoldCornerOrnament position="top-left" className="absolute top-2 left-2" />
        <GoldCornerOrnament position="top-right" className="absolute top-2 right-2" />
        <GoldCornerOrnament position="bottom-left" className="absolute bottom-2 left-2" />
        <GoldCornerOrnament position="bottom-right" className="absolute bottom-2 right-2" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#240309]/70 border border-[#D4AF62]/50 text-xs font-sans uppercase tracking-[0.25em] text-[#FCF6BA]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF62]" />
            <span>Counting Down to the Sacred Subh Muhurtham</span>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-bold text-gold-foil mt-3">
            {data.weddingDate.displayDate}
          </h3>
          <p className="text-sm sm:text-base font-serif text-[#FFF8EA]/90 mt-1">
            Muhurtham Time: <strong className="text-[#FCF6BA]">{data.muhurtham.timeWindow}</strong> •{' '}
            {data.muhurtham.lagna} ({data.muhurtham.nakshatra})
          </p>

          {/* 4 Countdown Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 my-8 max-w-2xl mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                className="p-4 sm:p-5 rounded-2xl bg-[#240309]/85 border border-[#D4AF62]/60 shadow-inner flex flex-col items-center justify-center"
              >
                <span className="font-display text-3xl sm:text-5xl font-bold text-gold-foil tabular-nums">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="mt-1 text-xs font-sans uppercase tracking-[0.22em] text-[#D4AF62]">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm font-serif italic text-[#F3E5AB]/90">
            “{data.muhurtham.auspiciousNote}”
          </p>
        </div>
      </motion.div>

      {/* 3. WEDDING CEREMONIES & EVENTS CARDS (Haldi, Mehendi, Sangeet, Muhurtham, Reception) */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-sans uppercase tracking-[0.3em] text-[#D4AF62]">
            Three Days of Royal Festivities
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-gold-foil mt-2">
            Wedding Ceremonies &amp; Celebrations
          </h2>
          <p className="mt-2 text-sm sm:text-base font-serif text-[#FFF8EA]/80">
            From vibrant turmeric mornings and folk mehendi evenings to the sacred Vedic Muhurtham
          </p>
          <MandalaDivider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.ceremonies.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.55 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`relative rounded-3xl p-6 sm:p-7 bg-gradient-to-b ${event.badgeColor} bg-[#2E040C]/90 border border-[#D4AF62]/45 gold-glow flex flex-col justify-between overflow-hidden ${
                event.id === 'muhurtham' ? 'md:col-span-2 lg:col-span-2 border-2 border-[#FCF6BA]' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-serif tracking-wider text-[#FCF6BA] px-3 py-1 rounded-full bg-[#240309]/70 border border-[#D4AF62]/35">
                    {event.hindiTitle}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-[#240309]/80 border border-[#D4AF62]/50 flex items-center justify-center shadow-md">
                    {renderCeremonyIcon(event.iconType)}
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-gold-foil">
                  {event.name}
                </h3>
                <p className="mt-2 text-sm font-serif text-[#FFF8EA]/85 leading-relaxed">
                  {event.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#D4AF62]/30 space-y-2 text-xs sm:text-sm font-sans">
                <div className="flex items-center gap-2.5 text-[#FFF8EA]">
                  <Calendar className="w-4 h-4 text-[#D4AF62] flex-shrink-0" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#FCF6BA]">
                  <Clock className="w-4 h-4 text-[#D4AF62] flex-shrink-0" />
                  <span className="font-semibold">{event.time}</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#FFF8EA]/90">
                  <MapPin className="w-4 h-4 text-[#D4AF62] flex-shrink-0" />
                  <span>{event.venueArea}</span>
                </div>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded-lg bg-[#240309]/65 border border-[#D4AF62]/30 text-[11px] text-[#F3E5AB]">
                    <strong className="text-[#D4AF62]">Attire:</strong> {event.dressCode}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5. WEDDING VENUE & COMPLETE ADDRESS + GOOGLE MAPS NAVIGATION */}
      <div id="venue-section" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#3D0711]/95 via-[#240309]/95 to-[#4A0815]/95 border-2 border-[#D4AF62]/65 gold-glow overflow-hidden"
        >
          <GoldCornerOrnament position="top-left" className="absolute top-2 left-2" />
          <GoldCornerOrnament position="top-right" className="absolute top-2 right-2" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Complete Venue Address & Royal Hospitality Details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF62]/15 border border-[#D4AF62]/40 text-xs font-sans uppercase tracking-widest text-[#FCF6BA]">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF62]" />
                <span>Royal Wedding Destination &amp; Address</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-bold text-gold-foil">
                {data.venue.name}
              </h2>
              <p className="text-base sm:text-lg font-serif font-semibold text-[#FCF6BA]">
                {data.venue.hallName}
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#1A0206]/75 border border-[#D4AF62]/35 space-y-1.5 text-sm font-sans text-[#FFF8EA]/90">
                <p className="font-semibold text-[#FFF8EA]">{data.venue.addressLine1}</p>
                <p>{data.venue.addressLine2}</p>
                <p className="font-semibold text-[#FCF6BA]">{data.venue.cityStatePin}</p>
                <p className="text-xs text-[#D4AF62] pt-1">
                  Landmark: {data.venue.landmark}
                </p>
              </div>

              <p className="text-xs sm:text-sm font-serif italic text-[#F3E5AB]/85">
                {data.venue.hospitalityNote}
              </p>

              {/* Google Maps Navigation Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={data.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#D4AF62] text-[#240309] font-sans font-bold text-sm tracking-wide shadow-[0_8px_25px_rgba(212,175,98,0.45)] hover:shadow-[0_12px_35px_rgba(252,246,186,0.75)] transition-all"
                >
                  <Navigation className="w-4 h-4 fill-[#240309]" />
                  <span>Open in Google Maps Navigation</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Visual Map Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF62]/60 bg-[#1A0206] p-5 text-center space-y-4">
                {/* Architectural Compass & Map Illustration */}
                <div className="relative h-48 rounded-xl bg-gradient-to-b from-[#3D0711] to-[#1A0206] border border-[#D4AF62]/30 flex flex-col items-center justify-center overflow-hidden p-4">
                  {/* Decorative Map Grid Lines */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, #D4AF62 1px, transparent 1px), linear-gradient(to bottom, #D4AF62 1px, transparent 1px)',
                      backgroundSize: '28px 28px',
                    }}
                  />
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#D4AF62]/20 border-2 border-[#FCF6BA] flex items-center justify-center animate-bounce">
                    <MapPin className="w-7 h-7 text-[#FCF6BA]" />
                  </div>
                  <p className="relative z-10 font-display text-base font-bold text-[#FCF6BA] mt-2">
                    {data.venue.name}
                  </p>
                  <p className="relative z-10 text-xs font-sans text-[#FFF8EA]/75">
                    {data.venue.coordinates.lat}° N, {data.venue.coordinates.lng}° E • Bengaluru
                  </p>
                </div>

                <a
                  href={data.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2.5 rounded-xl bg-[#6B1020] hover:bg-[#8F192E] border border-[#D4AF62]/50 text-xs font-sans font-semibold uppercase tracking-widest text-[#FCF6BA] transition-colors"
                >
                  Get Turn-by-Turn Directions →
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

