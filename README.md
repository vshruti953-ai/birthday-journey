# 🎭 The Birthday Journey

**Premium Cinematic Interactive Birthday Experience**

A Netflix-intro meets game-cutscene meets magical memory film — a fully responsive, immersive birthday celebration website that feels like a cinematic experience.

## ✨ Features

- **10 Cinematic Phases**: From countdown to sky ending
- **Character System**: Consistent animated character throughout
- **Immersive Sound Design**: Multi-layer audio architecture
- **Interactive Storytelling**: Engaging moments & choices
- **Memory Export**: Auto-generate cinematic birthday movie (MP4)
- **Gift Universe**: Progressive gift reveals & surprises
- **Cake & Candle Blowing**: Microphone-enabled wish mechanic
- **Privacy-First**: Local-only mode, no tracking without consent
- **High Performance**: 60+ FPS animations, responsive design
- **Dark Luxury Aesthetic**: Premium visual design

## 🎬 Phases

1. **Phase 0**: Pre-Birthday Countdown
2. **Phase 1**: Journey Tunnel (Monthly progression)
3. **Phase 2**: Growth Ceremony (Mirror reveal)
4. **Phase 3**: Celebration Area
5. **Phase 4**: Birthday Machine
6. **Phase 5**: New Journey Cards
7. **Phase 6**: Memory Universe (Explorable planets)
8. **Phase 7**: Surprise Room (Cake & candle blowing)
9. **Phase 8**: Gift Universe
10. **Phase 9**: Journey Report
11. **Phase 10**: Sky Ending (with secret ending)

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to experience the journey.

## 📁 Project Structure

```
src/
├── components/          # UI components
│   ├── Phases/         # 11 phase components
│   ├── Character/      # Character system & animations
│   ├── Particles/      # Particle effects
│   └── UI/             # Buttons, overlays, text
├── scenes/             # Canvas & 3D scenes
├── hooks/              # Custom React hooks
├── store/              # Zustand state management
├── utils/              # Utilities & helpers
│   ├── sound.ts        # Sound system
│   ├── analytics.ts    # Privacy-first tracking
│   └── export.ts       # Memory export
├── assets/
│   ├── character/      # Character images
│   ├── sounds/         # Audio files
│   ├── fonts/          # Custom fonts
│   └── backgrounds/    # Scene backgrounds
└── App.tsx             # Main entry point
```

## 🎵 Sound Design Architecture

See `SOUND_DESIGN.md` for complete audio system documentation.

## 🎁 Memory Export

Automatically generates cinematic MP4 with:
- Full phase progression
- Character reactions
- Music & effects
- Text overlays
- Final birthday frame

## 📊 Analytics

Local-only mode by default. Consent-based tracking with export option.

## 🎨 Character Asset

Character image integrated at: `src/assets/character/main.png`

## 🛠️ Tech Stack

- **React 18** + TypeScript
- **Framer Motion** for smooth animations
- **Three.js** for 3D scenes
- **Zustand** for state management
- **Vite** for build tooling
- **FFmpeg.wasm** for video export
- **Web Audio API** for sound

## 📱 Responsive

- Mobile-first design
- Touch gestures support
- Optimized for all screen sizes

## 🔐 Privacy

- Local-only mode available
- No analytics without consent
- GDPR-friendly implementation
- Export without tracking

## 📄 License

MIT
