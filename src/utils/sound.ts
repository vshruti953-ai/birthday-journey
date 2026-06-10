/**
 * SOUND DESIGN ARCHITECTURE
 * 
 * This module manages the complete audio system for the Birthday Journey.
 * Multi-layer composition with phase-specific audio cues.
 */

export enum SoundCategory {
  AMBIENT = 'ambient',
  MUSIC = 'music',
  EFFECTS = 'effects',
  VOICE = 'voice',
  UI = 'ui',
}

export enum AudioPhase {
  // Phase 0: Pre-Birthday
  COUNTDOWN_AMBIENT = 'countdown_ambient',
  COUNTDOWN_TICK = 'countdown_tick',
  PORTAL_OPEN = 'portal_open',

  // Phase 1: Journey Tunnel
  TUNNEL_WIND = 'tunnel_wind',
  TUNNEL_MAGIC = 'tunnel_magic',
  DOOR_OPEN = 'door_open',
  DOOR_CLOSE = 'door_close',

  // Phase 2: Growth Ceremony
  MIRROR_REVEAL = 'mirror_reveal',
  CHAPTER_UNLOCK = 'chapter_unlock',
  CONFETTI = 'confetti',
  SCREEN_SHAKE = 'screen_shake',

  // Phase 3: Celebration Area
  CELEBRATION_MUSIC = 'celebration_music',
  BALLOON_RISE = 'balloon_rise',
  RIBBON_WAVE = 'ribbon_wave',
  GIFT_DESCEND = 'gift_descend',

  // Phase 4: Birthday Machine
  MACHINE_STARTUP = 'machine_startup',
  MACHINE_POWER = 'machine_power',
  MACHINE_COMPLETE = 'machine_complete',

  // Phase 5: New Journey Cards
  CARD_FLIP = 'card_flip',
  CARD_WHOOSH = 'card_whoosh',

  // Phase 6: Memory Universe
  PLANET_HOVER = 'planet_hover',
  PLANET_UNLOCK = 'planet_unlock',
  SPARK_TRAIL = 'spark_trail',

  // Phase 7: Surprise Room
  CAKE_APPEAR = 'cake_appear',
  CANDLE_LIGHT = 'candle_light',
  CANDLE_BLOW = 'candle_blow',
  CANDLE_EXTINGUISH = 'candle_extinguish',
  SMOKE_DISSIPATE = 'smoke_dissipate',
  WISH_GRANTED = 'wish_granted',
  FIREWORKS_BURST = 'fireworks_burst',

  // Phase 8: Gift Universe
  GIFT_UNLOCK = 'gift_unlock',
  GIFT_OPEN = 'gift_open',
  SURPRISE_REVEAL = 'surprise_reveal',

  // Phase 9: Journey Report
  REPORT_OPEN = 'report_open',
  REPORT_STAT = 'report_stat',

  // Phase 10: Sky Ending
  STAR_TWINKLE = 'star_twinkle',
  SHOOTING_STAR = 'shooting_star',
  ENDING_THEME = 'ending_theme',
}

export interface SoundConfig {
  url: string
  category: SoundCategory
  volume: number
  loop: boolean
  fadeIn?: number
  fadeOut?: number
}

export interface SoundLibrary {
  [key: string]: SoundConfig
}

/**
 * SOUND LIBRARY CONFIGURATION
 */
