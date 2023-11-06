import Header from './Header'
import SearchResult from './SearchResult'
import SearchField from './SearchField'
import useFontStore from '../stores/useFontStore'

export default function App() {
  const fontClassName = useFontStore((state) => state.font.className)

  return (
    <div
      className={`${fontClassName} text-charcoal h-full w-full p-6 dark:bg-black dark:text-white sm:p-14`}
    >
      <div className="m-auto flex h-full max-w-[737px] flex-col gap-6 sm:gap-12 ">
        <Header />
        <SearchField />
        <SearchResult />
      </div>
    </div>
  )
}
