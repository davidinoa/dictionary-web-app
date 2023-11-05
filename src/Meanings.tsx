import NewWindowIcon from './assets/images/icon-new-window.svg?react'
import useSearchStore from './stores/useSearchStore'

const data = [
  {
    word: 'keyboard',
    phonetic: '/ˈkiːbɔːd/',
    phonetics: [
      {
        text: '/ˈkiːbɔːd/',
        audio: '',
      },
      {
        text: '/ˈkiːbɔːd/',
        audio: '',
      },
      {
        text: '/ˈkibɔɹd/',
        audio:
          'https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3',
        sourceUrl: 'https://commons.wikimedia.org/w/index.php?curid=1755168',
        license: {
          name: 'BY-SA 3.0',
          url: 'https://creativecommons.org/licenses/by-sa/3.0',
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: 'noun',
        definitions: [
          {
            definition:
              '(etc.) A set of keys used to operate a typewriter, computer etc.',
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              'A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.',
            synonyms: [],
            antonyms: [],
          },
          {
            definition:
              'A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.',
            synonyms: [],
            antonyms: [],
          },
        ],
        synonyms: ['electronic keyboard'],
        antonyms: [],
      },
      {
        partOfSpeech: 'verb',
        definitions: [
          {
            definition: 'To type on a computer keyboard.',
            synonyms: [],
            antonyms: [],
            example: 'Keyboarding is the part of this job I hate the most.',
          },
        ],
        synonyms: [],
        antonyms: [],
      },
    ],
    license: {
      name: 'CC BY-SA 3.0',
      url: 'https://creativecommons.org/licenses/by-sa/3.0',
    },
    sourceUrls: ['https://en.wiktionary.org/wiki/keyboard'],
  },
]

export default function Meanings() {
  const { result } = useSearchStore()
  const wordData = data[0]
  return (
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
            <div className="flex gap-6">
              <h3 className="text-gray-silver">Synonyms</h3>
              <ul className="flex gap-4">
                {meaning.synonyms.map((synonym) => (
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
  )
}
