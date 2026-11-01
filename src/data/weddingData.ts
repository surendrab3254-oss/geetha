export type WeddingThemeId = 'rajasthani' | 'south-indian' | 'vedic-hindu';

export interface ThemeConfig {
  id: WeddingThemeId;
  name: string;
  subtitle: string;
  invocation: string;
  invocationMeaning: string;
  primaryBg: string;
  secondaryBg: string;
  cardBg: string;
  accentColor: string;
  secondaryAccent: string;
  borderGlow: string;
  architectureLabel: string;
  floralNote: string;
}

export interface CeremonyEvent {
  id: string;
  name: string;
  hindiTitle: string;
  date: string;
  time: string;
  venueArea: string;
  dressCode: string;
  description: string;
  accentColor: string;
  badgeColor: string;
  iconType: 'haldi' | 'mehendi' | 'sangeet' | 'muhurtham' | 'reception';
}

export interface GalleryPhoto {
  id: number;
  title: string;
  category: string;
  caption: string;
  dateLocation: string;
  imageUrl: string;
  fallbackScene: 'portrait' | 'prewedding' | 'haldi' | 'mehendi' | 'traditional';
  aspectLabel: string;
}

export interface WeddingVideoConfig {
  title: string;
  subtitle: string;
  duration: string;
  location: string;
  videoUrl: string;
  posterUrl: string;
  description: string;
}

export interface WeddingData {
  bride: {
    firstName: string;
    fullName: string;
    parents: {
      father: string;
      mother: string;
      familyOrigin: string;
    };
    bio: string;
  };
  groom: {
    firstName: string;
    fullName: string;
    parents: {
      father: string;
      mother: string;
      familyOrigin: string;
    };
    bio: string;
  };
  weddingDate: {
    displayDate: string;
    shortDate: string;
    isoDateTime: string; // Used for live countdown
    hinduCalendarDate: string;
  };
  muhurtham: {
    timeWindow: string;
    lagna: string;
    nakshatra: string;
    auspiciousNote: string;
  };
  venue: {
    name: string;
    hallName: string;
    addressLine1: string;
    addressLine2: string;
    cityStatePin: string;
    landmark: string;
    googleMapsUrl: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    hospitalityNote: string;
  };
  rsvp: {
    whatsappNumber: string; // International format without '+'
    displayPhone: string;
    contactPerson: string;
    rsvpDeadline: string;
    defaultMessage: string;
  };
  ceremonies: CeremonyEvent[];
  gallery: GalleryPhoto[]; // Strictly 5 images
  video: WeddingVideoConfig; // Strictly 1 video
  themes: Record<WeddingThemeId, ThemeConfig>;
}

