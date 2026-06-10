import { create } from 'zustand'

export enum JourneyPhase {
  PRE_COUNTDOWN = 0,
  TUNNEL = 1,
  GROWTH_CEREMONY = 2,
  CELEBRATION_AREA = 3,
  BIRTHDAY_MACHINE = 4,
  NEW_JOURNEY_CARDS = 5,
  MEMORY_UNIVERSE = 6,
  SURPRISE_ROOM = 7,
  GIFT_UNIVERSE = 8,
  JOURNEY_REPORT = 9,
  SKY_ENDING = 10,
}

export interface JourneyState {
  currentPhase: JourneyPhase
  birthDate: Date | null
  charactersOpacity: number
  soundEnabled: boolean
  isPlaying: boolean
  completionPercentage: number
  openedGifts: number
  memoryDuration: number
  joyMeter: number

  // Actions
  setPhase: (phase: JourneyPhase) => void
  setBirthDate: (date: Date) => void
  setCharacterOpacity: (opacity: number) => void
  toggleSound: (enabled: boolean) => void
  pauseJourney: () => void
  resumeJourney: () => void
  setCompletionPercentage: (percentage: number) => void
  incrementOpenedGifts: () => void
  setMemoryDuration: (duration: number) => void
  setJoyMeter: (joy: number) => void
}

export const useStore = create<JourneyState>((set) => ({
  currentPhase: JourneyPhase.PRE_COUNTDOWN,
  birthDate: null,
  charactersOpacity: 1,
  soundEnabled: true,
  isPlaying: true,
  completionPercentage: 0,
  openedGifts: 0,
  memoryDuration: 0,
  joyMeter: 0,

  setPhase: (phase) => set({ currentPhase: phase }),
  setBirthDate: (date) => set({ birthDate: date }),
  setCharacterOpacity: (opacity) => set({ charactersOpacity: opacity }),
  toggleSound: (enabled) => set({ soundEnabled: enabled }),
  pauseJourney: () => set({ isPlaying: false }),
  resumeJourney: () => set({ isPlaying: true }),
  setCompletionPercentage: (percentage) => set({ completionPercentage: percentage }),
  incrementOpenedGifts: () => set((state) => ({ openedGifts: state.openedGifts + 1 })),
  setMemoryDuration: (duration) => set({ memoryDuration: duration }),
  setJoyMeter: (joy) => set({ joyMeter: Math.min(100, Math.max(0, joy)) }),
}))
