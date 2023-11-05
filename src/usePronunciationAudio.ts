import { useRef, useEffect } from 'react'

export default function usePronunciatonAudio(src?: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // If there's already an Audio object, pause and clean it up
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.removeAttribute('src') // Remove the old source
      audioRef.current.load()
    }

    // Create a new Audio object if `pronunciationAudioSrc` is valid
    if (src) {
      audioRef.current = new Audio(src)
    }

    // Cleanup function to pause and clean up the audio when the source changes or the component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [src])

  return audioRef.current
}