export const defaultWeddingData: WeddingData = {
  bride: {
    firstName: 'Ananya',
    fullName: 'Chi. Sow. Ananya Sharma',
    parents: {
      father: 'Shri Rajeshwar &',
      mother: 'Smt. Vasundhara Sharma',
      familyOrigin: 'Granddaughter of Late Pt. Vishwanath Sharma (Jaipur & Bengaluru)',
    },
    bio: 'Architect & Classical Bharatanatyam Dancer with a heart rooted in timeless heritage and grace.',
  },
  groom: {
    firstName: 'Aarav',
    fullName: 'Chi. Aarav Suryavanshi',
    parents: {
      father: 'Shri Vikramaditya &',
      mother: 'Smt. Padmavati Suryavanshi',
      familyOrigin: 'Grandson of Late Rao Bahadur Mahendra Singh (Udaipur & Mumbai)',
    },
    bio: 'Aerospace Engineer & Carnatic Violin Enthusiast who believes in serendipity and sacred traditions.',
  },
  weddingDate: {
    displayDate: 'Saturday, 12th December 2026',
    shortDate: '12 • 12 • 2026',
    isoDateTime: '2026-12-12T10:35:00+05:30',
    hinduCalendarDate: 'Margashirsha Shukla Paksha Tritiya, Vikram Samvat 2083',
  },
  muhurtham: {
    timeWindow: '10:35 AM – 11:48 AM IST',
    lagna: 'Abhijit Muhurtham • Vrishabha Subh Lagna',
    nakshatra: 'Rohini Nakshatra • Siddha Yoga',
    auspiciousNote: 'Mangalya Dharanam & Sapthapadi under the sacred Golden Mandapam',
  },
  venue: {
    name: 'The Leela Palace & Heritage Mandapam',
    hallName: 'Suvarna Mahal Courtyard & Royal Lakefront Lawns',
    addressLine1: '23, Old Airport Road, HAL 2nd Stage, Kodihalli',
    addressLine2: 'Near Royal Heritage Gardens, Indiranagar',
    cityStatePin: 'Bengaluru, Karnataka 560008, India',
    landmark: 'Opposite Manipal Hospital, 10 mins from MG Road Metro',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Leela+Palace+Bengaluru+23+Old+Airport+Road',
    coordinates: {
      lat: 12.9606,
      lng: 77.6484,
    },
    hospitalityNote: 'Valet parking, royal welcome thandai, and traditional temple tambulam curated for all esteemed guests.',
  },
  rsvp: {
    whatsappNumber: '919876543210',
    displayPhone: '+91 98765 43210',
    contactPerson: 'Suryavanshi & Sharma Wedding Concierge',
    rsvpDeadline: 'November 30, 2026',
    defaultMessage:
      'Namaste! 🙏 With immense joy, we confirm our presence at the Royal Wedding celebrations of Aarav & Ananya on 12th December 2026.',
  },
  ceremonies: [
    {
      id: 'haldi',
      name: 'Pithi & Haldi Carnival',
      hindiTitle: 'పసుపు వేడుక • মঙ্গళ స్నానం',
      date: 'Thursday, 10th December 2026',
      time: '10:30 AM Onwards',
      venueArea: 'Suryakiran Sunken Courtyard & Poolside',
      dressCode: 'Shades of Sunlit Saffron, Marigold Yellow & Ivory',
      description:
        'An auspicious morning of organic turmeric blessings, marigold petal showers, dhol beats, and folk melodies.',
      accentColor: '#F59E0B',
      badgeColor: 'from-amber-600/40 to-yellow-500/20',
      iconType: 'haldi',
    },
    {
      id: 'mehendi',
      name: 'Royal Mehendi & Folk Soirée',
      hindiTitle: 'మెహందీ వేడుక • గోరింటాకు సంబరం',
      date: 'Thursday, 10th December 2026',
      time: '04:30 PM Onwards',
      venueArea: 'Mayura Bagh Royal Lawns',
      dressCode: 'Emerald Green, Pistachio, Teal & Mirror-Work Ethnic',
      description:
        'Intricate bridal henna artistry accompanied by folk music, chaat bazaars, and bangle stalls.',
      accentColor: '#10B981',
      badgeColor: 'from-emerald-700/40 to-teal-500/20',
      iconType: 'mehendi',
    },
    {
      id: 'sangeet',
      name: 'Jashn-e-Sangeet & Ring Ceremony',
      hindiTitle: 'సంగీత్ సంధ్య • ఉంగరాల వేడుక',
      date: 'Friday, 11th December 2026',
      time: '07:30 PM Onwards',
      venueArea: 'Darbar Grand Ballroom',
      dressCode: 'Indo-Western Glamour, Royal Velvet & Metallic Gold',
      description:
        'A dazzling night of choreographed family performances, classical fusion symphony, and ring exchange.',
      accentColor: '#A855F7',
      badgeColor: 'from-purple-800/40 to-indigo-500/20',
      iconType: 'sangeet',
    },
    {
      id: 'muhurtham',
      name: 'Subh Muhurtham & Pheras',
      hindiTitle: 'శుభ వివాహ ముహూర్తం • కళ్యాణ వైభోగం',
      date: 'Saturday, 12th December 2026',
      time: '10:35 AM – 11:48 AM (Baraat: 09:00 AM)',
      venueArea: 'Suvarna Temple Mandapam & Sacred Lotus Courtyard',
      dressCode: 'Traditional Kanjeevaram Silk, Pattu Sarees & Royal Pattu Pancha / Sherwani',
      description:
        'Vedic chants, Nadaswaram melodies, Kanyadaanam, Jeelakarra Bellam, Mangalsutra Dharanam, and Talambralu.',
      accentColor: '#D4AF62',
      badgeColor: 'from-red-900/60 to-amber-600/30',
      iconType: 'muhurtham',
    },
    {
      id: 'reception',
      name: 'Grand Royal Reception Banquet',
      hindiTitle: 'రిసెప్షన్ వేడుక • ఆశీర్వాద మహోత్సవం',
      date: 'Saturday, 12th December 2026',
      time: '07:30 PM Onwards',
      venueArea: 'Maharaja Palace Lawns & Starlit Pavilion',
      dressCode: 'Regal Indian Handloom Sarees & Sherwanis',
      description:
        'An evening of blessings for the newlyweds over a curated royal feast and live classical quartet.',
      accentColor: '#F43F5E',
      badgeColor: 'from-rose-900/50 to-amber-500/20',
      iconType: 'reception',
    },
  ],
  // Strictly 5 Wedding Photo Gallery Images as specified
  gallery: [
    {
      id: 1,
      title: 'The Royal Couple Portrait',
      category: '1. Bride & Groom Portrait',
      caption:
        'Aarav & Ananya draped in handwoven crimson Kanjeevaram silk and ivory zardozi sherwani beneath the palace arches.',
      dateLocation: 'Suvarna Mahal Archway • Udaipur',
      imageUrl:
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
      fallbackScene: 'portrait',
      aspectLabel: 'Royal Portrait',
    },
    {
      id: 2,
      title: 'Whispering Palaces at Dusk',
      category: '2. Pre-Wedding Photoshoot',
      caption:
        'Golden hour reflections along Lake Pichola as temple bells and twilight diyas illuminated our pre-wedding celebration.',
      dateLocation: 'Lake Pichola Heritage Ghat • Rajasthan',
      imageUrl:
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
      fallbackScene: 'prewedding',
      aspectLabel: 'Pre-Wedding Shoot',
    },
    {
      id: 3,
      title: 'Shower of Marigold & Turmeric',
      category: '3. Haldi Ceremony',
      caption:
        'Laughter, sacred ubtan blessings from elders, and a joyous shower of fresh yellow and saffron marigold petals.',
      dateLocation: 'Suryakiran Courtyard • Morning Festivities',
      imageUrl:
        'https://images.unsplash.com/photo-1610173827002-62c0f1f05d04?auto=format&fit=crop&w=1200&q=85',
      fallbackScene: 'haldi',
      aspectLabel: 'Haldi Ceremony',
    },
    {
      id: 4,
      title: 'Henna Tales & Solah Shringar',
      category: '4. Mehendi & Engagement Ceremony',
      caption:
        'Intricate Rajasthani bridal mehendi concealing Aarav’s initials amidst lotus motifs, peacock patterns, and heirloom Polki jewels.',
      dateLocation: 'Mayura Bagh Pavilion • Twilight',
      imageUrl:
        'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=1200&q=85',
      fallbackScene: 'mehendi',
      aspectLabel: 'Mehendi & Engagement',
    },
    {
      id: 5,
      title: 'Sacred Agni & Seven Vows',
      category: '5. Traditional Wedding Photography',
      caption:
        'The timeless moment of Mangalya Dharanam and Sapthapadi amidst Vedic hymns, showering akshata, and jasmine garlands.',
      dateLocation: 'The Golden Temple Mandapam • Subh Muhurtham',
      imageUrl:
        'https://images.unsplash.com/photo-1545232972-907690f5f72e?auto=format&fit=crop&w=1200&q=85',
      fallbackScene: 'traditional',
      aspectLabel: 'Traditional Wedding',
    },
  ],
  // Strictly 1 Dedicated Wedding Video Section
  video: {
    title: 'Aarav & Ananya — A Sacred Union Written in the Stars',
    subtitle: 'Official Pre-Wedding & Royal Invitation Film (4K Cinema)',
    duration: '02:18',
    location: 'Filmed at City Palace Udaipur & Hampi Temple Courtyards',
    // Standard reliable MP4 stream + built-in interactive cinematic fallback film
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    posterUrl:
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85',
    description:
      'Experience our journey from the temple corridors of South India to the royal sandstone palaces of Rajasthan — accompanied by live Shehnai, Santoor, and Vedic blessings.',
  },
  themes: {
    rajasthani: {
      id: 'rajasthani',
      name: 'Royal Rajasthani Palace',
      subtitle: 'Maroon Velvet, Antique Zardozi Gold & Jharokha Arches',
      invocation: '॥ ఓం శ్రీ గణేశాయ నమః ॥',
      invocationMeaning: 'Om Sri Ganeshaya Namaha • SriRastu Subhamastu Avighnamastu',
      primaryBg: '#240309',
      secondaryBg: '#4A0815',
      cardBg: 'rgba(107, 16, 32, 0.55)',
      accentColor: '#D4AF62',
      secondaryAccent: '#E66C1E',
      borderGlow: 'rgba(212, 175, 98, 0.45)',
      architectureLabel: 'Udaipur Jharokha & Chittor Fort Motifs',
      floralNote: 'Red Roses, Desi Marigold & Golden Kalira',
    },
    'south-indian': {
      id: 'south-indian',
      name: 'South Indian Temple',
      subtitle: 'Kanjeevaram Crimson, Temple Bronze Gold & Gopuram Art',
      invocation: '॥ ఓం శ్రీ మహాగణపతయే నమః • శుభమస్తు ॥',
      invocationMeaning: 'Sri Mahaganapataye Namaha • Subhamastu • Kalyana Vaibhogam',
      primaryBg: '#1F0704',
      secondaryBg: '#421208',
      cardBg: 'rgba(92, 24, 12, 0.58)',
      accentColor: '#E5B84B',
      secondaryAccent: '#10B981',
      borderGlow: 'rgba(229, 184, 75, 0.5)',
      architectureLabel: 'Madurai Gopuram & Hampi Stone Chariot Pillars',
      floralNote: 'Madurai Malli (Jasmine), Pink Lotus & Mango Leaf Toran',
    },
    'vedic-hindu': {
      id: 'vedic-hindu',
      name: 'Sacred Vedic Heritage',
      subtitle: 'Sindoor Vermilion, Saffron Kumkum & Sacred Mandala',
      invocation: '॥ ఓం శ్రీ గణేశాయ నమః • శ్రీరస్తు శుభమస్తు ॥',
      invocationMeaning: 'Auspicious Blessings of Lord Ganesha & Sacred Vedic Agni',
      primaryBg: '#260808',
      secondaryBg: '#521010',
      cardBg: 'rgba(115, 22, 22, 0.55)',
      accentColor: '#F3C663',
      secondaryAccent: '#F59E0B',
      borderGlow: 'rgba(243, 198, 99, 0.45)',
      architectureLabel: 'Sacred Kalash, Ashtadala Lotus & Surya Mandala',
      floralNote: 'Sacred Lotus, Parijat, Tulsi & Saffron Marigold',
    },
  },
};

