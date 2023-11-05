import { useEffect, useState } from 'react'

export default function usePronunciatonAudio(src?: string) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (src) {
      setAudio(new Audio(src))
    }
    return () => setAudio(null)
  }, [src])

  return audio
}
