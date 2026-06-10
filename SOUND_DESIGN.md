# 🎵 Sound Design Architecture

## Overview

The Birthday Journey features a sophisticated multi-layer audio system designed to create an immersive, cinematic experience. Each phase has carefully curated sounds that build emotional resonance and guide the user through their journey.

## Audio Hierarchy

### 1. **Ambient Layer**
- Continuous soundscapes that define each environment
- Creates atmospheric depth
- Examples: Tunnel wind, cosmic drones, celebration ambience
- Volume: 40-50%
- Usually looping

### 2. **Music Layer**
- Thematic compositions tied to emotional beats
- Orchestral/electronic blend
- Changes between phases
- Volume: 60-80%
- Full loops

### 3. **Effects Layer**
- Interactive sound cues
- Responds to user actions
- Magical, fantastical quality
- Volume: 50-90%
- Single-play or short loops

### 4. **Voice Layer**
- Potential for character whispers/emotional moments
- Reserved for future expansion
- Volume: 70-90%

### 5. **UI Layer**
- Button clicks, confirmations
- Always audible even when other sounds muted
- Volume: 40-60%

## Phase-by-Phase Audio Design

### Phase 0: Pre-Birthday Countdown
**Mood**: Anticipation, Magic Awakening

- **Ambient**: Countdown_Ambient (deep space drone, gentle pulsing)
- **Effects**: Countdown_Tick (heartbeat-like rhythm, intensifies as time runs out)
- **Transition**: Portal_Open (magical whoosh, builds into next phase)

**Progression**:
- Days before: Slow, minimal
- Hours before: Tempo increases
- Minutes before: Heartbeat becomes prominent
- Final seconds: Intense build, screaming energy

### Phase 1: Journey Tunnel
**Mood**: Movement, Discovery, Momentum

- **Ambient**: Tunnel_Wind (continuous, immersive)
- **Music**: Tunnel_Magic (ethereal pad, meditative quality)
- **Effects**: Door_Open/Close (magical whoosh, one per month)

**Notes**:
- Wind sound provides constant motion sense
- Music is slightly distant, echoing
- Door sounds punctuate monthly milestones

### Phase 2: Growth Ceremony
**Mood**: Revelation, Achievement, Celebration

- **Music**: Mirror_Reveal (orchestral swell)
- **Effects**: Chapter_Unlock (achievement chime), Confetti (sparkle particles), Screen_Shake (bass impact)

**Dynamics**:
- Starts soft with mirror transformation
- Builds to crescendo with unlock sound
- Stacked effects create layered celebration

### Phase 3: Celebration Area
**Mood**: Joy, Wonder, Playfulness

- **Music**: Celebration_Music (uplifting, magical theme)
- **Effects**: Balloon_Rise, Ribbon_Wave, Gift_Descend

**Details**:
- Multiple light effects playing simultaneously
- Music is bright and optimistic
- Effects are playful, not overwhelming

### Phase 4: Birthday Machine
**Mood**: Power, Energy, Anticipation

- **Effects**: Machine_Startup (mechanical), Machine_Power (charging loop), Machine_Complete (satisfying resolution)

**Progression**:
- Startup: Single mechanical click
- Power phase: Looping energy buildup
- Complete: Satisfying chime + bass

### Phase 5: New Journey Cards
**Mood**: Curiosity, Revelation, Positivity

- **Effects**: Card_Flip (tactile), Card_Whoosh (movement)

**Pattern**:
- Flip sound per card reveal
- Whoosh for transition between cards
- Light, airy quality

### Phase 6: Memory Universe
**Mood**: Exploration, Nostalgia, Magic

- **Ambient**: Planet_Hover (soft sci-fi drone)
- **Effects**: Planet_Unlock (discovery chime), Spark_Trail (energy sparkles)

**Interaction**:
- Hover sounds are subtle
- Unlock chimes reward exploration
- Spark trails add visual-audio correlation

### Phase 7: Surprise Room (Cake & Candles)
**Mood**: Intimacy, Magic, Wish-Fulfillment

- **Effects**: 
  - Cake_Appear (magical entrance)
  - Candle_Light (fire ignition)
  - Candle_Blow (wind detection from microphone)
  - Candle_Extinguish (fire out)
  - Smoke_Dissipate (trailing effect)
  - Wish_Granted (magical sparkle)
  - Fireworks_Burst (grand finale)

**Special Feature**:
- Microphone input for blow detection
- Only blow sound extinguishes candles
- Progressive reward sounds

### Phase 8: Gift Universe
**Mood**: Excitement, Abundance, Surprise

- **Effects**: Gift_Unlock, Gift_Open, Surprise_Reveal

**Pacing**:
- Individual gift sounds (unlock, open)
- Grand surprise sound every 5-10 gifts
- Final gift gets the grand reveal

