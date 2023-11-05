import Header from './Header'
import SearchResult from './SearchResult'
import SearchField from './SearchField'
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
          <SearchResult />
        </main>
      </div>
    </div>
  )
}
