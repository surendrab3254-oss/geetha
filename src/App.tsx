import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { defaultWeddingData, WeddingData, WeddingThemeId } from './data/weddingData';
import { WeddingEnvelope3D } from './components/WeddingEnvelope3D';
import { MainInvitationHero } from './components/MainInvitationHero';
import { WeddingDetailsSection } from './components/WeddingDetailsSection';
import { FooterSection } from './components/FooterSection';
import { AudioController } from './components/AudioController';

export function App() {
  const [weddingData, setWeddingData] = useState<WeddingData>(defaultWeddingData);
  const [activeTheme, setActiveTheme] = useState<WeddingThemeId>('rajasthani');
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState<boolean>(false);

  const currentTheme = weddingData.themes[activeTheme];

  const handleEnvelopeOpenComplete = () => {
    setIsEnvelopeOpened(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayEnvelope = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsEnvelopeOpened(false);
  };

  return (
    <div
      className="relative min-h-screen w-full text-[#FFF8EA] transition-colors duration-700 overflow-x-hidden"
      style={{
        backgroundColor: currentTheme.primaryBg,
      }}
    >
      {/* Persistent Classical Instrumental Music Controls (Play/Pause & Mute/Unmute) */}
      <AudioController />

      {/* Sequence Controller: Screen 1 (3D Envelope) -> Screen 2 (Full Traditional Invitation) */}
      <AnimatePresence mode="wait">
        {!isEnvelopeOpened ? (
          <WeddingEnvelope3D
            key="envelope-landing"
            data={weddingData}
            activeTheme={activeTheme}
            onSelectTheme={setActiveTheme}
            onOpenComplete={handleEnvelopeOpenComplete}
          />
        ) : (
          <motion.main
            key="main-wedding-invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85 }}
            className="relative z-10"
          >
            {/* Section 2: Main Wedding Invitation — Traditional Indian Theme & Lord Ganesha */}
            <MainInvitationHero
              data={weddingData}
              activeTheme={activeTheme}
              onSelectTheme={setActiveTheme}
              onReplayEnvelope={handleReplayEnvelope}
            />

            {/* Section 3: Wedding Details, Countdown, Ceremonies & Venue */}
            <WeddingDetailsSection data={weddingData} />

            {/* Footer & Live Customization Modal */}
            <FooterSection
              data={weddingData}
              onUpdateData={setWeddingData}
              onReplayEnvelope={handleReplayEnvelope}
            />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

