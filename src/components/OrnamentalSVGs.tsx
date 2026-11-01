import React from 'react';

export const LordGaneshaArtwork: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 150,
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {/* Rotating Sacred Solar Mandala Halo */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full animate-spinSlow opacity-65"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ganeshaHaloGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.55" />
            <stop offset="65%" stopColor="#D4AF62" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#D4AF62" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="92" fill="url(#ganeshaHaloGrad)" />
        <circle cx="100" cy="100" r="84" fill="none" stroke="#D4AF62" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="74" fill="none" stroke="#F3E5AB" strokeWidth="0.8" />
        {/* 16 Ashtadala Lotus Petals around the Mandala */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = i * 22.5;
          return (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              <path
                d="M100 10 C105 22, 105 28, 100 34 C95 28, 95 22, 100 10 Z"
                fill="#D4AF62"
                fillOpacity="0.45"
              />
              <circle cx="100" cy="7" r="1.8" fill="#FFF8EA" />
            </g>
          );
        })}
      </svg>

      {/* Devotional Lord Ganesha Gold-Leaf Emblem */}
      <svg
        viewBox="0 0 200 200"
        className="relative z-10 w-full h-full drop-shadow-[0_0_15px_rgba(212,175,98,0.65)]"
        role="img"
        aria-label="Sacred Lord Ganesha Illustration"
      >
        <defs>
          <linearGradient id="goldLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCF6BA" />
            <stop offset="35%" stopColor="#D4AF62" />
            <stop offset="70%" stopColor="#FBF5B7" />
            <stop offset="100%" stopColor="#AA771C" />
          </linearGradient>
          <linearGradient id="lotusPinkGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F3E5AB" />
            <stop offset="50%" stopColor="#D4AF62" />
            <stop offset="100%" stopColor="#9E1B32" />
          </linearGradient>
        </defs>

        {/* Sacred Temple Arch Frame */}
        <path
          d="M36 165 L36 85 C36 45, 75 22, 100 14 C125 22, 164 45, 164 85 L164 165"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Sacred Lotus Throne Base (Padmasana) */}
        <g transform="translate(0, 4)">
          <path
            d="M45 154 C65 138, 82 142, 100 154 C118 142, 135 138, 155 154 C135 166, 65 166, 45 154 Z"
            fill="url(#lotusPinkGold)"
            stroke="url(#goldLeafGrad)"
            strokeWidth="1.5"
          />
          <path
            d="M62 150 C74 130, 90 132, 100 150 C110 132, 126 130, 138 150"
            fill="none"
            stroke="#FCF6BA"
            strokeWidth="1.6"
          />
          <path
            d="M84 148 C92 128, 108 128, 116 148"
            fill="url(#goldLeafGrad)"
            opacity="0.85"
          />
        </g>

        {/* Royal Mukut (Crown) */}
        <path
          d="M82 65 L88 38 L100 24 L112 38 L118 65 Z"
          fill="url(#goldLeafGrad)"
          stroke="#FFF8EA"
          strokeWidth="1.2"
        />
        <circle cx="100" cy="36" r="3.5" fill="#9E1B32" stroke="#FCF6BA" strokeWidth="1" />
        <circle cx="100" cy="50" r="4.5" fill="#9E1B32" stroke="#FCF6BA" strokeWidth="1.2" />
        <circle cx="100" cy="21" r="3" fill="#FCF6BA" />

        {/* Auspicious Ears */}
        <path
          d="M80 68 C54 60, 48 88, 66 102 C74 106, 80 100, 83 94"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M120 68 C146 60, 152 88, 134 102 C126 106, 120 100, 117 94"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Sacred Tilak on Forehead */}
        <path d="M93 72 Q100 75 107 72" fill="none" stroke="#FCF6BA" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M95 76 Q100 79 105 76" fill="none" stroke="#FCF6BA" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="100" cy="70" r="2.3" fill="#E66C1E" />

        {/* Graceful Head, Curved Trunk & Ekadanta Tusk */}
        <path
          d="M83 68 C82 88, 88 98, 94 108 C99 116, 102 128, 93 134 C86 138, 80 132, 84 126 C87 122, 92 125, 90 129"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M117 68 C118 88, 110 102, 103 114"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Sacred Tusk (Right) */}
        <path d="M107 98 L115 104 L106 104 Z" fill="#FFF8EA" />

        {/* Modak in Trunk Curve */}
        <circle cx="85" cy="127" r="4" fill="#FCF6BA" />

        {/* Blessing Right Hand (Abhaya Mudra) & Left Hand holding Lotus */}
        <path
          d="M116 108 C128 112, 136 104, 136 94"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Abhaya Mudra Palm with Sacred Swastika/Bindu */}
        <ellipse cx="136" cy="90" rx="4.5" ry="6.5" fill="url(#goldLeafGrad)" />
        <circle cx="136" cy="90" r="1.5" fill="#9E1B32" />

        {/* Left Hand & Modak Bowl */}
        <path
          d="M84 108 C72 112, 64 106, 62 96"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="61" cy="92" r="5" fill="url(#goldLeafGrad)" />

        {/* Seated Torso & Sacred Thread (Janeu) */}
        <path
          d="M76 116 C70 132, 76 146, 100 146 C124 146, 130 132, 124 116"
          fill="none"
          stroke="url(#goldLeafGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M82 108 Q102 126 118 138"
          fill="none"
          stroke="#FCF6BA"
          strokeWidth="1.2"
          strokeDasharray="3 2"
        />
      </svg>
    </div>
  );
};

