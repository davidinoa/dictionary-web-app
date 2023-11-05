import NewWindowIcon from '../assets/images/icon-new-window.svg?react'
import useSearchStore from '../stores/useSearchStore'
import PlayIcon from '../assets/images/icon-play.svg?react'
import usePronunciatonAudio from '../hooks/usePronunciationAudio'

export default function SearchResult() {
  const result = useSearchStore((state) => state.result)
  const pronunciation = result?.phonetics.find((p) => p.audio?.length)
  const pronunciationAudioSrc = pronunciation?.audio
  const pronunciationAudio = usePronunciatonAudio(pronunciationAudioSrc)

  if (result === undefined) {
    return (
      <div className="flex max-w-[46rem] flex-col items-center gap-6">
        <span className="text-[4rem]">🤔</span>
        <h2 className="text-xl font-bold">Ready to Search?</h2>
        <p className="text-center text-lg text-gray-silver">
          Looks like you haven&apos;t started searching yet. Type a word into
          the search box and we&apos;ll help find the definition for you. Give
          it a go!
        </p>
      </div>
    )
  }

  if (result === null) {
    return (
      <div className="flex max-w-[46rem] flex-col items-center gap-6">
        <span className="text-[4rem]">😕</span>
        <h2 className="text-xl font-bold">No Definitions Found</h2>
        <p className="text-center text-lg text-gray-silver">
          Sorry pal, we couldnt find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    )
  }

  return (
    <main className="grow">
      <div className="flex flex-col gap-8 sm:gap-10">
        <section className="flex items-center">
          <h1 className="flex grow flex-col gap-2">
            <span className="text-3xl font-bold sm:text-6xl">
              {result.word}
            </span>
            <span
              aria-label="pronunciation"
              className="text-lavender sm:text-2xl"
            >
              {result.phonetic}
            </span>
          </h1>
          {pronunciationAudio && (
            <button
              type="button"
              aria-label="play word pronunciation"
              onClick={() => pronunciationAudio.play()}
            >
              <PlayIcon
                width={48}
                className="sm:w-[75px] [&_*]:transition-all [&_*]:duration-200 [&_circle]:hover:opacity-100 [&_path]:hover:fill-white"
              />
            </button>
          )}
        </section>
        {result.meanings.map((meaning) => (
          <section key={meaning.partOfSpeech}>
            <h2
              className="mb-8 flex items-center gap-4 text-lg font-bold sm:text-2xl"
              style={{ fontVariationSettings: "'slnt' -10" }}
            >
              {meaning.partOfSpeech}
              <hr className="w-full" />
            </h2>
            <div>
              <h3 className="mb-4 text-gray-silver sm:text-xl">Meaning</h3>
              <ul className="flex list-disc flex-col gap-3 pl-4 marker:text-lavender">
                {meaning.definitions.map(({ definition, ...rest }) => (
                  <li key={definition} className="pl-2">
                    <p className="sm:text-lg">{definition}</p>
                    {'example' in rest && (
                      <p className="mt-2 text-gray-silver sm:text-lg">
                        &ldquo;{rest.example}&rdquo;
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {meaning.synonyms.length > 0 && (
              <div className="mt-6 flex flex-col gap-4 sm:text-xl">
                <h3 className="text-gray-silver">Synonyms</h3>
                <ul className="flex flex-wrap gap-x-4">
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
        <footer className="pb-6">
          <hr className="mb-6" />
          <h4 className="mb-2 text-sm text-gray-silver underline">
            {result.sourceUrls.length > 1 ? 'Sources' : 'Source'}
          </h4>
          <ul className="flex gap-4 text-sm">
            {result.sourceUrls.map((sourceUrl) => (
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
    </main>
  )
}
