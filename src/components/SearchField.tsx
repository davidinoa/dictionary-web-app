import { useEffect, useRef, useState } from 'react'
import { useDebounce } from '@uidotdev/usehooks'
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
  const [enterPressed, setEnterPressed] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const debouncedEnterPressed = useDebounce(enterPressed, 500)
  const debouncedQuery = useDebounce(query, 500)
  const searchResult = useQuery({
    queryKey: ['search', debouncedQuery],
    queryFn: () =>
      fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${debouncedQuery}`,
      ).then((res) => res.json()),
    enabled: false,
    staleTime: Infinity,
  })

  useEffect(() => {
    if (searchResult.data && searchResult.fetchStatus === 'idle') {
      setResult(searchResult.data[0])
    }
  }, [searchResult.data, searchResult.fetchStatus, setResult])

  useEffect(() => {
    if (debouncedEnterPressed && formRef.current) {
      formRef.current.dispatchEvent(
        new Event('submit', {
          cancelable: true,
          bubbles: true,
        }),
      )
      setEnterPressed(false)
    }
  }, [debouncedEnterPressed])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const isValid = Boolean(query.trim() !== '')
    setIsQueryValid(isValid)
    if (isValid) {
      searchResult.refetch()
    }
  }

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-2 bg-transparent"
      onSubmit={handleSubmit}
    >
      <div className="relative leading-none">
        <input
          type="text"
          placeholder="Search for any word..."
          onChange={handleChange}
          className={` w-full rounded-2xl bg-gray-platinum px-6 py-4 pr-16 font-bold placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-lavender dark:bg-gray-dark dark:text-white sm:py-5 sm:text-xl sm:leading-tight ${
            !isQueryValid ? 'border border-red focus:border-none' : ''
          }`}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault()
              setEnterPressed(true)
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