export const AnimatedDiya: React.FC<{
  size?: number;
  isLit?: boolean;
  onClick?: () => void;
  label?: string;
}> = ({ size = 64, isLit = true, onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className={`group inline-flex flex-col items-center select-none ${
        onClick ? 'cursor-pointer' : ''
      }`}
      title={label || 'Sacred Auspicious Diya'}
    >
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        {/* Warm Radial Glow when Lit */}
        {isLit && (
          <div
            className="absolute -top-2 w-10 h-10 rounded-full bg-amber-400/40 blur-md animate-pulse pointer-events-none"
            style={{ width: size * 0.65, height: size * 0.65 }}
          />
        )}

        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="diyaFlameOuter" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#FFF8EA" />
              <stop offset="35%" stopColor="#FFD700" />
              <stop offset="75%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#EA580C" />
            </linearGradient>
            <linearGradient id="diyaBrassBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCF6BA" />
              <stop offset="40%" stopColor="#D4AF62" />
              <stop offset="75%" stopColor="#9C7A32" />
              <stop offset="100%" stopColor="#5C3A10" />
            </linearGradient>
          </defs>

          {/* Flickering Flame */}
          {isLit && (
            <g className="origin-[50px_52px] animate-flameFlicker">
              {/* Outer Golden Flame */}
              <path
                d="M50 10 C60 26, 63 39, 50 52 C37 39, 40 26, 50 10 Z"
                fill="url(#diyaFlameOuter)"
              />
              {/* Inner Bright Core */}
              <path
                d="M50 24 C55 34, 56 42, 50 50 C44 42, 45 34, 50 24 Z"
                fill="#FFFBEB"
              />
            </g>
          )}

          {/* Cotton Wick */}
          <path d="M50 49 L50 56" stroke="#FDE68A" strokeWidth="2.5" strokeLinecap="round" />

          {/* Ornate Terracotta & Brass Diya Bowl */}
          <path
            d="M14 55 Q50 64 86 55 C82 78, 66 86, 50 86 C34 86, 18 78, 14 55 Z"
            fill="url(#diyaBrassBody)"
            stroke="#FCF6BA"
            strokeWidth="1.5"
          />

          {/* Decorative Carvings on Diya */}
          <path
            d="M22 63 Q50 71 78 63"
            fill="none"
            stroke="#FFF8EA"
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
          <circle cx="50" cy="73" r="3" fill="#9E1B32" stroke="#FCF6BA" strokeWidth="1" />
          <circle cx="36" cy="71" r="2" fill="#FCF6BA" />
          <circle cx="64" cy="71" r="2" fill="#FCF6BA" />

          {/* Diya Pedestal Base */}
          <path
            d="M35 86 L65 86 L70 93 L30 93 Z"
            fill="url(#diyaBrassBody)"
            stroke="#FCF6BA"
            strokeWidth="1"
          />
        </svg>
      </div>
      {label && (
        <span className="mt-1 text-xs font-serif tracking-wider text-gold-light/90 group-hover:text-gold-bright transition-colors">
          {label}
        </span>
      )}
    </div>
  );
};

