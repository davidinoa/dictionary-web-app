import Logo from './assets/images/logo.svg?react'

export default function App() {
  return (
    <div>
      <header className="flex items-center gap-2">
        <div className="flex-grow">
          <Logo />
        </div>
        <div>font select</div>
        <div>color scheme</div>
      </header>
      <h1 className="font-serif text-3xl font-bold text-black underline">
        Hello world!
      </h1>
    </div>
  )
}
