import { Switch } from '@headlessui/react'
import { useEffect } from 'react'
import MoonIcon from './assets/images/icon-moon.svg?react'
import useDarkModeStore from './stores/useDarkModeStore'

export default function DarkModeSwitch() {
  const { isDarkMode, setIsDarkMode } = useDarkModeStore()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className="flex gap-4">
      <Switch
        checked={isDarkMode}
        onChange={setIsDarkMode}
        className={`${isDarkMode ? 'bg-lavender' : 'bg-gray-silver'}
          relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none  focus-visible:ring-2 focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${isDarkMode ? 'translate-x-5' : 'translate-x-[2px]'}
            pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <MoonIcon
        height={20}
        className={`${isDarkMode ? 'dark-mode-enabled' : ''}`}
      />
    </div>
  )
}
