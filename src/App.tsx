import Header from './Header'
import Meanings from './Meanings'
import SearchField from './SearchField'
import PlayIcon from './assets/images/icon-play.svg?react'
import useFontStore from './stores/useFontStore'

export default function App() {
  const fontClassName = useFontStore((state) => state.font.className)

  return (
    <div
      className={`${fontClassName} text-charcoal h-full p-6 dark:bg-black dark:text-white`}
    >
      <div className="m-auto flex max-w-[737px] flex-col gap-6">
        <Header />
        <SearchField />
        <main className="grow">
          <section className="flex items-center">
            <h1 className="flex grow flex-col gap-2">
              <span className="text-3xl font-bold">keyboard</span>
              <span aria-label="pronunciation" className="text-lavender">
                /&apos;kiːbɔːrd/
              </span>
            </h1>
            <button type="button" aria-label="play word pronunciation">
              <PlayIcon className="[&_*]:transition-all [&_*]:duration-200 [&_circle]:hover:opacity-100 [&_path]:hover:fill-white" />
            </button>
          </section>
          <Meanings />
        </main>
      </div>
    </div>
  )
}
