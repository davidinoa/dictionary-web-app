import FontSelect from './FontSelect'
import Logo from './assets/images/logo.svg?react'

export default function App() {
  return (
    <div>
      <header className="flex items-center gap-4">
        <div className="flex-grow">
          <Logo className="h-9" />
        </div>
        <FontSelect />
        <div className="h-8 w-1 border-r"></div>
        <div>color scheme</div>
      </header>
      <h1 className="font-serif text-3xl font-bold text-black underline">
        Hello world!
      </h1>
    </div>
  )
}
