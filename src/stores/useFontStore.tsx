import { create } from 'zustand'

type Font = {
  id: string
  name: string
  className: string
}

type FontState = {
  font: Font
  setFont: (font: Font) => void
}
const useFontStore = create<FontState>((set) => ({
  font: {
    id: 'sansSerif',
    name: 'Sans Serif',
    className: 'font-sans',
  },
  setFont: (font) => set({ font }),
}))

export default useFontStore