export const FloralToranGarland: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1200 110"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-24 drop-shadow-[0_6px_12px_rgba(0,0,0,0.6)]"
      >
        <defs>
          <linearGradient id="goldRod" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9C7A32" />
            <stop offset="50%" stopColor="#FCF6BA" />
            <stop offset="100%" stopColor="#9C7A32" />
          </linearGradient>
        </defs>

        {/* Top Golden Toran Rod */}
        <rect x="0" y="0" width="1200" height="6" fill="url(#goldRod)" />

        {/* Repeating Mango Leaves, Marigold Loops & Hanging Temple Bells */}
        {[0, 200, 400, 600, 800, 1000].map((offset) => (
          <g key={offset} transform={`translate(${offset}, 0)`}>
            {/* Auspicious Mango Leaves along top */}
            {[20, 60, 100, 140, 180].map((lx) => (
              <path
                key={lx}
                d={`M${lx} 6 C${lx - 7} 22, ${lx - 4} 34, ${lx} 42 C${lx + 4} 34, ${lx + 7} 22, ${lx} 6 Z`}
                fill="#15803D"
                stroke="#D4AF62"
                strokeWidth="0.8"
              />
            ))}

            {/* Swooping Jasmine & Marigold Garland Swag */}
            <path
              d="M0 12 Q100 88 200 12"
              fill="none"
              stroke="#FFF8EA"
              strokeWidth="6"
              strokeDasharray="2 8"
              strokeLinecap="round"
            />
            <path
              d="M0 18 Q100 96 200 18"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="9"
              strokeDasharray="1 14"
              strokeLinecap="round"
            />
            <path
              d="M0 15 Q100 92 200 15"
              fill="none"
              stroke="#DC2626"
              strokeWidth="7"
              strokeDasharray="1 22"
              strokeLinecap="round"
            />

            {/* Hanging Golden Temple Bell & Jasmine Tassel at Each Arch */}
            <line x1="100" y1="52" x2="100" y2="85" stroke="#D4AF62" strokeWidth="1.8" />
            <circle cx="100" cy="65" r="5" fill="#F59E0B" />
            <circle cx="100" cy="75" r="4" fill="#DC2626" />
            <path
              d="M92 94 L108 94 L104 82 L96 82 Z"
              fill="#D4AF62"
              stroke="#FCF6BA"
              strokeWidth="1"
            />
            <circle cx="100" cy="97" r="2.5" fill="#FFF8EA" />
          </g>
        ))}
      </svg>
    </div>
  );
};

