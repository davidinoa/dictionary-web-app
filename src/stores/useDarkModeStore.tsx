import { create } from 'zustand'

type DarkModeState = {
  isDarkMode: boolean
  setIsDarkMode: (isDarkMode: boolean) => void
}

const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
  setIsDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
}))

export default useDarkModeStore
