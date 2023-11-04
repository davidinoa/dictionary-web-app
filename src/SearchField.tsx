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

    if (isInputValid()) {
      setFieldState((state) => ({ ...state, isValid: false }))
      return
    }
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
          minLength={1}
          className={`w-full rounded-2xl bg-gray-platinum px-6 py-4 pr-16 font-bold ${
            !isValid ? 'border border-red' : ''
          }`}
        />
        <button className="absolute right-0 top-1/2 -translate-y-1/2 px-6 py-4">
          <SearchIcon />
        </button>
      </div>
      {!isValid && <p className="text-red">Whoops, can't be empty...</p>}
    </form>
  )
}
