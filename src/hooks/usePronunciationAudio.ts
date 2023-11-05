import { useEffect, useState } from 'react'

export default function usePronunciatonAudio(src?: string) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!src) return undefined
    const newAudio = new Audio(src)
    setAudio(newAudio)

    return () => newAudio.pause()
  }, [src])

  return audio
}
