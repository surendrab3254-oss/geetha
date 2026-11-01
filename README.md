# Premium 3D Indian Wedding Digital Invitation Website 💌✨

A luxury, interactive **3D Indian Wedding Digital Invitation Website** crafted with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Three.js / React Three Fiber**.

## 🌟 Key Features

1. **3D Animated Wedding Envelope (Landing Screen)**
   - Displays the Bride & Groom's names (**Aarav & Ananya**) and Wedding Date (**Saturday, 12th December 2026**) prominently on an embossed royal maroon & gold-foil envelope.
   - Interactive 3D perspective mouse-tilt, golden wax seal with Lord Ganesha monogram, flickering brass diyas, and floating 3D flower petals.
   - Clicking **"Open Your Invitation 💌"** triggers a multi-stage 3D opening sequence: the wax seal shimmers, the top flap hinges open `180deg` in 3D space, and the ornate wedding invitation card rises and unfolds from inside the pocket.

2. **Main Traditional Indian Wedding Invitation**
   - Devotional **Lord Ganesha** gold-leaf illustration at the top with rotating Ashtadala Lotus solar mandala and sacred Sanskrit shloka.
   - Live **Theme Switcher** allowing guests to experience three regional aesthetics:
     - **Royal Rajasthani Palace** (Maroon Velvet `#6B1020`, Antique Gold `#D4AF62`, Jharokha Palace Arches)
     - **South Indian Temple** (Kanjeevaram Crimson, Temple Bronze Gold, Gopuram Motifs)
     - **Sacred Vedic Heritage** (Kumkum Vermilion, Saffron & Sacred Lotus Mandala)
   - Interactive **Ceremonial Diyas** that guests can tap to offer blessings (`Ashirwad`).

3. **Wedding Details & Interactive 3D Mandap**
   - Bride & Groom lineage cards honoring both sets of parents.
   - Live ticking **Countdown Timer** (`Days`, `Hours`, `Minutes`, `Seconds`) to the auspicious Subh Muhurtham.
   - Interactive **3D Golden Wedding Mandapam** (`@react-three/fiber` & `@react-three/drei`) with 4 carved golden pillars, Shikhara dome, Sacred Agni altar, and orbiting diyas.
   - Animated cards for **Haldi**, **Mehendi**, **Sangeet**, **Subh Muhurtham**, and **Grand Reception**.
   - **Complete Venue Address** with one-click **Google Maps Navigation**.
   - **RSVP Concierge with WhatsApp Integration** (customizable guest count, ceremony selection, and instant WhatsApp message generator).

4. **Wedding Photo Gallery (Strictly 5 Images)**
   - Features 5 signature categories:
     1. Bride & Groom Portrait
     2. Pre-Wedding Photoshoot
     3. Haldi Ceremony
     4. Mehendi & Engagement Ceremony
     5. Traditional Wedding Photography
   - Includes 3D hover tilt, **Full-Screen Lightbox** with keyboard/arrow navigation, instant local photo replacement (`Replace` / `Upload Custom Photo`), and bespoke royal SVG artwork fallback.

5. **Dedicated Wedding Video Section (Strictly 1 Video)**
   - Displays a gold-framed video thumbnail with a glowing 3D Play button (never autoplays with sound).
   - Supports standard `.mp4` playback, custom video URL configuration, local `.mp4` file upload, and a built-in interactive Cinematic Pre-Wedding Motion Film fallback.

6. **Traditional Indian Classical Music & Sound Engine**
   - Synthesizes an authentic **Raag Yaman (Santoor & Tanpura drone)** soundtrack and temple bell chimes via Web Audio API strictly after user interaction, with persistent **Play/Pause** and **Mute/Unmute** controls.

---

## 🚀 Installation & Run Instructions

### Prerequisites
- **Node.js** (v18+ recommended)
- **npm** (v9+ recommended)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open the local URL shown in the terminal (typically `http://localhost:5173`) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ How to Customize Wedding Information

All wedding data is cleanly structured in a single configuration file:
- **`src/data/weddingData.ts`** — Edit the Bride & Groom names, Parents' names, Wedding Date (`isoDateTime`), Muhurtham window, Ceremony schedules, Venue address, Google Maps link, WhatsApp RSVP phone number, the 5 Gallery photo URLs, and the 1 Wedding Video URL.
- You can also customize details live in the browser by clicking **"Customize Wedding Details"** in the website footer, or upload custom photos/videos directly in the Gallery and Video sections.

