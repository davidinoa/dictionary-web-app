import { create } from 'zustand'

type DarkModeState = {
  isDarkMode: boolean
  setIsDarkMode: (isDarkMode: boolean) => void
}

const useDarkModeStore = create<DarkModeState>((set) => ({
  isDarkMode: false,
  setIsDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
}))

export default useDarkModeStore
