import { useState } from 'react'
import SearchIcon from './assets/images/icon-search.svg?react'

export default function SearchField() {
  const [{ value, isValid }, setFieldState] = useState({
    value: '',
    isValid: true,
  })

  const isInputValid = () => Boolean(value.trim() !== '')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFieldState((state) => ({
      ...state,
      value: event.target.value.trim(),
    }))

  const handleBlur = () =>
    setFieldState((state) => ({
      ...state,
      isValid: isInputValid(),
    }))

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form
      className="flex flex-col gap-2 bg-transparent"
      onSubmit={handleSubmit}
    >
      <div className="relative leading-none">
        <input
          type="text"
          placeholder="Search for any word..."
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full rounded-2xl bg-gray-platinum px-6 py-4 pr-16 font-bold focus:outline-none focus:ring-2 focus:ring-lavender  dark:bg-gray-dark dark:text-white ${
            !isValid ? 'border border-red focus:border-none' : ''
          }`}
        />
        <button
          type="submit"
          aria-label="search button"
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-2xl px-6 py-4"
        >
          <SearchIcon />
        </button>
      </div>
      {!isValid && <p className="text-red">Whoops, can&apos;t be empty...</p>}
    </form>
  )
}