export const SOUND_LIBRARY: SoundLibrary = {
  [AudioPhase.COUNTDOWN_AMBIENT]: {
    url: '/sounds/phase0/countdown_ambient.mp3',
    category: SoundCategory.AMBIENT,
    volume: 0.4,
    loop: true,
  },
  [AudioPhase.COUNTDOWN_TICK]: {
    url: '/sounds/phase0/countdown_tick.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.6,
    loop: false,
  },
  [AudioPhase.PORTAL_OPEN]: {
    url: '/sounds/phase0/portal_open.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.8,
    loop: false,
    fadeIn: 500,
  },

  [AudioPhase.TUNNEL_WIND]: {
    url: '/sounds/phase1/tunnel_wind.mp3',
    category: SoundCategory.AMBIENT,
    volume: 0.5,
    loop: true,
  },
  [AudioPhase.TUNNEL_MAGIC]: {
    url: '/sounds/phase1/tunnel_magic.mp3',
    category: SoundCategory.MUSIC,
    volume: 0.6,
    loop: true,
  },
  [AudioPhase.DOOR_OPEN]: {
    url: '/sounds/phase1/door_open.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.7,
    loop: false,
  },
  [AudioPhase.DOOR_CLOSE]: {
    url: '/sounds/phase1/door_close.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.5,
    loop: false,
  },

  [AudioPhase.MIRROR_REVEAL]: {
    url: '/sounds/phase2/mirror_reveal.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.8,
    loop: false,
  },
  [AudioPhase.CHAPTER_UNLOCK]: {
    url: '/sounds/phase2/chapter_unlock.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.7,
    loop: false,
  },
  [AudioPhase.CONFETTI]: {
    url: '/sounds/phase2/confetti.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.6,
    loop: false,
  },
  [AudioPhase.SCREEN_SHAKE]: {
    url: '/sounds/phase2/screen_shake.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.5,
    loop: false,
  },

  [AudioPhase.CELEBRATION_MUSIC]: {
    url: '/sounds/phase3/celebration_music.mp3',
    category: SoundCategory.MUSIC,
    volume: 0.7,
    loop: true,
  },
  [AudioPhase.BALLOON_RISE]: {
    url: '/sounds/phase3/balloon_rise.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.4,
    loop: false,
  },
  [AudioPhase.RIBBON_WAVE]: {
    url: '/sounds/phase3/ribbon_wave.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.5,
    loop: false,
  },
  [AudioPhase.GIFT_DESCEND]: {
    url: '/sounds/phase3/gift_descend.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.6,
    loop: false,
  },

  [AudioPhase.MACHINE_STARTUP]: {
    url: '/sounds/phase4/machine_startup.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.7,
    loop: false,
  },
  [AudioPhase.MACHINE_POWER]: {
    url: '/sounds/phase4/machine_power.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.6,
    loop: true,
    fadeOut: 500,
  },
  [AudioPhase.MACHINE_COMPLETE]: {
    url: '/sounds/phase4/machine_complete.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.8,
    loop: false,
  },

  [AudioPhase.CARD_FLIP]: {
    url: '/sounds/phase5/card_flip.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.5,
    loop: false,
  },
  [AudioPhase.CARD_WHOOSH]: {
    url: '/sounds/phase5/card_whoosh.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.6,
    loop: false,
  },

  [AudioPhase.PLANET_HOVER]: {
    url: '/sounds/phase6/planet_hover.mp3',
    category: SoundCategory.AMBIENT,
    volume: 0.4,
    loop: true,
  },
  [AudioPhase.PLANET_UNLOCK]: {
    url: '/sounds/phase6/planet_unlock.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.7,
    loop: false,
  },
  [AudioPhase.SPARK_TRAIL]: {
    url: '/sounds/phase6/spark_trail.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.5,
    loop: false,
  },

  [AudioPhase.CAKE_APPEAR]: {
    url: '/sounds/phase7/cake_appear.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.8,
    loop: false,
  },
  [AudioPhase.CANDLE_LIGHT]: {
    url: '/sounds/phase7/candle_light.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.6,
    loop: false,
  },
  [AudioPhase.CANDLE_BLOW]: {
    url: '/sounds/phase7/candle_blow.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.7,
    loop: false,
  },
  [AudioPhase.CANDLE_EXTINGUISH]: {
    url: '/sounds/phase7/candle_extinguish.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.6,
    loop: false,
  },
  [AudioPhase.SMOKE_DISSIPATE]: {
    url: '/sounds/phase7/smoke_dissipate.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.5,
    loop: false,
  },
  [AudioPhase.WISH_GRANTED]: {
    url: '/sounds/phase7/wish_granted.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.8,
    loop: false,
  },
  [AudioPhase.FIREWORKS_BURST]: {
    url: '/sounds/phase7/fireworks_burst.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.9,
    loop: false,
  },

  [AudioPhase.GIFT_UNLOCK]: {
    url: '/sounds/phase8/gift_unlock.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.7,
    loop: false,
  },
  [AudioPhase.GIFT_OPEN]: {
    url: '/sounds/phase8/gift_open.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.6,
    loop: false,
  },
  [AudioPhase.SURPRISE_REVEAL]: {
    url: '/sounds/phase8/surprise_reveal.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.9,
    loop: false,
  },

  [AudioPhase.REPORT_OPEN]: {
    url: '/sounds/phase9/report_open.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.6,
    loop: false,
  },
  [AudioPhase.REPORT_STAT]: {
    url: '/sounds/phase9/report_stat.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.5,
    loop: false,
  },

  [AudioPhase.STAR_TWINKLE]: {
    url: '/sounds/phase10/star_twinkle.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.4,
    loop: false,
  },
  [AudioPhase.SHOOTING_STAR]: {
    url: '/sounds/phase10/shooting_star.mp3',
    category: SoundCategory.EFFECTS,
    volume: 0.7,
    loop: false,
  },
  [AudioPhase.ENDING_THEME]: {
    url: '/sounds/phase10/ending_theme.mp3',
    category: SoundCategory.MUSIC,
    volume: 0.8,
    loop: false,
    fadeIn: 1000,
  },
}

