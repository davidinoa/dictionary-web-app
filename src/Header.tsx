import DarkModeSwitch from './DarkModeSwitch'
import FontSelect from './FontSelect'
import Logo from './assets/images/logo.svg?react'

export default function Header() {
  return (
    <header className="flex items-center gap-4">
      <div className="flex-grow">
        <Logo className="h-9" />
      </div>
      <FontSelect />
      <div className="h-8 w-1 border-r"></div>
      <DarkModeSwitch />
    </header>
  )
}
