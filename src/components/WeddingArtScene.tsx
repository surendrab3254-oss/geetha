import React from 'react';

interface WeddingArtSceneProps {
  scene: 'portrait' | 'prewedding' | 'haldi' | 'mehendi' | 'traditional';
  className?: string;
}

export const WeddingArtScene: React.FC<WeddingArtSceneProps> = ({ scene, className = '' }) => {
  if (scene === 'portrait') {
    return (
      <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`}>
        <defs>
          <radialGradient id="portBg" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#8F192E" />
            <stop offset="55%" stopColor="#4A0815" />
            <stop offset="100%" stopColor="#1E0207" />
          </radialGradient>
          <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCF6BA" />
            <stop offset="50%" stopColor="#D4AF62" />
            <stop offset="100%" stopColor="#9C7A32" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#portBg)" />
        {/* Ornate Palace Jharokha Arch */}
        <circle cx="400" cy="250" r="190" fill="none" stroke="url(#goldGrad1)" strokeWidth="2" strokeDasharray="6 6" opacity="0.5" />
        <path
          d="M160 580 L160 240 C160 120, 320 65, 400 35 C480 65, 640 120, 640 240 L640 580"
          fill="none"
          stroke="url(#goldGrad1)"
          strokeWidth="6"
        />
        <path
          d="M185 580 L185 250 C185 140, 330 90, 400 60 C470 90, 615 140, 615 250 L615 580"
          fill="none"
          stroke="url(#goldGrad1)"
          strokeWidth="2"
          strokeDasharray="8 4"
        />
        {/* Groom in Royal Sherwani & Safa (Left) */}
        <g transform="translate(275, 195)">
          {/* Royal Turban (Safa) with Kalgi */}
          <path d="M25 60 C15 25, 85 15, 95 55 C85 70, 35 70, 25 60 Z" fill="#D4AF62" stroke="#FCF6BA" strokeWidth="2" />
          <path d="M65 28 Q85 5 95 18" fill="none" stroke="#FCF6BA" strokeWidth="3" />
          <circle cx="62" cy="32" r="5" fill="#9E1B32" stroke="#FCF6BA" strokeWidth="1.5" />
          {/* Head & Face */}
          <circle cx="60" cy="80" r="28" fill="#E6B89C" stroke="#D4AF62" strokeWidth="1.5" />
          {/* Royal Ivory & Gold Sherwani */}
          <path d="M10 125 C20 110, 100 110, 110 125 L125 340 L-5 340 Z" fill="#FFF8EA" stroke="url(#goldGrad1)" strokeWidth="3" />
          {/* Crimson Stole (Dupatta) & Pearl Mala */}
          <path d="M20 120 Q60 190 100 120" fill="none" stroke="#9E1B32" strokeWidth="10" />
          <path d="M30 122 Q60 175 90 122" fill="none" stroke="#D4AF62" strokeWidth="3" strokeDasharray="4 4" />
        </g>
        {/* Bride in Crimson Kanjeevaram / Lehenga (Right) */}
        <g transform="translate(415, 215)">
          {/* Bridal Veil & Matha Patti */}
          <path d="M15 65 C15 15, 95 15, 95 65 L115 210 L-5 210 Z" fill="#8F192E" stroke="url(#goldGrad1)" strokeWidth="2.5" />
          <circle cx="55" cy="70" r="26" fill="#E6B89C" stroke="#D4AF62" strokeWidth="1.5" />
          <circle cx="55" cy="52" r="4" fill="#FCF6BA" />
          {/* Bridal Nath (Nose Ring) */}
          <circle cx="64" cy="76" r="5" fill="none" stroke="#FCF6BA" strokeWidth="1.5" />
          {/* Royal Crimson & Gold Lehenga */}
          <path d="M15 115 C30 105, 80 105, 95 115 L130 320 L-20 320 Z" fill="#9E1B32" stroke="url(#goldGrad1)" strokeWidth="3" />
          {/* Gold Zari Embroidery */}
          <path d="M-12 290 L122 290" stroke="url(#goldGrad1)" strokeWidth="8" strokeDasharray="8 4" />
          <path d="M30 115 Q55 160 80 115" fill="none" stroke="#FCF6BA" strokeWidth="5" />
        </g>
        {/* Varmala Garland uniting them */}
        <path d="M335 320 Q400 375 470 330" fill="none" stroke="#F59E0B" strokeWidth="8" strokeDasharray="6 6" />
        <path d="M335 320 Q400 375 470 330" fill="none" stroke="#FFF8EA" strokeWidth="4" strokeDasharray="3 9" />
      </svg>
    );
  }

  if (scene === 'prewedding') {
    return (
      <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`}>
        <defs>
          <linearGradient id="sunsetLake" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B0A2A" />
            <stop offset="45%" stopColor="#9E1B32" />
            <stop offset="75%" stopColor="#E66C1E" />
            <stop offset="100%" stopColor="#240309" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#sunsetLake)" />
        {/* Glowing Setting Sun over Lake Pichola */}
        <circle cx="400" cy="250" r="95" fill="#FFD700" opacity="0.35" />
        <circle cx="400" cy="250" r="65" fill="#FFF8EA" opacity="0.65" />
        {/* Udaipur Lake Palace Silhouette */}
        <path
          d="M80 380 L80 310 L130 310 L150 265 L170 310 L260 310 C260 275, 300 255, 320 240 C340 255, 380 275, 380 310 L420 310 C420 275, 460 255, 480 240 C500 255, 540 275, 540 310 L630 310 L650 265 L670 310 L720 310 L720 380 Z"
          fill="#240309"
          stroke="#D4AF62"
          strokeWidth="1.5"
        />
        {/* Royal Shikara Boat with Couple */}
        <path d="M240 465 Q400 515 560 465 L520 495 Q400 525 280 495 Z" fill="#4A0815" stroke="#D4AF62" strokeWidth="2.5" />
        <circle cx="380" cy="425" r="16" fill="#D4AF62" />
        <circle cx="420" cy="430" r="15" fill="#FCF6BA" />
        <path d="M360 465 Q380 435 400 465" fill="#FFF8EA" />
        <path d="M400 465 Q425 435 450 465" fill="#9E1B32" />
        {/* Water Ripples */}
        {[415, 445, 520, 550, 575].map((y, i) => (
          <line
            key={i}
            x1={150 + i * 25}
            y1={y}
            x2={650 - i * 25}
            y2={y}
            stroke="#FCF6BA"
            strokeWidth="1.5"
            strokeDasharray="14 10"
            opacity="0.5"
          />
        ))}
      </svg>
    );
  }

  if (scene === 'haldi') {
    return (
      <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`}>
        <defs>
          <radialGradient id="haldiGlow" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="55%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#451A03" />
          </radialGradient>
        </defs>
        <rect width="800" height="600" fill="url(#haldiGlow)" />
        {/* Hanging Marigold Curtains (Genda Phool Strings) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <line
            key={i}
            x1={50 + i * 50}
            y1="0"
            x2={50 + i * 50}
            y2={260 + (i % 3) * 45}
            stroke={i % 2 === 0 ? '#FEF08A' : '#EA580C'}
            strokeWidth="10"
            strokeDasharray="4 14"
            strokeLinecap="round"
          />
        ))}
        {/* Golden Brass Urli Filled with Turmeric & Petals */}
        <path
          d="M220 430 Q400 480 580 430 C550 530, 470 555, 400 555 C330 555, 250 530, 220 430 Z"
          fill="#D4AF62"
          stroke="#FFF8EA"
          strokeWidth="3"
        />
        {/* Haldi Bowl in Center */}
        <ellipse cx="400" cy="430" rx="175" ry="30" fill="#FBBF24" stroke="#FEF08A" strokeWidth="2" />
        {/* Showering Petals */}
        {Array.from({ length: 28 }).map((_, i) => (
          <circle
            key={i}
            cx={160 + ((i * 89) % 480)}
            cy={120 + ((i * 53) % 300)}
            r={6 + (i % 5) * 2}
            fill={i % 2 === 0 ? '#FEF08A' : '#F97316'}
            opacity="0.85"
          />
        ))}
      </svg>
    );
  }

  if (scene === 'mehendi') {
    return (
      <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`}>
        <defs>
          <radialGradient id="mehendiBg" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#065F46" />
            <stop offset="60%" stopColor="#064E3B" />
            <stop offset="100%" stopColor="#022C22" />
          </radialGradient>
        </defs>
        <rect width="800" height="600" fill="url(#mehendiBg)" />
        {/* Intricate Henna Mandala */}
        <circle cx="400" cy="300" r="210" fill="none" stroke="#D4AF62" strokeWidth="3" />
        <circle cx="400" cy="300" r="175" fill="none" stroke="#FCF6BA" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="400" cy="300" r="135" fill="none" stroke="#D4AF62" strokeWidth="2.5" />
        <circle cx="400" cy="300" r="90" fill="none" stroke="#F59E0B" strokeWidth="2" />
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 400 300)`}>
            <path
              d="M400 90 C425 135, 425 175, 400 210 C375 175, 375 135, 400 90 Z"
              fill="none"
              stroke="#FCF6BA"
              strokeWidth="2"
            />
            <circle cx="400" cy="145" r="6" fill="#D4AF62" />
          </g>
        ))}
        {/* Center Couple Monogram inside Henna Lotus */}
        <text
          x="400"
          y="315"
          textAnchor="middle"
          fill="#FCF6BA"
          fontSize="44"
          fontFamily="Cinzel Decorative, Georgia, serif"
        >
          A &amp; A
        </text>
      </svg>
    );
  }

  // 'traditional' (Sacred Mandapam & Agni Pheras)
  return (
    <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`}>
      <defs>
        <radialGradient id="mandapBg" cx="50%" cy="55%" r="70%">
          <stop offset="0%" stopColor="#9E1B32" />
          <stop offset="55%" stopColor="#4A0815" />
          <stop offset="100%" stopColor="#1A0206" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#mandapBg)" />
      {/* Four Carved Golden Mandap Pillars */}
      <rect x="130" y="130" width="26" height="400" fill="#D4AF62" rx="4" />
      <rect x="210" y="150" width="18" height="360" fill="#9C7A32" rx="3" />
      <rect x="572" y="150" width="18" height="360" fill="#9C7A32" rx="3" />
      <rect x="644" y="130" width="26" height="400" fill="#D4AF62" rx="4" />
      {/* Temple Gopuram Dome Roof */}
      <path
        d="M95 135 L705 135 L620 75 L400 25 L180 75 Z"
        fill="#6B1020"
        stroke="#FCF6BA"
        strokeWidth="3"
      />
      <circle cx="400" cy="18" r="8" fill="#FFD700" />
      {/* Sacred Havan Kund & Agni Flame in Center */}
      <path d="M320 470 L480 470 L510 530 L290 530 Z" fill="#9C7A32" stroke="#FCF6BA" strokeWidth="2.5" />
      <path
        d="M400 310 C445 365, 455 425, 400 470 C345 425, 355 365, 400 310 Z"
        fill="#F59E0B"
      />
      <path
        d="M400 355 C425 395, 430 435, 400 468 C370 435, 375 395, 400 355 Z"
        fill="#FFF8EA"
      />
    </svg>
  );
};