### Phase 9: Journey Report
**Mood**: Reflection, Accomplishment

- **Effects**: Report_Open (dashboard entrance), Report_Stat (counter increments)

**Details**:
- Satisfying counter sounds for stat increases
- Dashboard ambience (optional light pad)

### Phase 10: Sky Ending
**Mood**: Peace, Reflection, Magic

- **Effects**: Star_Twinkle (gentle sparkle), Shooting_Star (movement + magic)
- **Music**: Ending_Theme (orchestral finale, emotional)

**Atmosphere**:
- Sparse, open, contemplative
- Final emotional impact
- Fade to silence

## Audio File Structure

```
src/assets/sounds/
├── phase0/
│   ├── countdown_ambient.mp3 (2-3 min, looping)
│   ├── countdown_tick.mp3 (0.5 sec, repeating)
│   └── portal_open.mp3 (2-3 sec)
├── phase1/
│   ├── tunnel_wind.mp3 (3-5 min, looping)
│   ├── tunnel_magic.mp3 (3-5 min, looping)
│   ├── door_open.mp3 (1 sec)
│   └── door_close.mp3 (0.5 sec)
├── phase2/
│   ├── mirror_reveal.mp3 (2-3 sec)
│   ├── chapter_unlock.mp3 (1-2 sec)
│   ├── confetti.mp3 (1-2 sec)
│   └── screen_shake.mp3 (0.5 sec)
├── ... (continues for all phases)
└── ui/
    ├── button_click.mp3 (0.3 sec)
    └── confirmation.mp3 (0.5 sec)
```

## Technical Implementation

### AudioManager Class

Handles all audio playback with:
- **Play/Stop**: Control individual sounds
- **Volume Control**: Per-sound and master volume
- **Fade In/Out**: Smooth audio transitions
- **Muting**: Preserve state across interactions
- **Lifecycle**: Proper cleanup and resource management

### Usage Example

```typescript
import { audioManager, AudioPhase } from '@/utils/sound'

// Play a sound
await audioManager.play(AudioPhase.PORTAL_OPEN)

// Play with custom volume
await audioManager.play(AudioPhase.MUSIC, { volume: 0.5 })

// Stop a sound with fade-out
audioManager.stop(AudioPhase.TUNNEL_WIND, 500)

// Stop everything
audioManager.stopAll(1000)

// Mute/Unmute
audioManager.mute()
audioManager.unmute()
```

## Audio Mixing Strategy

### Master Volume Levels
- **Ambient**: -18dB (0.4 volume)
- **Music**: -12dB (0.6 volume)
- **Effects**: -6dB to 0dB (0.7-1.0 volume)
- **Voice**: -6dB (0.7 volume)
- **UI**: -12dB (0.6 volume)

### Phase Transitions
- Fade out previous ambient (500-1000ms)
- Cross-fade to new ambient (500-1000ms)
- Keep music consistent or build new theme
- Effects stack on top without cutting previous sounds

## Microphone Integration (Phase 7)

### Blow Detection Algorithm

```typescript
const detectBlow = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
  const audioContext = new AudioContext()
  const analyser = audioContext.createAnalyser()
  const source = audioContext.createMediaStreamSource(stream)
  source.connect(analyser)
  
  // Monitor for sudden amplitude increase (breath pattern)
  const frequency = new Uint8Array(analyser.frequencyBinCount)
  
  const checkBlow = () => {
    analyser.getByteFrequencyData(frequency)
    const average = frequency.reduce((a, b) => a + b) / frequency.length
    
    if (average > BLOW_THRESHOLD) {
      // Blow detected!
      return true
    }
    requestAnimationFrame(checkBlow)
  }
  
  checkBlow()
}
```

## Accessibility

- **Mute Toggle**: Always available on UI
- **Captions**: Audio cues have visual equivalents
- **Preferences Respected**: Honors `prefers-reduced-motion`
- **Silent Mode**: Full experience without sound

## Performance Optimization

- Audio files: MP3 format (compressed)
- Lazy loading: Load sounds on-demand
- Web Audio Context pooling: Reuse nodes
- Memory cleanup: Proper disposal of audio elements
- Browser compatibility: Fallbacks for older browsers

## Future Enhancements

1. **3D Positional Audio**: Pan effects based on character movement
2. **Speech Synthesis**: Character voice for wishes/encouragement
3. **Ambient Adaptive Music**: React to user sentiment
4. **Haptic Feedback**: Vibration patterns coordinated with sound
5. **Spatial Audio**: HRTF for surround sound effect

## Testing Audio

```bash
# Test audio playback
npm run test:audio

# Verify audio file paths
npm run verify:assets

# Performance profiling
npm run profile:audio
```
