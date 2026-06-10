import React, { useEffect, useState } from 'react'
import { useStore } from '@/store/journeyStore'
import { audioManager } from '@/utils/sound'
import '@/styles/container.css'

export default function JourneyContainer() {
  const { currentPhase, soundEnabled } = useStore()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Initialize journey
    setIsReady(true)
    
    // Setup audio context on user interaction
    const handleUserInteraction = () => {
      if (soundEnabled) {
        // Audio ready to play
      }
      document.removeEventListener('click', handleUserInteraction)
    }
    
    document.addEventListener('click', handleUserInteraction)
    return () => document.removeEventListener('click', handleUserInteraction)
  }, [soundEnabled])

  if (!isReady) {
    return <div className="loading">Initializing Journey...</div>
  }

  return (
    <div className="journey-container">
      <div className="phase-viewport">
        {/* Phase components will be rendered here */}
        Phase {currentPhase}
      </div>
    </div>
  )
}
