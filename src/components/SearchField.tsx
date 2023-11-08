import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import SearchIcon from '../assets/images/icon-search.svg?react'
import useSearchStore from '../stores/useSearchStore'

export default function SearchField() {
  const { query, setQuery, setResult } = useSearchStore((state) => ({
    query: state.query,
    setQuery: state.setQuery,
    setResult: state.setResult,
  }))
  const [isQueryValid, setIsQueryValid] = useState(true)
  const searchResult = useQuery({
    queryKey: ['search', query],
    queryFn: () =>
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
        .then((res) => res.json())
        .then((data) => {
          setResult(data[0])
          return data
        }),
    enabled: false,
    staleTime: Infinity,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (querySubmitted: string) => {
    const isValid = Boolean(querySubmitted.trim() !== '')
    setIsQueryValid(isValid)
    if (isValid) {
      searchResult.refetch()
    }
  }

  return (
    <form
      className="flex flex-col gap-2 bg-transparent"
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        handleSubmit(formData.get('query') as string)
      }}
    >
      <div className="relative leading-none">
        <input
          name="query"
          type="text"
          placeholder="Search for any word..."
          onChange={handleChange}
          className={` w-full rounded-2xl bg-gray-platinum px-6 py-4 pr-16 font-bold placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-lavender dark:bg-gray-dark dark:text-white sm:py-5 sm:text-xl sm:leading-tight ${
            !isQueryValid ? 'border border-red focus:border-none' : ''
          }`}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault()
              handleSubmit(event.currentTarget.value)
            }
          }}
        />
        <button
          type="submit"
          aria-label="search button"
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-2xl px-6 py-4"
        >
          <SearchIcon />
        </button>
      </div>
      {!isQueryValid && (
        <p className="text-red">Whoops, can&apos;t be empty...</p>
      )}
    </form>
  )
}
