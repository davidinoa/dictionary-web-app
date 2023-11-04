import Header from './Header'
import Meanings from './Meanings'
import SearchField from './SearchField'
import PlayIcon from './assets/images/icon-play.svg?react'

export default function App() {
  return (
    <div className="flex flex-col gap-6">
      <Header />
      <SearchField />
      <main className="grow">
        <section className="flex items-center">
          <h1 className="flex grow flex-col gap-2">
            <span className="text-3xl font-bold">keyboard</span>
            <span aria-label="pronunciation" className="text-lavender">
              /'kiːbɔːrd/
            </span>
          </h1>
          <button>
            <PlayIcon className="[&_*]:transition-all [&_*]:duration-200 [&_circle]:hover:opacity-100 [&_path]:hover:fill-white" />
          </button>
        </section>
        <Meanings />
      </main>
    </div>
  )
}
