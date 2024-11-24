'use client'

import { createContext, useCallback, useContext, useState } from 'react'

interface LayoutContextType {
  showPopup: boolean
  setShowPopup: (show: boolean) => void
  togglePopup: () => void

  menusVisible: boolean
  setMenusVisible: (show: boolean) => void

  mobilePanelVisible: boolean
  setMobilePanelVisible: (open: boolean) => void
  toggleMobilePanelVisible: () => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export function useLayout() {
  const context = useContext(LayoutContext)
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider')
  }
  return context
}

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [showPopup, setShowPopup] = useState(true)
  const [menusVisible, setMenusVisible] = useState(true)
  const [mobilePanelVisible, setMobilePanelVisible] = useState(false)

  const togglePopup = useCallback(() => {
    setShowPopup(prev => !prev)
  }, [])

  const toggleMobilePanelVisible = useCallback(() => {
    setMobilePanelVisible(prev => !prev)
  }, [])

  return (
    <LayoutContext.Provider
      value={{
        showPopup,
        setShowPopup,
        togglePopup,
        menusVisible,
        setMenusVisible,
        mobilePanelVisible,
        setMobilePanelVisible,
        toggleMobilePanelVisible,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