/**
 * AUDIO MANAGER
 */
export class AudioManager {
  private audioContext: AudioContext | null = null
  private activeAudio: Map<string, HTMLAudioElement> = new Map()
  private gainNodes: Map<string, GainNode> = new Map()
  private masterGain: GainNode | null = null
  private isMuted = false

  constructor() {
    this.initAudioContext()
  }

  private initAudioContext() {
    try {
      const audioContextClass = window.AudioContext || (window as any).webkitAudioContext
      this.audioContext = new audioContextClass()
      this.masterGain = this.audioContext.createGain()
      this.masterGain.connect(this.audioContext.destination)
    } catch (e) {
      console.warn('AudioContext not available')
    }
  }

  async play(phase: AudioPhase, config?: Partial<SoundConfig>): Promise<void> {
    const soundConfig = SOUND_LIBRARY[phase]
    if (!soundConfig) {
      console.warn(`Audio not found: ${phase}`)
      return
    }

    const finalConfig = { ...soundConfig, ...config }

    if (this.isMuted && finalConfig.category !== SoundCategory.UI) {
      return
    }

    const audio = new Audio(finalConfig.url)
    audio.volume = finalConfig.volume
    audio.loop = finalConfig.loop

    this.activeAudio.set(phase, audio)

    if (finalConfig.fadeIn) {
      audio.volume = 0
      let elapsed = 0
      const step = 10
      const interval = setInterval(() => {
        elapsed += step
        const progress = Math.min(elapsed / finalConfig.fadeIn!, 1)
        audio.volume = finalConfig.volume * progress
        if (progress >= 1) clearInterval(interval)
      }, step)
    }

    try {
      await audio.play().catch(() => {
        // Play failed
      })
    } catch (e) {
      console.warn(`Failed to play audio: ${phase}`, e)
    }
  }

  stop(phase: AudioPhase, fadeOut?: number): void {
    const audio = this.activeAudio.get(phase)
    if (!audio) return

    if (fadeOut) {
      const startVolume = audio.volume
      let elapsed = 0
      const step = 10
      const interval = setInterval(() => {
        elapsed += step
        const progress = Math.min(elapsed / fadeOut, 1)
        audio.volume = startVolume * (1 - progress)
        if (progress >= 1) {
          audio.pause()
          this.activeAudio.delete(phase)
          clearInterval(interval)
        }
      }, step)
    } else {
      audio.pause()
      this.activeAudio.delete(phase)
    }
  }

  stopAll(fadeOut?: number): void {
    for (const [phase] of this.activeAudio) {
      this.stop(phase as AudioPhase, fadeOut)
    }
  }

  setVolume(phase: AudioPhase, volume: number): void {
    const audio = this.activeAudio.get(phase)
    if (audio) {
      audio.volume = Math.max(0, Math.min(1, volume))
    }
  }

  setMasterVolume(volume: number): void {
    if (this.masterGain) {
      this.masterGain.gain.value = Math.max(0, Math.min(1, volume))
    }
  }

  mute(): void {
    this.isMuted = true
    for (const audio of this.activeAudio.values()) {
      if (audio.volume > 0) {
        audio.volume = 0
      }
    }
  }

  unmute(): void {
    this.isMuted = false
  }

  isActive(phase: AudioPhase): boolean {
    return this.activeAudio.has(phase)
  }

  destroy(): void {
    this.stopAll()
    this.activeAudio.clear()
    this.gainNodes.clear()
    if (this.audioContext?.state === 'running') {
      this.audioContext.close()
    }
  }
}

export const audioManager = new AudioManager()