export const GoldCornerOrnament: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = '' }) => {
  const rotationMap = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-12 h-12 sm:w-16 sm:h-16 pointer-events-none select-none ${rotationMap[position]} ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cornerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCF6BA" />
          <stop offset="50%" stopColor="#D4AF62" />
          <stop offset="100%" stopColor="#9C7A32" />
        </linearGradient>
      </defs>
      <path
        d="M4 92 L4 14 C4 8, 8 4, 14 4 L92 4"
        fill="none"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 76 L12 20 C12 15, 15 12, 20 12 L76 12"
        fill="none"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="1.4"
        strokeDasharray="3 3"
      />
      {/* Corner Paisley / Mango Filigree */}
      <path
        d="M16 16 C34 16, 44 26, 36 38 C28 46, 16 36, 16 16 Z"
        fill="url(#cornerGoldGrad)"
        fillOpacity="0.35"
        stroke="url(#cornerGoldGrad)"
        strokeWidth="1.5"
      />
      <circle cx="25" cy="25" r="3" fill="#FCF6BA" />
      <circle cx="46" cy="20" r="2" fill="#D4AF62" />
      <circle cx="20" cy="46" r="2" fill="#D4AF62" />
    </svg>
  );
};

export const MandalaDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center w-full my-6 select-none ${className}`}>
      <div className="h-[1px] flex-1 max-w-[180px] bg-gradient-to-r from-transparent via-[#D4AF62] to-[#FCF6BA]" />
      <svg viewBox="0 0 120 40" className="w-28 h-9 mx-3 flex-shrink-0">
        <defs>
          <linearGradient id="divGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF62" />
            <stop offset="50%" stopColor="#FCF6BA" />
            <stop offset="100%" stopColor="#D4AF62" />
          </linearGradient>
        </defs>
        {/* Center Lotus */}
        <path
          d="M60 4 C66 14, 66 26, 60 36 C54 26, 54 14, 60 4 Z"
          fill="url(#divGold)"
        />
        <path
          d="M60 8 C72 12, 76 24, 60 32 C44 24, 48 12, 60 8 Z"
          fill="none"
          stroke="url(#divGold)"
          strokeWidth="1.5"
        />
        <path
          d="M60 12 C82 14, 86 24, 60 28 C34 24, 38 14, 60 12 Z"
          fill="none"
          stroke="url(#divGold)"
          strokeWidth="1.2"
        />
        <circle cx="25" cy="20" r="3" fill="#D4AF62" />
        <circle cx="95" cy="20" r="3" fill="#D4AF62" />
        <circle cx="12" cy="20" r="1.8" fill="#FCF6BA" />
        <circle cx="108" cy="20" r="1.8" fill="#FCF6BA" />
      </svg>
      <div className="h-[1px] flex-1 max-w-[180px] bg-gradient-to-l from-transparent via-[#D4AF62] to-[#FCF6BA]" />
    </div>
  );
};

export const PalaceSilhouetteParallax: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="w-full h-28 sm:h-44 opacity-25"
      >
        <defs>
          <linearGradient id="palaceSilGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#D4AF62" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#240309" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Left Temple Gopuram & Chhatri Domes */}
        <path
          d="M0 220 L0 140 L40 140 L55 80 L75 45 L95 80 L110 140 L160 140 C160 100, 200 75, 220 55 C240 75, 280 100, 280 140 L340 140 L340 110 C340 85, 370 65, 385 45 C400 65, 430 85, 430 110 L430 140 L520 140 C520 75, 640 30, 720 10 C800 30, 920 75, 920 140 L1010 140 L1010 110 C1010 85, 1040 65, 1055 45 C1070 65, 1100 85, 1100 110 L1100 140 L1160 140 C1160 100, 1200 75, 1220 55 C1240 75, 1280 100, 1280 140 L1330 140 L1345 80 L1365 45 L1385 80 L1400 140 L1440 140 L1440 220 Z"
          fill="url(#palaceSilGrad)"
        />
        {/* Intricate Jharokha Arch Cutouts */}
        {[120, 260, 460, 620, 720, 820, 980, 1180, 1320].map((x, idx) => (
          <path
            key={idx}
            d={`M${x - 18} 220 L${x - 18} 168 C${x - 18} 150, ${x} 142, ${x} 135 C${x} 142, ${x + 18} 150, ${x + 18} 168 L${x + 18} 220 Z`}
            fill="#240309"
            opacity="0.7"
          />
        ))}
      </svg>
    </div>
  );
};

