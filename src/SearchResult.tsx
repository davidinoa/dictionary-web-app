import { useMemo, useRef } from 'react'
import NewWindowIcon from './assets/images/icon-new-window.svg?react'
import useSearchStore from './stores/useSearchStore'
import PlayIcon from './assets/images/icon-play.svg?react'

export default function SearchResult() {
  const result = useSearchStore((state) => state.result)
  const pronunciation = result?.phonetics.find((p) => p.audio?.length)
  const pronunciationAudioSrc = pronunciation?.audio
  const pronunciationAudio = useMemo(
    () => new Audio(pronunciationAudioSrc),
    [pronunciationAudioSrc],
  )

  if (!result) {
    return 'Start searching...'
  }
  const wordData = result

  return (
    <>
      <section className="flex items-center">
        <h1 className="flex grow flex-col gap-2">
          <span className="text-3xl font-bold">{result.word}</span>
          <span aria-label="pronunciation" className="text-lavender">
            {result.phonetic}
          </span>
        </h1>
        {pronunciationAudioSrc && (
          <button
            type="button"
            aria-label="play word pronunciation"
            onClick={() => pronunciationAudio.play()}
          >
            <PlayIcon className="[&_*]:transition-all [&_*]:duration-200 [&_circle]:hover:opacity-100 [&_path]:hover:fill-white" />
          </button>
        )}
      </section>
      <div className="flex flex-col gap-8">
        {wordData.meanings.map((meaning) => (
          <section key={meaning.partOfSpeech}>
            <h2
              className="mb-8 flex items-center gap-4 text-lg font-bold"
              style={{ fontVariationSettings: "'slnt' -10" }}
            >
              {meaning.partOfSpeech}
              <hr className="w-full" />
            </h2>
            <div className="mb-6">
              <h3 className="mb-4 text-gray-silver">Meaning</h3>
              <ul className="flex list-disc flex-col gap-3 pl-4 marker:text-lavender">
                {meaning.definitions.map(({ definition, ...rest }) => (
                  <li key={definition} className="pl-2">
                    <p className="mb-3">{definition}</p>
                    {'example' in rest && (
                      <p className="text-gray-silver">
                        &ldquo;{rest.example}&rdquo;
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {meaning.synonyms.length > 0 && (
              <div className="flex flex-col gap-6">
                <h3 className="text-gray-silver">Synonyms</h3>
                <ul className="flex flex-wrap gap-4">
                  {[...new Set(meaning.synonyms)].map((synonym) => (
                    <li className="font-bold text-lavender" key={synonym}>
                      {synonym}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
        <footer>
          <hr className="mb-6" />
          <h4 className="mb-2 text-sm text-gray-silver underline">
            {wordData.sourceUrls.length > 1 ? 'Sources' : 'Source'}
          </h4>
          <ul className="flex gap-4 text-sm">
            {wordData.sourceUrls.map((sourceUrl) => (
              <li key={sourceUrl}>
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 underline"
                >
                  {sourceUrl}
                  <NewWindowIcon />
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </>
  )
}
