import React, { useEffect } from 'react'
import { useStore } from '@/store/journeyStore'
import JourneyContainer from '@/components/JourneyContainer'
import '@/styles/globals.css'

export default function App() {
  useEffect(() => {
    // Set up app-level listeners
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        useStore.getState().pauseJourney()
      }
    })
  }, [])

  return (
    <div className="app">
      <JourneyContainer />
    </div>
  )
}
