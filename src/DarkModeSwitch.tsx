import { useState } from 'react'
import { Switch } from '@headlessui/react'
import MoonIcon from './assets/images/icon-moon.svg?react'

export default function DarkModeSwitch() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="flex gap-4">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-lavender' : 'bg-gray-silver'}
          relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none  focus-visible:ring-2 focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-5' : 'translate-x-[2px]'}
            pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <MoonIcon
        height={20}
        className={`${enabled ? 'dark-mode-enabled' : ''}`}
      />
    </div>
  )
}
